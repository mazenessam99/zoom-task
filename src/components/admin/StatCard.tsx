import React from 'react';

interface StatCardProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    color: string;
}

export default function StatCard({ icon, label, value, color }: StatCardProps) {
    return (
        <div className="bg-white rounded-2xl p-5 border border-gray-100 flex flex-col gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
                {icon}
            </div>
            <div>
                <p className="text-[11px] text-gray-400 uppercase tracking-wide">{label}</p>
                <p className="text-base font-bold text-[#161A1E] mt-0.5">{value}</p>
            </div>
        </div>
    );
}