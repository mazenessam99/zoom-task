import React from 'react';

interface SkeletonProps {
    className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => (
    <div
        className={`animate-pulse rounded-lg bg-gray-200 ${className}`}
    />
);

export const AdminSkeleton = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-sm space-y-6">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-px w-full" />
            {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-6 w-full" />
                </div>
            ))}
        </div>
    </div>
);

export const LandingSkeleton = () => (
    <div className="min-h-screen">
        <div className="h-16 bg-white border-b">
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center gap-8">
                <Skeleton className="h-8 w-32" />
                <div className="flex gap-6 ml-auto">
                    {[...Array(5)].map((_, i) => <Skeleton key={i} className="h-4 w-16" />)}
                </div>
            </div>
        </div>
        <div className="h-125 bg-gray-100 mx-6 mt-6 rounded-3xl" />
        <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => <Skeleton key={i} className="h-32" />)}
        </div>
    </div>
);
