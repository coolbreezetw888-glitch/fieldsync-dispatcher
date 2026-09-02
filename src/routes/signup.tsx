import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { AuthForm } from "@/components/AuthForm";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "註冊 Sign up — FieldSync 派工雲" },
      { name: "description", content: "建立 FieldSync 派工雲帳號，開始管理排班與工單指派。" },
      { property: "og:title", content: "註冊 Sign up — FieldSync 派工雲" },
      { property: "og:description", content: "建立 FieldSync 派工雲內部帳號。" },
    ],
  }),
  component: SignUpPage,
});

function SignUpPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-20">
        <AuthForm mode="signup" />
      </main>
    </div>
  );
}
