import { Hero } from "@/components/Home/hero";
import { SkillsGrid } from "@/components/Home/skills-grid";
import { Projects } from "@/components/Home/projects";

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tolu Shekoni - Portfolio',
  description: 'Portfolio of Tolu Shekoni - Developer, Data Scientist, Engineer, and Continuous Improvement Specialist',
  keywords: 'portfolio, personal website, tolu shekoni, data science, engineering, developer, continuous improvement',
  openGraph: {
    title: 'Tolu Shekoni - Portfolio',
    description: 'Portfolio of Tolu Shekoni - Developer, Data Scientist, Engineer, and Continuous Improvement Specialist',
    images: [{
      url: 'https://i.postimg.cc/Fs9QgCwR/image.png',
      width: 1200,
      height: 630,
      alt: 'Tolu Shekoni Portfolio',
    }],
  },
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Projects />
      <SkillsGrid />
    </main>
  );
}
