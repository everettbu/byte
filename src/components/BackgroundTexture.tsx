'use client';

import { useState, useEffect } from 'react';

export function BackgroundTexture() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div 
            className="fixed inset-0 pointer-events-none"
            style={{
                backgroundImage: 'url(/paper-texture.png)',
                backgroundRepeat: 'repeat',
                backgroundSize: 'auto',
                opacity: 0.45,
                zIndex: 1
            }}
        />
    );
} 