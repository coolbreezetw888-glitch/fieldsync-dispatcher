import { useEffect } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { useAuthState } from "@/hooks/useAuthState";

export const Route = createFileRoute("/app")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "派工儀表板 — FieldSync 派工雲" },
      { name: "description", content: "FieldSync 派工雲的內部派工管理儀表板。" },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "派工儀表板 — FieldSync 派工雲" },
      { property: "og:description", content: "FieldSync 派工雲的內部派工管理儀表板。" },
    ],
  }),
  component: AppShell,
});

function AppShell() {
  const navigate = useNavigate();
  const { user, loading } = useAuthState();

  useEffect(() => {
    if (!loading && !user) {
      navigate({ to: "/signin", replace: true });
    }
  }, [loading, user, navigate]);

  async function handleSignOut() {
    await supabase.auth.signOut();
    navigate({ to: "/signin", replace: true });
  }

  if (loading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-sm text-muted-foreground">載入中…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <span className="flex items-center gap-2 text-base font-semibold tracking-tight text-foreground">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
              F
            </span>
            FieldSync <span className="text-muted-foreground">派工雲</span>
          </span>
          <button
            onClick={handleSignOut}
            className="rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            登出 Sign out
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-16">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Hi {user.email}
        </h1>
        <div className="mt-8 rounded-xl border border-dashed border-border bg-card p-8">
          <p className="text-base leading-relaxed text-foreground/80">
            你的派工管理儀表板即將上線 — 下一個里程碑會加上排班行事曆與工單指派功能。
          </p>
        </div>
      </main>
    </div>
  );
}
