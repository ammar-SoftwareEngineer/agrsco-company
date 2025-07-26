// Hero section with background video and overlay using Tailwind CSS
import React from 'react';
import Image from 'next/image';
import heroImg from '@/images/slider1.webp';
export default function Hero() {
  return (
    <section className="pt-6" >
      {/* Overlay */}
      <div className='container md:mx-auto md:px-4  relative overflow-hidden' style={{ height: 'calc(100vh - 150px)' }}>
        <div className="relative w-full h-full md:rounded-4xl overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10 md:rounded-4xl" />
          <Image src={heroImg} alt="Hero" className="w-full h-full object-cover" />
        </div>
        {/* Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center  py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
                أهلاً بيك في أجريسكو
                <br />
                <br />
                 منصتك الزراعية الأولى اللي بتجمع كل عناصر المجال الزراعي في مكان واحد!

              </h2>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
} 