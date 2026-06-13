interface HamburgerIconProps {
    open: boolean;
}

export default function HamburgerIcon({ open }: HamburgerIconProps) {
    return (
        <div className="relative flex items-center justify-end w-6 h-5 group cursor-pointer">

            {/* Top line */}
            <span
                className={`absolute right-0 h-0.5 w-6 bg-[#161A1E] transition-all duration-300 origin-center ${open ? "top-2 rotate-45" : "top-0 rotate-0"
                    }`}
            />

            {/* Middle line */}
            <span
                className={`absolute right-0 h-0.5 w-4 group-hover:w-6 bg-[#161A1E] transition-all duration-300 ${open ? "opacity-0" : "top-2 opacity-100"
                    }`}
            />

            {/* Bottom line */}
            <span
                className={`absolute right-0 h-0.5 w-6 bg-[#161A1E] transition-all duration-300 origin-center ${open ? "top-2 -rotate-45" : "top-4 rotate-0"
                    }`}
            />

        </div>
    );
}