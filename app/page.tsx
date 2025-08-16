import Hero from '@/components/Hero';
import FeaturedAnimations from '@/components/FeaturedAnimations';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedAnimations />
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">More Content Coming Soon</h2>
        <p className="text-muted-foreground">We're building amazing things for you...</p>
      </div>
    </main>
  );
}
