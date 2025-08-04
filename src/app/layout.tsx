import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Sports Fan Bucket List',
  description: 'Track your live stadium visits, events, and trophies!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="p-4 space-y-6 max-w-6xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}