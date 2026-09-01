import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { StudioClient } from "@/components/studio-client";
import {
  isStudioSessionValid,
  STUDIO_SESSION_COOKIE,
} from "@/lib/studio-auth";

export default async function StudioPage() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(STUDIO_SESSION_COOKIE)?.value;

  if (!isStudioSessionValid(sessionToken)) {
    redirect("/studio-login");
  }

  return <StudioClient />;
}
