// src/app/stadiums/page.tsx
import Card from '@/components/Card';
import { MLB_STADIUMS } from '@/constants';

export default function StadiumPage() {
  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">MLB Stadiums</h1>

      {MLB_STADIUMS.map((stadium) => (
        <Card key={stadium.name} title={stadium.name}>
          Home of the {stadium.team} in {stadium.city}
        </Card>
      ))}
    </main>
  );
}