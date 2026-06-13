"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export default function HeroSection() {
    const t = useTranslations('landing.hero')
    const locale = useLocale();
    const isRTL = locale === 'ar';

    return (
        <section className="min-h-screen px-4 md:px-4.5 relative">
            <div
                className="relative bg-none lg:bg-[url('/images/Rectangle.png')] bg-cover bg-center mt-8 overflow-hidden rounded-4xl lg:h-178.75"
                style={{ transform: isRTL ? 'scaleX(-1)' : 'none' }}
            >
                {/* Card */}
                <div className="relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 z-10 w-full lg:w-[42%] lg:left-15 animate-[float_3s_ease-in-out_infinite]">
                    {/* Card content */}
                    <div
                        className="rounded-4xl bg-white p-8 xl:p-14 h-fit"
                        style={{ transform: isRTL ? 'scaleX(-1)' : 'none' }}
                    >
                        <h1 className="font-bold text-[48px] leading-[126%] line-clamp-3 tracking-[-0.02em] text-black">
                            {t('title')}
                        </h1>
                        <p className="font-normal text-[16px] leading-[150%] mt-4 text-[#04090D]">
                            {t('subtitle')}
                        </p>
                        <div className="flex flex-col justify-center sm:flex-row gap-4 mt-8 mb-10">
                            <button className="w-full sm:w-auto px-6 py-3 rounded-full bg-black text-white border border-black cursor-pointer transition hover:opacity-90">
                                {t("cta")}
                            </button>
                            <button className="w-full sm:w-auto px-6 py-3 rounded-full text-black border border-black cursor-pointer transition hover:bg-black hover:text-white">
                                {t("contact")}
                            </button>
                        </div>
                        <div className="absolute bottom-0 right-0">
                            <Image src={'/images/hero/Vector 1.png'} width={116.12} height={65.4} alt="n-icon" />
                        </div>
                    </div>
                </div>

                <div className="relative w-full overflow-hidden rounded-4xl bg-[#8BA9C5] h-87.5 sm:h-112.5 lg:absolute lg:bottom-0 lg:right-0 lg:w-[70%] lg:h-full lg:bg-transparent lg:z-20">
                    <Image
                        src="/images/hero/hero.png"
                        alt="Hero Image"
                        fill
                        priority
                        className="object-cover object-[50%_50%] lg:object-[50%_100%]"
                    />

                    {/* Badge 1 */}
                    <div className="hidden lg:flex absolute top-17.5 left-[40%] -translate-x-1/2 items-center gap-1 z-30">
                        <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                            <Image src="/images/hero/icons/hero-icon-1.png" width={19} height={19} alt="badge icon" className="object-contain" />
                        </div>
                        <div
                            className="bg-white px-3 h-8 text-[14px] font-normal text-[#161A1E] flex items-center justify-center rounded-full"
                            style={{ transform: isRTL ? 'scaleX(-1)' : 'none' }}
                        >
                            {t('badge1')}
                        </div>
                    </div>

                    {/* Badge 2 */}
                    <div className="hidden lg:flex absolute top-52.5 right-[11%] items-center gap-1 z-30 animate-[bubble_2s_ease-in-out_infinite]">
                        <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center">
                            <Image src="/images/hero/icons/hero-icon-2.png" width={32} height={32} alt="badge icon" className="object-contain" />
                        </div>
                    </div>

                    {/* Badge 3 */}
                    <div className="hidden lg:flex absolute bottom-37.5 right-[7%] items-center gap-1 z-30">
                        <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                            <Image src="/images/hero/icons/hero-icon-3.png" width={19} height={19} alt="badge icon" className="object-contain" />
                        </div>
                        <div
                            className="bg-white px-3 h-8 text-[14px] font-normal text-[#161A1E] flex items-center justify-center rounded-full"
                            style={{ transform: isRTL ? 'scaleX(-1)' : 'none' }}
                        >
                            {t('badge2')}
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div
                    className="relative lg:absolute lg:bottom-0 lg:left-10 lg:z-10 w-full lg:w-[30%] bg-white lg:rounded-tr-4xl flex items-center gap-6 px-8 py-6"
                    style={{ transform: isRTL ? 'scaleX(-1)' : 'none' }}
                >
                    <p className="text-4xl font-bold text-black">58k+</p>
                    <p className="text-sm max-w-51 leading-[150%] text-[#04090D]">{t('stats')}</p>
                </div>

            </div>
        </section>
    );
}