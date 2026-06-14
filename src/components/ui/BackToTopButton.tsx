"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLocale } from "next-intl";

export default function BackToTopButton() {
    const [visible, setVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    const locale = useLocale();
    const isRTL = locale === "ar";

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const scrolled = (scrollTop / docHeight) * 100;

            setProgress(scrolled);
            setVisible(scrollTop > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!visible) return null;

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl cursor-pointer transition-all duration-300 hover:scale-110 ${isRTL ? "left-6" : "right-6"
                }`}
        >
            <div
                className="absolute inset-0 rounded-full"
                style={{
                    background: `conic-gradient(#06b6d4 ${progress}%, #e5e7eb 0%)`,
                }}
            />

            <div className="absolute inset-[4px] rounded-full bg-white" />
            <ArrowUp className="relative z-10 text-cyan-600" size={20} />
        </button>
    );
}