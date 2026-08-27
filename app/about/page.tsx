import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ClientPageWrapper, {
  AnimatedSection,
  AnimatedText,
  AnimatedCard,
  AnimatedButton,
} from "@/components/client-page-wrapper"

export default function About() {
  return (
    <ClientPageWrapper>
      <section className="hero-section bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedText
              text="About Me"
              className="text-5xl md:text-6xl font-light text-primary mb-12 text-center"
              type="heading"
            />
            <div className="flex flex-col md:flex-row items-center gap-12">
              <AnimatedSection className="md:w-1/3 flex justify-center" delay={0.2}>
                <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                  <Image src="/linkedin.jpg" alt="Vatsal Trivedi" fill className="object-cover" />
                </div>
              </AnimatedSection>
              <AnimatedSection className="md:w-2/3" delay={0.4}>
                <p className="text-xl font-light text-foreground/90 leading-relaxed">
                  I work on representation of data and extraction of information across multimodal data — from CAD
                  geometries and engineering PDFs to tables, images, and other documents. My focus is building
                  representations that make messy information queryable, and extraction systems that make it trustworthy,
                  so emergent patterns become visible.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedText
            text="My Journey"
            className="text-4xl font-light text-center mb-16 text-foreground"
            type="heading"
          />

          <div className="max-w-4xl mx-auto space-y-12">
            <AnimatedSection delay={0.1}>
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary"></div>
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded">
                    Present
                  </span>
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-3">Independent Work — Representation & Extraction</h3>
                <p className="text-lg font-light text-foreground/80 leading-relaxed mb-3">
                  Focused on how information is represented and extracted across multimodal, messy inputs — CAD files,
                  engineering drawings, documents, and other data — toward systems that surface emergent patterns and keep
                  every claim grounded in its source.
                </p>
                <p className="text-lg font-light text-foreground/80 leading-relaxed">
                  Every extraction traces to its source by design: a page, a geometry, a timestamp, or a document — so
                  answers are not just retrieved, but defensible.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary/70"></div>
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded">
                    2023-2025
                  </span>
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-3">Dirac · Head of AI</h3>
                <p className="text-lg font-light text-foreground/80 leading-relaxed mb-3">
                  Head of AI at a CAD-automation startup. Processed 1M+ geometries and unstructured engineering PDFs,
                  and built extraction, confidence scoring, and structured pipelines from scratch. Reduced user-facing
                  latency by 70% and workflow interruptions by 90%.
                </p>
                <p className="text-lg font-light text-foreground/80 leading-relaxed">
                  Core lesson: CAD and documents together are a representation problem — get the representation right,
                  and emergent structure across thousands of files becomes queryable.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary/70"></div>
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded">
                    2022-2023
                  </span>
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-3">Meta · Machine Learning Engineer</h3>
                <p className="text-lg font-light text-foreground/80 leading-relaxed">
                  Built ML systems serving 50M+ users daily. Improved hate-organization detection by 15% (PR-AUC),
                  directly impacting 11M+ profiles daily and reducing false negatives by 39%. Learned what production ML
                  demands at scale, and why grounded, well-represented outputs matter more than clever models.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary/70"></div>
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded">
                    Early career
                  </span>
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-3">Microsoft</h3>
                <p className="text-lg font-light text-foreground/80 leading-relaxed">
                  Early production software engineering at one of the world&apos;s largest platforms. Where I learned to ship
                  reliable systems that real users depend on, self-funding my way through school along the way.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary/70"></div>
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded">
                    2020-2023
                  </span>
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-3">Stax · Founder</h3>
                <p className="text-lg font-light text-foreground/80 leading-relaxed">
                  Founded Stax, growing to 400+ weekly active users across 4 colleges, supporting 15,000+ classes.
                  Invested $10K and managed the entire product lifecycle. Learned invaluable lessons about product
                  development, user acquisition, and market validation.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="relative pl-8">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary/70"></div>
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded">
                    2018-2021
                  </span>
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-3">Georgia Tech</h3>
                <p className="text-lg font-light text-foreground/80 leading-relaxed">
                  Earned a degree in Mechanical Engineering with a minor in Computer Science (Intelligence thread), 3.4
                  GPA. Financed my entire education through internships at Microsoft, Capital One, and Cardlytics while
                  maintaining strong academic performance.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why This Work */}
      <section className="py-16 bg-primary/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection delay={0.2}>
              <div className="border-l-4 border-primary pl-8">
                <p className="text-xl md:text-2xl font-light text-foreground leading-relaxed italic">
                  &quot;Every technical operation I&apos;ve worked in runs on information that is scattered across CAD
                  files, documents, and systems — and nobody can fully query it. I focus on representing that information
                  faithfully and extracting it with provenance, so the patterns hidden across the corpus finally surface
                  — and every answer traces back to its source.&quot;
                </p>
                <p className="mt-4 text-sm font-medium text-primary">— Vatsal Trivedi</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <AnimatedText
            text="Skills & Expertise"
            className="text-4xl font-light text-center mb-16 text-foreground"
            type="heading"
          />
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedCard delay={0.1}>
              <div className="bg-white p-8 rounded-lg border border-border h-full">
                <h3 className="text-2xl font-medium mb-6 text-primary">Technical Execution</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span className="text-foreground/80 leading-relaxed">
                      <strong>AI/ML at Scale:</strong> Production ML systems serving 50M+ users, processing millions of
                      items daily
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span className="text-foreground/80 leading-relaxed">
                      <strong>Multimodal Representation:</strong> CAD geometries, engineering drawings, PDFs, and documents
                      into structured, linked representations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span className="text-foreground/80 leading-relaxed">
                      <strong>Information Extraction:</strong> Provenance on every claim, with a hard grounding rule against
                      un-sourced assertions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span className="text-foreground/80 leading-relaxed">
                      <strong>Full Stack:</strong> Python, TypeScript, React, Next.js, TensorFlow, PyTorch, AWS, GCP
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <div className="bg-white p-8 rounded-lg border border-border h-full">
                <h3 className="text-2xl font-medium mb-6 text-primary">Approach</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span className="text-foreground/80 leading-relaxed">
                      <strong>0→1 Building:</strong> Founded Stax (400+ users), led multiple greenfield AI projects at
                      Dirac
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span className="text-foreground/80 leading-relaxed">
                      <strong>Resilience:</strong> Self-funded education from age 16, managed full lifecycle from idea
                      to launch
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span className="text-foreground/80 leading-relaxed">
                      <strong>Emergent Patterns:</strong> Best positioned to find what only appears when you model the whole
                      corpus, not just one file
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span className="text-foreground/80 leading-relaxed">
                      <strong>Cross-Modal Linking:</strong> Connecting CAD, documents, and structured data into one queryable
                      view
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <div className="bg-white p-8 rounded-lg border border-border h-full">
                <h3 className="text-2xl font-medium mb-6 text-primary">Systems Thinking</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span className="text-foreground/80 leading-relaxed">
                      <strong>Representation First:</strong> How you model data determines which patterns can emerge
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span className="text-foreground/80 leading-relaxed">
                      <strong>Grounding:</strong> Every answer traced to its exact page, geometry, or document
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span className="text-foreground/80 leading-relaxed">
                      <strong>Compounding Insight:</strong> Knowledge that accumulates across engagements instead of resetting
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span className="text-foreground/80 leading-relaxed">
                      <strong>Production Hardening:</strong> Built to be reliable, explainable, and trustworthy at scale
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <div className="bg-white p-8 rounded-lg border border-border h-full">
                <h3 className="text-2xl font-medium mb-6 text-primary">Domain Expertise</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span className="text-foreground/80 leading-relaxed">
                      <strong>Multimodal Intelligence:</strong> Ingestion across CAD, PDFs, images, and documents into one
                      reconciled view
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span className="text-foreground/80 leading-relaxed">
                      <strong>Provenance & Trust:</strong> Every answer sourced to its exact page, timestamp, or geometry
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span className="text-foreground/80 leading-relaxed">
                      <strong>Enterprise AI:</strong> Deployed production ML at Meta (50M+ users), know what breaks at
                      scale
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span className="text-foreground/80 leading-relaxed">
                      <strong>Pattern Discovery:</strong> Surfacing contradictions, outliers, and emergent signals across large
                      corpora
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <AnimatedText text="Let's Connect" className="text-4xl font-light mb-8 text-foreground" type="heading" />
          <AnimatedSection delay={0.2}>
            <p className="text-xl font-light mb-12 max-w-2xl mx-auto text-foreground/80 leading-relaxed">
              Interested in multimodal data representation, information extraction, or finding emergent patterns in complex
              information?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="https://calendly.com/vatsaltrivedi2000/30min" target="_blank" rel="noopener noreferrer">
                  Book a Conversation <ArrowRight className="ml-2 h-4 w-4" />
                </a>
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
