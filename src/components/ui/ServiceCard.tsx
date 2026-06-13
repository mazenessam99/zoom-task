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
        <div className="bg-[#F5F8FA] rounded-[32px] lg:rounded-xl p-[24px] lg:p-[40px] min-h-0 lg:min-h-[296px] transition-all duration-300 hover:-translate-y-2">
            <Image
                src={icon}
                alt={title}
                width={52}
                height={48}
            />

            <div className="mt-[24px] lg:mt-[32px]">
                <h5 className="text-[24px] font-bold text-[#161A1E] h-[58px] mb-[16px] lg:mb-[24px]">
                    {title}
                </h5>

                <p className="text-[16px] font-normal leading-[150%] text-[#161A1E] line-clamp-2 lg:line-clamp-none">
                    {description}
                </p>
            </div>
        </div>
    );
}