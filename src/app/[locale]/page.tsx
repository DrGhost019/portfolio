import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { About } from "@/components/sections/about";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Hero
        status={dict.hero.status}
        headline={dict.hero.headline}
        subheadline={dict.hero.subheadline}
        cta1={dict.hero.cta1}
        cta2={dict.hero.cta2}
        cta3={dict.hero.cta3}
      />

      <Projects dict={dict} />
      <Skills dict={dict} />
      <Experience dict={dict} />
      <About dict={dict} />
      <Certifications dict={dict} />
      <Contact dict={dict} />
    </main>
  );
}