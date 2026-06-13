import { Shield } from 'lucide-react';

interface WelcomeBannerProps {
    initials: string;
    fullName: string;
    userType: string;
    welcomeText: string;
}

export default function WelcomeBanner({
    initials,
    fullName,
    userType,
    welcomeText,
}: WelcomeBannerProps) {
    return (
        <div className="relative bg-[#161A1E] rounded-3xl p-8 overflow-hidden text-white">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#5BA4C8]/20 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 right-24 w-32 h-32 bg-[#5BA4C8]/10 rounded-full translate-y-1/2" />

            <div className="relative z-10 flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-2xl font-black shrink-0">
                    {initials}
                </div>
                <div>
                    <p className="text-gray-400 text-sm mb-1">{welcomeText} 👋</p>
                    <h1 className="text-2xl font-black">{fullName}</h1>
                    <span className="inline-flex items-center gap-1 mt-2 bg-[#5BA4C8]/20 text-[#5BA4C8] text-xs font-semibold px-3 py-1 rounded-full border border-[#5BA4C8]/30">
                        <Shield size={10} />
                        {userType}
                    </span>
                </div>
            </div>
        </div>
    );
}