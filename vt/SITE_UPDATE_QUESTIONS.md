# Atlas Site Rewrite — Discovery Questions

**Purpose:** Answers to the questions below determine how to rewrite vatsaltrivedi.vercel.app. The current site is built on an Atlas thesis that is now retired ("extraction is solved, review is the bottleneck, make review scale with ambiguity"). We need the current definition of Atlas before rewriting copy.

**Who should answer:** An agent (or person) deeply familiar with the current Atlas product, positioning, and roadmap. Questions marked **[Vatsal]** need the founder specifically (personal history, title confirmation, preference calls).

**How to answer:** Reply inline under each question. Short factual answers are fine. Where a claim has a source (metric, customer, market figure), note it so the site copy can stand behind it.

---

## 1. What Atlas is now

1.1 In one sentence, what is Atlas today? (The intake brief describes it as a "document-and-data intelligence tool that reads everything, extracts facts and entities, builds a searchable knowledge graph, and answers with citations." Confirm, correct, or replace.)

1.2 What product category does Atlas belong to? (e.g., "knowledge graph," "document intelligence," "enterprise search," "AI research assistant," "company brain." Pick the one you want to own.)

1.3 What is the single most important thing a first-time visitor should understand about Atlas in the first 5 seconds?

1.4 If the old framing ("review bottleneck," "human judgment reusable," "confidence routing," "review scales catastrophically") is fully dead, confirm it. If any part survives in a reduced role, say which part and how it now fits.

1.5 What is the new core thesis that replaces the review-bottleneck story? What is the problem Atlas exists to solve, stated in the product's current terms?

## 2. What Atlas does (features and mechanics)

2.1 What are the core capabilities, in priority order? (ingestion, entity/fact extraction, knowledge graph, cited chat/Q&A, "what changed this week," others?)

2.2 What data sources can it ingest today vs. on the roadmap? (files, email, Slack, SharePoint, transcripts, web pages, images, video — which are live?)

2.3 What does "citation" mean concretely? (Sentence-level, page-level, timestamp-level? Is every claim traceable, or only some?)

2.4 What are the 3 or 4 flagship use cases you want featured? (The brief mentions: making sense of a large document pile, trustworthy sourced answers, a running "company brain," and being the foundation for other Runlog products.)

2.5 Is there a demo, sandbox, or interactive element the site should link to or embed? (Current CTA points to https://atlas.runlogai.com — still correct?)

## 3. The Runlog product suite

3.1 The brief says Atlas is the "shared foundation the other Runlog products (GTM/sales, legal, finance, recruiting, design) are built on." How much of this should the personal site show vs. keep on runlogai.com?

3.2 Are those other products live, in beta, or roadmap? (Affects whether the site claims them or teases them.)

3.3 What is the relationship between "Runlog," "Runlog Atlas," and "Atlas" in naming? Which name leads on the site?

## 4. Target users and go-to-market

4.1 Who is the primary user/buyer today? (The current site names "due diligence for VC and PE" as the opening wedge. Still the wedge?)

4.2 List the target segments in priority order (research teams, due-diligence/deal teams, compliance/IP, general knowledge workers, others).

4.3 What is the sharpest pain point for the primary segment, in their own words?

4.4 Is the site meant to sell Atlas, recruit talent, raise capital, or establish founder credibility? Rank these. (This changes tone and CTAs.)

## 5. Proof, metrics, and market sizing

5.1 The current site cites: $500B+ global AI software market by 2030, $60B+ document + HITL market, 78% of enterprises using AI for document processing, $10B market opportunity. Which of these still apply to the new positioning, and what should replace the ones that do not? Provide sources where possible.

5.2 What traction can the site claim today? (Users, pilots, design partners, documents processed, waitlist. Anything real and citable.)

5.3 Are there any customer names, logos, or quotes we can use?

5.4 What is the strongest single proof point that Atlas works?

## 6. Differentiation

6.1 Why Atlas over a generic RAG chatbot on a folder of PDFs? (The brief says Atlas is "less a chatbot for PDFs, more an engine that continuously ingests everything." What makes that real and defensible?)

6.2 Who are the closest competitors or alternatives, and what is the one-line reason Atlas wins?

6.3 What is the technical moat, if any? (Knowledge graph quality, provenance/citation fidelity, continuous ingestion, multi-product leverage.)

## 7. Founder narrative and "why me" — [Vatsal]

7.1 With the review-bottleneck origin story removed, what is the new "why I built this"? What thread connects your background to the current Atlas thesis (trustworthy, cited, always-current document intelligence)?

7.2 How does each highlighted role support the new thesis?
- **Dirac (Head of AI):** which parts of the 1M+ geometries / confidence-scoring / from-scratch work map to the new Atlas story?
- **Meta (MLE):** what is the transferable lesson now that "confidence scores without routing are meaningless" is no longer the punchline?
- **Microsoft:** what should this represent? (Foundational engineering credibility? Something specific you built?)

7.3 **[Vatsal]** Confirm titles and framing for the rebrand:
- Dirac = "Head of AI." Confirmed?
- Meta = "MLE / Machine Learning Engineer." The current site shows no title for Meta. Confirm the exact title to display.
- Microsoft = show logo and name only, no title (per your instruction). Confirm. What years, and which org/team if you want it named?
- Bridge = remove entirely. Confirmed across all pages?
- Stax = keep as "Founder." Confirmed, same 400+ users / 4 colleges / 15,000+ classes metrics?

7.4 **[Vatsal]** Do the existing Dirac metrics still hold and stay on the site? (1M+ geometries, 70% latency reduction, 90% workflow improvement, $300K annual savings.)

7.5 **[Vatsal]** Do the existing Meta metrics still hold? (50M+ daily users, 15% hate-org detection improvement / PR-AUC, 11M+ profiles, 39% false-negative reduction.)

## 8. Brand, tone, and identity — [Vatsal]

8.1 What is the new headline tagline? (Current: "Building infrastructure for trustworthy enterprise AI. Making human judgment reusable at scale." The second sentence is tied to the dead thesis and needs replacing.)

8.2 What three words should describe the brand's tone? (Current reads: technical, investor-facing, confident.)

8.3 Keep the current visual style (light theme, single primary accent color, Roboto, minimal)? Or refresh? If refresh, toward what?

8.4 What are the primary and secondary CTAs? (Current: "Try Atlas" → atlas.runlogai.com, and "Book a Conversation" → Calendly. Keep both?)

## 9. Site structure

9.1 Keep the current pages (Home, About, Projects, RunlogAI, Contact)? Add or remove any? (A dedicated "Atlas / Product" page may make sense given the repositioning.)

9.2 Should "Projects" reframe from a career-history page into a product-and-impact page, or stay career-focused?

9.3 Anything else the site must communicate that is not covered above?

---

## Appendix: where the retired thesis lives today

These are the exact spots that break under the new positioning. Each needs new copy once the questions above are answered.

**Home (`app/page.tsx`)**
- Hero tagline: "Making human judgment reusable at scale."
- Section "The Structural Problem": entire section is the Bridge review-bottleneck story, including the pull-quote "AI extraction scales linearly. Review scales catastrophically."
- "The Opportunity" section: "The bottleneck isn't extraction. It's review, trust, and making human judgment reusable."
- Track Record cards and Experience section: Meta, **Bridge**, Dirac. Bridge to be removed; Microsoft to be added.
- Closing line: "I've lived this problem at Meta, Dirac, and Bridge."

**About (`app/about/page.tsx`)**
- Timeline entries for **Bridge** (2025) and skills bullets referencing Bridge ("review bottlenecks at Bridge," "built pipelines at Bridge").
- Pull-quote about "humans reviewing everything, judgment discarded" — tied to dead thesis.
- Roles present: Runlog, Bridge, Dirac, Meta, Stax, Georgia Tech (Microsoft currently appears only as an internship footnote).

**Projects (`app/projects/page.tsx`)**
- Full **Bridge** deep-dive block titled "The Bottleneck" ("genesis of RunLog Atlas").
- Hero and CTA copy: "From Meta's 50M+ users to Bridge's production pipelines..."

**Runlog page (`app/runlogai/page.tsx`)**
- "Why I Built This" is structured as three companies (Meta, Dirac, **Bridge**) all pointing at the review/decision problem. Bridge block and the "three different companies" framing need rework.

**Layout / SEO (`app/layout.tsx`)**
- Meta description, keywords ("Bridge AI"), OpenGraph, Twitter, and JSON-LD all list Bridge and describe Atlas as "AI observability." Both need updating to the new category and the Dirac/Meta/Microsoft lineup.

**Assets (`public/`)**
- `bridge-logo.png` present and referenced. A `microsoft` logo asset does not exist yet and must be added.
