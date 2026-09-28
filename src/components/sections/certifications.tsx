'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SectionLabel } from '@/components/common/section-label';
import { GraduationIcon, DocumentIcon } from '@/components/common/icons';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface CertificationsProps {
  dict: Dictionary;
}

export function Certifications({ dict }: CertificationsProps) {
  return (
    <section
      id="certifications"
      className="bg-surface/30 border-border border-y px-4 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center md:text-start">
          <SectionLabel label={dict.certifications.label} />
          <h2 className="text-primary mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            {dict.certifications.title}
          </h2>
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-border bg-background hover:border-primary/50 flex flex-col items-start gap-6 rounded-2xl border p-6 transition-colors md:flex-row md:items-center md:p-8"
          >
            <div className="from-primary to-accent flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white">
              <GraduationIcon className="h-7 w-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-primary mb-2 text-xl font-bold">
                {dict.certifications.cert.title}
              </h3>
              <p className="text-text-secondary mb-3 text-sm">
                {dict.certifications.cert.issuer} • {dict.certifications.cert.date}
              </p>
              <Link
                href={dict.certifications.cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent)]"
              >
                {dict.certifications.cert.verifyText}
                <svg
                  className="h-4 w-4 text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-accent)]"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 11L11 3M11 3H5M11 3v6" />
                </svg>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border-border bg-background hover:border-primary/50 flex flex-col items-center justify-between gap-6 rounded-2xl border p-6 transition-colors md:flex-row md:p-8"
          >
            <div className="flex items-center gap-5">
              <div className="from-primary to-accent flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white">
                <DocumentIcon className="h-7 w-7" />
              </div>
              <p className="text-text-secondary max-w-md">
                {dict.certifications.resume.description}
              </p>
            </div>
            <Link
              href={dict.certifications.resume.fileUrl}
              download
              className="flex flex-shrink-0 items-center gap-2 rounded-lg border border-white/30 bg-[var(--color-accent)] px-6 py-3 font-medium text-[var(--color-background)] shadow-[0_0_10px_color-mix(in_srgb,var(--color-accent)_20%,transparent)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_color-mix(in_srgb,var(--color-accent)_50%,transparent)]"
            >
              <DocumentIcon className="h-4 w-4" />
              {dict.certifications.resume.buttonText}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
