'use client';

import { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Input from './Input';
import Button from './Button';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

export default function WaitlistForm() {
  const t = useTranslations('waitlist.form');
  const waitlistT = useTranslations('waitlist');
  const [formData, setFormData] = useState({
    email: '',
    wilaya: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus('loading');

    try {
      // Your Formspree endpoint
      const response = await fetch('https://formspree.io/f/mdaaoqrv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ email: '', wilaya: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <section id="waitlist" className="py-20 px-6 bg-gradient-to-b from-aman-beige-light to-white">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-aman-taupe mb-4 px-4">
            {waitlistT('heading')}
          </h2>
          <p className="text-aman-taupe-light text-base sm:text-lg px-4">
            {waitlistT('description')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl"
        >
          {status === 'success' ? (
            <div className="text-center py-8">
              <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
              <p className="text-xl text-aman-taupe">{t('success')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label={t('email')}
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                error={errors.email}
                placeholder={t('email')}
                required
              />

              <Input
                label={t('wilaya')}
                type="text"
                value={formData.wilaya}
                onChange={(e) => handleChange('wilaya', e.target.value)}
                placeholder={t('wilaya')}
              />

              <p className="text-sm text-aman-taupe-light text-center">
                {t('privacy')}
              </p>

              <Button
                type="submit"
                fullWidth
                disabled={status === 'loading'}
              >
                {status === 'loading' ? '...' : t('submit')}
              </Button>

              {status === 'error' && (
                <div className="flex items-center justify-center gap-2 text-red-500">
                  <FaExclamationCircle />
                  <p>{t('error')}</p>
                </div>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
