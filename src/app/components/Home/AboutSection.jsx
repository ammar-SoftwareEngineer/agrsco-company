// سكشن تعريفي (About) بتصميم Tailwind CSS
import Image from 'next/image';
import aboutImg from '@/images/about.jpg'; // يمكنك تغيير الصورة لاحقاً

export default function AboutSection() {
  return (
<section className="py-16 ">
  <div className="container mx-auto px-4 w-full">
    <div className="text-center mb-10" data-aos="fade-down">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">من نحن</h2>
    </div>
    <div className="grid grid-cols-12 md:gap-10 gap-6">
      <div className="md:col-span-6 col-span-12" data-aos="fade-right">
        <Image src={aboutImg} alt="عن الشركة" className="rounded-3xl w-full h-[600px] shadow-lg object-cover" />
      </div>
      <div className="md:col-span-6 col-span-12" data-aos="fade-left">
        <p className="text-gray-700 mb-6 md:w-10/12 w-full md:leading-12 md:text-xl leading-10 text-lg">
          أول منصة عربية تجمع المجال الزراعي في الوطن العربي في مكان واحد .
          من شركات زراعية موثوقة في جميع التخصصات ، وأستشاريين ومهندسين زراعيين ودكاترة بيطريين ، لتسهل عليك بدء مشروعك وتوفير إحتيجاتك وإطلاعك علي شركات جديدة ومتنوعة .
        </p>
        <div className="flex flex-wrap gap-8 mt-10" data-aos="zoom-in">
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