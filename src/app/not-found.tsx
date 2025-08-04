// src/app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-4xl font-bold mb-4">404 – Page Not Found</h1>
      <p className="mb-6 text-gray-600">Oops! We couldn’t find the page you were looking for.</p>
      <Link href="/" className="text-blue-500 underline hover:text-blue-700">
        Go back home
      </Link>
    </main>
  );
}