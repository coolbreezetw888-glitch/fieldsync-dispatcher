import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { AuthForm } from "@/components/AuthForm";

export const Route = createFileRoute("/signin")({
  head: () => ({
    meta: [
      { title: "登入 Sign in — FieldSync 派工雲" },
      { name: "description", content: "登入 FieldSync 派工雲，管理服務人員班表與工單指派。" },
      { property: "og:title", content: "登入 Sign in — FieldSync 派工雲" },
      { property: "og:description", content: "登入 FieldSync 派工雲內部派工管理工具。" },
    ],
  }),
  component: SignInPage,
});

function SignInPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-20">
        <AuthForm mode="signin" />
      </main>
    </div>
  );
}
