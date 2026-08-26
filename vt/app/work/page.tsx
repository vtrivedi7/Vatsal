import { ArrowRight, Check, Search, Database, Layers, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ClientPageWrapper, { AnimatedSection, AnimatedText, AnimatedCard } from "@/components/client-page-wrapper"

export default function RunLogAI() {
  return (
    <ClientPageWrapper>
      {/* Hero */}
      <section className="hero-section bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <AnimatedText
            text="How I Work With Information"
            className="text-5xl md:text-6xl font-light text-primary mb-6 text-center pb-2"
            type="heading"
          />
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedText
              text="Representation of data and extraction of information across multimodal data, CAD files, and documents — to find emergent patterns others miss"
              className="text-2xl md:text-3xl font-light text-foreground mb-8 leading-relaxed"
              delay={0.2}
            />
            <AnimatedSection delay={0.4}>
              <p className="text-xl text-foreground/80 font-light mb-12 leading-relaxed">
                Real work doesn&apos;t live in one file type. It lives across CAD geometries, engineering drawings,
                PDFs, tables, and documents that were never meant to work together. I build representations that unify
                them and extraction systems that keep every claim traceable — so the patterns hidden across the corpus
                become visible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
                  <Link href="/projects">
                    View Projects <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
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

      {/* The Challenge */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedText
              text="The Challenge"
              className="text-4xl font-light mb-12 text-center text-foreground"
              type="heading"
            />
            <AnimatedSection delay={0.2}>
              <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-r-lg mb-10">
                <p className="text-2xl font-light text-foreground leading-relaxed">
                  You&apos;re sitting on information that spans CAD files, drawings, and piles of documents.
                  <br className="hidden md:block" />
                  <span className="font-medium"> No single view connects them, and no answer can be trusted without a source.</span>
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-border">
                  <p className="text-lg font-medium text-foreground mb-2">Representation is fragmented</p>
                  <p className="text-foreground/70 font-light leading-relaxed">
                    CAD geometries, engineering PDFs, tables, and text each need different models. Without a unified
                    representation, connections across modalities never surface.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-border">
                  <p className="text-lg font-medium text-foreground mb-2">Extraction lacks grounding</p>
                  <p className="text-foreground/70 font-light leading-relaxed">
                    Summaries and chat answers are easy to generate, hard to defend. Without provenance to the exact page,
                    geometry, or document, they can&apos;t be trusted for real decisions.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-border">
                  <p className="text-lg font-medium text-foreground mb-2">Patterns stay hidden</p>
                  <p className="text-foreground/70 font-light leading-relaxed">
                    The most important signals only emerge across hundreds of files — contradictions, outliers, recurring
                    structures. No one file reveals them alone.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-20 bg-secondary/30">
        <div className="container-custom">
          <AnimatedText
            text="What I Do"
            className="text-4xl font-light mb-6 text-center text-foreground"
            type="heading"
          />
          <AnimatedSection delay={0.2}>
            <p className="text-xl font-light text-center text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              I focus on the full loop: how information is represented, how it is extracted, and how emergent patterns
              are surfaced — always with traceability to the source.
            </p>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedCard delay={0.1}>
              <div className="bg-white p-8 rounded-lg border border-border h-full">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-medium mb-4 text-foreground">Representation Across Modalities</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Modeling CAD files, engineering drawings, PDFs, and documents into a shared, structured representation —
                  so geometry, text, tables, and images can be queried together.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  How you represent data determines what you can ask. Get that right, and the corpus stops being a pile
                  of files and starts being a system you can reason about.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <div className="bg-white p-8 rounded-lg border border-border h-full">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-medium mb-4 text-foreground">Extraction With Provenance</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Extracting entities, facts, and relationships — each linked to the exact source: page, geometry, section,
                  and confidence.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  No black-box summaries. Every insight is inspectable, and every answer can be defended back to where it
                  came from.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <div className="bg-white p-8 rounded-lg border border-border h-full">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-medium mb-4 text-foreground">Emergent Pattern Discovery</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Finding what only appears when you look across the whole corpus — recurring structures, contradictions,
                  outliers, and subtle signals.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  This is where representation pays off: patterns invisible in any single document become obvious in the
                  right model.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <div className="bg-white p-8 rounded-lg border border-border h-full">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-medium mb-4 text-foreground">Systems That Compound</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Building so that judgment and structure accumulate — corrections and links applied forward, so the next
                  thousand files are easier than the last.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Institutional knowledge should live in the representation itself, not just in someone&apos;s head.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Across Modalities */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedText
              text="Across Modalities"
              className="text-4xl font-light mb-4 text-center text-foreground"
              type="heading"
            />
            <AnimatedSection delay={0.1}>
              <p className="text-lg font-light text-center text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
                The hardest information problems aren&apos;t text-only. They require reading geometry and documents together.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-secondary/30 p-8 rounded-lg border border-border mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded">
                    Core
                  </span>
                  <h3 className="text-2xl font-medium text-foreground">CAD Files, Drawings & Engineering PDFs</h3>
                </div>
                <p className="text-lg font-light text-foreground/80 leading-relaxed mb-6">
                  At Dirac I processed 1M+ geometries and unstructured engineering PDFs — learning where generic document
                  tools break and where geometry-aware representation matters. A dimension in a CAD file and a note in a
                  drawing have to resolve to the same thing.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80 font-light">
                      Parse and link geometries, drawings, and structured outputs into a common representation
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80 font-light">
                      Surface contradictions: figures that don&apos;t match across sources, missing annotations, unresolved references
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80 font-light">
                      Trace every extraction back to its exact geometry, page, or document for defensibility
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80 font-light">
                      Build models that compound across projects, so what was learned once carries forward
                    </p>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-lg border border-primary/20">
                  <p className="text-foreground/80 font-light italic leading-relaxed">
                    &quot;CAD and documents are not separate problems. The real structure only appears when you represent
                    them together and let patterns emerge across the whole set.&quot;
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-secondary/30 p-8 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block px-3 py-1 bg-foreground/20 text-foreground text-sm font-medium rounded">
                    Also
                  </span>
                  <h3 className="text-2xl font-medium text-foreground">Documents, Tables & Other Data</h3>
                </div>
                <p className="text-lg font-light text-foreground/80 leading-relaxed mb-6">
                  Beyond CAD: PDFs, spreadsheets, images, and unstructured documents — all part of the same representation
                  problem. The goal is always one queryable view, grounded to source, where emergent structure is visible.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80 font-light">
                      Extract observations across file types with consistent structure and source citations
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80 font-light">
                      Link entities and facts across documents — people, terms, obligations, references
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80 font-light">
                      Query across hundreds of files as easily as one, with provenance intact
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80 font-light">
                      Reuse structure: what was modeled once doesn&apos;t need to be rebuilt from scratch
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
            text="How I Approach It"
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
                  <h3 className="text-2xl font-medium mb-3 text-foreground">Model the data, not just the files</h3>
                  <p className="text-lg font-light text-foreground/80 leading-relaxed">
                    Start with representation. For CAD, that means geometries as first-class objects; for documents, it
                    means logical sections and linked entities — not just chunks of text.
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
                  <h3 className="text-2xl font-medium mb-3 text-foreground">Extract with grounding</h3>
                  <p className="text-lg font-light text-foreground/80 leading-relaxed">
                    Every extraction is confidence-scored and traced to its exact location — page, geometry, or document.
                    High confidence flows through; uncertainty is where human judgment matters.
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
                  <h3 className="text-2xl font-medium mb-3 text-foreground">Let patterns emerge</h3>
                  <p className="text-lg font-light text-foreground/80 leading-relaxed">
                    Once the corpus is well-represented, contradictions, outliers, and recurring signals surface naturally.
                    The representation does the work that no amount of per-file prompting can.
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
                  <h3 className="text-2xl font-medium mb-3 text-foreground">Make insight durable</h3>
                  <p className="text-lg font-light text-foreground/80 leading-relaxed">
                    Structure should persist and compound. A correction or a new link should improve the next thousand
                    queries — not disappear when the session ends.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why This Background */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedText
              text="Why This Background"
              className="text-4xl font-light mb-12 text-center text-foreground"
              type="heading"
            />

            <AnimatedSection delay={0.2}>
              <p className="text-lg font-light text-foreground/80 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
                I&apos;ve built extraction, structured pipelines, and production ML across environments where information is
                multimodal, messy, and high-stakes — and watched the same gap appear: scattered inputs, no shared
                representation, answers you can&apos;t defend.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex gap-6 p-6 bg-secondary/30 rounded-lg border border-border">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Meta (2022–2023)</p>
                    <p className="text-foreground/80 font-light leading-relaxed">
                      Built ML systems serving 50M+ users daily and improved hate-organization detection by 15% PR-AUC.
                      The lesson: production ML lives or dies on representation. An output only matters when it reflects
                      what the system faithfully models and can trace back to its source.
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
                      As Head of AI, I processed 1M+ geometries and unstructured engineering PDFs, then built confidence
                      scoring and structured pipelines from scratch. Reduced latency 70% and workflow interruptions 90% —
                      by representing CAD and documents together instead of treating them as separate silos.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 p-6 bg-secondary/30 rounded-lg border border-border">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Microsoft (early career)</p>
                    <p className="text-foreground/80 font-light leading-relaxed">
                      Early production software engineering at platform scale. It set the standard for everything that
                      came after: ship reliable systems real users depend on, and make them explainable. That standard
                      is why every extraction I build grounds itself in its source.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-r-lg">
                <p className="text-xl font-light text-foreground leading-relaxed italic">
                  &quot;I&apos;ve learned to read across modalities — CAD, documents, and other data — and to build
                  representations where emergent patterns finally become visible, and every answer traces back to where
                  it came from. That is the work I am best positioned to do.&quot;
                </p>
                <p className="mt-4 text-sm font-medium text-primary">— Vatsal Trivedi</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <AnimatedText
            text="If you work with complex, multimodal information, let's talk."
            className="text-3xl md:text-4xl font-light mb-8 max-w-3xl mx-auto leading-relaxed"
            type="heading"
          />
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
              Representation and extraction are not side problems — they are the problem. When they are right, patterns
              compound and answers become defensible instead of starting over with every new file.
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
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </ClientPageWrapper>
  )
}
