"use client";
import Image from "next/image";
import { useState } from "react";
import services1 from "@/app/images/services1.jpg";
import services2 from "@/app/images/services2.jpg";
import services3 from "@/app/images/services3.webp";
import services4 from "@/app/images/services4.jpg";
import services5 from "@/app/images/services5.jpeg";
import services6 from "@/app/images/services6.jpg";
import services7 from "@/app/images/services7.png";
import services8 from "@/app/images/services8.png";
import services9 from "@/app/images/services9.jpg";
import services10 from "@/app/images/services10.jpg";

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  
  const servicesList = [
    {
      id: 1,
      image: services1,
      header: "الشركات الزراعية",
      description: "دليل شامل للشركات مصنفة حسب النشاط والموقع الجغرافي.",
    },
    {
      id: 2,
      image: services2,
      header: "الاستشاريون والبيطريون",
      description: "ملفات مهنية شاملة للمهندسين الزراعيين والدكاترة البيطريين.",
    },
    {
      id: 3,
      image: services3,
      header: "الوظائف والتوظيف",
      description: "فرص عمل زراعية وبيطرية مع إمكانية التقديم مباشرة.",
    },
    {
      id: 4,
      image: services4,
      header: "المشاتل",
      description:
        "قاعدة بيانات مشاتل متنوعة تشمل نباتات الزينة والفاكهة والطبية.",
    },
    {
      id: 5,
      image: services5,
      header: "التجار والمحلات",
      description: "عرض لتجار الخضروات والفواكه والماشية والأدوات الزراعية.",
    },
    {
      id: 6,
      image: services6,
      header: "المقالات التعليمية",
      description:
        "محتوى علمي لنشر المعرفة الزراعية والوقاية النباتية والابتكار.",
    },
    {
      id: 7,
      image: services7,
      header: "دراسات الجدوى",
      description: "نماذج جاهزة مع إمكانية طلب دراسة جدوى مخصصة.",
    },
    {
      id: 8,
      image: services8,
      header: "الكورسات والتدريبات",
      description: "دورات تدريبية أونلاين وحضوري مع تفاصيل شاملة عن كل دورة.",
    },
    {
      id: 9,
      image: services9,
      header: "الإعلانات والاشتراكات",
      description: "باقات اشتراك وخطط دعائية متميزة لزيادة ظهورك على المنصة.",
    },
    {
      id: 10,
      image: services10,
      header: "التبرع والمساعدة",
      description:
        "دعم طلاب الزراعة والمزارعين المحتاجين، وزراعة الأشجار كصدقة جارية.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-white" id="services">
      <div className="container mx-auto px-4">
        
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16" data-aos="fade-down">
          <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🚀 خدماتنا
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            خدمات
            <span className="text-green-600 block">شاملة</span>
            ومتطورة
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            أجريسكو منصة شاملة تخدم جميع عناصر المجال الزراعي من خلال تقديم
            خدمات تعليمية، استشارية، إعلانية، ووظيفية عبر أقسام متكاملة.
          </p>
        </div>

        {/* شبكة الكروت */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" data-aos="fade-up">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="group rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out relative overflow-hidden cursor-pointer transform hover:-translate-y-2"
            >
              {/* صورة الخدمة */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={service?.image}
                  alt={service?.header}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  priority
                />
                {/* Overlay محسن */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 ease-in-out group-hover:opacity-90"></div>
                
                {/* تأثير إضافي */}
                <div className="absolute inset-0 bg-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* المحتوى */}
              <div className="absolute inset-0 flex flex-col justify-end items-center p-6 text-white">
                <div className="text-center transform transition-all duration-500 ease-in-out group-hover:scale-105">
                  <h3 className="text-xl font-bold mb-3 transition-all duration-300 ease-in-out group-hover:text-2xl group-hover:mb-4">
                    {service?.header}
                  </h3>
                  <p className="text-gray-200 text-sm transition-all duration-300 ease-in-out group-hover:text-base opacity-90 group-hover:opacity-100 leading-relaxed">
                    {service?.description}
                  </p>
                </div>
              </div>

              {/* تأثير إضافي في الزوايا */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-green-400 opacity-0 group-hover:opacity-100 group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>
              <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-green-400 opacity-0 group-hover:opacity-100 group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0 border-b-2 border-l-2 border-green-400 opacity-0 group-hover:opacity-100 group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-green-400 opacity-0 group-hover:opacity-100 group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* إحصائيات سريعة */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8" data-aos="fade-up">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
            <div className="text-gray-600">خدمة متاحة</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
            <div className="text-gray-600">مستخدم نشط</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-600">دعم متواصل</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-600">رضا العملاء</div>
          </div>
        </div>
      </div>
    </section>
  );
}
