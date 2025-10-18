import React from 'react';
import { motion } from 'framer-motion';

export default function FeatureCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="w-16 h-16 bg-[#D4AF37] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
        <Icon size={32} className="text-[#D4AF37]" />
      </div>
      <h3 
        className="text-2xl font-bold text-[#003E4E] mb-4"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        {title}
      </h3>
      <p 
        className="text-gray-700 leading-relaxed"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {description}
      </p>
    </motion.div>
  );
}