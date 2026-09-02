# FieldSync Dispatcher

Build a SaaS landing page + authenticated app shell for FieldSync (派工雲), a product that helps internal staff (customer service + field service staff) at 到府服務派工業者 (home-visit service dispatch businesses — cleaning, home care, health checks, etc.) manage technician schedules on a visual calendar and assign job orders to available staff, avoiding manpower scheduling conflicts — targeted at internal dispatch/customer-service staff and field technicians at these businesses, NOT external consumers self-booking on a public page.

The site must include:

1. A public landing page (/) with:

   - Hero section: product name "FieldSync" prominently displayed, value prop 「一眼掌握班表，指派工單不衝突」 (subtitle: "See every technician's schedule at a glance — assign jobs without conflicts."), and a primary CTA button labeled "Sign in / 登入" in the top-right header.

   - Features section with exactly 3 feature cards:

     * Card 1: 「視覺化排班行事曆 (Visual Scheduling Calendar)」— 以行事曆介面顯示每位服務人員的班表與空檔，客服人員一眼就能看懂誰有空、誰已經排滿。

     * Card 2: 「智慧人力調度 (Smart Crew Allocation)」— 依技能、服務地區、可服務時段篩選可指派的人員，避免撞班與人力調度衝突。

     * Card 3: 「工單指派與進度追蹤 (Job Assignment & Tracking)」— 客服人員一鍵把工單指派給服務人員，即時掌握每張工單的服務進度與狀態。

   - Footer with copyright 「© 2026 FieldSync」.

2. Authentication using Lovable's built-in Supabase-style auth (use whatever auth backend Lovable provides by default — Lovable Cloud is fine for this v1; we'll swap to a user-owned Supabase project in a later step):

   - Sign Up page with email + password

   - Sign In page with email + password

   - Sign Out functionality

   - Email confirmation can be disabled for simplicity in this v1

3. An authenticated app shell at /app that the user lands on after signing in:

   - Greets the signed-in user by email: 「Hi {user.email}」

   - A placeholder message: 「你的派工管理儀表板即將上線 — 下一個里程碑會加上排班行事曆與工單指派功能。」

   - A Sign Out button in the header

Design requirements:

- Clean, professional light theme suited for an internal business tool — near-white/light neutral background with a single steady accent color (deep blue or forest green work well; avoid flashy or saturated colors — this is a working tool used for long stretches, not a consumer app meant to grab attention)

- Use Inter or a similar sans-serif font

- Mobile responsive

- Tasteful subtle animations (fade-in on scroll is fine; don't overdo it)

Out of scope for this v1: the actual interactive scheduling calendar, job-creation form, assignment logic, SMS/email notifications, payment, multi-tenant/role-permission settings. Do NOT create custom database tables (do NOT create a `staff`, `jobs`, or `schedules` table) — only use Supabase's default `auth.users`. Those come in later milestones. Stick to landing page + auth + placeholder dashboard.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c87c22ff-5b31-41ad-b7b7-42ef1b29f0b0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
