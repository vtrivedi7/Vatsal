import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar } from "lucide-react"
import StatCard from "@/components/stat-card"
import ClientPageWrapper, { AnimatedSection, AnimatedText, AnimatedButton } from "@/components/client-page-wrapper"

export default function Home() {
  return (
    <ClientPageWrapper>
      {/* Hero Section */}
      <section className="hero-section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <AnimatedSection delay={0.1} className="flex-shrink-0">
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                <Image src="/linkedin.jpg" alt="Vatsal Trivedi" fill className="object-cover" />
              </div>
            </AnimatedSection>

            <div className="flex-1">
              <AnimatedText
                text="Vatsal Trivedi"
                className="text-4xl md:text-6xl font-light text-foreground mb-4"
                type="heading"
              />
              <div className="flex items-center gap-3 mb-6">
                <AnimatedText
                  text="Representation of Data · Extraction of Information"
                  className="text-lg md:text-xl font-light text-muted-foreground"
                  delay={0.2}
                />
              </div>

              <AnimatedSection delay={0.4}>
                <p className="text-lg md:text-xl font-light text-foreground/80 mb-8 leading-relaxed">
                  I work on representation of data and extraction of information across multimodal data — CAD files,
                  engineering drawings, PDFs and other documents — building systems that surface emergent patterns
                  others miss.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.6}>
                <div className="flex flex-wrap gap-4">
                  <AnimatedButton asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/about">
                      About My Work <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </AnimatedButton>
                  <AnimatedButton asChild variant="outline" className="border-primary text-primary hover:bg-primary/5">
                    <a href="https://calendly.com/vatsaltrivedi2000/30min" target="_blank" rel="noopener noreferrer">
                      Book a Conversation <Calendar className="ml-2 h-4 w-4" />
                    </a>
                  </AnimatedButton>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <AnimatedText
            text="Track Record"
            className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground"
            type="heading"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="bg-white p-6 rounded-lg border border-border h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Image src="/dirac.jpg" alt="Dirac" width={48} height={48} className="rounded" />
                  <div>
                    <h3 className="text-xl font-medium text-foreground">Dirac</h3>
                    <p className="text-sm font-light text-muted-foreground">2023 - 2025 · Head of AI</p>
                  </div>
                </div>
                <StatCard number="1M+" label="Geometries Processed" subtitle="Built AI systems from scratch as Head of AI" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-white p-6 rounded-lg border border-border h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Image src="/meta.jpg" alt="Meta" width={48} height={48} className="rounded" />
                  <div>
                    <h3 className="text-xl font-medium text-foreground">Meta</h3>
                    <p className="text-sm font-light text-muted-foreground">2022 - 2023 · MLE</p>
                  </div>
                </div>
                <StatCard
                  number="50M+"
                  label="Daily Users"
                  subtitle="Production ML at scale, improved detection accuracy by 15%"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="bg-white p-6 rounded-lg border border-border h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Image src="/microsoft.svg" alt="Microsoft" width={48} height={48} className="rounded" />
                  <div>
                    <h3 className="text-xl font-medium text-foreground">Microsoft</h3>
                    <p className="text-sm font-light text-muted-foreground">Early career</p>
                  </div>
                </div>
                <StatCard number="Big Tech" label="Engineering Foundation" subtitle="Production software engineering at scale" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What I Focus On */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedText
              text="What I Focus On"
              className="text-3xl md:text-4xl font-light mb-8 text-foreground"
              type="heading"
            />
            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-xl font-light text-foreground/80 mb-8 leading-relaxed">
                Information is rarely clean. It lives in CAD geometries, in layered engineering PDFs, in scattered
                documents and systems. I build representations that make that information queryable — and extraction
                systems that make it reliable — so emergent patterns become visible early.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                  <p className="text-lg font-medium text-primary mb-2">Represent</p>
                  <p className="text-sm font-light text-muted-foreground">
                    Turn multimodal inputs — CAD files, drawings, tables, text, images — into structured, linked representations.
                  </p>
                </div>
                <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                  <p className="text-lg font-medium text-primary mb-2">Extract</p>
                  <p className="text-sm font-light text-muted-foreground">
                    Extract entities, facts and relationships with grounding to the exact source page, geometry, or document.
                  </p>
                </div>
                <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                  <p className="text-lg font-medium text-primary mb-2">Surface Patterns</p>
                  <p className="text-sm font-light text-muted-foreground">
                    Find what emerges across the corpus — contradictions, outliers, and signals invisible in any single file.
                  </p>
                </div>
              </div>
              <p className="text-lg font-light text-foreground/80 leading-relaxed">
                The throughline from Dirac to Meta to today is the same: messy, multimodal inputs → structured,
                source-linked representations → systems that let people ask hard questions and trust the answers.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Representation Matters */}
      <section className="py-20 bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedText
              text="Why Representation Matters"
              className="text-3xl md:text-4xl font-light mb-8 text-foreground"
              type="heading"
            />
            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-xl font-light text-foreground/80 mb-6 leading-relaxed">
                Retrieval alone finds the closest passage. It doesn&apos;t tell you how documents connect, or what pattern
                only appears when you look across hundreds of them. Deep understanding comes from representation — how
                information is modeled, linked, and traced — not from chat summaries that reset every session.
              </p>
              <div className="bg-white p-6 rounded-lg border border-border">
                <p className="text-xl font-light text-foreground italic leading-relaxed">
                  &quot;The value is not in finding a file. It is in modeling what the files collectively mean — and
                  proving every claim back to its source.&quot;
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience Sections */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Dirac */}
            <div className="flex items-start gap-8">
              <AnimatedSection delay={0.1}>
                <Image src="/dirac.jpg" alt="Dirac" width={100} height={100} className="rounded-lg" />
              </AnimatedSection>
              <div className="flex-1">
                <AnimatedSection delay={0.2}>
                  <h3 className="text-2xl md:text-3xl font-light mb-2 text-foreground">Dirac</h3>
                  <p className="text-sm font-light text-muted-foreground mb-4">2023 - 2025 · Head of AI</p>
                </AnimatedSection>
                <AnimatedSection delay={0.3}>
                  <p className="text-lg font-light text-foreground/80 leading-relaxed">
                    Built AI systems from scratch handling 1M+ geometries and unstructured engineering PDFs. Reduced
                    user-facing latency by 70% and workflow interruptions by 90%. Learned how to turn messy,
                    multimodal inputs — especially CAD — into structured, source-linked systems that surface patterns across a large corpus.
                  </p>
                </AnimatedSection>
              </div>
            </div>

            {/* Meta */}
            <div className="flex items-start gap-8">
              <AnimatedSection delay={0.1}>
                <Image src="/meta.jpg" alt="Meta" width={100} height={100} className="rounded-lg" />
              </AnimatedSection>
              <div className="flex-1">
                <AnimatedSection delay={0.2}>
                  <h3 className="text-2xl md:text-3xl font-light mb-2 text-foreground">Meta</h3>
                  <p className="text-sm font-light text-muted-foreground mb-4">2022 - 2023 · Machine Learning Engineer</p>
                </AnimatedSection>
                <AnimatedSection delay={0.3}>
                  <p className="text-lg font-light text-foreground/80 leading-relaxed">
                    Built ML systems serving 50M+ users daily and improved hate-organization detection by 15% PR-AUC.
                    Saw what production ML demands: representations are only useful when they are grounded, and patterns
                    only matter when you can trace them to their source.
                  </p>
                </AnimatedSection>
              </div>
            </div>

            {/* Microsoft */}
            <div className="flex items-start gap-8">
              <AnimatedSection delay={0.1}>
                <div className="w-[100px] h-[100px] rounded-lg border border-border flex items-center justify-center bg-white p-5">
                  <Image src="/microsoft.svg" alt="Microsoft" width={60} height={60} />
                </div>
              </AnimatedSection>
              <div className="flex-1">
                <AnimatedSection delay={0.2}>
                  <h3 className="text-2xl md:text-3xl font-light mb-2 text-foreground">Microsoft</h3>
                  <p className="text-sm font-light text-muted-foreground mb-4">Early career</p>
                </AnimatedSection>
                <AnimatedSection delay={0.3}>
                  <p className="text-lg font-light text-foreground/80 leading-relaxed">
                    Early production software engineering at one of the largest platforms in the world. The foundation
                    for everything that came after: shipping reliable systems that real users depend on.
                  </p>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <AnimatedText
            text="Core Beliefs"
            className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground"
            type="heading"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="bg-white p-8 rounded-lg border border-border">
                <h3 className="text-xl font-medium mb-3 text-foreground">Representation shapes what you can see</h3>
                <p className="font-light text-foreground/80 leading-relaxed">
                  How you model data determines which patterns can emerge. Get representation right and insight follows.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-white p-8 rounded-lg border border-border">
                <h3 className="text-xl font-medium mb-3 text-foreground">Every extraction traces to its source</h3>
                <p className="font-light text-foreground/80 leading-relaxed">
                  No un-sourced assertions. Every claim chains back to the exact page, geometry, or document.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="bg-white p-8 rounded-lg border border-border">
                <h3 className="text-xl font-medium mb-3 text-foreground">Patterns compound, not reset</h3>
                <p className="font-light text-foreground/80 leading-relaxed">
                  Insight should accumulate across files and over time, instead of starting over every conversation.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="bg-white p-8 rounded-lg border border-border">
                <h3 className="text-xl font-medium mb-3 text-foreground">Multimodal is the real world</h3>
                <p className="font-light text-foreground/80 leading-relaxed">
                  CAD, PDFs, tables, and documents together — the system has to read them all and link them faithfully.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <AnimatedText
            text="Let's Talk"
            className="text-3xl md:text-4xl font-light mb-6 text-foreground"
            type="heading"
          />
          <AnimatedSection delay={0.2}>
            <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto text-foreground/80 leading-relaxed">
              I&apos;ve spent my career turning messy, multimodal inputs — from CAD to documents — into systems that make information trustworthy and patterns impossible to miss.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/about">
                  More About Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </AnimatedButton>
              <AnimatedButton asChild variant="outline" className="border-primary text-primary hover:bg-primary/5">
                <a href="https://calendly.com/vatsaltrivedi2000/30min" target="_blank" rel="noopener noreferrer">
                  Book a Conversation <Calendar className="ml-2 h-4 w-4" />
                </a>
              </AnimatedButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </ClientPageWrapper>
  )
}
