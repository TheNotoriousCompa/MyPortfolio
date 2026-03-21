import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Gallery from '@/components/sections/gallery';
import { Metadata } from 'next';
import { Locale, getDictionary } from '@/lib/get-dictionaries';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const params = await props.params;
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);

  return {
    title: dict.gallery?.metaTitle || 'Gallery | Maurizio Compagnone — Portfolio',
    description: dict.gallery?.metaDescription || '3D renders and designs gallery by Maurizio Compagnone. Explore custom mechanical keyboard designs.',
    alternates: {
      canonical: `https://mcompagnone.netlify.app/${locale}/gallery`,
      languages: {
        'it': 'https://mcompagnone.netlify.app/it/gallery',
        'en': 'https://mcompagnone.netlify.app/en/gallery',
      },
    },
    openGraph: {
      title: dict.gallery?.metaTitle || 'Gallery | Maurizio Compagnone — Portfolio',
      description: dict.gallery?.metaDescription || '3D renders and designs gallery by Maurizio Compagnone. Explore custom mechanical keyboard designs.',
      type: 'website',
      url: `https://mcompagnone.netlify.app/${locale}/gallery`,
    },
  };
}

export default async function GalleryPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);

  return (
    <div className="relative min-h-screen">
      <main className="relative z-10 flex flex-col min-h-[calc(100vh-4rem)]">

        {/* Back Button Overlay */}
        <Link
          href={`/${locale}`}
          className="absolute top-6 left-6 flex items-center gap-2 text-emerald-500 hover:text-emerald-400 font-mono transition-colors z-50 bg-black/40 px-3 py-2 rounded-lg backdrop-blur-md"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{dict.gallery?.back || 'Back'}</span>
        </Link>

        <div className="flex-grow flex flex-col justify-center items-center px-4 pt-24 pb-12">
          <h1 className="sr-only">{dict.gallery?.title || '3D Keyboard Gallery'}</h1>
          <p className="font-mono font-bold text-lg text-gray-300 text-center max-w-2xl mb-12">
            {dict.gallery?.description || 'Here there are some of my 3D renders made with Blender of custom keyboards of various designs!'}
          </p>
          <div className="w-full">
            <Gallery dict={dict} />
          </div>
        </div>
      </main>
    </div>
  );
}
