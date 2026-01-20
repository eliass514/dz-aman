import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WaitlistForm from '@/components/WaitlistForm';
import Footer from '@/components/Footer';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  
  // Enable static rendering
  setRequestLocale(locale);
  
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <WaitlistForm />
      <Footer />
    </main>
  );
}
