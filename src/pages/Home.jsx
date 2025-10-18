import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Target, Shield, Zap, Linkedin, ArrowUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import CTAButton from '../components/CTAButton';
import FeatureCard from '../components/FeatureCard';
import ContactForm from '../components/ContactForm';

export default function Home() {
  useEffect(() => {
    // Add custom fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Add SEO metadata
    document.title = 'The Averkin Approach - Revolutionize Your Business Operations';

    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = "Ilana Averkin's framework for mastering strategy, risk and execution. Turn vision into measurable results. Available on Amazon.";
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'Ilana Averkin, The Averkin Approach, strategy, execution, business operations, leadership, innovation, risk management';
    document.head.appendChild(metaKeywords);

    // Open Graph tags
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = 'The Averkin Approach - From Strategy to Execution';
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = 'Revolutionize your business operations with Ilana Averkin\'s model for strategy, risk and execution excellence.';
    document.head.appendChild(ogDescription);

    const ogImage = document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.content = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68e7957b5765926bdb5b7456/a53e71974_digitalbookcover.jpg';
    document.head.appendChild(ogImage);

    // Favicon
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68e7957b5765926bdb5b7456/ed63e45b8_TAAlogotransperent.png';
    document.head.appendChild(favicon);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #003E4E 0%, #008B9A 100%)'
        }}>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#003E4E] opacity-30" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68e7957b5765926bdb5b7456/ed63e45b8_TAAlogotransperent.png"
            alt="The Averkin Approach" className="mb-12 mx-auto pt-16 w-64 md:w-80" />



          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}>

            Revolutionize Your Business Operations
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            style={{ fontFamily: 'Inter, sans-serif' }}>

            A proven framework for mastering strategy, risk and execution that is built for leaders who turn vision into measurable results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center">

            <CTAButton href="https://a.co/d/cxjaBBu">
              Buy Hardcover on Amazon
            </CTAButton>
            <CTAButton href="https://a.co/d/cxjaBBu">
              Buy Kindle Edition
            </CTAButton>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            onClick={() => scrollToSection('#about')}
            className="bg-transparent text-white/70 hover:text-white transition-colors animate-bounce">
            <ChevronDown size={40} />
          </motion.button>
        </div>
      </section>

      {/* About the Book Section */}
      <section id="about" className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>

              <h2
                className="text-4xl md:text-5xl font-bold text-[#003E4E] mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}>

                About the Book
              </h2>
              <div
                className="text-lg text-gray-700 leading-relaxed space-y-4 mb-8"
                style={{ fontFamily: 'Inter, sans-serif' }}>

                <p>
                  <em>The Averkin Approach</em> is a blueprint for leaders who refuse to let great strategy die in execution. Drawing on decades of experience across aerospace, defence and innovation ecosystems, Ilana Averkin introduces a practical framework built on three pillars: Strategy, Risk and Execution that transforms ambition into measurable results.
                </p>
                <p>
                  Whether you lead a fast-growing startup or a global enterprise, this book shows you how to align vision with action, anticipate risk before it strikes and build the business-operations discipline that drives consistent performance.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href="https://a.co/d/cxjaBBu">
                  Buy Hardcover
                </CTAButton>
                <CTAButton href="https://a.co/d/cxjaBBu">
                  Buy Kindle
                </CTAButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-end">

              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68e7957b5765926bdb5b7456/a53e71974_digitalbookcover.jpg"
                alt="The Averkin Approach Book Cover"
                className="w-full max-w-md rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300" />

            </motion.div>
          </div>
        </div>
      </section>

      {/* The Averkin Model Section */}
      <section id="model" className="py-20 md:py-32 px-6 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">

            <h2
              className="text-4xl md:text-5xl font-bold text-[#003E4E] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}>

              The Averkin Strategy & Business Operations Model
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}>

              A systematic approach to bridging strategy and execution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Target}
              title="Strategy"
              description="Define clarity and align every layer of the organization"
              delay={0} />

            <FeatureCard
              icon={Shield}
              title="Risk"
              description="Anticipate volatility and convert uncertainty into advantage"
              delay={0.2} />

            <FeatureCard
              icon={Zap}
              title="Execution"
              description="Deliver measurable outcomes with precision and accountability"
              delay={0.4} />

          </div>
        </div>
      </section>

      {/* About Ilana Section */}
      <section id="author" className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-start">

              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68e7957b5765926bdb5b7456/93b974142_IlanaAverkin-photo2025.jpg"
                alt="Ilana Averkin"
                className="w-full max-w-md rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300" />

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>

              <h2
                className="text-4xl md:text-5xl font-bold text-[#003E4E] mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}>

                Meet Ilana Averkin
              </h2>
              <div
                className="text-lg text-gray-700 leading-relaxed space-y-4 mb-6"
                style={{ fontFamily: 'Inter, sans-serif' }}>

                <p>
                  Ilana Averkin is a global business operations strategist and systems thinker with more than two decades of experience leading large-scale transformations across aerospace, defence and technology sectors.
                </p>
                <p>
                  She has led over $1 billion in strategic investments, built innovation centers and partnered with hubs that connect tech, industry & government and developed frameworks that turn complexity into results.
                </p>
                <p>
                  Ilana's <em>Averkin Approach</em> empowers leaders to bridge the gap between vision and execution to sustain momentum in a world of constant change.
                </p>
              </div>
              <p
                className="text-xl italic text-[#D4AF37] font-semibold"
                style={{ fontFamily: 'Playfair Display, serif' }}>

                Turning strategy into execution through systems thinking.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 px-6 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12">

            <h2
              className="text-4xl md:text-5xl font-bold text-[#003E4E] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}>

              Stay Connected
            </h2>
            <p
              className="text-xl text-gray-600"
              style={{ fontFamily: 'Inter, sans-serif' }}>

              Get updates, insights and upcoming resources from Ilana
            </p>
          </motion.div>

          <ContactForm />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-8">

            <p
              className="text-gray-600 mb-4"
              style={{ fontFamily: 'Inter, sans-serif' }}>

              For inquiries, contact:{' '}
              <a
                href="mailto:ilana@theaverkinapproach.com"
                className="text-[#D4AF37] hover:underline font-semibold">

                ilana@theaverkinapproach.com
              </a>
            </p>
            <a
              href="https://www.linkedin.com/in/ilanaaverkin/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#003E4E] hover:text-[#D4AF37] transition-colors duration-300">

              <Linkedin size={24} />
              <span style={{ fontFamily: 'Inter, sans-serif' }}>Connect on LinkedIn</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 px-6 text-center relative"
        style={{
          background: 'linear-gradient(135deg, #003E4E 0%, #008B9A 100%)'
        }}>

        <div className="max-w-7xl mx-auto">
          <p
            className="text-white mb-4"
            style={{ fontFamily: 'Inter, sans-serif' }}>

            © 2025 The Averkin Approach. All Rights Reserved.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="https://www.linkedin.com/in/ilanaaverkin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:text-white transition-colors duration-300">

              <Linkedin size={24} />
            </a>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="bg-[#D4AF37] text-white p-3 rounded-full hover:bg-[#C19B2A] transition-all duration-300 shadow-lg">

            <ArrowUp size={24} />
          </motion.button>
        </div>
      </footer>
    </div>);

}
