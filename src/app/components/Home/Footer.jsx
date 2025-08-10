import Link from 'next/link';
import Image from 'next/image';
import logo from '@/app/images/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "الرئيسية", href: "#home", icon: "🏠" },
    { name: "من نحن", href: "#about", icon: "👥" },
    { name: "الخدمات", href: "#services", icon: "🚀" },
    { name: "تحميل التطبيق", href: "#download", icon: "📱" },
    { name: "تواصل معنا", href: "#contact", icon: "📞" },
  ];

  const services = [
    { name: "الشركات الزراعية", icon: "🏢" },
    { name: "الاستشاريون والبيطريون", icon: "👨‍🌾" },
    { name: "الوظائف والتوظيف", icon: "💼" },
    { name: "المشاتل", icon: "🌱" },
    { name: "دراسات الجدوى", icon: "📊" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: "fab fa-facebook-f", href: "#", color: "hover:text-blue-400" },
    { name: "Instagram", icon: "fab fa-instagram", href: "#", color: "hover:text-pink-400" },
    { name: "Twitter", icon: "fab fa-twitter", href: "#", color: "hover:text-blue-300" },
    { name: "LinkedIn", icon: "fab fa-linkedin-in", href: "#", color: "hover:text-blue-600" },
    { name: "WhatsApp", icon: "fab fa-whatsapp", href: "#", color: "hover:text-green-400" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-green-700 to-green-800 text-white">
      {/* خلفية متدرجة */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* العنصر العلوي */}
      <div className="relative z-10">
        {/* شريط أخضر علوي */}
        <div className="bg-green-600 py-3">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <i className="fas fa-phone text-green-200"></i>
                  <span className="text-sm">+966 50 123 4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-envelope text-green-200"></i>
                  <span className="text-sm">info@agrsco.com</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-green-200">تابعنا على:</span>
                <div className="flex gap-3">
                  {socialLinks.slice(0, 3).map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`text-green-200 ${social.color} transition-colors duration-300`}
                      title={social.name}
                    >
                      <i className={`${social.icon} text-lg`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* المحتوى الرئيسي */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* اللوجو والوصف */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Link href="/" className="inline-block">
                  <div className="relative">
                    <Image 
                      src={logo} 
                      alt="أجريسكو" 
                      width={120} 
                      height={120} 
                      className="rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-green-600/20 rounded-2xl"></div>
                  </div>
                </Link>
              </div>
              <h3 className="text-xl font-bold mb-4">أجريسكو</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                منصة زراعية عربية شاملة تجمع كل عناصر المجال الزراعي في مكان واحد، 
                تقدم خدمات تعليمية، استشارية، إعلانية، ووظيفية.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110`}
                    title={social.name}
                  >
                    <i className={`${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* الروابط السريعة */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <i className="fas fa-link text-green-400"></i>
                روابط سريعة
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                    >
                      <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                        {link.icon}
                      </span>
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* الخدمات */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <i className="fas fa-cogs text-green-400"></i>
                خدماتنا
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <div className="flex items-center gap-3 text-gray-300">
                      <span className="text-lg">{service.icon}</span>
                      <span>{service.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* معلومات التواصل */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <i className="fas fa-address-card text-green-400"></i>
                تواصل معنا
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">العنوان</h4>
                    <p className="text-gray-300 text-sm">الرياض، المملكة العربية السعودية</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">الهاتف</h4>
                    <a href="tel:+966501234567" className="text-gray-300 text-sm hover:text-white transition-colors">
                      +966 50 123 4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">البريد الإلكتروني</h4>
                    <a href="mailto:info@agrsco.com" className="text-gray-300 text-sm hover:text-white transition-colors">
                      info@agrsco.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* الشريط السفلي */}
        <div className="border-t border-green-600/50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-300 text-sm">
                جميع الحقوق محفوظة &copy; {currentYear} أجريسكو. جميع الحقوق محفوظة.
              </div>
              <div className="flex items-center gap-6 text-sm">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">سياسة الخصوصية</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">شروط الاستخدام</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">خريطة الموقع</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 