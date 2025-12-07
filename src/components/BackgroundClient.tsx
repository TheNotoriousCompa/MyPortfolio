'use client';

import dynamic from 'next/dynamic';

// CSS gradient fallback that displays while Three.js loads
const GradientFallback = () => (
    <div
        className="fixed inset-0 -z-10"
        style={{
            background: 'linear-gradient(135deg, #1a1b1c 0%, #252628 25%, #1a1b1c 50%, #2a2b2d 75%, #1a1b1c 100%)',
            backgroundSize: '400% 400%',
        }}
    />
);

const Silk = dynamic(() => import('@/components/background-silk'), {
    ssr: false,
    loading: () => <GradientFallback />
});

export default function BackgroundClient() {
    return (
        <div className="fixed inset-0 -z-10">
            <Silk
                speed={2}
                scale={1.5}
                color={'#1a1b1c'}
                noiseIntensity={0.5}
                rotation={20}
            />
        </div>
    );
}
