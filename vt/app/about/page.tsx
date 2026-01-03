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
                  My journey to founding RunLog AI has been shaped by deep technical expertise in AI/ML, proven
                  execution at scale, and firsthand experience with the challenges of deploying AI systems. I'm building
                  the infrastructure layer that enables teams to deploy trustworthy AI systems to production.
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
                <h3 className="text-2xl font-medium text-foreground mb-3">RunLog AI</h3>
                <p className="text-lg font-light text-foreground/80 leading-relaxed mb-3">
                  Building RunLog Atlas, the infrastructure layer for human-in-the-loop AI systems. Drawing on ML
                  expertise from Meta and startup experience from Bridge and Dirac, solving the critical problem of how
                  teams can deploy trustworthy AI systems to production.
                </p>
                <p className="text-lg font-light text-foreground/80 leading-relaxed">
                  RunLog Atlas provides confidence-first design, priority queue review, and reusable human
                  judgment—targeting the $10B market opportunity as AI systems move from demos to production.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary/70"></div>
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded">
                    2025
                  </span>
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-3">Bridge</h3>
                <p className="text-lg font-light text-foreground/80 leading-relaxed">
                  Built document intelligence pipelines processing 10,000+ documents daily with 90% average accuracy. Saw firsthand why extraction
                  alone never scales—review was the bottleneck. This experience directly informed the core insight
                  behind RunLog Atlas.
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
                <h3 className="text-2xl font-medium text-foreground mb-3">Dirac - Head of AI</h3>
                <p className="text-lg font-light text-foreground/80 leading-relaxed mb-3">
                  Set up AI systems from scratch handling 1M+ geometries. Led multiple projects from 0→1, implementing
                  advanced algorithms that reduced user-facing latency by 70% and workflow interruptions by 90%.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary/70"></div>
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded">
                    2022-2023
                  </span>
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-3">Meta</h3>
                <p className="text-lg font-light text-foreground/80 leading-relaxed">
                  Built ML systems serving 50M+ users daily. Improved hate organization detection by 15% (PR-AUC),
                  directly impacting 11M+ profiles daily and reducing false negatives by 39%. Learned that confidence
                  scores without operational routing are meaningless.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="relative pl-8">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary/70"></div>
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded">
                    2020-2023
                  </span>
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-3">Stax - Founder</h3>
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
                  Earned degree in Mechanical Engineering with a minor in Computer Science (Intelligence thread), 3.4
                  GPA. Financed entire education through internships at Microsoft, Capital One, and Cardlytics while
                  maintaining strong academic performance.
                </p>
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
                      <strong>Infrastructure:</strong> Built systems from 0→1, handling 10K+ docs/day and 1M+ geometries
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span className="text-foreground/80 leading-relaxed">
                      <strong>Performance Optimization:</strong> 70% latency reduction, 90% workflow improvement, $300K
                      annual savings
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
                <h3 className="text-2xl font-medium mb-6 text-primary">Founder Qualities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span className="text-foreground/80 leading-relaxed">
                      <strong>0→1 Building:</strong> Founded Stax (400+ users), led multiple greenfield projects at
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
                      <strong>Team Building:</strong> Currently mentoring 8 engineers, proven track record of
                      cross-functional collaboration
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span className="text-foreground/80 leading-relaxed">
                      <strong>Market Insight:</strong> Deep domain expertise in AI observability, lived the problem at
                      Meta and Bridge
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <div className="bg-white p-8 rounded-lg border border-border h-full">
                <h3 className="text-2xl font-medium mb-6 text-primary">Product & Strategy</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span className="text-foreground/80 leading-relaxed">
                      <strong>Product-Market Fit:</strong> Validated customer pain through direct experience building at
                      scale
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span className="text-foreground/80 leading-relaxed">
                      <strong>Strategic Thinking:</strong> Category-level insight (extraction vs. review), not feature
                      thinking
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span className="text-foreground/80 leading-relaxed">
                      <strong>Go-to-Market:</strong> Clear ICP (private markets ops), pull-through strategy (legal,
                      research)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span className="text-foreground/80 leading-relaxed">
                      <strong>User Acquisition:</strong> Grew Stax to 400+ users across 4 colleges, enterprise sales
                      experience
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
                      <strong>AI Observability:</strong> First-hand experience with review bottlenecks at Bridge (10K+
                      docs/day)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span className="text-foreground/80 leading-relaxed">
                      <strong>Document Intelligence:</strong> Built pipelines at Bridge, understand extraction vs.
                      review dynamics
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
                      <strong>System Architecture:</strong> Built from scratch at Dirac, understand reliability and
                      performance requirements
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
              Interested in RunLog AI, discussing AI infrastructure, or exploring collaboration opportunities?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="https://runlogai.com" target="_blank" rel="noopener noreferrer">
                  Learn About RunLog AI <ArrowRight className="ml-2 h-4 w-4" />
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
