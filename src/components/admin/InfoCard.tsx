import React from 'react';

interface InfoCardProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    accent?: boolean;
}

export default function InfoCard({ icon, label, value, accent = false }: InfoCardProps) {
    return (
        <div className={`flex items-center gap-4 p-5 rounded-2xl border transition-all duration-200 hover:shadow-sm cursor-pointer ${
            accent
                ? 'bg-[#EBF4FA] border-[#5BA4C8]/30'
                : 'bg-white border-gray-100 hover:border-[#5BA4C8]'
        }`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                accent ? 'bg-[#5BA4C8] text-white' : 'bg-gray-50 text-gray-400'
            }`}>
                {icon}
            </div>
            <div className="min-w-0 flex-1 ">
                <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wide mb-0.5">
                    {label}
                </p>
                <p className={`text-sm font-semibold truncate ${
                    accent ? 'text-[#5BA4C8]' : 'text-[#161A1E]'
                }`}>
                    {value}
                </p>
            </div>
        </div>
    );
}