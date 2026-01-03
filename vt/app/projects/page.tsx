import Image from "next/image"
import Link from "next/link"
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react"
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
              text="From Meta's 50M+ users to Bridge's production pipelines to building RunLog Atlas from scratch"
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
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-light text-foreground mb-2">15%</div>
                <div className="text-foreground/80">Accuracy Improvement</div>
                <div className="text-sm text-foreground/60 mt-2">Meta ML models</div>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.2}>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg border border-primary/20 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-light text-foreground mb-2">50M+</div>
                <div className="text-foreground/80">Daily Active Users</div>
                <div className="text-sm text-foreground/60 mt-2">Systems built at Meta</div>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.3}>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg border border-primary/20 text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-light text-foreground mb-2">90%</div>
                <div className="text-foreground/80">Workflow Improvement</div>
                <div className="text-sm text-foreground/60 mt-2">System optimization at Dirac</div>
              </div>
            </AnimatedCard>
          </div>

          {/* Project Deep Dives */}
          <div className="max-w-6xl mx-auto space-y-20">
            {/* RunLog Atlas */}
            <AnimatedSection delay={0.1}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                    Current
                  </div>
                  <h2 className="text-4xl font-light text-foreground mb-6">RunLog Atlas</h2>
                  <p className="text-lg font-light text-foreground/80 leading-relaxed mb-6">
                    Building the infrastructure layer for human-in-the-loop AI systems. Atlas makes review scale with
                    ambiguity, not volume—enabling systems to get cheaper and more accurate over time.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <div>
                        <div className="font-medium text-foreground">Confidence-First Design</div>
                        <div className="text-foreground/70">Priority queues route low-confidence items to humans</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <div>
                        <div className="font-medium text-foreground">Reusable Judgment</div>
                        <div className="text-foreground/70">Human decisions become durable, compounding assets</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <div>
                        <div className="font-medium text-foreground">Production Scale</div>
                        <div className="text-foreground/70">Designed to handle millions of documents daily</div>
                      </div>
                    </div>
                  </div>
                  <AnimatedButton asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <a href="https://runlogai.com" target="_blank" rel="noopener noreferrer">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </AnimatedButton>
                </div>
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                  <Image src="/ai-running-analytics-dashboard.jpg" alt="RunLog Atlas" fill className="object-cover" />
                </div>
              </div>
            </AnimatedSection>

            {/* Meta */}
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative h-96 rounded-lg overflow-hidden shadow-xl bg-white flex items-center justify-center p-8">
                  <Image src="/meta.jpg" alt="Meta" width={200} height={200} className="object-contain" />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                    2022-2023
                  </div>
                  <h2 className="text-4xl font-light text-foreground mb-6">Meta</h2>
                  <p className="text-lg font-light text-foreground/80 leading-relaxed mb-6">
                    Built ML systems serving 50M+ daily active users. Improved hate organization detection by 15%,
                    directly impacting 11M+ profiles and reducing false negatives by 39%.
                  </p>
                  <div className="bg-gradient-to-br from-primary/5 to-transparent p-6 rounded-lg border border-primary/10">
                    <h3 className="font-medium text-foreground mb-3">Key Insight</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Learned that confidence scores without operational routing are meaningless. Systems need to act on
                      what they know—and what they don't. This insight became foundational to RunLog Atlas.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Bridge */}
            <AnimatedSection delay={0.3}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                    2025
                  </div>
                  <h2 className="text-4xl font-light text-foreground mb-6">Bridge</h2>
                  <p className="text-lg font-light text-foreground/80 leading-relaxed mb-6">
                    Built document intelligence pipelines processing 10,000+ documents daily. Best-in-class extraction.
                    High confidence scores. Yet review scaled linearly—more docs meant more human hours.
                  </p>
                  <div className="bg-gradient-to-br from-primary/5 to-transparent p-6 rounded-lg border border-primary/10">
                    <h3 className="font-medium text-foreground mb-3">The Bottleneck</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Saw firsthand why extraction alone never scales. Deadlines broke teams, not models. This problem
                      became the genesis of RunLog Atlas—making review scale with ambiguity, not volume.
                    </p>
                  </div>
                </div>
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl bg-[#2C3E3D] flex items-center justify-center p-8">
                  <Image src="/bridge-logo.png" alt="Bridge" width={200} height={200} className="object-contain" />
                </div>
              </div>
            </AnimatedSection>

            {/* Dirac */}
            <AnimatedSection delay={0.4}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative h-96 rounded-lg overflow-hidden shadow-xl bg-[#0a0a2a] flex items-center justify-center p-8">
                  <Image src="/dirac.jpg" alt="Dirac" width={200} height={200} className="object-contain" />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                    2023-2025
                  </div>
                  <h2 className="text-4xl font-light text-foreground mb-6">Dirac</h2>
                  <p className="text-lg font-light text-foreground/80 leading-relaxed mb-6">
                    Head of AI. Set up systems from scratch handling 1M+ geometries. Led multiple 0→1 projects,
                    implementing advanced algorithms that reduced user-facing latency by 70% and workflow interruptions
                    by 90%.
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

            {/* Stax */}
            <AnimatedSection delay={0.5}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                    2020-2023
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
                      Validated market needs, developed user-centric solutions, and drove rapid growth. While we
                      ultimately pivoted, the experience provided invaluable lessons about product development, user
                      acquisition, and market validation that inform RunLog AI today.
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
              From Meta's scale to Bridge's insights to building RunLog Atlas—I'm focused on solving production AI
              challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="https://runlogai.com" target="_blank" rel="noopener noreferrer">
                  Explore RunLog AI <ArrowRight className="ml-2 h-4 w-4" />
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
