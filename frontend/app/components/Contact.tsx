'use client';

import { useState } from 'react';
import RetroSection from './RetroSection';
import RetroCard from './RetroCard';
import RetroButton from './RetroButton';
import { submitContactForm } from '../utils/dataFetcher';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      // Using our dataFetcher utility to submit the contact form
      await submitContactForm({
        name: formData.name,
        email: formData.email,
        message: formData.message
      });
      
      setSubmitStatus('success');
      setSubmitMessage('Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      setSubmitMessage('There was an error sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);

      // Reset status after 5 seconds
      setTimeout(() => {
        if (setSubmitStatus) { // Check if component is still mounted
          setSubmitStatus('idle');
          setSubmitMessage('');
        }
      }, 5000);
    }
  };

  return (
    <RetroSection id="contact" title="Get In Touch" variant="light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
          Have a question or want to work together? Feel free to contact me!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <RetroCard variant="glass" className="p-8">
            <h3 className="text-2xl font-bold font-[family-name:var(--font-orbitron)] mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              Contact Information
            </h3>

            <div className="space-y-8">
              <div className="flex items-start group hover-glow transition-all">
                <div className="bg-gradient-to-r from-purple-400 to-indigo-400 p-3 rounded-full mr-4 shadow-lg shadow-purple-400/20">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-200 font-[family-name:var(--font-orbitron)]">Location</h4>
                  <p className="text-gray-400 mt-1 font-[family-name:var(--font-vt323)] text-lg">Kandy, Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-start group hover-glow transition-all">
                <div className="bg-gradient-to-r from-blue-400 to-cyan-400 p-3 rounded-full mr-4 shadow-lg shadow-blue-400/20">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-200 font-[family-name:var(--font-orbitron)]">Email</h4>
                  <p className="text-gray-400 mt-1" style={{ fontFamily: 'var(--font-geist-mono)' }}>madu.shanika0502@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start group hover-glow transition-all">
                <div className="bg-gradient-to-r from-pink-400 to-purple-400 p-3 rounded-full mr-4 shadow-lg shadow-pink-400/20">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-200 font-[family-name:var(--font-orbitron)]">Phone</h4>
                  <p className="text-gray-400 mt-1 font-[family-name:var(--font-geist-mono)]">+94 74 042 4409</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-orbitron)] mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/shani-0328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-gray-800 to-gray-900 text-cyan-300 p-3 rounded-full hover:-translate-y-1 transition-all shadow-lg shadow-gray-800/50 electric-border"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/shanika-wijenayake-999331213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 rounded-full hover:-translate-y-1 transition-all shadow-lg shadow-blue-600/50 electric-border"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white p-3 rounded-full hover:-translate-y-1 transition-all shadow-lg shadow-cyan-400/50 electric-border"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>
          </RetroCard>

          <RetroCard variant="light" className="p-8 shadow-lg">
            <h3 className="text-2xl font-bold font-[family-name:var(--font-orbitron)] mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2 font-[family-name:var(--font-orbitron)]">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-white/70 backdrop-blur-sm ${errors.name ? 'border-red-500' : 'border-blue-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cyber-input`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2 font-[family-name:var(--font-orbitron)]">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-white/70 backdrop-blur-sm ${errors.email ? 'border-red-500' : 'border-blue-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cyber-input`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 text-sm font-medium mb-2 font-[family-name:var(--font-orbitron)]">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/70 backdrop-blur-sm border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cyber-input"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2 font-[family-name:var(--font-orbitron)]">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-2 bg-white/70 backdrop-blur-sm ${errors.message ? 'border-red-500' : 'border-blue-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cyber-input`}
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <RetroButton
                type="submit"
                disabled={isSubmitting}
                variant="primary"
                fullWidth
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </RetroButton>

              {submitStatus !== 'idle' && (
                <div className={`mt-4 p-3 rounded-lg ${submitStatus === 'success'
                  ? 'bg-gradient-to-r from-green-400/20 to-emerald-400/20 border border-green-400/30 text-green-600'
                  : 'bg-gradient-to-r from-red-400/20 to-pink-400/20 border border-red-400/30 text-red-600'
                  }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </RetroCard>
        </div>
      </div>
    </RetroSection>
  );
}
