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
        <div className="bg-[#F5F8FA] rounded-4xl lg:rounded-xl p-6 lg:p-10 min-h-0 lg:min-h-74 transition-all duration-300 hover:-translate-y-2">
            <Image
                src={icon}
                alt={title}
                width={52}
                height={48}
            />

            <div className="mt-6 lg:mt-8">
                <h5 className="text-[24px] font-bold text-[#161A1E] h-14.5 mb-4 lg:mb-6">
                    {title}
                </h5>

                <p className="text-[16px] font-normal leading-[150%] text-[#161A1E] line-clamp-2 lg:line-clamp-none">
                    {description}
                </p>
            </div>
        </div>
    );
}