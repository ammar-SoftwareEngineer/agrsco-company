"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import slider1 from "@/app/images/slider1.jpeg";
import slider2 from "@/app/images/slider2.jpeg";
import slider3 from "@/app/images/slider3.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Hero() {
  // Hero slides data
    const heroSlides = [
    {
      id: 1,
      image: slider1,
      title: "أهلاً بيك في أجريسكو",
      subtitle: "منصتك الزراعية الأولى",
      description: "منصة شاملة تجمع كل عناصر المجال الزراعي في مكان واحد، تقدم خدمات تعليمية، استشارية، إعلانية، ووظيفية",
      cta: "اكتشف خدماتنا",
    },
    {
      id: 2,
      image: slider2,
      title: "خدمات زراعية متكاملة",
      subtitle: "حلول شاملة للمزارعين",
      description: "نوفر لك كل ما تحتاجه في مجال الزراعة من استشارات وتدريب ومعدات وخدمات متخصصة",
      cta: "احصل على الاستشارة",
    },
    {
      id: 3,
      image: slider3,
      title: "شركاء موثوقون",
      subtitle: "تعاون مع الأفضل",
      description: "تعاون مع أفضل الشركات والمؤسسات في المجال الزراعي لضمان نجاح مشروعك",
      cta: "تواصل معنا",
    },
  ];

  return (
    <section className="relative w-full h-screen" id="home">
      {/* خلفية متدرجة */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-green-600/20 z-0"></div>
      
      <div className="relative w-full h-full">
        <div className="relative w-full h-full text-center">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class="${className} bg-white/50 hover:bg-white transition-all duration-300 w-3 h-3 mx-1"></span>`;
              },
            }}
            className="w-full h-full"
          >
            {heroSlides.map((slide, index) => (
              <SwiperSlide key={slide.id}>
                <div className="relative w-full h-full group">
                  {/* صورة الخلفية */}
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  
                  {/* Overlay متدرج */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"></div>
                  
                  {/* محتوى الشريحة */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="container mx-auto px-4 md:px-8">
                      <div className="text-center text-white max-w-4xl mx-auto">
                        
                        {/* النص */}
                        <div className="space-y-8" data-aos="fade-up" data-aos-delay={index * 200}>
                          {/* العنوان */}
                          <div className="space-y-6">
                            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                              {slide.title}
                            </h1>
                            <h2 className="text-2xl md:text-3xl text-green-400 font-semibold">
                              {slide.subtitle}
                            </h2>
                          </div>
                          
                          {/* الوصف */}
                          <p className="text-xl md:text-2xl leading-relaxed text-gray-200 max-w-3xl mx-auto">
                            {slide.description}
                          </p>
                          
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* أزرار التنقل */}
            <div className="swiper-button-prev !text-white !bg-white/20 !backdrop-blur-sm !w-12 !h-12 !rounded-full hover:!bg-white/30 transition-all duration-300 !hidden md:!flex"></div>
            <div className="swiper-button-next !text-white !bg-white/20 !backdrop-blur-sm !w-12 !h-12 !rounded-full hover:!bg-white/30 transition-all duration-300 !hidden md:!flex"></div>

            {/* الترقيم */}
            <div className="swiper-pagination !bottom-8"></div>
          </Swiper>
        </div>
      </div>
      
     
    </section>
  );
}
