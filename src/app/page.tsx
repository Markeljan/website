import Hero from '@/components/layout/Hero';
import { HomeComponent } from '@/components/layout/Home';

export default async function Home() {
  return (
    <main className='flex flex-col items-center justify-between'>
      <Hero />
      <HomeComponent />
    </main>
  );
}
