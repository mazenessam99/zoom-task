'use client';

import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { logout } from '@/store/authSlice';
import { LogOut } from 'lucide-react';

export default function LogoutButton() {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());

    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    Cookies.remove('userType');

    router.replace('/en/login');
  };

  return (

    <button
      onClick={handleLogout}

      className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-red-500 cursor-pointer transition-colors disabled:opacity-50"
    >
      <LogOut size={15} />
      <span className="hidden sm:inline">
        Logout
      </span>
    </button>
  );
}