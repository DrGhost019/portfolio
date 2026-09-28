'use client';

import { usePathname, useParams } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function LanguageToggle({ className }: { className?: string }) {
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;

  const newLocale = currentLocale === 'en' ? 'fa' : 'en';

  const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`);

  return (
    <Link
      href={newPathname}
      className={cn(
        'border-border text-text-secondary hover:text-primary hover:border-primary flex h-10 w-10 items-center justify-center rounded-lg border transition-colors',
        className
      )}
      aria-label={`Switch to ${newLocale === 'en' ? 'English' : 'Persian'}`}
    >
      <span className="font-en text-sm font-semibold">{newLocale === 'en' ? 'EN' : 'FA'}</span>
    </Link>
  );
}
