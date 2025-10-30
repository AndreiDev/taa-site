
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create mailto link
    const mailtoLink = `mailto:ilana@theaverkinapproach.com?subject=Contact from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ACompany: ${formData.company}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

    // Use a programmatic anchor click for better compatibility across browsers
    const a = document.createElement('a');
    a.href = mailtoLink;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Reflect intent (handoff to mail app)
    setIsSubmitted(true);

    // Keep form values so user can retry or copy the message
    setTimeout(() => {
      setIsSubmitted(false);
      // If you prefer to clear automatically, uncomment below:
      // setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-lg"
    >
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label 
              className="block text-sm font-semibold text-[#003E4E] mb-2"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Name *
            </label>
            <Input
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full"
              placeholder="Your name"
            />
          </div>
          <div>
            <label 
              className="block text-sm font-semibold text-[#003E4E] mb-2"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Email *
            </label>
            <Input
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label 
            className="block text-sm font-semibold text-[#003E4E] mb-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Company
          </label>
          <Input
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
            className="w-full"
            placeholder="Your company"
          />
        </div>

        <div>
          <label 
            className="block text-sm font-semibold text-[#003E4E] mb-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Message *
          </label>
          <Textarea
            required
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full min-h-[150px]"
            placeholder="Tell us how we can help..."
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-[#D4AF37] hover:bg-[#C19B2A] text-white font-semibold py-6 rounded-lg transition-all duration-300"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {isSubmitted ? (
            <>
              <CheckCircle className="mr-2" size={20} />
              Opening your email app…
            </>
          ) : (
            <>
              <Send className="mr-2" size={20} />
              Send Message
            </>
          )}
        </Button>
        <p className="text-sm text-[#003E4E] mt-2">
          If your email app didn’t open, email us at{' '}
          <a className="underline" href="mailto:ilana@theaverkinapproach.com">
            ilana@theaverkinapproach.com
          </a>.
        </p>
      </div>
    </motion.form>
  );
}
