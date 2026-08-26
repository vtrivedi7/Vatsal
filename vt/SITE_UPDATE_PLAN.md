# Personal Site Update Plan

Comprehensive, page-by-page updates to vatsaltrivedi.vercel.app, inferred from the live product site (runlogai.com and linked pages, read July 2026). Items tagged **[confirm]** rest on an inference that only you can verify. Items tagged **[from runlogai.com]** are pulled directly from live product copy. Items tagged **[you asked for]** come from your instructions (CEO framing, highlight Dirac/Meta/Microsoft, remove Bridge, keep Stax).

A caution on sources: runlogai.com's homepage is the current source of truth. Some Runlog subpages are themselves stale. The `/careers` page still uses the old "confidence-driven review, LP firms, underwriters" language, and the site's own footer/meta still calls the category "document intelligence." Where the homepage and a subpage disagree, this plan follows the homepage.

---

## Part A. The repositioning, in one view

**Old story on your personal site (retire it):**
Atlas is AI observability infrastructure. The thesis: "extraction is solved, review is the bottleneck, make human judgment reusable, route by confidence." Wedge: due diligence for VC and PE. Origin: watching review break at Bridge.

**New story [from runlogai.com]:**
- **Product line:** "Your business, mapped." Atlas reads every document, conversation, and contract a team has and draws the map of how it all connects. The team then works on top of the map.
- **Positioning:** AI on your internal data, built for founders and the C-suite.
- **What it does:** Read everything → build one architecture that updates itself → power the work (insights, financials, deliverables, outreach), each output linked back to its source.
- **Category to own:** organizational memory / a living map of the business. Explicitly *not* a "chatbot for a folder of PDFs."
- **Who it is for:** consulting firms, construction and the built world, small and mid-size businesses (go-to-market), operations and finance teams. Owner-led and founder-led companies.
- **Why it is different:** RAG finds the closest passage; vector DBs match similar text; chat assistants forget after each chat. Atlas is the system underneath that maps how things connect, tracks entities as real things that update together, and runs recurring workflows.
- **Trust and deployment:** SOC 2 Type 2, HIPAA, and ISO 27001 Ready. Managed, on-prem, or VPC with a customer-held key. Hard-delete that cascades. Audit trails standard. Every answer links to its source.
- **Surface:** one product, multiple portals/lenses seen in the live demo (Explore, Review, Agent Fleet, Business, People, Finance, Legal, Design, Integrations). Custom portals built to a team's workflow.

**Your role:** Founder & CEO of Runlog. Keep this. The three highlighted roles (Dirac, Meta, Microsoft) exist to prove you are the right person to build a trustworthy, source-linked data system, not to sell a review-bottleneck story.

---

## Part B. Site-wide changes

1. **Replace the core tagline.** Current hero line "Making human judgment reusable at scale" is tied to the dead thesis. Move to the live product language: a "your business, mapped" or "organizational memory" framing. Suggested hero: "Building the AI layer that maps a company's own data and keeps it current." **[confirm]** exact wording.

2. **Rename the category everywhere.** Every instance of "AI observability," "human-in-the-loop infrastructure," and "review infrastructure" becomes the new category (living map of the business / organizational memory / internal-data AI). Search the codebase for "observability" and "human-in-the-loop" and replace.

3. **Remove Bridge entirely** [you asked for]. Delete the logo, all copy blocks, and every list mention. Files affected: `app/page.tsx`, `app/about/page.tsx`, `app/projects/page.tsx`, `app/runlogai/page.tsx`, `app/layout.tsx`, and the `public/bridge-logo.png` asset.

4. **Add Microsoft** [you asked for], logo and name only, no title. A `microsoft` logo asset must be added to `public/` (does not exist today). **[confirm]** years and whether to name a team.

5. **Confirm the highlighted three:** Dirac = Head of AI. Meta = MLE **[confirm exact title to display, the site currently shows none]**. Microsoft = logo only. Keep Stax as Founder.

6. **Update all CTAs to product language.** The product site uses "Book a 30-min call" and "Try Atlas" and "Open the live demo." Align your buttons. Decide whether "Book a Conversation" keeps your personal Calendly (`calendly.com/vatsaltrivedi2000/30min`) or points to the Runlog calendar. Add a third CTA linking the live demo (`runlogai.com/demo/suwanee-qip/explore`) if you want visitors to see the product. **[confirm]**

7. **Add a trust strip.** SOC 2 Type 2, HIPAA, ISO 27001 Ready, plus on-prem / VPC / customer-managed deployment. This is a major part of the current product's pitch and appears nowhere on your site. Add as a compact badge row on the home page and mention on the Atlas/Runlog page. **[confirm]** you want these on a personal site.

8. **Rewrite SEO metadata** in `app/layout.tsx`: title, description, keywords, OpenGraph, Twitter, and the JSON-LD `description` and `knowsAbout`. Remove "Bridge AI" and "AI observability." Replace with the internal-data-AI / organizational-memory keywords the product uses (internal data AI, knowledge graph, organizational memory, SOC 2, on-prem AI, decision support).

9. **Refresh market/opportunity numbers.** The current home page's "$500B AI software," "$60B document + HITL," and "78% of enterprises" stats were chosen for the observability story. Replace with figures that fit the new ICP (services firms, construction, SMB, ops/finance) or cut the section. **[confirm]** which numbers you want to stand behind.

10. **Fix naming consistency.** The site mixes "RunLog," "Runlog," and "Runlog Atlas." The product uses **Runlog** (company) and **Atlas** (product). Standardize.

---

## Part C. Page-by-page updates

### Home (`app/page.tsx`)

- **Hero:** new tagline (B1). Keep photo, name, "Founder & CEO," Runlog link. Update the sub-line to describe Atlas as the living map of a company's data.
- **"Track Record" cards:** currently Meta / Bridge / Dirac. Change to **Meta / Dirac / Microsoft** (or Dirac / Meta / Microsoft). Remove Bridge card; add Microsoft card (logo + name only, no metric text if you prefer, or a neutral one-liner). **[confirm]** the third metric.
- **"The Opportunity" section:** rewrite around the new ICP and problem (teams whose work is scattered across files, losing institutional knowledge). Replace or drop the old market stats (B9).
- **"The Structural Problem" section:** this whole block is the Bridge review-bottleneck story, including the pull-quote "AI extraction scales linearly. Review scales catastrophically." Replace with the new problem framing from the product: scattered documents, knowledge that lives in one person's head, decisions that stall because nothing is connected or current. Consider the product's own line: "A pile of files becomes a living map."
- **Experience section:** Meta and Dirac stay (see role notes below). Remove Bridge block. Add Microsoft block (logo + name, minimal copy).
- **"Core Beliefs" cards:** the four beliefs ("Extraction is solved," "Human judgment must compound," "Confidence needs routing," "Systems should scale efficiently") are all observability-era. Replace with beliefs that match the new thesis, for example: business data should be mapped, not searched; every answer should trace to its source; a company's memory should compound instead of resetting; AI should sit on your data behind your own security boundary.
- **Closing CTA:** replace "I've lived this problem at Meta, Dirac, and Bridge" with a Microsoft/Meta/Dirac line and the new product framing.

### About (`app/about/page.tsx`)

- **Intro paragraph:** keep the shape, drop the "deploying AI systems / trustworthy AI to production" observability language, and reframe around building the data-mapping layer.
- **Timeline:** remove the **Bridge (2025)** entry. Keep Runlog (Present), Dirac (2023-2025, Head of AI), Meta (2022-2023, add MLE title), Stax (Founder), Georgia Tech. Add **Microsoft** as its own highlighted entry rather than a footnote inside the Georgia Tech block **[confirm years]**.
- **Pull-quote:** the current quote about "humans reviewing everything, judgment discarded" is dead-thesis. Rewrite in your voice around the new mission (a company's own data, mapped and kept current). **[confirm]** or supply your own.
- **Skills cards:** remove the two Bridge bullets ("review bottlenecks at Bridge," "built pipelines at Bridge") and the "AI Observability" domain bullet. Replace with skills that match the product: knowledge-graph / entity extraction, explainable and source-linked AI, secure deployment (on-prem/VPC), continuous data pipelines. Keep the Stax and Dirac 0-to-1 bullets.

### Projects (`app/projects/page.tsx`)

- **Hero and closing copy:** "From Meta's 50M+ users to Bridge's production pipelines to building RunLog Atlas" needs Bridge removed and the Atlas description updated to the mapping story.
- **RunLog Atlas block:** rewrite the three feature bullets. Current bullets ("Confidence-First Design," "Reusable Judgment," "Production Scale") are observability-era. Replace with the product's real pillars: reads everything you have, maps entities and how they connect, every output sourced, runs recurring workflows, deploys behind your security boundary. Consider adding the "Read → Link → Work" three-step and the "vs RAG / vector DB / chat assistant" contrast, both straight from the product site.
- **Bridge deep-dive block ("The Bottleneck"):** delete entirely.
- **Meta block:** the "Key Insight" text ("confidence scores without operational routing are meaningless... foundational to RunLog Atlas") ties Meta to the dead thesis. Reframe the transferable lesson toward the new product **[confirm]** the new lesson.
- **Dirac block:** metrics can stay **[confirm]**; reframe the takeaway toward building structured, source-linked systems on messy inputs rather than confidence routing.
- **Stax block:** keep as is (verify metrics).
- **Consider adding a Microsoft block** for visual parity, logo-forward, minimal text.

### Runlog / Atlas page (`app/runlogai/page.tsx`)

This page is the most product-specific and needs the deepest rewrite.

- **"Why I Built This":** currently structured as three companies (Meta, Dirac, **Bridge**) all pointing at the review/decision problem, with the framing "I hit the same broken system three times at three different companies." Remove Bridge, and either restructure to two companies or reframe the throughline away from the review bottleneck toward "a company's knowledge is scattered and resets constantly." **[confirm]** the new throughline.
- **Closing quote:** "I've built document pipelines, confidence scoring, and review queues... the decision problem wasn't solved" is dead-thesis. Replace.
- **Add product sections that mirror runlogai.com** so the personal site and product site agree: "A pile of files becomes a living map," "Built for teams that run on documents" (consulting, construction, SMB, ops/finance), "Every input feeds one architecture," the "why different" contrast, and the trust/deployment strip. **[confirm]** how much product detail belongs on the personal site vs. staying on runlogai.com.

### Contact (`app/contact/page.tsx`)

- Verify CTA links and copy match the new positioning. Align the Calendly/booking link with your decision in B6.

### Navbar and Footer (`components/navbar.tsx`, `components/footer.tsx`)

- Check for any tagline, product description, or "observability" language and update to match. Confirm the nav labels still make sense if you rename the "RunlogAI" page to "Atlas" or "Product."

---

## Part D. Assets to produce or gather

1. **Microsoft logo** for `public/` (SVG preferred). Not present today.
2. **Delete `public/bridge-logo.png`** once all references are gone.
3. **Optional:** trust badges (SOC 2, HIPAA, ISO 27001) if you want them shown as marks rather than text.
4. **Optional:** a screenshot or embed of the live Atlas demo (`runlogai.com/demo/suwanee-qip/explore`) for the Projects or Atlas page.
5. **Confirm the Meta title** wording to display and any Microsoft team/years.

---

## Part E. Still gated on your answers

These cannot be finalized from runlogai.com alone and are the highest-value confirmations. They map to `SITE_UPDATE_QUESTIONS.md`:

- The exact new one-line definition and headline tagline (B1).
- Which ICP to lead with on a personal site (the product serves four; a personal site may want one primary).
- Whether to show the security/deployment story on a personal site (B7).
- The new market/opportunity numbers, if any (B9).
- Meta title, Microsoft years/team (D5).
- Whether the highlighted Meta and Dirac metrics still hold (7.4, 7.5 in the questions doc).
- The new "why I built this" throughline and pull-quotes in your voice.

Once you return answers, the edits in Parts B and C can be applied directly to the five files listed.
