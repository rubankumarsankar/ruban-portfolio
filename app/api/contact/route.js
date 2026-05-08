import { NextResponse } from "next/server";
import {
  createEnquiry,
  sanitizeEnquiryInput,
  validateEnquiryInput,
} from "@/lib/enquiries";
import { buildWhatsAppUrl, sendEnquiryEmail } from "@/lib/notifications";

export async function POST(request) {
  try {
    const body = await request.json();
    const input = sanitizeEnquiryInput(body);
    const errors = validateEnquiryInput(input);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          ok: false,
          errors,
        },
        { status: 400 },
      );
    }

    const enquiry = await createEnquiry(input);
    let emailStatus;

    try {
      emailStatus = await sendEnquiryEmail(enquiry);
    } catch (error) {
      emailStatus = {
        delivered: false,
        skipped: false,
        reason: error instanceof Error ? error.message : "SMTP delivery failed.",
      };
    }

    return NextResponse.json({
      ok: true,
      enquiry,
      emailStatus,
      whatsappUrl: buildWhatsAppUrl(enquiry),
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: error instanceof Error ? error.message : "Unable to save enquiry.",
      },
      { status: 500 },
    );
  }
}
