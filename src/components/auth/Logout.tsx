'use client';

import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { logout } from '@/store/authSlice';

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
      className="bg-white text-black px-4 py-2 rounded-lg"
    >
      Logout
    </button>
  );
}