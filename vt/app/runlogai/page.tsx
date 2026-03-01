import { ArrowRight, Check, Eye, TrendingDown, Database, TrendingUp, Shield, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import ClientPageWrapper, { AnimatedSection, AnimatedText, AnimatedCard } from "@/components/client-page-wrapper"

export default function RunLogAI() {
  return (
    <ClientPageWrapper>
      {/* Hero */}
      <section className="hero-section bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <AnimatedText
            text="Runlog Atlas"
            className="text-5xl md:text-6xl font-light text-primary mb-6 text-center pb-2"
            type="heading"
          />
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedText
              text="Make decisions from large volumes of documents — with every insight traced to its source"
              className="text-2xl md:text-3xl font-light text-foreground mb-8 leading-relaxed"
              delay={0.2}
            />
            <AnimatedSection delay={0.4}>
              <p className="text-xl text-foreground/80 font-light mb-12 leading-relaxed">
                Atlas turns document-heavy workflows into persistent, structured knowledge. Investment teams,
                legal teams, and underwriters can query across hundreds of files, surface what matters, and
                back every decision with a traceable chain to the source — not a summary that disappears after the call.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
                  <a href="https://atlas.runlogai.com" target="_blank" rel="noopener noreferrer">
                    Try Atlas <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5 text-lg px-8 py-6"
                >
                  <a href="https://calendly.com/vatsaltrivedi2000/30min" target="_blank" rel="noopener noreferrer">
                    Book a Conversation <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedText
              text="The Problem"
              className="text-4xl font-light mb-12 text-center text-foreground"
              type="heading"
            />
            <AnimatedSection delay={0.2}>
              <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-r-lg mb-10">
                <p className="text-2xl font-light text-foreground leading-relaxed">
                  You're sitting on hundreds of documents with the answers already inside them.
                  <br className="hidden md:block" />
                  <span className="font-medium"> You can't query them, compare them, or trust them at scale.</span>
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-border">
                  <p className="text-lg font-medium text-foreground mb-2">Decisions lack grounding</p>
                  <p className="text-foreground/70 font-light leading-relaxed">
                    AI tools summarize — but summaries can't be audited. When a decision is challenged in a deal,
                    a dispute, or a regulatory review, there's no traceable chain back to the source.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-border">
                  <p className="text-lg font-medium text-foreground mb-2">Insights don't persist</p>
                  <p className="text-foreground/70 font-light leading-relaxed">
                    An analyst reads 50 pitch decks. That pattern recognition lives in their head — not the system.
                    The next analyst starts from zero. Institutional knowledge never compounds.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-border">
                  <p className="text-lg font-medium text-foreground mb-2">Volume breaks teams</p>
                  <p className="text-foreground/70 font-light leading-relaxed">
                    Every new data room, filing, or discovery set adds linear effort. There's no mechanism for
                    prior work to reduce future work. The math never improves.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What Atlas Does */}
      <section className="py-20 bg-secondary/30">
        <div className="container-custom">
          <AnimatedText
            text="What Atlas Does"
            className="text-4xl font-light mb-6 text-center text-foreground"
            type="heading"
          />
          <AnimatedSection delay={0.2}>
            <p className="text-xl font-light text-center text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Atlas turns a corpus of documents into a queryable, persistent knowledge base — where every insight
              is anchored to its source and every decision can be explained.
            </p>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedCard delay={0.1}>
              <div className="bg-white p-8 rounded-lg border border-border h-full">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-medium mb-4 text-foreground">Persistent Structured Insights</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Every document is broken into atomic observations — financials, claims, risks, entities, terms.
                  These observations persist across your entire corpus, not just the current session.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Query across 500 data rooms the same way you query one. Patterns surface. Outliers surface.
                  Nothing is lost when the tab closes.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <div className="bg-white p-8 rounded-lg border border-border h-full">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-medium mb-4 text-foreground">Full Provenance on Every Decision</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Every insight links back to the exact source: document, page, section, and the confidence score
                  that drove the extraction. No black-box summaries.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  When a decision is questioned — by a partner, a counterparty, or a regulator — Atlas shows
                  exactly what was seen and why it was flagged.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <div className="bg-white p-8 rounded-lg border border-border h-full">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingDown className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-medium mb-4 text-foreground">Confidence-Routed Review</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  High-confidence observations flow automatically. Low-confidence observations go to a priority
                  queue — not a pile of documents.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Humans spend time on genuine uncertainty, not verification theater. Review effort shrinks as
                  volume grows — not the other way around.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <div className="bg-white p-8 rounded-lg border border-border h-full">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-medium mb-4 text-foreground">Judgment That Compounds</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  When a human corrects an extraction, that correction becomes a durable asset — reapplied
                  automatically to every similar observation going forward.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  An analyst who reviews 1,000 documents makes the next 10,000 cheaper. The system learns
                  the team's standards, not just the model's defaults.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedText
              text="Built for Two Workflows"
              className="text-4xl font-light mb-4 text-center text-foreground"
              type="heading"
            />
            <AnimatedSection delay={0.1}>
              <p className="text-lg font-light text-center text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
                Both share the same underlying constraint: high-stakes decisions, large document volumes, and a
                need for traceable answers under time pressure.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-secondary/30 p-8 rounded-lg border border-border mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded">
                    Primary
                  </span>
                  <h3 className="text-2xl font-medium text-foreground">Due Diligence & Underwriting — VC / PE</h3>
                </div>
                <p className="text-lg font-light text-foreground/80 leading-relaxed mb-6">
                  Investment teams read the same document types — pitch decks, data rooms, cap tables, financial
                  statements, founder memos — deal after deal. The extraction problem is solved. The institutional
                  memory problem isn't.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80 font-light">
                      Extract financials, team pedigree, market claims, and risk flags from every document in a data room
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80 font-light">
                      Surface inconsistencies across documents — revenue figures that don't match, cap table discrepancies, conflicting claims
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80 font-light">
                      Route only uncertain or conflicting observations to the analyst — not the whole data room
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80 font-light">
                      Build a persistent knowledge base across deals — so pattern recognition from deal 1 informs deal 100
                    </p>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-lg border border-primary/20">
                  <p className="text-foreground/80 font-light italic leading-relaxed">
                    "A Series A fund analyst reviews 400+ decks a year. Atlas retains what they learned from each one —
                    compounding judgment across the entire portfolio, not just the current deal."
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-secondary/30 p-8 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block px-3 py-1 bg-foreground/20 text-foreground text-sm font-medium rounded">
                    Secondary
                  </span>
                  <h3 className="text-2xl font-medium text-foreground">RFQ Response & Legal Discovery</h3>
                </div>
                <p className="text-lg font-light text-foreground/80 leading-relaxed mb-6">
                  Responding to an RFQ or navigating legal discovery means sifting through thousands of pages under
                  strict deadlines. The stakes are high, the documents are dense, and errors carry real consequences.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80 font-light">
                      Find every responsive document and extract the relevant observations — with source citations
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80 font-light">
                      Surface contradictions and privilege issues before review — not during production
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80 font-light">
                      Full auditability: every extracted claim links to the page and paragraph it came from
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80 font-light">
                      Reuse prior review decisions — so the same clause type doesn't get re-examined from scratch every engagement
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-secondary/30">
        <div className="container-custom">
          <AnimatedText
            text="How Atlas Works"
            className="text-4xl font-light mb-12 text-center text-foreground"
            type="heading"
          />

          <div className="max-w-4xl mx-auto space-y-12">
            <AnimatedSection delay={0.1}>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-medium text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-3 text-foreground">Ingest any file format</h3>
                  <p className="text-lg font-light text-foreground/80 leading-relaxed">
                    PDF, Excel, JSON, images, audio, and video files are automatically partitioned into logical
                    sections and broken into atomic observations. Each observation is independent, inspectable,
                    and confidence-scored — linked back to its exact source location.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-medium text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-3 text-foreground">Route uncertainty, not volume</h3>
                  <p className="text-lg font-light text-foreground/80 leading-relaxed">
                    High-confidence observations are accepted automatically. Low-confidence observations surface
                    in a priority queue — with the exact reason for uncertainty shown. Humans spend time on what
                    actually needs judgment, not on re-verifying what the model already knows.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-medium text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-3 text-foreground">Retain judgment as a durable asset</h3>
                  <p className="text-lg font-light text-foreground/80 leading-relaxed">
                    Every human correction is stored and applied forward. The team's standards compound across
                    documents and over time — so the same question never costs the same effort twice.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-medium text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-3 text-foreground">Decisions with provenance, not summaries</h3>
                  <p className="text-lg font-light text-foreground/80 leading-relaxed">
                    Every insight is anchored to its source. When you make a decision — pass on a deal, respond to
                    an RFQ, produce a discovery set — Atlas can show exactly what evidence it rests on and where
                    that evidence came from.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Vatsal */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedText
              text="Why I Built This"
              className="text-4xl font-light mb-12 text-center text-foreground"
              type="heading"
            />

            <AnimatedSection delay={0.2}>
              <p className="text-lg font-light text-foreground/80 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
                Atlas isn't a research project. I hit the same broken system three times at three different companies —
                each time with more documents, more accuracy, and the exact same outcome.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex gap-6 p-6 bg-secondary/30 rounded-lg border border-border">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Meta (2022–2023)</p>
                    <p className="text-foreground/80 font-light leading-relaxed">
                      I built ML systems serving 50M+ users daily and improved hate-organization detection by 15% PR-AUC.
                      The lesson: confidence scores on a dashboard change nothing. If the score doesn't determine what
                      a human sees next, it's decorative.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 p-6 bg-secondary/30 rounded-lg border border-border">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Dirac (2023–2025) — Head of AI</p>
                    <p className="text-foreground/80 font-light leading-relaxed">
                      As Head of AI at a CAD-automation startup, I processed 1M+ geometries and unstructured engineering
                      PDFs, then built confidence scoring and human-review workflows from scratch. Reduced latency 70%
                      and workflow interruptions 90% — by making the system route uncertainty instead of handing
                      everything to humans.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 p-6 bg-secondary/30 rounded-lg border border-border">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Bridge (2025)</p>
                    <p className="text-foreground/80 font-light leading-relaxed">
                      I built document intelligence pipelines processing 10,000+ documents daily at 90%+ accuracy.
                      Teams still reviewed nearly every output. Even when the extraction was right, no one could
                      make a confident decision from it — because nothing persisted, nothing was traceable, and
                      prior work didn't carry forward. I founded Runlog to fix that layer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-r-lg">
                <p className="text-xl font-light text-foreground leading-relaxed italic">
                  "I've built document pipelines, confidence scoring, and review queues at three different companies.
                  The extraction problem was solved at each one. The decision problem wasn't — no persistence,
                  no provenance, no way to carry forward what the team already knew. That's what Atlas fixes."
                </p>
                <p className="mt-4 text-sm font-medium text-primary">— Vatsal Trivedi, Founder & CEO, Runlog</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Market */}
      <section className="py-20 bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <AnimatedText
              text="The Market"
              className="text-4xl font-light mb-12 text-center text-foreground"
              type="heading"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <AnimatedCard delay={0.1}>
                <div className="bg-white p-6 rounded-lg border border-border h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-medium text-foreground">TAM</h3>
                  </div>
                  <p className="text-4xl font-light text-primary mb-2">$500B+</p>
                  <p className="text-sm font-light text-muted-foreground mb-3">by 2030</p>
                  <p className="text-sm font-light text-foreground/70 leading-relaxed">
                    Enterprise AI workflows where document-centric decisions require traceable, auditable intelligence
                  </p>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.2}>
                <div className="bg-white p-6 rounded-lg border border-border h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-medium text-foreground">SAM</h3>
                  </div>
                  <p className="text-4xl font-light text-primary mb-2">$60-100B</p>
                  <p className="text-sm font-light text-muted-foreground mb-3">by 2030</p>
                  <p className="text-sm font-light text-foreground/70 leading-relaxed">
                    Document review and confidence systems across private markets, legal, finance, and government
                  </p>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.3}>
                <div className="bg-white p-6 rounded-lg border border-border h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-medium text-foreground">SOM</h3>
                  </div>
                  <p className="text-4xl font-light text-primary mb-2">$5B+</p>
                  <p className="text-sm font-light text-muted-foreground mb-3">by 2030</p>
                  <p className="text-sm font-light text-foreground/70 leading-relaxed">
                    VC/PE due diligence, underwriting, and legal discovery — starting from $500M–$1B today
                  </p>
                </div>
              </AnimatedCard>
            </div>

            <AnimatedSection delay={0.4}>
              <div className="bg-white border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-lg font-light text-foreground leading-relaxed">
                  Document AI ($14.7B → $27.6B by 2030) and HITL AI ($4.8B → $39B by 2033) markets are growing fast.
                  None of them solve the persistence and provenance layer. That's the gap Atlas fills.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <AnimatedText
            text="If you're investing in document-heavy workflows, let's talk."
            className="text-3xl md:text-4xl font-light mb-8 max-w-3xl mx-auto leading-relaxed"
            type="heading"
          />
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
              Runlog Atlas doesn't summarize documents. It builds persistent, traceable intelligence from them —
              so your team's judgment compounds instead of starting over with every new file.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6">
                <a href="https://calendly.com/vatsaltrivedi2000/30min" target="_blank" rel="noopener noreferrer">
                  Book a Conversation <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent text-lg px-8 py-6"
              >
                <a href="https://atlas.runlogai.com" target="_blank" rel="noopener noreferrer">
                  Try Atlas <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </ClientPageWrapper>
  )
}
