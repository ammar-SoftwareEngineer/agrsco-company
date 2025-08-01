export default function Services() {
    const servicesList = [
      {
        id: 1,
        icon: <i className="fas fa-building"></i>,
        header: "الشركات الزراعية",
        description: "دليل شامل للشركات مصنفة حسب النشاط والموقع الجغرافي.",
      },
      {
        id: 2,
        icon: <i className="fas fa-user-md"></i>,
        header: "الاستشاريون والبيطريون",
        description: "ملفات مهنية شاملة للمهندسين الزراعيين والدكاترة البيطريين.",
      },
      {
        id: 3,
        icon: <i className="fas fa-briefcase"></i>,
        header: "الوظائف والتوظيف",
        description: "فرص عمل زراعية وبيطرية مع إمكانية التقديم مباشرة.",
      },
      {
        id: 4,
        icon: <i className="fas fa-tree"></i>,
        header: "المشاتل",
        description: "قاعدة بيانات مشاتل متنوعة تشمل نباتات الزينة والفاكهة والطبية.",
      },
      {
        id: 5,
        icon: <i className="fas fa-store"></i>,
        header: "التجار والمحلات",
        description: "عرض لتجار الخضروات والفواكه والماشية والأدوات الزراعية.",
      },
      {
        id: 6,
        icon: <i className="fas fa-book-open"></i>,
        header: "المقالات التعليمية",
        description: "محتوى علمي لنشر المعرفة الزراعية والوقاية النباتية والابتكار.",
      },
      {
        id: 7,
        icon: <i className="fas fa-chart-line"></i>,
        header: "دراسات الجدوى",
        description: "نماذج جاهزة مع إمكانية طلب دراسة جدوى مخصصة.",
      },
      {
        id: 8,
        icon: <i className="fas fa-chalkboard-teacher"></i>,
        header: "الكورسات والتدريبات",
        description: "دورات تدريبية أونلاين وحضوري مع تفاصيل شاملة عن كل دورة.",
      },
      {
        id: 9,
        icon: <i className="fas fa-bullhorn"></i>,
        header: "الإعلانات والاشتراكات",
        description: "باقات اشتراك وخطط دعائية متميزة لزيادة ظهورك على المنصة.",
      },
      {
        id: 10,
        icon: <i className="fas fa-hands-helping"></i>,
        header: "التبرع والمساعدة",
        description: "دعم طلاب الزراعة والمزارعين المحتاجين، وزراعة الأشجار كصدقة جارية.",
      },
    ];
  
    return (
      <section className="py-20 bg-gray-50" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24" data-aos="fade-down">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              خدماتنا
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              أجريسكو منصة شاملة تخدم جميع عناصر المجال الزراعي من خلال تقديم
              خدمات تعليمية، استشارية، إعلانية، ووظيفية عبر أقسام متكاملة.
            </p>
          </div>
  
          <div className="grid grid-cols-12 gap-20" data-aos="fade-up">
            {servicesList.map((service) => (
              <div key={service.id} className="md:col-span-4 col-12">
                <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition relative">
                  <div className="text-green-600 text-4xl absolute top-0 left-1/2 -translate-1/2 bg-white p-6 rounded-full shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 mt-6">{service.header}</h3>
                  <p className="text-gray-600 text-base">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  