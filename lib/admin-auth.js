import crypto from "node:crypto";

export const ADMIN_SESSION_COOKIE = "ruby_admin_session";

const DEFAULT_ADMIN_EMAIL = "srirubankumar@gmail.com";
const DEFAULT_ADMIN_PASSWORD = "Ruban@0811";
const DEFAULT_SESSION_SECRET = "ruban-portfolio-admin-session-secret";
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 7;

function normalizeEmail(value = "") {
  return value.trim().toLowerCase();
}

function safeEqual(left, right) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(leftBuffer, rightBuffer);
}

function getSessionSecret() {
  return process.env.ADMIN_SESSION_SECRET || DEFAULT_SESSION_SECRET;
}

function signSessionPayload(payload) {
  return crypto
    .createHmac("sha256", getSessionSecret())
    .update(payload)
    .digest("base64url");
}

export function getAdminEmail() {
  return normalizeEmail(process.env.ADMIN_LOGIN_EMAIL || DEFAULT_ADMIN_EMAIL);
}

export function isValidAdminLogin(email, password) {
  const expectedEmail = getAdminEmail();
  const expectedPassword = process.env.ADMIN_LOGIN_PASSWORD || DEFAULT_ADMIN_PASSWORD;

  return (
    safeEqual(normalizeEmail(email), expectedEmail) &&
    safeEqual(password, expectedPassword)
  );
}

export function createAdminSession(email) {
  const expiresAt = Date.now() + SESSION_TTL_MS;
  const payload = Buffer.from(
    JSON.stringify({
      email: normalizeEmail(email),
      expiresAt,
    }),
  ).toString("base64url");

  return `${payload}.${signSessionPayload(payload)}`;
}

export function verifyAdminSession(token) {
  if (!token || !token.includes(".")) {
    return null;
  }

  const [payload, signature] = token.split(".");
  const expectedSignature = signSessionPayload(payload);

  if (!safeEqual(signature, expectedSignature)) {
    return null;
  }

  try {
    const decoded = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));

    if (!decoded?.email || !decoded?.expiresAt) {
      return null;
    }

    if (Date.now() > Number(decoded.expiresAt)) {
      return null;
    }

    if (!safeEqual(normalizeEmail(decoded.email), getAdminEmail())) {
      return null;
    }

    return {
      email: normalizeEmail(decoded.email),
      expiresAt: Number(decoded.expiresAt),
    };
  } catch {
    return null;
  }
}

export function getAdminSessionCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_TTL_MS / 1000,
  };
}
