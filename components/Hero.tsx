'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Logo from './Logo';
import AlgerianPattern from './AlgerianPattern';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background landscape */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/landscape-bg.svg" 
          alt="Algerian landscape" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 z-10">
        <AlgerianPattern opacity={0.03} />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36"
            >
              <Logo size={140} className="w-full h-full" />
            </motion.div>
          </div>

          {/* Arabic Title */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-arabic font-bold text-amber-600 mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t('titleArabic')}
          </motion.h1>

          {/* Latin Title */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-aman-taupe mb-6 tracking-widest drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {t('title')}
          </motion.h2>

          {/* Tagline */}
          <motion.p
            className="text-lg md:text-xl text-aman-taupe mb-12 max-w-2xl mx-auto drop-shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            {t('tagline')}
          </motion.p>

          {/* Hidden theme illustration (artsy mushrooms) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex justify-center"
          >
            <svg
              width="180"
              height="120"
              viewBox="0 0 180 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="opacity-90"
            >
              {/* Left mushroom */}
              <path
                d="M30 70 C22 60, 24 46, 38 40 C52 34, 70 40, 74 54 C76 62, 70 70, 60 72 C50 74, 38 74, 30 70 Z"
                fill="#B58A6B"
              />
              <path
                d="M48 72 C46 84, 46 98, 50 108 C52 112, 60 112, 62 108 C66 98, 66 84, 64 72 Z"
                fill="#D6C4A8"
              />
              <circle cx="44" cy="52" r="4" fill="#E8DCC8" />
              <circle cx="56" cy="48" r="3" fill="#E8DCC8" />

              {/* Center mushroom */}
              <path
                d="M80 66 C72 54, 76 36, 96 30 C116 24, 142 36, 146 56 C148 68, 136 76, 118 78 C102 80, 90 78, 80 66 Z"
                fill="#9E6B5A"
              />
              <path
                d="M104 78 C102 92, 102 104, 106 114 C108 118, 118 118, 120 114 C124 104, 124 92, 122 78 Z"
                fill="#E0CFB6"
              />
              <circle cx="98" cy="46" r="5" fill="#F1E6D7" />
              <circle cx="118" cy="42" r="4" fill="#F1E6D7" />
              <circle cx="130" cy="52" r="3" fill="#F1E6D7" />

              {/* Right mushroom */}
              <path
                d="M132 72 C128 60, 132 48, 148 44 C164 40, 176 50, 176 62 C176 72, 166 78, 152 80 C142 82, 136 80, 132 72 Z"
                fill="#B07C68"
              />
              <path
                d="M150 82 C148 92, 148 104, 150 110 C152 114, 160 114, 162 110 C164 104, 164 92, 162 82 Z"
                fill="#DCC8B1"
              />
              <circle cx="146" cy="56" r="3" fill="#EDE2D2" />
              <circle cx="160" cy="58" r="3" fill="#EDE2D2" />

              {/* Subtle baseline */}
              <path d="M20 112 C60 116, 120 116, 170 112" stroke="#6B6560" strokeWidth="1" opacity="0.4" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.2,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 0.5
          }}
        >
          <div className="w-6 h-10 border-2 border-aman-beige-light rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-aman-beige-light rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
