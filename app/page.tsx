import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail, ExternalLink } from "lucide-react"
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
                  text="Founder & CEO"
                  className="text-lg md:text-xl font-light text-muted-foreground"
                  delay={0.2}
                />
                <span className="text-muted-foreground">·</span>
                <Link
                  href="https://runlogai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-lg md:text-xl text-primary font-medium hover:text-primary/80 transition-all underline decoration-primary/30 decoration-2 underline-offset-4 hover:decoration-primary/60"
                >
                  <span>RunLog AI</span>
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

              <AnimatedSection delay={0.4}>
                <p className="text-lg md:text-xl font-light text-foreground/80 mb-8 leading-relaxed">
                  Building infrastructure for trustworthy enterprise AI. Making human judgment reusable at scale.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.6}>
                <div className="flex gap-4">
                  <AnimatedButton asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/contact">
                      Contact <Mail className="ml-2 h-4 w-4" />
                    </Link>
                  </AnimatedButton>
                  <AnimatedButton asChild variant="outline" className="border-primary text-primary hover:bg-primary/5">
                    <a href="https://runlogai.com" target="_blank" rel="noopener noreferrer">
                      RunLog AI <ArrowRight className="ml-2 h-4 w-4" />
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
                  <Image src="/meta.jpg" alt="Meta" width={48} height={48} className="rounded" />
                  <div>
                    <h3 className="text-xl font-medium text-foreground">Meta</h3>
                    <p className="text-sm font-light text-muted-foreground">2022 - 2023</p>
                  </div>
                </div>
                <StatCard
                  number="50M+"
                  label="Daily Users"
                  subtitle="Built ML systems at scale, improved hate detection by 15%"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-white p-6 rounded-lg border border-border h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Image src="/bridge-logo.png" alt="Bridge" width={48} height={48} className="rounded" />
                  <div>
                    <h3 className="text-xl font-medium text-foreground">Bridge</h3>
                    <p className="text-sm font-light text-muted-foreground">2025</p>
                  </div>
                </div>
                <StatCard number="10K+" label="Docs/Day" subtitle="Built pipelines for document intelligence" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="bg-white p-6 rounded-lg border border-border h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Image src="/dirac.jpg" alt="Dirac" width={48} height={48} className="rounded" />
                  <div>
                    <h3 className="text-xl font-medium text-foreground">Dirac</h3>
                    <p className="text-sm font-light text-muted-foreground">2023 - 2025</p>
                  </div>
                </div>
                <StatCard number="1M+" label="Geometries Processed" subtitle="Head of AI, built systems from scratch" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Market Context */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedText
              text="The Opportunity"
              className="text-3xl md:text-4xl font-light mb-8 text-foreground"
              type="heading"
            />
            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-xl font-light text-foreground/80 mb-8 leading-relaxed">
                Enterprise AI adoption has crossed a tipping point. 78% of enterprises use AI for document processing.
                But extraction accuracy means nothing when humans still review everything.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                  <p className="text-4xl font-light text-primary mb-2">$500B+</p>
                  <p className="text-sm font-light text-muted-foreground mb-1">Global AI Software Market by 2030</p>
                  <p className="text-xs font-light text-muted-foreground">
                    Where review infrastructure is mission-critical
                  </p>
                </div>
                <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                  <p className="text-4xl font-light text-primary mb-2">$60B+</p>
                  <p className="text-sm font-light text-muted-foreground mb-1">Document + HITL AI by 2030</p>
                  <p className="text-xs font-light text-muted-foreground">
                    Core intelligence stack requiring human judgment
                  </p>
                </div>
              </div>
              <p className="text-lg font-light text-foreground/80 leading-relaxed">
                The bottleneck isn't extraction. It's review, trust, and making human judgment reusable. That's what
                RunLog Atlas solves.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Problem + Solution */}
      <section className="py-20 bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedText
              text="The Structural Problem"
              className="text-3xl md:text-4xl font-light mb-8 text-foreground"
              type="heading"
            />
            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-xl font-light text-foreground/80 mb-6 leading-relaxed">
                At Bridge, I built pipelines handling 10,000+ documents daily. Best-in-class extraction. High confidence
                scores. Yet review scaled linearly—more docs meant more human hours.
              </p>
              <div className="bg-white p-6 rounded-lg border border-border mb-6">
                <p className="text-xl font-light text-foreground italic leading-relaxed">
                  "AI extraction scales linearly. Review scales catastrophically."
                </p>
              </div>
              <p className="text-lg md:text-xl font-light text-foreground/80 leading-relaxed">
                <strong className="font-medium">RunLog Atlas</strong> makes review scale with ambiguity, not volume.
                Human judgment compounds instead of being throwaway labor.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience Sections */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Meta */}
            <div className="flex items-start gap-8">
              <AnimatedSection delay={0.1}>
                <Image src="/meta.jpg" alt="Meta" width={100} height={100} className="rounded-lg" />
              </AnimatedSection>
              <div className="flex-1">
                <AnimatedSection delay={0.2}>
                  <h3 className="text-2xl md:text-3xl font-light mb-2 text-foreground">Meta</h3>
                  <p className="text-sm font-light text-muted-foreground mb-4">2022 - 2023</p>
                </AnimatedSection>
                <AnimatedSection delay={0.3}>
                  <p className="text-lg font-light text-foreground/80 leading-relaxed">
                    Built ML systems serving 50M+ users daily. Improved hate detection accuracy by 15%. Learned that
                    confidence scores without operational routing are meaningless.
                  </p>
                </AnimatedSection>
              </div>
            </div>

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
                    Built systems from scratch handling 1M+ geometries. Reduced user-facing latency by 70% and workflow
                    interruptions by 90%. Saved $300K annually.
                  </p>
                </AnimatedSection>
              </div>
            </div>

            {/* Bridge */}
            <div className="flex items-start gap-8">
              <AnimatedSection delay={0.1}>
                <Image src="/bridge-logo.png" alt="Bridge" width={100} height={100} className="rounded-lg" />
              </AnimatedSection>
              <div className="flex-1">
                <AnimatedSection delay={0.2}>
                  <h3 className="text-2xl md:text-3xl font-light mb-2 text-foreground">Bridge</h3>
                  <p className="text-sm font-light text-muted-foreground mb-4">2025</p>
                </AnimatedSection>
                <AnimatedSection delay={0.3}>
                  <p className="text-lg font-light text-foreground/80 leading-relaxed">
                    Built document intelligence pipelines processing 10,000+ documents daily. Saw firsthand why
                    extraction alone never scales—review was the bottleneck.
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
                <h3 className="text-xl font-medium mb-3 text-foreground">Extraction is solved</h3>
                <p className="font-light text-foreground/80 leading-relaxed">
                  Models improve every quarter. The bottleneck has shifted to review.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-white p-8 rounded-lg border border-border">
                <h3 className="text-xl font-medium mb-3 text-foreground">Human judgment must compound</h3>
                <p className="font-light text-foreground/80 leading-relaxed">
                  One expert reviews 1,000 cases. That judgment should make the next 10,000 easier.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="bg-white p-8 rounded-lg border border-border">
                <h3 className="text-xl font-medium mb-3 text-foreground">Confidence needs routing</h3>
                <p className="font-light text-foreground/80 leading-relaxed">
                  Every system has scores. Almost none use them operationally.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="bg-white p-8 rounded-lg border border-border">
                <h3 className="text-xl font-medium mb-3 text-foreground">Systems should scale efficiently</h3>
                <p className="font-light text-foreground/80 leading-relaxed">
                  Current AI systems get expensive with volume. Atlas flips this.
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
            text="Let's Build"
            className="text-3xl md:text-4xl font-light mb-6 text-foreground"
            type="heading"
          />
          <AnimatedSection delay={0.2}>
            <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto text-foreground/80 leading-relaxed">
              I've lived this problem at Meta, Dirac, and Bridge. RunLog Atlas is the system that should have existed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact">
                  Get in Touch <Mail className="ml-2 h-4 w-4" />
                </Link>
              </AnimatedButton>
              <AnimatedButton asChild variant="outline" className="border-primary text-primary hover:bg-primary/5">
                <a href="https://runlogai.com" target="_blank" rel="noopener noreferrer">
                  Explore RunLog AI <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </AnimatedButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </ClientPageWrapper>
  )
}
