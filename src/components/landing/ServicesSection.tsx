"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import ServiceCard from "../ui/ServiceCard";

export default function ServicesSection() {
    const t = useTranslations("landing.services");

    return (
        <section className="w-full px-4 md:px-8 lg:px-[135px] py-8 lg:py-[80px]">
            <div className="w-full max-w-[1170px] mx-auto">

                {/* HEADER */}
                <header className="flex flex-col lg:flex-row lg:items-start lg:gap-[80px]">

    <p className="font-bold text-[#04090D] text-[24px] md:text-[32px] lg:text-[40px] leading-[1.1] tracking-[-0.02em] lg:max-w-[548px]">
        {t("title")}
    </p>

    <p className="font-normal text-[#161A1E] text-[16px] leading-[1.6] lg:max-w-[510px] mt-2 md:mt-3 lg:mt-0 text-start">
        {t("subtitle")}
    </p>

</header>

                {/* TOP CARDS */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-[30px] mt-12">

                    {/* Left Card */}
                    <div className="bg-[#F5F8FA] rounded-[32px] overflow-hidden">
                        <ServiceCard
                            icon="/images/services/icons/window-icon.png"
                            title={t("items.window.title")}
                            description={t("items.window.desc")}
                        />
                    </div>

                    {/* Right Card */}
                    <div className="lg:col-span-2 bg-[#F5F8FA] rounded-[32px] overflow-hidden flex flex-col md:flex-row items-center min-h-[296px]">

                        {/* Image */}
                        <div className="relative w-full md:w-[280px] lg:w-[320px] h-[220px] md:h-[260px] flex items-center justify-center shrink-0">
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[30px] mt-[30px]">

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