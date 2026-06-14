interface StatCardProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    color: string;
    borderColor: string;
}

export default function StatCard({ icon, label, value, color, borderColor }: StatCardProps) {
    return (
        <div
            className="bg-white rounded-2xl p-5 border border-gray-100 cursor-pointer flex flex-col gap-3 transition-colors duration-200"
            onMouseEnter={e => (e.currentTarget.style.borderColor = borderColor)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = '#f3f4f6')}
        >
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