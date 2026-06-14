import Image from "next/image";

interface LangButtonProps {
    locale: string;
    onToggle: () => void;
    className?: string;
}

export default function LangButton({ locale, onToggle, className = "" }: LangButtonProps) {
    return (
        <button
            onClick={onToggle}
            className={`flex items-center justify-center gap-2 px-3 py-1 border rounded-md cursor-pointer hover:bg-gray-100 transition ${className}`}
        >
            <Image
                src={locale === "en" ? "/flags/eg.png" : "/flags/us.jpg"}
                alt="flag"
                width={16}
                height={16}
            />
            <span className="text-[#161A1E] text-sm">
                {locale === "en" ? "AR" : "EN"}
            </span>
        </button>
    );
}