"use client"
import Image from "next/image";
import aboutImg from "@/app/images/about.jpg";

export default function AboutSection() {
  const dataList = [
    {
      id: 1,
      icon: "🏢",
      text: "الشركات الزراعية المتخصصة في جميع المجالات",
    },
    {
      id: 2,
      icon: "👨‍🌾",
      text: "المهندسين الزراعيين والاستشاريين والدكاترة البيطريين",
    },
    {
      id: 3,
      icon: "🌱",
      text: "المشاتل بأنواعها وتخصصاتها المختلفة",
    },
    {
      id: 4,
      icon: "🛒",
      text: "التجار والمحلات في كل ما يخص الزراعة والإنتاج الحيواني",
    },
    {
      id: 5,
      icon: "💼",
      text: "فرص العمل والتوظيف داخل المجال الزراعي",
    },
    {
      id: 6,
      icon: "📊",
      text: "دراسات الجدوى للمشاريع الزراعية والحيوانية",
    },
    {
      id: 7,
      icon: "🎓",
      text: "الكورسات والتدريبات المهنية المتخصصة",
    },
    {
      id: 8,
      icon: "📝",
      text: "المقالات المتنوعة لنشر المعرفة والتجارب الزراعية",
    },
    {
      id: 9,
      icon: "📢",
      text: "خدمات الإعلانات والاشتراكات للمؤسسات والأفراد",
    },
    {
      id: 10,
      icon: "🤝",
      text: "مساحة للتبرع والمساعدة لدعم المبادرات الزراعية",
    },
  ];

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

            {/* الخدمات */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                خدماتنا الشاملة
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dataList.slice(0, 8).map((item) => (
                  <div 
                    key={item.id} 
                    className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <span className="text-gray-700 text-sm font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

  
            
          </div>
        </div>
      </div>
    </section>
  );
}
