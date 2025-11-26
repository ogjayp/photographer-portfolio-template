"use client"

import type React from "react"

import { useState } from "react"
import { Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { siteConfig } from "@/lib/site-config"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  // FormSubmit handles form submissions without backend setup
  // Submissions are sent directly to your email address
  // 
  // SETUP INSTRUCTIONS FOR PHOTOGRAPHERS:
  // 1. Update your email address in lib/site-config.ts (contact.email)
  // 2. On first form submission, FormSubmit will send a verification email
  // 3. Click the verification link in that email to activate the form
  // 4. That's it! The form will work automatically after verification
  //
  // FormSubmit is free to use!
  const formAction = `https://formsubmit.co/ajax/${siteConfig.contact.email}`

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Honeypot spam protection - bots will fill this hidden field
    const form = e.currentTarget as HTMLFormElement
    const honeypot = form.querySelector<HTMLInputElement>('input[name="website"]')
    if (honeypot?.value) {
      // Bot detected - silently fail
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const formData = new FormData(form)
      
      const response = await fetch(formAction, {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormState({ name: "", email: "", message: "" })
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-2">Contact</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6 text-balance">
              {siteConfig.contact.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">{siteConfig.contact.description}</p>

            {/* Email */}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-3 text-lg hover:text-muted-foreground transition-colors group"
            >
              <Mail className="w-5 h-5" />
              {siteConfig.contact.email}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Socials */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Follow along</p>
              <div className="flex flex-col gap-3">
                {siteConfig.contact.socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-muted-foreground transition-colors"
                  >
                    <span className="text-muted-foreground">{social.platform}</span>
                    <span className="mx-2">—</span>
                    {social.handle}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card p-8 lg:p-12 border border-border">
            <h3 className="font-serif text-xl mb-6">Send a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* FormSubmit configuration */}
              <input type="hidden" name="_subject" value={`New contact form submission from your website`} />
              <input type="hidden" name="_captcha" value="false" />
              
              {/* Honeypot field for spam protection - hidden from users but visible to bots */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                style={{ position: "absolute", left: "-9999px" }}
                aria-hidden="true"
              />
              
              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
                  <p className="text-sm text-green-800 dark:text-green-200">
                    Thank you for your message! I'll get back to you soon.
                  </p>
                </div>
              )}
              
              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                  <p className="text-sm text-red-800 dark:text-red-200">
                    Something went wrong. Please try again or email me directly at {siteConfig.contact.email}
                  </p>
                </div>
              )}
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-sm text-muted-foreground mb-2 block">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm text-muted-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                    className="bg-background"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-muted-foreground mb-2 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  className="bg-background resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting || submitStatus === "success"}>
                {isSubmitting ? "Sending..." : submitStatus === "success" ? "Message Sent!" : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
