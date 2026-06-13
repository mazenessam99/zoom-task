"use client";

import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">

            <h1 className="text-[72px] font-bold text-black">404</h1>

            <p className="text-[18px] text-gray-600 mt-2">
                Page not found
            </p>

            <p className="text-[14px] text-gray-500 mt-1">
                The page you are looking for doesn’t exist.
            </p>

            <Link
                href="/"
                className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full"
            >
                Go Home
            </Link>

        </div>
    );
}