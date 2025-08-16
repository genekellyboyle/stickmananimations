import Hero from '@/components/Hero';
import FeaturedAnimations from '@/components/FeaturedAnimations';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedAnimations />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}
