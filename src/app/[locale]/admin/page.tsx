'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import { Crown, Activity, Settings, Shield } from 'lucide-react';

import { useGetMeQuery, useLogoutMutation } from '@/store/api/authApi';
import { logout } from '@/store/authSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { AdminSkeleton } from '@/components/ui/Skeleton';

import AdminHeader from '@/components/admin/AdminHeader';
import WelcomeBanner from '@/components/admin/WelcomeBanner';
import StatCard from '@/components/admin/StatCard';
import ProfileInfo from '@/components/admin/ProfileInfo';

export default function AdminPage() {
    const t = useTranslations('admin');
    const locale = useLocale();
    const router = useRouter();
    const dispatch = useAppDispatch();
    const refreshToken = useAppSelector((s) => s.auth.refreshToken);

    const { data: user, isLoading, isError, error } = useGetMeQuery();
    const [logoutMutation, { isLoading: isLoggingOut }] = useLogoutMutation();

    const handleLogout = async () => {
        try {
            if (refreshToken) await logoutMutation({ refreshToken }).unwrap();
        } catch { } finally {
            dispatch(logout());
            Cookies.remove('accessToken');
            Cookies.remove('refreshToken');
            Cookies.remove('userType');
            toast.success(t('logoutSuccess'));
            router.replace(`/${locale}/login`);
        }
    };

    if (isLoading) return <AdminSkeleton />;

    if (isError || !user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F7F8FA]">
                <div className="text-center p-8">
                    <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="text-red-400" size={24} />
                    </div>
                    <h2 className="text-base font-bold text-[#161A1E] mb-2">{t('errorTitle')}</h2>
                    <p className="text-sm text-gray-400 mb-6">
                        {(error as { data?: { message?: string } })?.data?.message || t('errorSubtitle')}
                    </p>
                    <button
                        onClick={() => router.replace(`/${locale}/login`)}
                        className="bg-[#161A1E] text-white text-sm font-semibold px-6 py-2.5 rounded-full"
                    >
                        {t('backToLogin')}
                    </button>
                </div>
            </div>
        );
    }

    const initials = user.fullName
        ?.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);

    return (
        <div className="min-h-screen bg-[#F7F8FA]">

            <AdminHeader
                title={t('title')}
                initials={initials}
                fullName={user.fullName}
                email={user.email}
                onLogout={handleLogout}
                isLoggingOut={isLoggingOut}
                logoutText={t('logout')}
            />

            <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col gap-6">

                <WelcomeBanner
                    initials={initials}
                    fullName={user.fullName}
                    userType={user.userType}
                    welcomeText={t('welcome')}
                />

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <StatCard icon={<Crown size={18} />} label={t('authority')} value={t('authorityValue')} color="bg-purple-50 text-purple-500" borderColor="#a855f7" />
                    <StatCard icon={<Activity size={18} />} label={t('status')} value={t('statusValue')} color="bg-green-50 text-green-500" borderColor="#22c55e" />
                    <StatCard icon={<Settings size={18} />} label={t('type')} value={user.userType} color="bg-blue-50 text-blue-500" borderColor="#3b82f6" />
                </div>

                <ProfileInfo
                    title={t('accountData')}
                    labels={{
                        fullName: t('fullName'),
                        email: t('email'),
                        phoneNumber: t('phoneNumber'),
                        userType: t('userType'),
                    }}
                    values={{
                        fullName: user.fullName,
                        email: user.email,
                        phoneNumber: user.phoneNumber,
                        userType: user.userType,
                    }}
                />

            </div>
        </div>
    );
}