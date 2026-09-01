import { createHmac, timingSafeEqual } from "node:crypto";

export const STUDIO_SESSION_COOKIE = "iraid_studio_session";

function safeEqual(leftValue: string, rightValue: string) {
  const left = Buffer.from(leftValue);
  const right = Buffer.from(rightValue);

  return left.length === right.length && timingSafeEqual(left, right);
}

export function isStudioPasswordValid(password: string) {
  const configuredPassword = process.env.IRAID_STUDIO_PASSWORD;

  return Boolean(
    configuredPassword && safeEqual(password, configuredPassword),
  );
}

export function getStudioSessionToken() {
  const sessionSecret = process.env.IRAID_STUDIO_SESSION_SECRET;

  if (!sessionSecret) return null;

  return createHmac("sha256", sessionSecret)
    .update("iraid-studio-access")
    .digest("hex");
}

export function isStudioSessionValid(sessionToken?: string) {
  const expectedToken = getStudioSessionToken();

  return Boolean(
    expectedToken && sessionToken && safeEqual(sessionToken, expectedToken),
  );
}
