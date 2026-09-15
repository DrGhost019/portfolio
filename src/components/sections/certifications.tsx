"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { SectionLabel } from "@/components/common/section-label"
import { GraduationIcon, DocumentIcon } from "@/components/common/icons"
import type { Dictionary } from "@/lib/i18n/dictionaries"

interface CertificationsProps {
  dict: Dictionary
}

export function Certifications({ dict }: CertificationsProps) {
  return (
    <section id="certifications" className="py-24 md:py-32 px-4 md:px-8 bg-surface/30 border-y border-border">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center md:text-start">
          <SectionLabel label={dict.certifications.label} />
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
            {dict.certifications.title}
          </h2>
        </div>

        <div className="space-y-6">
          {/* Certificate Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 md:p-8 rounded-2xl border border-border bg-background hover:border-primary/50 transition-colors"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white flex-shrink-0">
              <GraduationIcon className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-primary mb-2">{dict.certifications.cert.title}</h3>
              <p className="text-sm text-text-secondary mb-3">
                {dict.certifications.cert.issuer} • {dict.certifications.cert.date}
              </p>
              <Link
                href={dict.certifications.cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors group"
              >
                {dict.certifications.cert.verifyText}
                {/* Arrow: No movement, turns blue on hover */}
                <svg className="w-4 h-4 text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 11L11 3M11 3H5M11 3v6" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Resume Download Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8 rounded-2xl border border-border bg-background hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white flex-shrink-0">
                <DocumentIcon className="w-7 h-7" />
              </div>
              <p className="text-text-secondary max-w-md">{dict.certifications.resume.description}</p>
            </div>
            <Link
              href={dict.certifications.resume.fileUrl}
              download
              className="flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[var(--color-background)] border border-white/30 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 flex-shrink-0 shadow-[0_0_10px_color-mix(in_srgb,var(--color-accent)_20%,transparent)] hover:shadow-[0_0_25px_color-mix(in_srgb,var(--color-accent)_50%,transparent)]"
            >
              <DocumentIcon className="w-4 h-4" />
              {dict.certifications.resume.buttonText}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}