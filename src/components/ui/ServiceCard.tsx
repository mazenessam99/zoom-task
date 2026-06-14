import Image from "next/image";

type ServiceCardProps = {
    icon: string;
    title: string;
    description: string;
};

export default function ServiceCard({
    icon,
    title,
    description,
}: ServiceCardProps) {
    return (
        <div className="bg-[#F5F8FA] rounded-3xl p-6 lg:p-10 flex flex-col h-full transition-all duration-400 hover:-translate-y-4">
            <Image
                src={icon}
                alt={title}
                width={52}
                height={48}
                className="shrink-0"
            />

            <div className="flex flex-col flex-1 mt-5">
                <h5 className="text-[20px] lg:text-[24px] font-bold text-[#161A1E] leading-tight">
                    {title}
                </h5>
                <p className="text-[16px] leading-[150%] text-[#161A1E] mt-3 flex-1">
                    {description}
                </p>
            </div>
        </div>
    );
}