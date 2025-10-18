
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function CTAButton({ children, href, className = '' }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(212, 175, 55, 0.5)' }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center gap-2 bg-[#D4AF37] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-[#C19B2A] ${className}`}
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {children}
      <ExternalLink size={18} />
    </motion.a>
  );
}

