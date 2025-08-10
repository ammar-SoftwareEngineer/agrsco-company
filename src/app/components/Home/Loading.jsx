import Image from "next/image";
import banarLogo from "@/app/images/logo.png";
export default function Loading() {
    return (
        <div className="loading">
            <div className="loader-container">
                <div className="pulse-circle">
                    <Image src={banarLogo} alt="logo" width={160} height={160} />
                </div>
            </div>
            <div className="loading-text mt-3">
                <h1 className="text-third text-uppercase">
                    <span className="text-second"> Agr</span>Sco
                </h1>
            </div>
        </div>

    );
}