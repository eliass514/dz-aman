'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/lib/i18n';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Remove current locale from pathname and add new one
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  const getLanguageName = (loc: string) => {
    const names: Record<string, string> = {
      en: 'EN',
      ar: 'ع',
      fr: 'FR'
    };
    return names[loc] || loc.toUpperCase();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-aman-beige-light/80 backdrop-blur-md border-b border-aman-beige">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo/Brand - will scroll to top */}
        <a 
          href={`/${locale}`}
          className="text-2xl font-bold text-aman-taupe hover:text-aman-teal transition-colors"
        >
          <span className="font-arabic">أمان</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href={`#about`}
            className="text-aman-taupe hover:text-aman-teal transition-colors"
          >
            {t('about')}
          </a>
          <a 
            href={`#waitlist`}
            className="text-aman-taupe hover:text-aman-teal transition-colors"
          >
            {t('waitlist')}
          </a>
        </div>

        {/* Language Switcher */}
        <div className="flex items-center gap-2">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                locale === loc
                  ? 'bg-aman-teal text-white'
                  : 'text-aman-taupe hover:bg-aman-beige'
              }`}
            >
              {getLanguageName(loc)}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
