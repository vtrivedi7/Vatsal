import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import AutoScrollTop from "@/components/auto-scroll-top"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/next"

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Vatsal Trivedi | Founder of RunLog AI - Production AI Observability",
  description:
    "Vatsal Trivedi, founder of RunLog AI. Built AI systems at Meta (50M+ users, 2022-2023), Head of AI at Dirac (1M+ geometries, 2023-2025), Bridge (10K+ docs/day, 2025). Now building RunLog Atlas.",
  keywords: [
    "AI observability",
    "RunLog AI founder",
    "production AI infrastructure",
    "AI review systems",
    "Vatsal Trivedi",
    "Y Combinator AI",
    "Bridge AI",
    "Meta AI",
    "Dirac AI",
  ],
  authors: [{ name: "Vatsal Trivedi" }],
  creator: "Vatsal Trivedi",
  publisher: "Vatsal Trivedi",
  metadataBase: new URL("https://vatsaltrivedi.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vatsaltrivedi.vercel.app",
    title: "Vatsal Trivedi | Founder of RunLog AI",
    description: "Built AI at Meta, Dirac, and Bridge. Now building RunLog Atlas: production-grade AI observability.",
    siteName: "Vatsal Trivedi",
    images: [
      {
        url: "/linkedin.jpg",
        width: 1200,
        height: 630,
        alt: "Vatsal Trivedi - Founder of RunLog AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vatsal Trivedi | Founder of RunLog AI",
    description: "Built AI at Meta, Dirac, and Bridge. Now building production AI observability.",
    images: ["/linkedin.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Vatsal Trivedi",
              jobTitle: "Founder & CEO",
              worksFor: {
                "@type": "Organization",
                name: "RunLog AI",
                url: "https://runlogai.com",
              },
              url: "https://vatsaltrivedi.vercel.app",
              sameAs: [
                "https://linkedin.com/in/vatsaltrivedi",
                "https://github.com/vatsaltrivedi",
                "https://runlogai.com",
              ],
              description:
                "Founder of RunLog AI, building production-grade AI observability systems. Previously at Meta (2022-2023), Dirac (2023-2025), and Bridge (2025).",
              knowsAbout: [
                "AI Observability",
                "Production AI Systems",
                "Machine Learning Infrastructure",
                "Document Intelligence",
              ],
            }),
          }}
        />
      </head>
      <body className={`${roboto.variable} font-sans`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <AutoScrollTop />
          <main className="flex-grow">{children}</main>
          <Footer />
          <ScrollToTop />
          <Toaster />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
