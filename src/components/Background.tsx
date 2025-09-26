'use client';

import dynamic from 'next/dynamic';

const Silk = dynamic(() => import('@/components/background-silk'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black -z-10" />
});

export default function Background() {
  return (
    <div className="fixed inset-0 w-full h-full [mask-size:40px] overflow-hidden z-0">
      <Silk
        speed={3}
        scale={3.5}
        color="#1a1b1c"
        noiseIntensity={1}
        rotation={20}
      />
    </div>
  );
}
