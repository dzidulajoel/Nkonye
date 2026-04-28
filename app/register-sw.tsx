// app/register-sw.tsx
'use client';

import { useEffect } from 'react';

export default function RegisterServiceWorker() {
        useEffect(() => {
                if ('serviceWorker' in navigator) {
                        navigator.serviceWorker
                                .register('/sw.js')
                                .then((registration) => {
                                        console.log('Service Worker registered:', registration);

                                        // Vérifie les mises à jour toutes les heures
                                        setInterval(() => {
                                                registration.update();
                                        }, 60 * 60 * 1000);
                                })
                                .catch((error) => {
                                        console.error('Service Worker registration failed:', error);
                                });
                }
        }, []);

        return null; // Ce composant ne rend rien
}