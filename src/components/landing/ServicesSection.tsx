"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import ServiceCard from "../ui/ServiceCard";

export default function ServicesSection() {
    const t = useTranslations("landing.services");

    return (
        <section className="w-full px-4 md:px-8 lg:px-33.75 py-8 lg:py-20">
            <div className="w-full max-w-292.5 mx-auto">

                {/* HEADER */}
                <header className="flex flex-col lg:flex-row lg:items-start lg:gap-20">

    <p className="font-bold text-[#04090D] text-[24px] md:text-[32px] lg:text-[40px] leading-[1.1] tracking-[-0.02em] lg:max-w-137">
        {t("title")}
    </p>

    <p className="font-normal text-[#161A1E] text-[16px] leading-[1.6] lg:max-w-127.5 mt-2 md:mt-3 lg:mt-0 text-start">
        {t("subtitle")}
    </p>

</header>

                {/* TOP CARDS */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7.5 mt-12">

                    {/* Left Card */}
                    <div className="bg-[#F5F8FA] rounded-4xl overflow-hidden">
                        <ServiceCard
                            icon="/images/services/icons/window-icon.png"
                            title={t("items.window.title")}
                            description={t("items.window.desc")}
                        />
                    </div>

                    {/* Right Card */}
                    <div className="lg:col-span-2 bg-[#F5F8FA] rounded-4xl overflow-hidden flex flex-col md:flex-row items-center min-h-74">

                        {/* Image */}
                        <div className="relative w-full md:w-70 lg:w-[320px] h-55 md:h-65 flex items-center justify-center shrink-0">
                            <Image
                                src="/images/services/services-cartton.png"
                                alt="Service Cartoon"
                                fill
                                sizes="(max-width:768px) 100vw, (max-width:1024px) 280px, 320px"
                                className="object-contain p-4 object-center"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-1 w-full">
                            <ServiceCard
                                icon="/images/services/icons/household-icon.png"
                                title={t("items.household.title")}
                                description={t("items.household.desc")}
                            />
                        </div>

                    </div>

                </div>

                {/* BOTTOM CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7.5 mt-7.5">

                    <ServiceCard
                        icon="/images/services/icons/moving-icon.png"
                        title={t("items.moving.title")}
                        description={t("items.moving.desc")}
                    />

                    <ServiceCard
                        icon="/images/services/icons/property-icon.png"
                        title={t("items.property.title")}
                        description={t("items.property.desc")}
                    />

                    <ServiceCard
                        icon="/images/services/icons/maintance-icon.png"
                        title={t("items.maintenance.title")}
                        description={t("items.maintenance.desc")}
                    />

                </div>

            </div>
        </section>
    );
}