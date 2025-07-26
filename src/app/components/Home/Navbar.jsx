// ناف بار متجاوب مع قوائم منسدلة باستخدام Tailwind وNext.js
"use client"
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/images/logo.jpeg';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 100);
  };
  window.addEventListener('scroll', handleScroll);
}, []);

  return (
    <header className={`shadow bg-white  z-50 ${isScrolled ? 'shadow-lg fixed w-full top-0 '  : ''}`}>
      <nav className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Logo" width={100} height={100} className="rounded" />
        </Link>
        {/* Desktop Menu */}
        <ul className="hidden xl:flex items-center gap-6 text-gray-800 font-medium">
          <li>
            <Link href="/">الرئيسية</Link>
          </li>
          <li className="relative group">
            <Link href="/about">من نحن</Link>
          </li>
          <li className="relative group">
            <Link href="/divisions">الأقسام</Link>
          </li>
          <li>
            <Link href="/articles">الأخبار والفعاليات</Link>
          </li>
          <li>
            <Link href="/partners">الشركاء</Link>
          </li>
          <li>
            <Link href="/careers">الوظائف</Link>
          </li>
          <li>
            <Link href="/contact">تواصل معنا</Link>
          </li>
          <li>
            <Link href="/en" className="btn bg-green-600 text-white px-3 py-1 rounded">EN</Link>
          </li>
        </ul>
        {/* Mobile menu button */}
        <button className="xl:hidden flex items-center" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0  bg-black/50 z-40 xl:hidden" onClick={() => setMenuOpen(false)}></div>
        )}
        <div className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 xl:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center p-4 border-b">
            <Image src={logo} alt="Logo" width={50} height={50} className="rounded" />
            <button onClick={() => setMenuOpen(false)} className="text-2xl">×</button>
          </div>
          <ul className="flex flex-col gap-5 p-4 text-gray-800 font-medium">
            <li><Link href="/">الرئيسية</Link></li>
            <li>
              <Link href="/about">من نحن</Link>
            </li>
            <li>
              <Link href="/divisions">الأقسام</Link>
            </li>
            <li><Link href="/articles" >الأخبار والفعاليات</Link></li>
            <li><Link href="/partners">الشركاء</Link></li>
            <li><Link href="/careers">الوظائف</Link></li>
            <li><Link href="/contact">تواصل معنا</Link></li>
            <li><Link href="/en" className="btn bg-green-600 text-white px-6 py-2 rounded">EN</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
} 