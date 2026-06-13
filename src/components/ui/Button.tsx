'use client';


import { ImSpinner3 } from "react-icons/im";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    loading?: boolean;
    children: React.ReactNode;
}

const variants = {
    primary: 'bg-dark text-white hover:bg-gray-800 active:scale-[0.98]',
    secondary: 'bg-primary-500 text-white hover:bg-primary-600 active:scale-[0.98]',
    outline: 'bg-transparent border-2 border-dark text-dark hover:bg-dark hover:text-white active:scale-[0.98]',
    ghost: 'bg-transparent text-dark hover:bg-gray-100',
};

const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
};

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    loading = false,
    children,
    className = '',
    disabled,
    ...props
}) => {
    return (
        <button
            className={`
        inline-flex items-center justify-center gap-2
        rounded-full font-semibold transition-all duration-200
        disabled:opacity-60 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
    `}
            disabled={disabled || loading}
            {...props}
        >
            {loading && (
                <ImSpinner3 />
            )}
            {children}
        </button>
    );
};
