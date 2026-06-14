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
        router.replace(pathname, {
            locale: isRTL ? "en" : "ar",
        });
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
        <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-lg shadow-sm">
            <div className="max-w-[1440px] mx-auto px-4 md:px-4.5">
                <div
                    className="flex h-24 items-center justify-between"
                    dir={isRTL ? "rtl" : "ltr"}
                >
                    {/* ===== LOGO ===== */}
                    <div className="flex items-center shrink-0">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/images/nav/logo.png"
                                alt="ZOOM Cleaning"
                                width={350}
                                height={120}
                                priority
                                className="w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 h-auto object-contain"
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

                        <div className="flex items-center gap-3">
                            <LangButton
                                locale={locale}
                                onToggle={toggleLocale}
                            />

                            <LogoutButton />
                        </div>
                    </div>

                    {/* ===== MOBILE MENU BUTTON ===== */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex h-10 w-10 items-center justify-center lg:hidden"
                        aria-label="Toggle menu"
                    >
                        <HamburgerIcon open={menuOpen} />
                    </button>
                </div>

                {/* ===== MOBILE MENU ===== */}
                <div
                    className={`overflow-hidden transition-all duration-300 lg:hidden ${
                        menuOpen
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0"
                    }`}
                    dir={isRTL ? "rtl" : "ltr"}
                >
                    <div className="flex flex-col gap-2 pb-4">
                        {links.map((link) => (
                            <div
                                key={link.path}
                                className="border-b border-gray-100 py-3"
                            >
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

                        <div className="flex gap-3 pt-4">
                            <LangButton
                                locale={locale}
                                onToggle={toggleLocale}
                            />

                            <LogoutButton />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}