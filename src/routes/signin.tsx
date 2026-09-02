import { useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { AuthForm } from "@/components/AuthForm";

export default function SignInPage() {
  useEffect(() => {
    document.title = "登入 Sign in — FieldSync 派工雲";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-20">
        <AuthForm mode="signin" />
      </main>
    </div>
  );
}
