"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { SectionLabel } from "@/components/common/section-label"
import { LocationIcon, BriefcaseIcon } from "@/components/common/icons"
import { useTheme } from "@/components/providers/theme-provider"
import type { Dictionary } from "@/lib/i18n/dictionaries"
import { cn } from "@/lib/utils"

// Zod Schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormValues = z.infer<typeof contactSchema>

interface ContactProps {
  dict: Dictionary
}

export function Contact({ dict }: ContactProps) {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    try {
      // Send data to our Next.js API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Server responded with error:', errorData);
        throw new Error('Failed to send message to server');
      }

      toast.success(dict.contact.toast.success);
      reset(); // Clear the form
      
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast.error(dict.contact.toast.error);
    }
  }

    const { theme } = useTheme()
  
  // Determine if it's dark mode to pick the correct Eitaa logo
  const isDark = theme === 'dark' || (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches)
  const eitaaSrc = isDark ? '/assets/eitaa-light.svg' : '/assets/eitaa-dark.svg'
  const baleSrc = isDark ? '/assets/bale-light.svg' : '/assets/bale-dark.svg' // Add this line
  
  return (
    <section id="contact" className="py-24 md:py-32 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center md:text-start">
          <SectionLabel label={dict.contact.label} />
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
            {dict.contact.title}
          </h2>
          <p className="text-text-secondary max-w-2xl text-lg">
            {dict.contact.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-3">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-primary">
                    {dict.contact.form.name} <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    placeholder={dict.contact.form.namePlaceholder}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all",
                      errors.name && "border-error focus:ring-error/50 focus:border-error"
                    )}
                  />
                  {errors.name && <p className="text-xs text-error">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-primary">
                    {dict.contact.form.email} <span className="text-error">*</span>
                  </label>
                  <input
                    type="email"
                    dir="ltr"
                    {...register("email")}
                    placeholder={dict.contact.form.emailPlaceholder}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all",
                      errors.email && "border-error focus:ring-error/50 focus:border-error"
                    )}
                  />
                  {errors.email && <p className="text-xs text-error">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-text-primary">
                  {dict.contact.form.subject}
                </label>
                <input
                  type="text"
                  {...register("subject")}
                  placeholder={dict.contact.form.subjectPlaceholder}
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-text-primary">
                  {dict.contact.form.message} <span className="text-error">*</span>
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder={dict.contact.form.messagePlaceholder}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none",
                    errors.message && "border-error focus:ring-error/50 focus:border-error"
                  )}
                />
                {errors.message && <p className="text-xs text-error">{errors.message.message}</p>}
              </div>

               <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 px-8 py-3 bg-[var(--color-accent)] text-[var(--color-background)] border border-white/30 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 shadow-[0_0_10px_color-mix(in_srgb,var(--color-accent)_20%,transparent)] hover:shadow-[0_0_25px_color-mix(in_srgb,var(--color-accent)_50%,transparent)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[0_0_10px_color-mix(in_srgb,var(--color-accent)_20%,transparent)]"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                ) : (
                  dict.contact.form.submit
                )}
              </button>
            </motion.form>
          </div>

          {/* Right Column: Contact Info & Socials */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Direct Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl border border-border bg-surface/50"
            >
              <h3 className="text-lg font-bold text-primary mb-6">{dict.contact.info.title}</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-primary"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Email</p>
                    <Link href="mailto:moienkashefi.19@gmail.com" className="text-sm font-medium text-primary hover:text-accent transition-colors block" dir="ltr">moienkashefi.19@gmail.com</Link>
                    <Link href="mailto:moeinkashefinejad@gmail.com" className="text-sm font-medium text-primary hover:text-accent transition-colors block mt-1" dir="ltr">moeinkashefinejad@gmail.com</Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-primary"><LocationIcon className="w-5 h-5" /></div>
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Location</p>
                    <p className="text-sm font-medium text-text-primary">{dict.contact.info.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-success"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Status</p>
                    <p className="text-sm font-medium text-success">{dict.contact.info.status}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl border border-border bg-surface/50"
            >
              <h3 className="text-lg font-bold text-primary mb-6">{dict.contact.social.title}</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: dict.contact.social.github, url: 'https://github.com/DrGhost019', icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> },
                  { name: dict.contact.social.linkedin, url: 'https://www.linkedin.com/in/mohammad-moien-kashefi-nejad-280b742a0/', icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                  { name: dict.contact.social.telegram, url: 'https://t.me/DrGhost019', icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/></svg> },
                  { name: dict.contact.social.eitaa, url: 'https://eitaa.com/DrGhost019', icon: <img src={eitaaSrc} alt="Eitaa" className="w-4 h-4" /> },
                  { name: dict.contact.social.bale, url: 'https://ble.ir/DrGhost019', icon: <img src={baleSrc} alt="Bale" className="w-4 h-4" /> },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-background text-text-secondary hover:text-primary hover:border-primary hover:-translate-y-0.5 transition-all text-sm font-medium"
                  >
                    {social.icon}
                    {social.name}
                  </Link>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}