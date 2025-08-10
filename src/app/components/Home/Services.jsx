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
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4 w-full">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-24" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            خدماتنا
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            أجريسكو منصة شاملة تخدم جميع عناصر المجال الزراعي من خلال تقديم
            خدمات تعليمية، استشارية، إعلانية، ووظيفية عبر أقسام متكاملة.
          </p>
        </div>

                {/* شبكة الكروت */}
        <div
          className="grid grid-cols-12 gap-10"
          data-aos="fade-up"
        >
          {servicesList.slice(0, showAll ? servicesList.length : 4).map((service) => (
            <div
              key={service.id}
              className="xl:col-span-3 sm:col-span-6 col-span-12 group rounded-2xl   transition-all duration-500 ease-in-out relative  text-center hover:scale-105 cursor-pointer"
            >
              {/* صورة الخدمة */}
              <div className="relative overflow-hidden rounded-2xl w-full">
                <Image
                  src={service?.image}
                  alt={service?.header}
                  className="w-full h-80 object-cover rounded-2xl transition-transform duration-700 ease-in-out group-hover:scale-110"
                  priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50 rounded-2xl transition-opacity duration-500 ease-in-out group-hover:opacity-70"></div>
              </div>

              <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-white transform transition-all duration-500 ease-in-out group-hover:scale-105">
                <h3 className="text-xl font-semibold mb-3 transition-all duration-300 ease-in-out group-hover:text-2xl group-hover:mb-4">
                  {service?.header}
                </h3>
                <p className="text-gray-200 text-base transition-all duration-300 ease-in-out group-hover:text-lg opacity-90 group-hover:opacity-100">
                  {service?.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* زر عرض المزيد */}
        {!showAll && servicesList.length > 4 && (
          <div className="text-center mt-12" data-aos="fade-up">
            <button
              onClick={() => setShowAll(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer"
            >
              عرض جميع الخدمات
            </button>
          </div>
        )}

        {/* زر إخفاء */}
        {showAll && (
          <div className="text-center mt-12" data-aos="fade-up">
            <button
              onClick={() => setShowAll(false)}
              className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer"
            >
              إخفاء الخدمات
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
