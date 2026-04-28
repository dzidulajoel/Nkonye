import type { Metadata, Viewport } from 'next';
import RegisterServiceWorker from './register-sw';
import './globals.css';
import { Urbanist, Jost } from 'next/font/google';
import { colors } from '@/libs/color';

const urbanist = Urbanist({
    subsets: ['latin'],
    variable: '--font-urbanist',
});

const jost = Jost({
    subsets: ['latin'],
    variable: '--font-jost',
});


export const metadata: Metadata = {
    title: 'Mon App PWA',
    description: 'Application Progressive Web App',
    manifest: '/manifest.json',
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: 'MonApp',
    },
};

export const viewport: Viewport = {
    themeColor: '#000000',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
            <head>
                {/* Apple Touch Icon */}
                <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />

                {/* Favicon */}
                <link rel="icon" href="/icons/icon-192x192.png" />
            </head>
            <body className={`${urbanist.variable} ${jost.variable}`} style={{backgroundColor:colors.gray[50]}}>
                <RegisterServiceWorker />
                {children}
            </body>
        </html>
    );
}

