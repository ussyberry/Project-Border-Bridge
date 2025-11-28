# MVP Recommendations & Strategy

## Executive Summary
Border Bridge is an AI-powered immigration pathway recommendation engine that transforms weeks of research into minutes. By analyzing professional profiles against program requirements, it provides personalized, data-driven immigration roadmaps.

**MVP Focus:** Canadian Immigration Programs (Phase 1)
**Target:** 15-20 primary pathways (Express Entry, PNPs, Start-up Visa).

## Strategic Recommendations

### 1. Core Value Proposition
- **Automated Analysis:** Replace manual consultation with instant AI assessment.
- **Data-Driven Insights:** Use historical success rates to predict outcomes.
- **Personalized Roadmaps:** tailored step-by-step guides, not generic advice.

### 2. Technology Stack Decisions
- **Frontend:** Next.js 14+ (App Router), TypeScript, Tailwind CSS.
- **Backend:** Next.js API Routes, PostgreSQL (Prisma), Redis.
- **AI Engine:** Claude API (Anthropic) for superior context handling and reasoning in resume parsing.
- **Infrastructure:** Vercel (Hosting), Supabase (Database), Upstash (Redis).

### 3. Business Model (Future)
- **Freemium:** Basic recommendations are free.
- **Premium:** Detailed analysis and roadmaps ($29-$99).
- **Partnerships:** Referral commissions from verified immigration lawyers.

## Open Decisions
- **AI Provider:** Validating Claude vs. GPT-4 for specific parsing tasks.
- **Hosting:** Evaluating Vercel costs at scale vs. self-hosted alternatives.
- **Data Frequency:** Determining optimal update intervals for immigration policy changes.
