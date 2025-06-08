'use client'

export function BackgroundTexture() {
    return (
        <div 
            className="fixed inset-0"
            style={{
                backgroundImage: 'url(/textures/paper-texture.png)',
                backgroundRepeat: 'repeat',
                backgroundSize: '400px',
                opacity: 0.3,
                zIndex: -10,
                pointerEvents: 'none'
            }}
        />
    )
} 