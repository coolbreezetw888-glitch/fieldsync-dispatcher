import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";

export function AuthForm({ mode }: { mode: "signin" | "signup" }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const isSignUp = mode === "signup";

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    const result = isSignUp
      ? await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/app` },
        })
      : await supabase.auth.signInWithPassword({ email, password });

    setSubmitting(false);

    if (result.error) {
      setError(result.error.message);
      return;
    }

    if (!result.data.session) {
      setError("請先到信箱點擊確認連結後再登入。");
      return;
    }

    navigate({ to: "/app" });
  }

  return (
    <div className="mx-auto w-full max-w-sm rounded-xl border border-border bg-card p-7 shadow-sm">
      <h1 className="text-xl font-semibold tracking-tight text-foreground">
        {isSignUp ? "建立帳號 / Sign up" : "登入 / Sign in"}
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {isSignUp ? "註冊 FieldSync 派工雲內部帳號。" : "使用你的 FieldSync 帳號登入。"}
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/25"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-medium text-foreground">
            密碼 / Password
          </label>
          <input
            id="password"
            type="password"
            required
            minLength={6}
            autoComplete={isSignUp ? "new-password" : "current-password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/25"
          />
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
        >
          {submitting ? "處理中…" : isSignUp ? "註冊 Sign up" : "登入 Sign in"}
        </button>
      </form>

      <p className="mt-6 text-sm text-muted-foreground">
        {isSignUp ? (
          <>
            已經有帳號？{" "}
            <Link to="/signin" className="font-medium text-primary hover:underline">
              登入
            </Link>
          </>
        ) : (
          <>
            還沒有帳號？{" "}
            <Link to="/signup" className="font-medium text-primary hover:underline">
              註冊
            </Link>
          </>
        )}
      </p>
    </div>
  );
}
