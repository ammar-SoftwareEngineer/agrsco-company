// فوتر احترافي بتصميم Tailwind CSS
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/images/logo.png';

export default function Footer() {
  return (
    <footer className=" px-6  ">
      <div className=' bg-green-600 rounded-t-2xl text-white md:pb-2 px-4'>


      <div className="container mx-auto   py-10">
        <div className="grid grid-cols-12 md:gap-10 gap-4 pb-8 border-b border-green-800">
          {/* Logo & About */}
          <div className="col-span-12 md:col-span-4">
            <Link href="/" className=" block  col-span-12 md:col-span-6">
              <Image src={logo} alt="شعار الموقع" width={180} height={180} className="rounded-xl md:mx-0 mx-auto" />
            </Link>
            <p className="text-gray-100 text-center md:text-right col-span-12 md:col-span-6">
              نحن شركة متخصصة في الاستشارات الزراعية وبيع الكتب ودراسات الجدوى، نهدف لدعم عملائنا بأفضل الحلول والخبرات.
     
            </p>
          </div>
          {/* Quick Links */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-2">
            <h3 className="text-lg font-bold mb-3 text-white">روابط سريعة</h3>
            <Link href="/about" className="hover:text-green-300">من نحن</Link>
            <Link href="/consultations" className="hover:text-green-300">الاستشارات</Link>
            <Link href="/store" className="hover:text-green-300">المتجر</Link>
            <Link href="/articles" className="hover:text-green-300">المقالات</Link>
            <Link href="/contact" className="hover:text-green-300">تواصل معنا</Link>
          </div>
          {/* Contact & Social */}
          <div className="col-span-12 md:col-span-4">
            <h3 className="text-lg font-bold mb-3 text-white">تواصل معنا</h3>
            <div className="text-gray-200 flex flex-col gap-1 text-sm">
              <span><i className="fa-solid fa-location-dot ml-1" /> الرياض، المملكة العربية السعودية</span>
              <span><i className="fa-solid fa-phone ml-1" /> 0500000000</span>
              <span><i className="fa-solid fa-envelope ml-1" /> info@agrsco.com</span>
            </div>
            <div className="col-span-12 md:col-span-4 flex gap-3 mt-3">
              <a href="#" className="hover:text-green-300 text-xl"><i className="fab fa-facebook-f" /></a>
              <a href="#" className="hover:text-green-300 text-xl"><i className="fab fa-instagram" /></a>
              <a href="#" className="hover:text-green-300 text-xl"><i className="fab fa-linkedin-in" /></a>
              <a href="#" className="hover:text-green-300 text-xl"><i className="fab fa-whatsapp" /></a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-300 pt-6 text-sm">
          جميع الحقوق محفوظة &copy; {new Date().getFullYear()} استشارات زراعية
        </div>
      </div>
      </div>
    </footer>
  );
} 