'use client';


import { Crown, LogOut } from 'lucide-react';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import LangButton from '../landing/Navbar/LangButton';

interface AdminHeaderProps {
    title: string;
    initials: string;
    fullName: string;
    email: string;
    onLogout: () => void;
    isLoggingOut: boolean;
    logoutText: string;
}

export default function AdminHeader({
    title,
    initials,
    fullName,
    email,
    onLogout,
    isLoggingOut,
    logoutText,
}: AdminHeaderProps) {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const toggleLocale = () => {
        router.replace(pathname, { locale: locale === 'en' ? 'ar' : 'en' });
    };

    return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between" dir="ltr">

                {/* Logo + title */}
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#5BA4C8] rounded-lg flex items-center justify-center">
                        <Crown size={14} className="text-white" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 leading-none">ZOOM Cleaning</p>
                        <p className="text-sm font-bold text-[#161A1E]">{title}</p>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">

                    {/* Lang */}
                    <LangButton locale={locale} onToggle={toggleLocale} />

                    <div className="w-px h-6 bg-gray-100" />

                    {/* User */}
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#5BA4C8] flex items-center justify-center text-white text-xs font-bold shrink-0">
                            {initials}
                        </div>
                        <div className="hidden sm:block">
                            <p className="text-sm font-semibold text-[#161A1E] leading-none">{fullName}</p>
                            <p className="text-[11px] text-gray-400 mt-0.5">{email}</p>
                        </div>
                    </div>

                    <div className="w-px h-6 bg-gray-100" />

                    {/* Logout */}
                    <button
                        onClick={onLogout}
                        disabled={isLoggingOut}
                        className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-red-500 transition-colors disabled:opacity-50"
                    >
                        <LogOut size={15} />
                        <span className="hidden sm:inline">
                            {isLoggingOut ? '...' : logoutText}
                        </span>
                    </button>

                </div>
            </div>
        </header>
    );
}