import { Link } from "@/i18n/routing";
import { ChevronDown } from "lucide-react";

interface NavLinkProps {
    href: string;
    active: boolean;
    icon?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
}

export default function NavLink({ href, active, icon, children, onClick }: NavLinkProps) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`flex items-center gap-1 transition whitespace-nowrap text-base text-[#161A1E] ${
                active
                    ? "font-bold tracking-[-0.02em]"
                    : "font-normal tracking-normal"
            }`}
        >
            {children}
            {icon && <ChevronDown size={14} className="text-gray-400" />}
        </Link>
    );
}