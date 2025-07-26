// سكشن تعريفي (About) بتصميم Tailwind CSS
import Image from 'next/image';
import aboutImg from '@/images/about.jpg'; // يمكنك تغيير الصورة لاحقاً

export default function AboutSection() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 w-full">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">من نحن</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            نحن شركة رائدة في تقديم الاستشارات الزراعية وبيع الكتب ودراسات الجدوى، نهدف إلى دعم المزارعين ورواد الأعمال بأحدث المعرفة والخبرات.
          </p>
        </div>
        <div className="grid grid-cols-12 md:gap-10 gap-6 items-center">
          <div className="md:col-span-6 col-span-12">
            <Image src={aboutImg} alt="عن الشركة" className="rounded-3xl w-full h-100 shadow-lg object-cover" />
          </div>
          <div className="md:col-span-6 col-span-12 ">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">رسالتنا</h3>
            <p className="text-gray-700 mb-6 w-10/12 leading-8">
              تقديم حلول واستشارات زراعية متكاملة، وتوفير مصادر معرفية موثوقة من خلال الكتب ودراسات الجدوى، لمساعدة عملائنا على تحقيق النجاح والاستدامة.
            </p>
            <div className="flex flex-wrap gap-8 mt-4">
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