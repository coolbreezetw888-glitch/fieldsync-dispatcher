import { Link } from "react-router-dom";
import { useAuthState } from "@/hooks/useAuthState";

export function SiteHeader() {
  const { user } = useAuthState();

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
            F
          </span>
          <span className="text-base font-semibold tracking-tight text-foreground">
            FieldSync <span className="text-muted-foreground">派工雲</span>
          </span>
        </Link>
        {user ? (
          <Link
            to="/app"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            前往儀表板
          </Link>
        ) : (
          <div className="flex items-center gap-2">
            <Link
              to="/signup"
              className="hidden rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
            >
              註冊 / Sign up
            </Link>
            <Link
              to="/signin"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Sign in / 登入
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
