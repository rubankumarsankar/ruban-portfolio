import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  createAdminSession,
  getAdminSessionCookieOptions,
  isValidAdminLogin,
} from "@/lib/admin-auth";

export async function POST(request) {
  try {
    const body = await request.json();
    const email = String(body.email || "");
    const password = String(body.password || "");

    if (!isValidAdminLogin(email, password)) {
      return NextResponse.json(
        {
          ok: false,
          message: "Invalid login credentials.",
        },
        { status: 401 },
      );
    }

    const response = NextResponse.json({ ok: true });
    response.cookies.set(
      ADMIN_SESSION_COOKIE,
      createAdminSession(email),
      getAdminSessionCookieOptions(),
    );

    return response;
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Login failed.",
      },
      { status: 500 },
    );
  }
}
