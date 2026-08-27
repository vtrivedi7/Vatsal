import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Network, ShieldCheck, Layers } from "lucide-react"
import ClientPageWrapper, {
  AnimatedSection,
  AnimatedText,
  AnimatedCard,
  AnimatedButton,
} from "@/components/client-page-wrapper"

export default function Projects() {
  return (
    <ClientPageWrapper>
      <section className="hero-section bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedText
              text="Building at Scale"
              className="text-5xl md:text-6xl font-light text-primary mb-6"
              type="heading"
            />
            <AnimatedText
              text="From production ML at Meta and Microsoft to building AI from scratch at Dirac — representation of data and extraction of information across multimodal data, CAD files, and documents"
              className="text-xl font-light text-foreground/80 leading-relaxed"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Impact Metrics Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            <AnimatedCard delay={0.1}>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg border border-primary/20 text-center">
                <Network className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-light text-foreground mb-2">1M+</div>
                <div className="text-foreground/80">Geometries Mapped</div>
                <div className="text-sm text-foreground/60 mt-2">AI built from scratch at Dirac</div>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.2}>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg border border-primary/20 text-center">
                <Layers className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-light text-foreground mb-2">50M+</div>
                <div className="text-foreground/80">Daily Active Users</div>
                <div className="text-sm text-foreground/60 mt-2">ML systems built at Meta</div>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.3}>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg border border-primary/20 text-center">
                <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-light text-foreground mb-2">100%</div>
                <div className="text-foreground/80">Answers Sourced</div>
                <div className="text-sm text-foreground/60 mt-2">Grounding rule: trace to source</div>
              </div>
            </AnimatedCard>
          </div>

          {/* Project Deep Dives */}
          <div className="max-w-6xl mx-auto space-y-20">
            {/* Multimodal Representation & Extraction */}
            <AnimatedSection delay={0.1}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                    Focus
                  </div>
                  <h2 className="text-4xl font-light text-foreground mb-6">Multimodal Representation & Extraction</h2>
                  <p className="text-lg font-light text-foreground/80 leading-relaxed mb-6">
                    Turning messy, multimodal inputs — CAD files, engineering drawings, PDFs, and other documents — into
                    structured, linked representations. Every extraction is grounded to its source, so patterns that only
                    emerge across the corpus become visible and defensible.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <div>
                        <div className="font-medium text-foreground">Represent → Extract → Surface</div>
                        <div className="text-foreground/70">
                          Model multimodal data into one reconciled view, then extract with provenance and surface emergent patterns
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <div>
                        <div className="font-medium text-foreground">Sourced by design</div>
                        <div className="text-foreground/70">
                          Every claim traces to its page, geometry, or source document; no un-sourced assertions
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <div>
                        <div className="font-medium text-foreground">Emergent patterns</div>
                        <div className="text-foreground/70">
                          Contradictions, outliers, and signals invisible in any single file become queryable across hundreds
                        </div>
                      </div>
                    </div>
                  </div>
                  <AnimatedButton asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/about">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </AnimatedButton>
                </div>
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                  <Image src="/ai-running-analytics-dashboard.jpg" alt="Multimodal representation" fill className="object-cover" />
                </div>
              </div>
            </AnimatedSection>

            {/* Why this approach */}
            <AnimatedSection delay={0.15}>
              <div className="bg-gradient-to-br from-primary/5 to-transparent p-8 md:p-10 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-light text-foreground mb-6">Not just search — representation</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="font-medium text-foreground mb-2">vs. retrieval only</div>
                    <p className="text-foreground/70 leading-relaxed">
                      Retrieval finds the closest passage. Representation maps how information connects and surfaces patterns across the corpus.
                    </p>
                  </div>
                  <div>
                    <div className="font-medium text-foreground mb-2">vs. single-format tools</div>
                    <p className="text-foreground/70 leading-relaxed">
                      Most tools handle text. Real work spans CAD geometries, drawings, tables, and documents together.
                    </p>
                  </div>
                  <div>
                    <div className="font-medium text-foreground mb-2">vs. chat summaries</div>
                    <p className="text-foreground/70 leading-relaxed">
                      Summaries reset every chat. Structured, source-linked representations compound over time.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Dirac */}
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative h-96 rounded-lg overflow-hidden shadow-xl bg-[#0a0a2a] flex items-center justify-center p-8">
                  <Image src="/dirac.jpg" alt="Dirac" width={200} height={200} className="object-contain" />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                    2023-2025 · Head of AI
                  </div>
                  <h2 className="text-4xl font-light text-foreground mb-6">Dirac</h2>
                  <p className="text-lg font-light text-foreground/80 leading-relaxed mb-6">
                    Head of AI. Built systems from scratch handling 1M+ geometries and unstructured engineering PDFs.
                    Led multiple 0→1 projects that reduced user-facing latency by 70% and workflow interruptions by 90%.
                    The work was fundamentally about representation: turning CAD and documents into a coherent, extractable model.
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-primary/5 p-4 rounded-lg">
                      <span className="text-foreground">Latency Reduction</span>
                      <span className="text-2xl font-light text-primary">70%</span>
                    </div>
                    <div className="flex justify-between items-center bg-primary/5 p-4 rounded-lg">
                      <span className="text-foreground">Workflow Improvement</span>
                      <span className="text-2xl font-light text-primary">90%</span>
                    </div>
                    <div className="flex justify-between items-center bg-primary/5 p-4 rounded-lg">
                      <span className="text-foreground">Annual Cost Savings</span>
                      <span className="text-2xl font-light text-primary">$300K</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Meta */}
            <AnimatedSection delay={0.3}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                    2022-2023 · MLE
                  </div>
                  <h2 className="text-4xl font-light text-foreground mb-6">Meta</h2>
                  <p className="text-lg font-light text-foreground/80 leading-relaxed mb-6">
                    Built ML systems serving 50M+ daily active users. Improved hate-organization detection by 15%,
                    directly impacting 11M+ profiles and reducing false negatives by 39%.
                  </p>
                  <div className="bg-gradient-to-br from-primary/5 to-transparent p-6 rounded-lg border border-primary/10">
                    <h3 className="font-medium text-foreground mb-3">Key Insight</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Production ML lives or dies on representation. A model output is only useful when the underlying
                      representation is faithful, and every result traces back to what the system actually knows.
                    </p>
                  </div>
                </div>
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl bg-white flex items-center justify-center p-8">
                  <Image src="/meta.jpg" alt="Meta" width={200} height={200} className="object-contain" />
                </div>
              </div>
            </AnimatedSection>

            {/* Microsoft */}
            <AnimatedSection delay={0.35}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative h-96 rounded-lg overflow-hidden shadow-xl bg-white flex items-center justify-center p-8">
                  <Image src="/microsoft.svg" alt="Microsoft" width={180} height={180} className="object-contain" />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                    Early career
                  </div>
                  <h2 className="text-4xl font-light text-foreground mb-6">Microsoft</h2>
                  <p className="text-lg font-light text-foreground/80 leading-relaxed">
                    Early production software engineering at one of the largest platforms in the world. The foundation
                    for everything that followed: shipping reliable systems that real users depend on, at scale.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Stax */}
            <AnimatedSection delay={0.4}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                    2020-2023 · Founder
                  </div>
                  <h2 className="text-4xl font-light text-foreground mb-6">Stax</h2>
                  <p className="text-lg font-light text-foreground/80 leading-relaxed mb-6">
                    Founded Stax, growing to 400+ weekly active users across 4 colleges, supporting 15,000+ classes with
                    personalized recommendations. Invested $10K and managed the entire product lifecycle from ideation
                    to launch.
                  </p>
                  <div className="bg-gradient-to-br from-primary/5 to-transparent p-6 rounded-lg border border-primary/10">
                    <h3 className="font-medium text-foreground mb-3">Lessons Learned</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Validated market needs, developed user-centric solutions, and drove rapid growth. The experience
                      provided invaluable lessons about product development, user acquisition, and market validation
                      that shape how I approach complex information problems.
                    </p>
                  </div>
                </div>
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                  <Image src="/stax.jpg" alt="Stax" fill className="object-contain bg-black" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom text-center">
          <AnimatedText
            text="Interested in My Work?"
            className="text-4xl font-light mb-8 text-foreground"
            type="heading"
          />
          <AnimatedSection delay={0.2}>
            <p className="text-xl font-light mb-12 max-w-2xl mx-auto text-foreground/80 leading-relaxed">
              From production ML at Meta and Microsoft to AI built from scratch at Dirac, I turn messy, multimodal
              inputs — CAD, documents, and more — into representations that surface emergent patterns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/about">
                  About Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </AnimatedButton>
              <AnimatedButton asChild variant="outline" className="border-primary text-primary hover:bg-primary/5">
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </AnimatedButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </ClientPageWrapper>
  )
}
