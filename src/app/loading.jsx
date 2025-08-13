import logo from "@/app/images/logo.jpeg";
import Image from "next/image";
export default function Loading() {
  return (
    <div class="loading">
      <div class="loader-container">
        <div class="pulse-circle">
          <Image src={logo} alt="أجريسكو" className="w-30" />
        </div>
      </div>
      
    </div>
  );
}
