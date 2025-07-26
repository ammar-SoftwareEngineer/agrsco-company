// Hero section with background video and overlay using Tailwind CSS
import React from 'react';
import Image from 'next/image';
import heroImg from '@/images/slider2.jpeg';
export default function Hero() {
  return (
    <section className="md:pt-6" >
      {/* Overlay */}
      <div className='container mx-auto md:px-4  relative overflow-hidden md:h-[calc(100vh-150px)] h-full' >
        <div className="relative w-full h-full md:rounded-4xl overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10 md:rounded-4xl " ></div>
          <Image src={heroImg} alt="Hero" className="w-full h-full md:object-cover object-contain object-center" />
        </div>
        {/* Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center  py-16">
          <div className="container mx-auto px-4">
            <div className="text-center text-white text-3xl md:text-4xl">
              <h2 className=" font-bold  mb-6 drop-shadow-lg">
                أهلاً بيك في أجريسكو
              </h2>
              <p className='md:leading-14 leading-10 text-lg md:text-3xl'>منصتك الزراعية الأولى اللي بتجمع كل عناصر المجال الزراعي في مكان واحد!</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
} 