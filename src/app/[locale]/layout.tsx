import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Providers } from '@/components/Providers';
import { DirectionHandler } from './direction-handler';
import BackToTopButton from '@/components/ui/BackToTopButton';


export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'ar')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <DirectionHandler locale={locale}>
        <Providers>
          {children}
          <BackToTopButton/>
        </Providers>
      </DirectionHandler>
    </NextIntlClientProvider>
  );
}