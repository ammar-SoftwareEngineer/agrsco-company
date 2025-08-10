"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // محاكاة إرسال النموذج
    setTimeout(() => {
      setIsSubmitting(false);
      alert("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 2000);
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16" data-aos="fade-down">
          <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            📞 تواصل معنا
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            نحن هنا
            <span className="text-green-600 block">للمساعدة</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            لديك استفسار أو تريد معرفة المزيد عن خدماتنا؟ لا تتردد في التواصل معنا، 
            فريقنا متاح دائماً لمساعدتك.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* معلومات التواصل */}
          <div className="space-y-8" data-aos="fade-right">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">معلومات التواصل</h3>
              <p className="text-gray-600 mb-8">
                يمكنك الوصول إلينا من خلال أي من الطرق التالية، وسنكون سعداء بالرد عليك في أقرب وقت ممكن.
              </p>
            </div>

            {/* بطاقات المعلومات */}
            <div className="space-y-6">
              {/* البريد الإلكتروني */}
              <div className="flex items-start gap-4 p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-all duration-300 group">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-envelope text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">البريد الإلكتروني</h4>
                  <a 
                    href="mailto:info@agrsco.com" 
                    className="text-green-600 hover:text-green-700 transition-colors duration-300"
                  >
                    info@agrsco.com
                  </a>
                  <p className="text-sm text-gray-600 mt-1">الرد خلال 24 ساعة</p>
                </div>
              </div>

              {/* الهاتف */}
              <div className="flex items-start gap-4 p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-all duration-300 group">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-phone text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">الهاتف</h4>
                  <a 
                    href="tel:+966501234567" 
                    className="text-green-600 hover:text-green-700 transition-colors duration-300"
                  >
                    +966 50 123 4567
                  </a>
                  <p className="text-sm text-gray-600 mt-1">الأحد - الخميس: 8 ص - 6 م</p>
                </div>
              </div>

              {/* العنوان */}
              <div className="flex items-start gap-4 p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-all duration-300 group">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-map-marker-alt text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">العنوان</h4>
                  <p className="text-gray-600">
                    الرياض، المملكة العربية السعودية<br />
                    برج المملكة، الطابق 15
                  </p>
                </div>
              </div>

              {/* وسائل التواصل الاجتماعي */}
              <div className="flex items-start gap-4 p-6 bg-green-50 rounded-2xl">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <i className="fas fa-share-alt text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">تابعنا</h4>
                  <div className="flex gap-3">
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white hover:bg-green-700 transition-colors duration-300"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white hover:bg-green-700 transition-colors duration-300"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white hover:bg-green-700 transition-colors duration-300"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white hover:bg-green-700 transition-colors duration-300"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* نموذج الاتصال */}
          <div className="bg-gray-50 p-8 rounded-3xl" data-aos="fade-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">أرسل لنا رسالة</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* الاسم */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  الاسم الكامل *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              {/* البريد الإلكتروني */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  البريد الإلكتروني *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>

              {/* الهاتف */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="أدخل رقم هاتفك"
                />
              </div>

              {/* الموضوع */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  الموضوع *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">اختر الموضوع</option>
                  <option value="استفسار عام">استفسار عام</option>
                  <option value="طلب خدمة">طلب خدمة</option>
                  <option value="شكوى">شكوى</option>
                  <option value="اقتراح">اقتراح</option>
                  <option value="تعاون">تعاون</option>
                </select>
              </div>

              {/* الرسالة */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  الرسالة *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>

              {/* زر الإرسال */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <i className="fas fa-spinner fa-spin"></i>
                    جاري الإرسال...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <i className="fas fa-paper-plane"></i>
                    إرسال الرسالة
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* خريطة تفاعلية */}
        <div className="mt-16" data-aos="fade-up">
          <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center">
              <i className="fas fa-map text-4xl text-gray-400 mb-4"></i>
              <p className="text-gray-600">خريطة تفاعلية للموقع</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
