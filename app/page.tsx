"use client";
import '@flaticon/flaticon-uicons/css/all/all.css';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { colors } from "@/libs/color";

export default function Splash() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/nkonye/login");
        }, 7500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <section className="flex flex-col items-center justify-center h-screen w-full gap-12 relative" style={{ backgroundColor: colors.brand.green }}>
                <i className="fi fi-ss-fire-flame-curved text-8xl text-white"></i>
                <div className="flex justify-center items-center gap-3 absolute bottom-14">
                    <div className="dot dot1"></div>
                    <div className="dot dot2"></div>
                    <div className="dot dot3"></div>
                    <div className="dot dot4"></div>
                    <div className="dot dot5"></div>
                    <div className="dot dot6"></div>
                    <div className="dot dot7"></div>
                    <div className="dot dot8"></div>
                </div>
            </section>
        </>
    );
}

