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
  title: "Vatsal Trivedi — Representation of Data & Information Extraction across Multimodal Data",
  description:
    "Vatsal Trivedi — Head of AI at Dirac (1M+ geometries, 2023-2025), Machine Learning Engineer at Meta (50M+ users, 2022-2023), and early-career engineering at Microsoft. Work focused on representation of data and extraction of information across multimodal data, CAD files, and documents — finding emergent patterns in information.",
  keywords: [
    "multimodal data",
    "data representation",
    "information extraction",
    "emergent patterns",
    "CAD files",
    "knowledge graph",
    "document intelligence",
    "explainable AI",
    "Vatsal Trivedi",
    "Meta AI",
    "Dirac AI",
    "Microsoft",
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
    title: "Vatsal Trivedi — Representation of Data & Information Extraction",
    description: "Head of AI at Dirac, MLE at Meta, early engineering at Microsoft. Focused on representation of data and extraction of information across multimodal data, CAD files, and documents to surface emergent patterns.",
    siteName: "Vatsal Trivedi",
    images: [
      {
        url: "/linkedin.jpg",
        width: 1200,
        height: 630,
        alt: "Vatsal Trivedi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vatsal Trivedi — Representation of Data & Information Extraction",
    description: "Head of AI at Dirac, MLE at Meta, early engineering at Microsoft. Representation of data and extraction across multimodal data, CAD files, and documents.",
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
              jobTitle: "AI / Machine Learning Engineer",
              url: "https://vatsaltrivedi.vercel.app",
              sameAs: [
                "https://linkedin.com/in/vatsaltrivedi",
                "https://github.com/vatsaltrivedi",
              ],
              description:
                "Background in representation of data and extraction of information across multimodal data, CAD files, and documents. Head of AI at Dirac (2023-2025), Machine Learning Engineer at Meta (2022-2023), and early-career engineering at Microsoft. Focused on finding emergent patterns in information.",
              knowsAbout: [
                "Multimodal Data Representation",
                "Information Extraction",
                "CAD Geometry Processing",
                "Knowledge Graphs",
                "Document Intelligence",
                "Explainable AI",
                "Emergent Pattern Discovery",
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
