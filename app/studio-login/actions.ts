"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  getStudioSessionToken,
  isStudioPasswordValid,
  STUDIO_SESSION_COOKIE,
} from "@/lib/studio-auth";

export async function loginToStudio(formData: FormData) {
  const password = formData.get("password");
  const passwordValue = typeof password === "string" ? password : "";
  const sessionToken = getStudioSessionToken();

  if (!sessionToken || !process.env.IRAID_STUDIO_PASSWORD) {
    redirect("/studio-login?error=setup");
  }

  if (!isStudioPasswordValid(passwordValue)) {
    redirect("/studio-login?error=invalid");
  }

  const cookieStore = await cookies();
  cookieStore.set({
    name: STUDIO_SESSION_COOKIE,
    value: sessionToken,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/studio",
    maxAge: 60 * 60 * 8,
  });

  redirect("/studio");
}
