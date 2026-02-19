import { Header } from '@/components/Header';
import Gallery from '@/components/sections/gallery';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Maurizio Compagnone — Portfolio',
  description: '3D renders and designs gallery by Maurizio Compagnone. Explore custom mechanical keyboard designs and 3D artwork created with Blender.',
  alternates: {
    canonical: 'https://mcompagnone.netlify.app/gallery',
  },
  openGraph: {
    title: 'Gallery | Maurizio Compagnone — Portfolio',
    description: '3D renders and designs gallery by Maurizio Compagnone. Explore custom mechanical keyboard designs and 3D artwork created with Blender.',
    type: 'website',
    url: 'https://mcompagnone.netlify.app/gallery',
  },
};

export default function GalleryPage() {
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'My Projects' },
    { id: 'contacts', label: 'Contacts' },
  ];

  return (
    <div className="relative min-h-screen">
      <main className="relative z-10 flex flex-col min-h-[calc(100vh-4rem)]">
        <Header
          sections={sections}
          isGalleryPage={true}
        />
        <div className="flex-grow flex flex-col justify-center items-center px-4 pt-16">
          <h1 className="sr-only">Maurizio Compagnone — 3D Keyboard Gallery</h1>
          <p className="font-mono font-bold text-lg text-gray-300 text-center max-w-2xl mb-12">
            Here there are some of my <span className="text-emerald-500">3D</span> renders made with Blender of custom keyboards of various designs!
          </p>
          <div className="w-full">
            <Gallery />
          </div>
        </div>
      </main>
    </div>
  );
}
