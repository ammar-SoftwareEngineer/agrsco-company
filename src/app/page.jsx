"use client";

import HomePage from "./pages/Home/page";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect,useState } from "react";
import Loading from "./loading";

export default async function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // محاكاة التأخير
    const timer = setTimeout(() => setLoading(false), 2000);

    // تهيئة AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Loading/>
    );
  }

  return <HomePage />;

}
