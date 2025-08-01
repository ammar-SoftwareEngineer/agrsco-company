"use client"
import Image from "next/image";
import aboutImg from "@/images/about.jpg"; // يمكنك تغيير الصورة لاحقاً

export default function AboutSection() {
  const dataList = [
    {
      id: 1,
      text: "الشركات الزراعية المتخصصة في جميع المجالات.",
    },
    {
      id: 2,
      text: "المهندسين الزراعيين والاستشاريين والدكاترة البيطريين لتقديم الدعم والخبرة.",
    },
    {
      id: 3,
      text: "المشاتل بأنواعها وتخصصاتها المختلفة.",
    },
    {
      id: 4,
      text: "التجار والمحلات في كل ما يخص الزراعة والإنتاج الحيواني.",
    },
    {
      id: 5,
      text: "فرص العمل والتوظيف داخل المجال الزراعي.",
    },
    {
      id: 6,
      text: "دراسات الجدوى للمشاريع الزراعية والحيوانية.",
    },
    {
      id: 7,
      text: "الكورسات والتدريبات المهنية المتخصصة.",
    },
    {
      id: 8,
      text: "المقالات المتنوعة لنشر المعرفة والتجارب الزراعية.",
    },
    {
      id: 9,
      text: "خدمات الإعلانات والاشتراكات للمؤسسات والأفراد والطلاب.",
    },
    {
      id: 10,
      text: "مساحة للتبرع والمساعدة لدعم المبادرات الزراعية والطلاب والمزارعين المحتاجين، وأيضًا لزراعة أشجار كصدقة جارية في مصر والوطن العربي.",
    },
  ];

  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4 w-full py-12">
        <div className="text-center mb-10" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">
            من نحن
          </h2>
        </div>
        <div className="grid grid-cols-12 md:gap-10 gap-6">
          <div className="md:col-span-6 col-span-12" data-aos="fade-right">
            <Image
              src={aboutImg}
              alt="عن الشركة"
              className="rounded-2xl w-full h-[700px] shadow-lg object-cover"
            />
          </div>
          <div className="md:col-span-6 col-span-12 flex gap-4 flex-col" data-aos="fade-left">
            <p className="text-gray-700 mb-6 md:w-10/12 w-full md:leading-12 md:text-lg leading-10 text-lg">
              أجريسكو هي منصة زراعية عربية شاملة، أُنشئت لخدمة القطاع الزراعي في
              الوطن العربي من خلال تجميع كل عناصره في مكان واحد. رؤيتنا هي خلق
              مجتمع زراعي متكامل ومترابط، يدعم التبادل، التعلم، والتطوير في
              مجالات الزراعة والإنتاج الحيواني.
            </p>
            <div>
              <ul>
                {dataList.map((data) => {
                  return (
                    <li key={data.id} className="flex items-start gap-4">
                      <i className="fas fa-check text-green-600 "></i>
                      <span className="mb-3 text-gray-600">
                      {data.text}
                      </span>
                  
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex md:justify-start justify-center flex-wrap gap-8 mt-10" data-aos="zoom-in">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">+10</div>
                <div className="text-gray-500">سنوات خبرة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">100+</div>
                <div className="text-gray-500">عميل سعيد</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50+</div>
                <div className="text-gray-500">دراسة جدوى</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
