"use client"

import { useState, type FormEvent, useRef } from "react"
import { Mail, Linkedin, Github, Calendar, Phone } from "lucide-react" // Added Phone icon
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import ClientPageWrapper, { AnimatedSection, AnimatedText } from "@/components/client-page-wrapper" // Import AnimatedSection and AnimatedText
// Add the EmailJS import
import emailjs from "@emailjs/browser"

export default function Contact() {
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null)
  // Remove the `formData` state:
  // const [formData, setFormData] = useState<FormData>({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // })
  const [isSubmitting, setIsSubmitting] = useState(false)

  interface FormData {
    name: string
    email: string
    subject: string
    message: string
  }

  // Remove the `handleChange` function:
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target
  //   setFormData((prev) => ({ ...prev, [name]: value }))
  // }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Update the `handleSubmit` function to use `emailjs.sendForm`
    // Replace the entire `try...catch` block within `handleSubmit` with the following:
    try {
      if (formRef.current) {
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

        if (!serviceId || !templateId || !publicKey) {
          throw new Error("EmailJS environment variables are not configured. Please check your .env.local file.")
        }

        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)

        toast({
          title: "Message Sent!",
          description: "Your message has been sent successfully.",
          variant: "success",
          duration: 5000,
        })
        formRef.current.reset() // Reset the form after successful submission
      } else {
        throw new Error("Form reference is not available.")
      }
    } catch (error: any) {
      console.error(error)
      toast({
        title: "Error",
        description: error.message ?? "There was an error sending your message. Please try again.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <ClientPageWrapper>
      {" "}
      {/* Wrap with ClientPageWrapper for animations */}
      <section className="hero-section bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <AnimatedText
            text="Let's Connect"
            className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center"
            type="heading"
          />
          <AnimatedText
            text="I'm always open to discussing technology, startups, or potential collaborations. Feel free to reach out!"
            className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto"
            delay={0.2}
          />
        </div>
      </section>
      {/* Prominent Contact Info Section */}
      <section className="py-12 bg-white">
        <div className="container-custom text-center">
          <AnimatedSection delay={0.3}>
            <h2 className="section-heading mb-8">Direct Contact</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              <div className="flex items-center gap-3">
                <Mail className="h-8 w-8 text-primary flex-shrink-0" />
                <a
                  href="mailto:vatsaltrivedi2000@gmail.com"
                  className="text-xl md:text-2xl font-semibold text-gray-800 hover:text-primary transition-colors"
                >
                  vatsaltrivedi2000@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-8 w-8 text-primary flex-shrink-0" />
                <a
                  href="tel:+18482194955"
                  className="text-xl md:text-2xl font-semibold text-gray-800 hover:text-primary transition-colors"
                >
                  +1 (848) 219-4955
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-hover">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Email</h3>
                <p className="text-gray-700 mb-4">The best way to reach me directly</p>
                <a
                  href="mailto:vatsaltrivedi2000@gmail.com"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary text-primary hover:bg-primary/10 h-10 px-4 py-2"
                >
                  vatsaltrivedi2000@gmail.com
                </a>
              </div>
            </div>

            <div className="card-hover">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Linkedin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">LinkedIn</h3>
                <p className="text-gray-700 mb-4">Connect with me professionally</p>
                <a
                  href="https://linkedin.com/in/vatsal-trivedi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary text-primary hover:bg-primary/10 h-10 px-4 py-2"
                >
                  linkedin.com/in/vatsal-trivedi
                </a>
              </div>
            </div>

            <div className="card-hover">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Github className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">GitHub</h3>
                <p className="text-gray-700 mb-4">Check out my code and projects</p>
                <a
                  href="https://github.com/vtrivedi7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary text-primary hover:bg-primary/10 h-10 px-4 py-2"
                >
                  github.com/vtrivedi7
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gray-50 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 text-primary text-center">Schedule a Meeting</h2>
            <p className="text-gray-700 mb-8 text-center">
              Interested in learning more about my work or discussing potential collaborations? Schedule a meeting with
              me directly.
            </p>
            <div className="flex justify-center">
              <a
                href="https://calendly.com/vatsaltrivedi2000/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 text-white h-10 px-4 py-2"
              >
                <Calendar className="mr-2 h-4 w-4" /> Book a 30-Minute Call
              </a>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-8 text-primary text-center">Send Me a Message</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <form ref={formRef} className="space-y-4 mb-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="What's this regarding?"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 text-white h-10 px-4 py-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Toaster />
    </ClientPageWrapper>
  )
}
