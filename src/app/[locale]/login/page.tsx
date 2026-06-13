import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { LoginForm } from '@/components/auth/LoginForm';




export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: 'login',
  });

  return {
    title: `${t('title')} | ZOOM`,
  };
}


export default function LoginPage() {
  return <LoginPageContent />;
}

function LoginPageContent() {
  const t = useTranslations('login');

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#EBF4FA] via-white to-[#B8D4DC] flex items-center justify-center p-4 relative">
      <div className="relative w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-primary-100/50 p-8 md:p-10 border border-gray-100">

          <div className="mb-8 text-center">
            
            <h1 className="text-2xl font-bold text-black mb-1">
              {t('title')}
            </h1>
            <p className="text-sm text-gray-400">
              {t('subtitle')}
            </p>
          </div>

          <LoginForm />
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-blue-400 mt-6">
          © 2026 ZOOM Cleaning Services
        </p>

      </div>
    </main>
  );
}