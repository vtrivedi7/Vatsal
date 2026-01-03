import { ArrowRight, Check, Eye, TrendingDown, Database, GitBranch, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import ClientPageWrapper, { AnimatedSection, AnimatedText, AnimatedCard } from "@/components/client-page-wrapper"

export default function RunLogAI() {
  return (
    <ClientPageWrapper>
      <section className="hero-section bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <AnimatedText
            text="RunLog AI"
            className="text-5xl md:text-6xl font-light text-primary mb-6 text-center"
            type="heading"
          />
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedText
              text="A review-first intelligence system that makes human judgment reusable"
              className="text-2xl md:text-3xl font-light text-foreground mb-8 leading-relaxed"
              delay={0.2}
            />
            <AnimatedSection delay={0.4}>
              <p className="text-xl text-foreground/80 font-light mb-12 leading-relaxed">
                AI workflows scale by reviewing only uncertainty instead of verifying everything.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <AnimatedText
              text="The Market"
              className="text-4xl font-light mb-12 text-center text-foreground"
              type="heading"
            />
            <AnimatedSection delay={0.2}>
              <p className="text-lg font-light text-center text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                Enterprise AI has crossed a tipping point. 78% of enterprises use AI for document processing. But
                extraction accuracy means nothing when humans still review everything.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <AnimatedCard delay={0.1}>
                <div className="bg-white p-6 rounded-lg border border-border h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-medium text-foreground">TAM</h3>
                  </div>
                  <p className="text-4xl font-light text-primary mb-2">$500B+</p>
                  <p className="text-sm font-light text-muted-foreground mb-3">by 2030</p>
                  <p className="text-sm font-light text-foreground/70 leading-relaxed">
                    AI enterprise workflows, with tens of billions in document-centric review automation
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
                    Enterprise document review and confidence systems across finance, legal, healthcare, government
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
                    Private markets, legal workflows, research—starting from $500M-$1B today
                  </p>
                </div>
              </AnimatedCard>
            </div>

            <AnimatedSection delay={0.4}>
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-lg font-light text-foreground leading-relaxed">
                  Document AI ($14.7B → $27.6B by 2030) and HITL AI ($4.8B → $39B by 2033) markets are exploding. But
                  they solve extraction, not review. That's where Atlas comes in.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* The Core Insight */}
      <section className="py-20 bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedText
              text="The Core Insight"
              className="text-4xl font-light mb-12 text-center text-foreground"
              type="heading"
            />
            <AnimatedSection delay={0.2}>
              <div className="bg-white border-l-4 border-primary p-8 rounded-r-lg mb-8">
                <p className="text-2xl font-light text-foreground leading-relaxed">
                  AI extraction scales linearly.
                  <br />
                  Review scales catastrophically.
                </p>
              </div>
              <p className="text-lg font-light text-foreground/80 leading-relaxed mb-6">
                Enterprises already use best-in-class OCR, LLMs, embeddings, and custom pipelines. Yet they still review
                ~100% of outputs, distrust confidence scores, hire offshore review teams, and miss deadlines when volume
                spikes.
              </p>
              <div className="bg-white p-6 rounded-lg border border-border">
                <p className="text-xl font-light text-foreground italic">
                  "Confidence must determine what humans see next. Not dashboards. Not averages. Priority queues."
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* RunLog Atlas */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedText
            text="RunLog Atlas"
            className="text-4xl font-light mb-6 text-center text-foreground"
            type="heading"
          />
          <AnimatedSection delay={0.2}>
            <p className="text-xl font-light text-center text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Infrastructure for human-in-the-loop AI where review scales with ambiguity, not volume
            </p>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedCard delay={0.1}>
              <div className="bg-secondary/30 p-8 rounded-lg border border-border h-full">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-medium mb-4 text-foreground">Confidence-First Design</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Every observation has confidence derived from model certainty, ambiguity signals, and cross-document
                  agreement.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Low confidence → routed to humans
                  <br />
                  High confidence → flows automatically
                  <br />
                  Human corrections → confidence becomes 1.0
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <div className="bg-secondary/30 p-8 rounded-lg border border-border h-full">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingDown className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-medium mb-4 text-foreground">Review Scales with Ambiguity</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Not volume. Humans review only the lowest-confidence observations through priority queues.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Over time, review effort shrinks, not grows. Human judgment compounds across documents and time.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <div className="bg-secondary/30 p-8 rounded-lg border border-border h-full">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-medium mb-4 text-foreground">Durable Judgment</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Human decisions aren't throwaway labor—they become durable assets, reusable across documents and time.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  If the same pattern appears again, Atlas remembers. One expert reviews 1,000 cases. That judgment
                  makes the next 10,000 easier.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <div className="bg-secondary/30 p-8 rounded-lg border border-border h-full">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <GitBranch className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-medium mb-4 text-foreground">Reinterpretation Without Re-Review</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  When requirements change—new schemas, different fields, shifted questions—Atlas doesn't require
                  re-ingesting or re-reviewing.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Existing observations are reinterpreted under the new schema. Review decisions remain durable assets.
                </p>
              </div>
            </AnimatedCard>
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
                  <h3 className="text-2xl font-medium mb-3 text-foreground">Documents → Partitions → Observations</h3>
                  <p className="text-lg font-light text-foreground/80 leading-relaxed">
                    Any file type is automatically partitioned into logical sections and broken into atomic
                    observations. Each observation is independent, inspectable, and confidence-scored.
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
                  <h3 className="text-2xl font-medium mb-3 text-foreground">Priority Queue Review</h3>
                  <p className="text-lg font-light text-foreground/80 leading-relaxed">
                    Humans review only the lowest-confidence observations, see exactly why something is uncertain, and
                    make targeted corrections. The system updates in place—nothing is hidden, nothing auto-approves
                    silently.
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
                  <h3 className="text-2xl font-medium mb-3 text-foreground">Judgment Is Retained and Reused</h3>
                  <p className="text-lg font-light text-foreground/80 leading-relaxed">
                    Human decisions become durable assets, reusable across documents and time. Systems get cheaper and
                    more accurate as they scale.
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
                  <h3 className="text-2xl font-medium mb-3 text-foreground">Projects, Not Global Truth</h3>
                  <p className="text-lg font-light text-foreground/80 leading-relaxed">
                    Atlas doesn't maintain a mutable global knowledge base. All data lives in projects. This prevents
                    silent contamination and preserves auditability.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedText
              text="Who Atlas Is Built For"
              className="text-4xl font-light mb-12 text-center text-foreground"
              type="heading"
            />

            <AnimatedSection delay={0.2}>
              <div className="bg-secondary/30 p-8 rounded-lg border border-border mb-8">
                <h3 className="text-2xl font-medium mb-4 text-primary">Primary: Private Markets Operations</h3>
                <p className="text-lg font-light text-foreground/80 leading-relaxed mb-4">
                  Fund administrators, investment ops, and document-heavy finance teams already have extraction. They
                  don't have scalable review.
                </p>
                <p className="text-lg font-light text-foreground/80 leading-relaxed">
                  Atlas reduces review from ~100% to a small fraction—targeting ambiguity instead of volume.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-secondary/30 p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-medium mb-4 text-primary">Pull-Through: Legal and Research</h3>
                <p className="text-lg font-light text-foreground/80 leading-relaxed mb-4">
                  Legal teams need auditability, causality, and control. Research teams need context-aware translation
                  and synthesis.
                </p>
                <p className="text-lg font-light text-foreground/80 leading-relaxed">
                  Different domains. Same bottleneck. Same solution.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-20 bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedText
              text="Why This Matters"
              className="text-4xl font-light mb-12 text-center text-foreground"
              type="heading"
            />

            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg font-light text-foreground/80 leading-relaxed">
                    Most AI systems get more expensive as they scale—more humans, not fewer
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg font-light text-foreground/80 leading-relaxed">
                    Review effort scales linearly with volume, breaking teams under deadline pressure
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg font-light text-foreground/80 leading-relaxed">
                    Human judgment is treated as throwaway labor instead of a compounding asset
                  </p>
                </div>
              </div>

              <div className="mt-12 bg-white border-l-4 border-primary p-8 rounded-r-lg">
                <p className="text-2xl font-light text-foreground leading-relaxed">
                  Atlas is designed so review effort scales with ambiguity, not volume. Accuracy improves structurally.
                  Systems get cheaper over time.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <AnimatedText text="The Anchor" className="text-3xl md:text-4xl font-light mb-8" type="heading" />
          <AnimatedSection delay={0.2}>
            <p className="text-2xl md:text-3xl font-light mb-12 max-w-4xl mx-auto leading-relaxed">
              RunLog Atlas doesn't automate decisions. It makes human judgment reusable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6">
                <a href="https://runlogai.com" target="_blank" rel="noopener noreferrer">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent text-lg px-8 py-6"
              >
                <a href="https://runlogai.com/demo" target="_blank" rel="noopener noreferrer">
                  Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </ClientPageWrapper>
  )
}
