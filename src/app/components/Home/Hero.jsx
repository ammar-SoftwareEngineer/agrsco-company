"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import slider1 from "@/app/images/slider1.webp";
import slider2 from "@/app/images/slider2.jpeg";
import slider3 from "@/app/images/slider3.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "@/app/media.css";
export default function Hero() {
  // Hero slides data
  const heroSlides = [
    {
      id: 1,
      image: slider1,
      title: "أهلاً بيك في أجريسكو",
      description:
        "منصتك الزراعية الأولى اللي بتجمع كل عناصر المجال الزراعي في مكان واحد!",
    },
    {
      id: 2,
      image: slider2,
      title: "خدمات زراعية متكاملة",
      description: "نوفر لك كل ما تحتاجه في مجال الزراعة",
    },
    {
      id: 3,
      image: slider3,
      title: "شركاء موثوقون",
      description: "تعاون مع أفضل الشركات في المجال الزراعي",
    },
  ];

  return (
    <section className="md:pt-6" data-aos="fade-up" data-aos-duration="1000" id="home">
      <div className="container mx-auto md:px-0 relative overflow-hidden md:h-[calc(100vh-210px)] h-screen">
        <div
          className="relative w-full h-full md:rounded-2xl overflow-hidden"

        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              el: ".swiper-pagination-bullet",
              clickable: true,
            }}
            className="w-full h-full"
          >
            {heroSlides.map((slide, index) => (
              <SwiperSlide key={slide.id}>
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-black/40 z-10 md:rounded-2xl"></div>
                  <Image
                    src={slide.image}
                    alt={slide.title}
                  
                    className="w-full h-full md:object-cover object-contain object-center"
                    priority
                  />
                  {/* Content */}
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center py-16">
                    <div className="container mx-auto px-4">
                      <div className="text-center text-white text-3xl md:text-2xl">
                        <h2
                          className="font-bold mb-6 drop-shadow-lg"
                          data-aos="fade-down"
                          data-aos-delay={`${(index + 1) * 200}`}
                          data-aos-duration="800"
                        >
                          {slide.title}
                        </h2>
                        <p
                          className="md:leading-14 leading-10 text-lg md:text-3xl"
                          data-aos="fade-up"
                          data-aos-delay={`${(index + 1) * 400}`}
                          data-aos-duration="800"
                        >
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Navigation Buttons */}
            <div
              className="swiper-button-prev text-white !hidden md:!flex"
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="800"
            ></div>
            <div
              className="swiper-button-next text-white !hidden md:!flex"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-duration="800"
            ></div>

            {/* Pagination */}
            <div className="swiper-pagination-bullet "></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
