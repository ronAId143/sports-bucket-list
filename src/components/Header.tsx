import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-900 text-white py-4 px-6 shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">
          <Link href="/">Sports Bucket List</Link>
        </h1>
        {/* Temporarily hiding nav links until they're ready */}
        
        <nav className="space-x-4">
          <Link href="/signup" className="hover:underline">Sign Up</Link>
  {/*          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
  */}
          </nav>
        
      </div>
    </header>
  );
}