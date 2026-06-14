import { useTranslations } from "next-intl";
import {
    Phone,
    Mail,
    Home,
    Sparkles,
    ShieldCheck,
    MoveRight,
} from "lucide-react";

export default function Footer() {
    const t = useTranslations("landing.footer");

    return (
        <footer className="mt-20 border-t border-gray-200 bg-gray-50">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                            ZOOM Cleaning
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-gray-600">
                            {t("description")}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 font-semibold text-gray-900">
                            {t("quickLinks")}
                        </h4>

                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="group flex cursor-pointer items-center gap-2 transition-all hover:text-cyan-600">
                                <Home
                                    size={16}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                                {t("nav.home")}
                            </li>

                            <li className="group flex cursor-pointer items-center gap-2 transition-all hover:text-cyan-600">
                                <Sparkles
                                    size={16}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                                {t("nav.services")}
                            </li>

                            <li className="group flex cursor-pointer items-center gap-2 transition-all hover:text-cyan-600">
                                <ShieldCheck
                                    size={16}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                                {t("nav.about")}
                            </li>

                            <li className="group flex cursor-pointer items-center gap-2 transition-all hover:text-cyan-600">
                                <Mail
                                    size={16}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                                {t("nav.contact")}
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="mb-4 font-semibold text-gray-900">
                            {t("ourServices")}
                        </h4>

                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="group flex cursor-pointer items-center gap-2 transition-all hover:text-cyan-600">
                                <Sparkles
                                    size={16}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                                {t("houseCleaning")}
                            </li>

                            <li className="group flex cursor-pointer items-center gap-2 transition-all hover:text-cyan-600">
                                <Sparkles
                                    size={16}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                                {t("officeCleaning")}
                            </li>

                            <li className="group flex cursor-pointer items-center gap-2 transition-all hover:text-cyan-600">
                                <Sparkles
                                    size={16}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                                {t("deepCleaning")}
                            </li>

                            <li className="group flex cursor-pointer items-center gap-2 transition-all hover:text-cyan-600">
                                <MoveRight
                                    size={16}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                                {t("moveCleaning")}
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-4 font-semibold text-gray-900">
                            {t("contactUs")}
                        </h4>

                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="group flex items-center gap-2 transition-all hover:text-cyan-600">
                                <Phone
                                    size={16}
                                    className="transition-transform group-hover:scale-110"
                                />
                                <span>{t("phone")}</span>
                            </li>

                            <li className="group flex items-center gap-2 transition-all hover:text-cyan-600">
                                <Mail
                                    size={16}
                                    className="transition-transform group-hover:scale-110"
                                />
                                <span>{t("email")}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 border-t border-gray-200 pt-6">
                    <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
                        <p>
                            © {new Date().getFullYear()} ZOOM Cleaning Services.{" "}
                            {t("rights")}
                        </p>

                        <div className="flex items-center gap-6">
                            <button className="transition-colors cursor-pointer hover:text-cyan-600">
                                Privacy Policy
                            </button>

                            <button className="transition-colors cursor-pointer hover:text-cyan-600">
                                Terms of Service
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}