import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to Stickman Animations</h2>
        <p className="text-muted-foreground">More content coming soon...</p>
      </div>
    </main>
  );
}
