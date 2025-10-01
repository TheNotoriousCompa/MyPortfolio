'use client';

import dynamic from 'next/dynamic';

const Silk = dynamic(() => import('@/components/background-silk'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black -z-10" />
});

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <Silk
        speed={2} 
        scale={1.5}
        color="#1a1b1c"
        noiseIntensity={0.5} 
        rotation={20}
      />
    </div>
  );
}