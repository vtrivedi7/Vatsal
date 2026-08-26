/**
 * Scrolls to the top of the page with smooth animation
 */
export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

/**
 * Scrolls to a specific element by ID with smooth animation
 */
export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}
