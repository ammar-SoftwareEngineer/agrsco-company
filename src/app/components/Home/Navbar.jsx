"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/images/logo.jpeg";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // تحديد القسم النشط
      const sections = ["home", "about", "services", "download", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "الرئيسية" },
    { id: "about", label: "من نحن" },
    { id: "services", label: "الخدمات" },
    { id: "contact", label: "تواصل معنا" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      }`}
    >
      {/* شريط المعلومات العلوي */}
      <div
        className={`bg-green-600 text-white py-2 transition-all duration-500 ${
          isScrolled ? "hidden h-0 overflow-hidden" : "opacity-100"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <i className="fas fa-phone text-sm"></i>
                <a href="tel:+966501234567" className="hover:text-green-200 transition-colors">
                  +966 50 123 4567
                </a>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-envelope text-sm"></i>
                <a href="mailto:info@agrsco.com" className="hover:text-green-200 transition-colors">
                  info@agrsco.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-green-200 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-green-200 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-green-200 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* النافبار الرئيسي */}
      <div className="bg-white backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            
            {/* اللوجو */}
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <Image
                  src={logo}
                  alt="أجريسكو"
                  width={isScrolled ? 90 : 90}
                  height={isScrolled ? 90 : 90}
                  className=""
                />
               
              </div>
            </Link>

            {/* القائمة الرئيسية - ديسكتوب */}
            <div className="hidden lg:flex items-center">
              <ul className="flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                        activeSection === item.id
                          ? "bg-green-600 text-white shadow-md"
                          : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                      }`}
                    >
                      <span className="text-sm">{item.icon}</span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* زر التحميل - ديسكتوب */}
            <div className="hidden lg:flex items-center">
              <a
                href="#download"
                className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
              >
                <i className="fas fa-download text-sm"></i>
                <span>تحميل التطبيق</span>
              </a>
            </div>

            {/* زر القائمة - موبايل */}
            <button
              className="lg:hidden p-3 rounded-xl cursor-pointer hover:bg-gray-200 transition-colors duration-300"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-xl text-gray-700`}></i>
            </button>
          </nav>
        </div>
      </div>

      {/* القائمة الجانبية - موبايل */}
      <div
        className={`fixed inset-y-0 right-0 w-80 !bg-white h-screen shadow-2xl z-50 transform transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full ">
          {/* رأس القائمة */}
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <Image
                src={logo}
                alt="أجريسكو"
                width={60}
                height={60}
                className="rounded-xl"
              />
            </Link>
            <button 
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <i className="fas fa-times text-xl text-gray-600"></i>
            </button>
          </div>

          {/* عناصر القائمة */}
          <div className="flex-1 p-6">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-3 p-4 rounded-xl font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-green-600 text-white"
                        : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* زر التحميل */}
            <div className="mt-8">
              <a
                href="#download"
                onClick={() => setMenuOpen(false)}
                className="w-full bg-green-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <i className="fas fa-download"></i>
                <span>تحميل التطبيق</span>
              </a>
            </div>
          </div>

          {/* معلومات التواصل */}
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-green-600">
                <i className="fas fa-phone text-lg"></i>
                <div>
                  <div className="font-semibold text-sm">الهاتف</div>
                  <a href="tel:+966501234567" className="text-sm hover:text-green-700">
                    +966 50 123 4567
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-green-600">
                <i className="fas fa-envelope text-lg"></i>
                <div>
                  <div className="font-semibold text-sm">البريد الإلكتروني</div>
                  <a href="mailto:info@agrsco.com" className="text-sm hover:text-green-700">
                    info@agrsco.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-green-600">
                <i className="fas fa-map-marker-alt text-lg"></i>
                <div>
                  <div className="font-semibold text-sm">العنوان</div>
                  <span className="text-sm">الرياض، المملكة العربية السعودية</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay للقائمة */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}
