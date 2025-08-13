"use client"
import Image from "next/image";
import aboutImg from "@/app/images/about.jpeg";

export default function AboutSection() {


  const stats = [
    { number: "10+", label: "سنوات خبرة", icon: "⏰" },
    { number: "100+", label: "عميل سعيد", icon: "😊" },
    { number: "50+", label: "دراسة جدوى", icon: "📈" },
    { number: "1000+", label: "مشروع ناجح", icon: "🎯" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-white" id="about">
      <div className="container mx-auto px-4">
        
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16" data-aos="fade-down">
          <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🌟 من نحن
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            منصة
            <span className="text-green-600 block">أجريسكو</span>
            الزراعية
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            منصة زراعية عربية شاملة، أُنشئت لخدمة القطاع الزراعي في الوطن العربي 
            من خلال تجميع كل عناصره في مكان واحد
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* الصورة */}
          <div className="relative" data-aos="fade-right">
            <div className="relative z-10">
              <Image
                src={aboutImg}
                alt="عن الشركة"
                className="rounded-3xl w-full h-[600px] object-cover shadow-2xl"
              />
            </div>
            {/* العناصر المتحركة */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-400 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-green-300 rounded-full opacity-30 animate-pulse"></div>
          </div>

          {/* المحتوى */}
          <div className="space-y-8" data-aos="fade-left">
            
            {/* الوصف */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                رؤيتنا ورسالتنا
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                رؤيتنا هي خلق مجتمع زراعي متكامل ومترابط، يدعم التبادل، التعلم، 
                والتطوير في مجالات الزراعة والإنتاج الحيواني. نسعى لتقديم حلول 
                شاملة تجمع بين التكنولوجيا الحديثة والخبرة الزراعية التقليدية.
              </p>
            </div>


          
  
            
          </div>
        </div>
      </div>
    </section>
  );
}
