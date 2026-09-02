import { useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { AuthForm } from "@/components/AuthForm";

export default function SignUpPage() {
  useEffect(() => {
    document.title = "註冊 Sign up — FieldSync 派工雲";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-20">
        <AuthForm mode="signup" />
      </main>
    </div>
  );
}
