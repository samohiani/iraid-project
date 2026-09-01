import type { Metadata } from "next";
import { loginToStudio } from "./actions";

export const metadata: Metadata = {
  title: "Admin access",
  robots: { index: false, follow: false },
};

type StudioLoginPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function StudioLoginPage({
  searchParams,
}: StudioLoginPageProps) {
  const { error } = await searchParams;

  return (
    <main className="studio-login-page">
      <section className="studio-login-card" aria-labelledby="studio-login-title">
        <p className="section-kicker">IRAID admin</p>
        <h1 id="studio-login-title">Content management</h1>
        <p>
          Enter the admin password to continue to the secure content studio.
        </p>
        <form action={loginToStudio} className="studio-login-form">
          <label htmlFor="studio-password">Admin password</label>
          <input
            id="studio-password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
          <button className="primary-button" type="submit">
            Continue to Studio <span aria-hidden="true">↗</span>
          </button>
        </form>
        {error === "invalid" ? (
          <p className="studio-login-error" role="alert">
            That password is not correct. Please try again.
          </p>
        ) : null}
        {error === "setup" ? (
          <p className="studio-login-error" role="alert">
            Admin access has not been configured yet. Add the studio password
            and session secret to the deployment environment.
          </p>
        ) : null}
        <p className="studio-login-note">
          Sanity may ask you to sign in after this step.
        </p>
      </section>
    </main>
  );
}
