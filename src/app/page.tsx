// app/page.tsx

import Card from "@/components/Card";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white px-4 py-6">
      <div className="max-w-6xl mx-auto">
        <Card fullWidth>
          <div className="px-4 py-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Sports Bucket List</h1>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Track your journey to every stadium, championship game, and historic sports event.
              Whether you&rsquo;re chasing all 30 MLB ballparks, the Super Bowl, or a dream trip to Augusta -
              this is your place to log it all.
            </p>
            <p className="text-sm text-gray-600 italic">
              We&rsquo;re gearing up for launch. Check back soon for the ultimate fan experience.
            </p>
          </div>
        </Card>
      </div>
    </main>
  );
}