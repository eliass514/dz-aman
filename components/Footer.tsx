'use client';

import { useTranslations } from 'next-intl';
import AlgerianPattern from './AlgerianPattern';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="relative bg-aman-taupe text-white py-16 px-6 overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 z-0">
        <AlgerianPattern opacity={0.1} />
      </div>

      {/* Top border pattern */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-aman-amber via-aman-teal to-aman-amber"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-1 gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold font-arabic mb-4">أمان</h3>
            <p className="text-aman-beige-light text-sm">
              {t('tagline')}
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-aman-beige/20 pt-8 text-center">
          <p className="text-aman-beige-light text-sm">
            {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
