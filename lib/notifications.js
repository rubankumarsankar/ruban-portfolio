import nodemailer from "nodemailer";
import { portfolioData } from "@/data/portfolio";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return {
    host,
    port,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user,
      pass,
    },
  };
}

export async function sendEnquiryEmail(enquiry) {
  const smtpConfig = getSmtpConfig();

  if (!smtpConfig) {
    return {
      delivered: false,
      skipped: true,
      reason: "SMTP is not configured.",
    };
  }

  const transporter = nodemailer.createTransport(smtpConfig);
  const toAddress = process.env.ENQUIRY_TO_EMAIL || portfolioData.personalInfo.email;
  const fromAddress = process.env.SMTP_FROM || smtpConfig.auth.user;

  await transporter.sendMail({
    from: fromAddress,
    to: toAddress,
    replyTo: enquiry.email,
    subject: `New portfolio enquiry from ${enquiry.name}`,
    text: [
      "A new enquiry was submitted on the portfolio site.",
      "",
      `Name: ${enquiry.name}`,
      `Email: ${enquiry.email}`,
      `Submitted: ${enquiry.createdAt}`,
      "",
      "Message:",
      enquiry.message,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h2 style="margin-bottom: 12px;">New portfolio enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(enquiry.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(enquiry.email)}</p>
        <p><strong>Submitted:</strong> ${escapeHtml(enquiry.createdAt)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(enquiry.message)}</p>
      </div>
    `,
  });

  return {
    delivered: true,
    skipped: false,
    reason: null,
  };
}

export function buildWhatsAppUrl(enquiry) {
  const phone = portfolioData.personalInfo.phone.replace(/\D/g, "");
  const message = [
    "New portfolio enquiry",
    `Name: ${enquiry.name}`,
    `Email: ${enquiry.email}`,
    `Message: ${enquiry.message}`,
  ].join("\n");

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
