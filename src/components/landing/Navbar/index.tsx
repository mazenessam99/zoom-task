"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter, Link } from "@/i18n/routing";
import Image from "next/image";
import NavLink from "./NavLink";
import LangButton from "./LangButton";
import HamburgerIcon from "./HamburgerIcon";
import LogoutButton from "@/components/auth/Logout";

export default function Navbar() {
    const t = useTranslations("landing.nav");
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const isRTL = locale === "ar";

    const toggleLocale = () => {
        router.replace(pathname, { locale: isRTL ? "en" : "ar" });
    };

    const links = [
        { label: t("home"), path: "/" },
        { label: t("services"), path: "/services", icon: true },
        { label: t("about"), path: "/about" },
        { label: t("blog"), path: "/blog" },
        { label: t("contact"), path: "/contact" },
    ];

    const isActive = (path: string) =>
        path === "/" ? pathname === "/" : pathname.startsWith(path);

    return (
        <nav className="w-full bg-white/70 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">

            {/* ===== WRAPPER ===== */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex items-center justify-between h-20" dir={isRTL ? "rtl" : "ltr"}>

                    {/* ===== LOGO ===== */}
                    <div className="flex justify-center items-center -px-12" >
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/images/nav/logo.png"
                                alt="logo"
                                width={300}
                                height={100}
                                className="w-30 sm:w-35 md:w-42.5 lg:w-50 xl:w-60 h-auto object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* ===== DESKTOP LINKS ===== */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-10">
                        {links.map((link) => (
                            <NavLink
                                key={link.path}
                                href={link.path}
                                active={isActive(link.path)}
                                icon={link.icon}
                            >
                                {link.label}
                            </NavLink>
                        ))}

                        <LangButton locale={locale} onToggle={toggleLocale} />
                        <LogoutButton />
                    </div>

                    {/* ===== BURGER ===== */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden flex items-center justify-center w-10 h-10"
                    >
                        <HamburgerIcon open={menuOpen} />
                    </button>

                </div>

                {/* ===== MOBILE MENU ===== */}
                {menuOpen && (
                    <div className="lg:hidden flex flex-col gap-2 pb-4" dir={isRTL ? "rtl" : "ltr"}>

                        {links.map((link) => (
                            <div key={link.path} className="py-3 border-b">
                                <NavLink
                                    href={link.path}
                                    active={isActive(link.path)}
                                    icon={link.icon}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.label}
                                </NavLink>
                            </div>
                        ))}

                        <div className="pt-3 flex gap-3">
                            <LangButton locale={locale} onToggle={toggleLocale} />
                            <LogoutButton />
                        </div>

                    </div>
                )}

            </div>
        </nav>
    );
}