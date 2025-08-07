import Hero from '@/app/components/Home/Hero';
import AboutSection from '@/app/components/Home/AboutSection';
import Services from '@/app/components/Home/Services';
export default function HomePage() {
  return (
    <div className='w-full'>
      <Hero />
      <AboutSection />
      <Services/>
    </ div>
  );
}