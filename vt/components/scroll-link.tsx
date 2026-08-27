"use client"

import type React from "react"

import type { ReactNode } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface ScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export default function ScrollLink({ href, children, className = "", onClick }: ScrollLinkProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // Execute any additional onClick handler if provided
    if (onClick) onClick()

    // Navigate to the new page
    router.push(href)

    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}
