"use client";
import Image from "next/image";
import { useState } from "react";

export default function DownloadApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-green-100" id="download">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* المحتوى النصي */}
          <div className="text-right" data-aos="fade-right">
            <div className="mb-6">
              <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                📱 تطبيق الموبايل
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                حمل تطبيق
                <span className="text-green-600 block">أجريسكو</span>
                الآن
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                احصل على جميع خدماتنا الزراعية في جيبك! تطبيق شامل يوفر لك الوصول السريع 
                للشركات الزراعية، الاستشاريين، الوظائف، والمزيد من الخدمات المتميزة.
              </p>
            </div>

            {/* المميزات */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-white text-sm"></i>
                </div>
                <span className="text-gray-700">وصول سريع لجميع الخدمات الزراعية</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-white text-sm"></i>
                </div>
                <span className="text-gray-700">إشعارات فورية للوظائف الجديدة</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-white text-sm"></i>
                </div>
                <span className="text-gray-700">تواصل مباشر مع الاستشاريين</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-white text-sm"></i>
                </div>
                <span className="text-gray-700">محتوى تعليمي متجدد</span>
              </div>
            </div>

            {/* أزرار التحميل */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="flex items-center justify-center gap-3 bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="text-2xl">🍎</div>
                <div className="text-right">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
              
              <button 
                className="flex items-center justify-center gap-3 bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="text-2xl">🤖</div>
                <div className="text-right">
                  <div className="text-xs opacity-80">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </div>

            {/* إحصائيات */}
            <div className="flex gap-8 mt-8 pt-8 border-t border-green-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">10K+</div>
                <div className="text-sm text-gray-600">مستخدم نشط</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">4.8</div>
                <div className="text-sm text-gray-600">تقييم المستخدمين</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">50+</div>
                <div className="text-sm text-gray-600">خدمة متاحة</div>
              </div>
            </div>
          </div>

          {/* صورة التطبيق */}
          <div className="relative" data-aos="fade-left">
            <div className="relative z-10">
              {/* الهاتف الرئيسي */}
              <div className="relative mx-auto w-80 h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl transform rotate-6 hover:rotate-0 transition-all duration-500">
                <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 rounded-[2.5rem] p-4 relative overflow-hidden">
                  {/* شريط الحالة */}
                  <div className="flex justify-between items-center text-white text-sm mb-4">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* محتوى التطبيق */}
                  <div className="space-y-3">
                    <div className="bg-white/20 rounded-xl p-3 text-white">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/30 rounded-lg flex items-center justify-center">
                          <i className="fas fa-leaf text-white"></i>
                        </div>
                        <div>
                          <div className="font-semibold">الشركات الزراعية</div>
                          <div className="text-xs opacity-80">50+ شركة متاحة</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/20 rounded-xl p-3 text-white">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/30 rounded-lg flex items-center justify-center">
                          <i className="fas fa-user-md text-white"></i>
                        </div>
                        <div>
                          <div className="font-semibold">الاستشاريون</div>
                          <div className="text-xs opacity-80">100+ خبير</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/20 rounded-xl p-3 text-white">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/30 rounded-lg flex items-center justify-center">
                          <i className="fas fa-briefcase text-white"></i>
                        </div>
                        <div>
                          <div className="font-semibold">الوظائف</div>
                          <div className="text-xs opacity-80">25 وظيفة جديدة</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* العناصر المتحركة */}
            <div className="absolute top-10 -right-10 w-20 h-20 bg-green-400 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute bottom-20 -left-10 w-16 h-16 bg-green-300 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute top-1/2 -right-5 w-12 h-12 bg-green-500 rounded-full opacity-25 animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
