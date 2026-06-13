'use client';

import { Provider } from 'react-redux';
import { store } from '@/store';
import { Toaster } from 'react-hot-toast';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            {children}
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 4000,
                    style: {
                        borderRadius: '12px',
                        fontSize: '14px',
                        fontWeight: '500',
                    },
                    success: {
                        style: { background: '#ECFDF5', color: '#065F46', border: '1px solid #A7F3D0' },
                    },
                    error: {
                        style: { background: '#FEF2F2', color: '#991B1B', border: '1px solid #FECACA' },
                    },
                }}
            />
        </Provider>
    );
}
