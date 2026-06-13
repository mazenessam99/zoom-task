'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Mail, Lock } from 'lucide-react';
import Cookies from 'js-cookie';

import { loginSchema, LoginFormValues } from '@/lib/schemas/loginSchema';
import { useLoginMutation } from '@/store/api/authApi';
import { setCredentials } from '@/store/authSlice';
import { useAppDispatch } from '@/hooks/useRedux';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export const LoginForm = () => {
    const t = useTranslations('login');
    const router = useRouter();
    const locale = useLocale();
    const dispatch = useAppDispatch();
    const [loginMutation, { isLoading }] = useLoginMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormValues) => {
        try {
            const result = await loginMutation(data).unwrap();

            const { accessToken, refreshToken, user } = result.data;

            dispatch(setCredentials({ accessToken, refreshToken, user }));

            Cookies.set('accessToken', accessToken, { expires: 1 });
            Cookies.set('refreshToken', refreshToken, { expires: 7 });
            Cookies.set('userType', user.userType, { expires: 1 });

            toast.success(`Hello ${user.fullName}!`);

            if (user.userType === 'SUPER_ADMIN') {
                router.replace(`/${locale}/admin`);
            } else {
                router.replace(`/${locale}`);
            }
        } catch (err: unknown) {
            const error = err as { status?: number; data?: { message?: string } };
            const status = error?.status;
            const message = error?.data?.message;

            if (status === 401 || status === 400 || status === 403) {
                const msg = message || t('errors.invalidCredentials');
                setError('email', { message: msg });
                setError('password', { message: msg });
                toast.error(msg);
            } else if (status === 422) {
                toast.error('chech your info');
            } else {
                toast.error(t('errors.generic'));
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" autoComplete="off" noValidate>
    <Input
        label={t('email')}
        type="email"
        placeholder={t('emailPlaceholder')}
        icon={<Mail size={16} />}
        error={errors.email?.message}
        autoComplete="new-password"  
        {...register('email')}
    />

    <Input
        label={t('password')}
        type="password"
        placeholder={t('passwordPlaceholder')}
        icon={<Lock size={16} />}
        error={errors.password?.message}
        autoComplete="new-password"  
        {...register('password')}
    />

    <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={isLoading}
        className="bg-black text-white cursor-pointer mt-2 w-full"
    >
        {isLoading ? t('loading') : t('submit')}
    </Button>
</form>
    );
};