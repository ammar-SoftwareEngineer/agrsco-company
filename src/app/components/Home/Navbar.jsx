// ناف بار متجاوب مع قوائم منسدلة باستخدام Tailwind وNext.js
"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/images/logo.jpeg";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  console.log(pathname);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 70);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={` md:px-6 transition-all duration-500 ease-in-out ${
        isScrolled ? "fixed w-full top-0 z-50 " : ""
      }`}
    >
      <div className="bg-white rounded-b-2xl p-3 md:p-4 shadow-sm ">
        {/* Contact Info - Desktop Only */}
        <div
          className={`container  mx-auto !hidden 2xl:!flex justify-between items-center w-full mb-6 ${
            isScrolled ? "!hidden" : "!flex"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 border-l-2 border-white pl-3">
              <i className="fas fa-phone text-lg text-green-600"></i>
              <div>
                <a href="tel:01123456789" className="text-green-600">
                  {" "}
                  01123456789
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-envelope text-lg text-green-600"></i>
              <div>
                <a href="mailto:info@agrsco.com" className="text-green-600">
                  info@agrsco.com
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <a href="#" className="text-green-600">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" className="text-green-600">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" className="text-green-600">
              <i className="fab fa-whatsapp text-xl"></i>
            </a>
          </div>
        </div>
        <hr
          className={`my-4 text-green-200 !hidden md:!block ${
            isScrolled ? "!hidden" : "!block"
          }`}
        />
        {/* Main Navigation */}
        <nav className=" ">
          <div className="container rounded-2xl bg-white mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src={logo}
                  alt="Logo"
                  width={80}
                  height={80}
                  className="rounded"
                />
              </Link>
            </div>

            {/* Desktop Menu - Centered */}
            <div className="hidden 2xl:flex flex-1">
              <ul className="flex items-center gap-1 w-fit mx-auto rounded-2xl shadow">
                <li className="nav-item">
                  <a
                    href="#home"
                    className="nav-link active px-4 py-3 block text-gray-800 hover:text-green-600"
                  >
                    الرئيسية
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#about"
                    className="nav-link px-4 py-3 block text-gray-800 hover:text-green-600"
                  >
                    من نحن
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#services"
                    className="nav-link px-4 py-3 block text-gray-800 hover:text-green-600"
                  >
                    الخدمات
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#contact"
                    className="nav-link px-4 py-3 block text-gray-800 hover:text-green-600"
                  >
                       تواصل معنا
                  
                  </a>
                </li>
              </ul>
            </div>

            {/* Buttons - Right Side */}
            <div className="hidden 2xl:flex items-center gap-3 flex-shrink-0">
              <a
                href="#download"
                className="btn-lang px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 cursor-pointer" 
              >
               تحميل
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="2xl:hidden flex items-center border-0 shadow-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i className="fa-solid fa-bars text-xl text-gray-600"></i>
            </button>

            {/* Mobile Menu */}
            <div
              className={`fixed inset-y-0 right-0 w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 2xl:hidden ${
                menuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex justify-between items-center p-4 border-b">
                <Link href="/" className="w-full">
                  <Image
                    src={logo}
                    alt="Logo"
                    width={100}
                    height={100}
                    className="rounded"
                  />
                </Link>
                <button onClick={() => setMenuOpen(false)} className="text-2xl">
                  ×
                </button>
              </div>
              <div className="p-4">
                <ul className="flex flex-col gap-2 rounded-2xl shadow-sm p-3">
                  <li>
                    <a
                      href="#home"
                      className="nav-link active px-4 py-3 block text-gray-800 hover:text-green-600"
                      onClick={() => setMenuOpen(false)}
                    >
                      الرئيسية
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="nav-link px-4 py-3 block text-gray-800 hover:text-green-600"
                      onClick={() => setMenuOpen(false)}
                    >
                      من نحن
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="nav-link px-4 py-3 block text-gray-800 hover:text-green-600"
                      onClick={() => setMenuOpen(false)}
                    >
                      الخدمات
                    </a>
                  </li>
                  <li>
                  <Link
                   href="#contact"
                      className="nav-link px-4 py-3 block text-gray-800 hover:text-green-600"
                      onClick={() => setMenuOpen(false)}
                    >
                         تواصل معنا
                    </Link>
                  </li>
                </ul>
                <ul className="flex flex-row gap-4 mt-5">
                  <li>
                    <a
                     href="#download"
                      className="btn-lang px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 cursor-pointer"
                      onClick={() => setMenuOpen(false)}
                    >
                         تحميل
                
                    </a>
                  </li>
                </ul>
                <ul className="list-none px-2 pt-5 rounded-4 mt-5">
                  <li className="mb-4 pb-2 border-b">
                    <div className="flex items-center gap-3 text-green-600">
                      <i className="fa-solid fa-envelope text-xl"></i>
                      <div>
                        <div className="font-bold mb-1">Email</div>
                        <a
                          href="mailto:info@agrsco.com"
                          className="text-decoration-none text-green-600 text-sm"
                        >
                          info@agrsco.com
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="mb-4 pb-2 border-b">
                    <div className="flex items-center gap-3 text-green-600">
                      <i className="fa-solid fa-phone-volume text-xl"></i>
                      <div>
                        <div className="font-bold mb-1">Mobile</div>
                        <a href="tel:01123456789" className="text-green-600">
                          01123456789
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-3 text-green-600">
                      <i className="fa-solid fa-globe text-lg"></i>
                      <div>
                        <div className="font-bold mb-1">Address</div>
                        <span className="text-sm block text-green-600">
                          العنوان هنا
                        </span>
                      </div>
                    </div>
                  </li>
                  <div className="flex items-center mt-5">
                    <a href="#" className="footer-social-icon mr-3">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="footer-social-icon mr-3">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="footer-social-icon">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
