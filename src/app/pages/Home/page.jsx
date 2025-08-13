import Hero from "@/app/components/Home/Hero";
import AboutSection from "@/app/components/Home/AboutSection";
import Services from "@/app/components/Home/Services";
import DownloadApp from "@/app/components/Home/DownloadApp";
import ContactSection from "@/app/components/Home/ContactSection";


export default  function HomePage() {

  return (
    <div className="w-full">
      <Hero />
      <AboutSection />
      <Services />
      <DownloadApp />
      <ContactSection />
    </div>
  );
}
