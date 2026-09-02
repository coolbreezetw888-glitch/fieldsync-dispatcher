import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FieldSync 派工雲 — 一眼掌握班表，指派工單不衝突" },
      {
        name: "description",
        content:
          "FieldSync 派工雲為到府服務業者打造：視覺化排班行事曆、智慧人力調度與工單指派追蹤，讓客服人員避免撞班與人力衝突。",
      },
      { property: "og:title", content: "FieldSync 派工雲 — 一眼掌握班表，指派工單不衝突" },
      {
        property: "og:description",
        content:
          "See every technician's schedule at a glance — assign jobs without conflicts. 到府服務派工業者的內部排班與工單指派工具。",
      },
    ],
  }),
  component: LandingPage,
});

const features = [
  {
    title: "視覺化排班行事曆",
    en: "Visual Scheduling Calendar",
    body: "以行事曆介面顯示每位服務人員的班表與空檔，客服人員一眼就能看懂誰有空、誰已經排滿。",
  },
  {
    title: "智慧人力調度",
    en: "Smart Crew Allocation",
    body: "依技能、服務地區、可服務時段篩選可指派的人員，避免撞班與人力調度衝突。",
  },
  {
    title: "工單指派與進度追蹤",
    en: "Job Assignment & Tracking",
    body: "客服人員一鍵把工單指派給服務人員，即時掌握每張工單的服務進度與狀態。",
  },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-6xl px-5 pb-20 pt-20 sm:pt-28">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              為到府服務派工業者打造的內部工具
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl">
              FieldSync
              <span className="block text-2xl font-medium text-muted-foreground sm:text-3xl">
                派工雲
              </span>
            </h1>
            <p className="mt-6 text-2xl font-medium text-foreground sm:text-3xl">
              一眼掌握班表，指派工單不衝突
            </p>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              See every technician&apos;s schedule at a glance — assign jobs without conflicts.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/signup"
                className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                建立帳號 / Get started
              </Link>
              <Link
                to="/signin"
                className="rounded-md border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                Sign in / 登入
              </Link>
            </div>
          </Reveal>
        </section>

        <section className="border-t border-border bg-card/60">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                客服與服務人員的日常，一套系統搞定
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {features.map((feature, i) => (
                <Reveal key={feature.en} delay={i * 90}>
                  <article className="h-full rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-sm">
                    <div className="mb-5 h-1 w-10 rounded-full bg-primary" />
                    <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">({feature.en})</p>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                      {feature.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-muted-foreground">
          © 2026 FieldSync
        </div>
      </footer>
    </div>
  );
}
