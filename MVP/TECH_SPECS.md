# Technical Specifications

## System Architecture
```
Frontend (Next.js) -> API Layer (Next.js) -> AI Engine (Claude)
                                          -> Database (PostgreSQL)
                                          -> Cache (Redis)
```

## Core Components

### 1. Resume Parser
- **Input:** PDF, DOCX.
- **Process:** Text extraction -> AI Analysis (Claude) -> Structured JSON.
- **Output:** Profile with Personal Info, Education, Work Experience (NOC), Skills.

### 2. Immigration Program Database
- **Schema:** Program details, Eligibility criteria, Processing times, Success rates.
- **Sources:** IRCC, Provincial websites.
- **Updates:** Automated scraping + Manual review.

### 3. Matching Engine
- **Logic:**
  1. **Hard Eligibility:** Pass/Fail checks (Age, Education, Language).
  2. **CRS Calculation:** Points-based scoring for Express Entry.
  3. **Success Probability:** Historical data analysis.
  4. **Ranking:** Weighted score based on user profile fit.

### 4. Security & Compliance
- **Data Protection:** Encryption at rest and in transit.
- **Privacy:** GDPR/PIPEDA compliance.
- **Access Control:** JWT authentication, Rate limiting.

## Technology Stack
- **Framework:** Next.js 14+
- **Language:** TypeScript
- **Database:** PostgreSQL (Prisma ORM)
- **Styling:** Tailwind CSS
- **AI:** Anthropic Claude API
