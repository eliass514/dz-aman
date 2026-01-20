'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FaHeart, FaHandsHelping, FaLeaf } from 'react-icons/fa';

export default function About() {
  const t = useTranslations('about');

  const cards = [
    {
      icon: <FaLeaf className="text-4xl text-aman-amber" />,
      title: t('mission.title'),
      description: t('mission.description')
    },
    {
      icon: <FaHeart className="text-4xl text-aman-amber" />,
      title: t('why.title'),
      description: t('why.description')
    },
    {
      icon: <FaHandsHelping className="text-4xl text-aman-amber" />,
      title: t('approach.title'),
      description: t('approach.description')
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
        <div className="w-full h-full bg-aman-taupe rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-aman-taupe mb-4 px-4">
            {t('heading')}
          </h2>
          <div className="w-24 h-1 bg-aman-amber mx-auto"></div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-aman-beige-light p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-6 flex justify-center">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-aman-taupe mb-4 text-center">
                {card.title}
              </h3>
              <p className="text-aman-taupe-light leading-relaxed text-center">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
