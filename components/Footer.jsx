'use client'
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faCode, 
  faFileAlt,
  faLightbulb,
  faUser,
  faPaperPlane 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub, 
  faLinkedinIn, 
  faTwitter 
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const footerRef = useRef(null);
  const elementsRef = useRef([]);
  const [mounted, setMounted] = useState(false);

  // Mark component as mounted after first render
  useEffect(() => {
    setMounted(true);
  }, []);

  // Only set up intersection observer after component is mounted
  useEffect(() => {
    if (!mounted) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideIn');
          }
        });
      },
      { threshold: 0.3 }
    );

    elementsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [mounted]);

  // Show a simplified version during initial render
  if (!mounted) {
    return (
      <footer className="bg-theme-300 py-12 md:py-20 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* A minimal placeholder that matches the server render */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="text-xl md:text-2xl text-theme mb-2">
                Let&apos;s create something
              </div>
              <p className="text-xl md:text-2xl text-theme">extraordinary together.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer
      ref={footerRef}
      className="bg-theme-300 py-12 md:py-20 px-4 md:px-8 relative overflow-hidden"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <style>
        {`
          @keyframes slideIn {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          .animate-slideIn {
            animation: slideIn 0.8s ease-out forwards;
          }

          .animate-spin-slow {
            animation: spin 3s linear infinite;
          }

          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          .footer-link {
            position: relative;
          }
          
          .footer-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 1px;
            bottom: -2px;
            left: 0;
            background: var(--accent-highlight);
            transition: width 0.3s ease;
          }
          
          .footer-link:hover::after {
            width: 100%;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-24 h-24 rounded-full bg-accent-1 opacity-20 blur-xl"></div>
        <div className="absolute bottom-40 left-10 w-32 h-32 rounded-full bg-accent-2 opacity-20 blur-xl"></div>
        
        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-2 md:mb-10 lg:mb-16">
          {/* Logo and Tagline - Visible on all screens */}
          <div
            className="col-span-1 md:col-span-1 mb-8 md:mb-0 opacity-0 flex flex-col items-center md:items-start text-center md:text-left"
            ref={(el) => (elementsRef.current[0] = el)}
          >
            <div className="relative w-6 h-6 mb-2">
              <div className="absolute w-full h-full border-2 border-theme rounded-full" />
              <div className="absolute w-full h-full rounded-full">
                <div className="absolute top-1/2 left-1/2 w-1/2 h-0.5 bg-theme -translate-x-1/2 -translate-y-1/2 animate-spin-slow origin-left" />
              </div>
            </div>
            <h2 className="text-xl md:text-2xl text-theme mb-2">
              Let&apos;s create something
            </h2>
            <p className="text-xl md:text-2xl text-theme">extraordinary together.</p>
            
            {/* Contact CTA Button */}
            <Link href="#contact">
              <div className="mt-6 inline-flex items-center px-5 py-3 rounded-lg bg-accent-highlight text-white font-medium transition-transform duration-300 hover:scale-105 transform hover:-translate-y-1">
                <span>Get in Touch</span>
                <FontAwesomeIcon icon={faPaperPlane} className="ml-2 text-sm" />
              </div>
            </Link>
          </div>

          {/* Connect Column - Hidden on mobile */}
          <div
            className="hidden md:block opacity-0"
            ref={(el) => (elementsRef.current[1] = el)}
          >
            <h3 className="text-xs uppercase tracking-wider mb-4 text-theme-secondary">Connect</h3>
            <ul className="space-y-3 text-theme">
              <li>
                <a
                  href="mailto:contact@deepanshi.com"
                  className="footer-link flex items-center gap-2 hover:text-accent-highlight transition-all duration-300"
                  aria-label="Email contact"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="w-4" />
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link flex items-center gap-2 hover:text-accent-highlight transition-all duration-300"
                  aria-label="LinkedIn profile"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="w-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/deepanshigautam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link flex items-center gap-2 hover:text-accent-highlight transition-all duration-300"
                  aria-label="GitHub profile"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-4" />
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Work Column - Hidden on mobile */}
          <div
            className="hidden md:block opacity-0"
            ref={(el) => (elementsRef.current[2] = el)}
          >
            <h3 className="text-xs uppercase tracking-wider mb-4 text-theme-secondary">Work</h3>
            <ul className="space-y-3 text-theme">
              <li>
                <Link
                  href="#projects"
                  className="footer-link flex items-center gap-2 hover:text-accent-highlight transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faCode} className="w-4" />
                  <span>Projects</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#resume"
                  className="footer-link flex items-center gap-2 hover:text-accent-highlight transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faFileAlt} className="w-4" />
                  <span>Resume</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="footer-link flex items-center gap-2 hover:text-accent-highlight transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faLightbulb} className="w-4" />
                  <span>Skills</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* More Column - Hidden on mobile */}
          <div
            className="hidden md:block opacity-0"
            ref={(el) => (elementsRef.current[3] = el)}
          >
            <h3 className="text-xs uppercase tracking-wider mb-4 text-theme-secondary">More</h3>
            <ul className="space-y-3 text-theme">
              <li>
                <Link
                  href="#about"
                  className="footer-link flex items-center gap-2 hover:text-accent-highlight transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faUser} className="w-4" />
                  <span>About Me</span>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link flex items-center gap-2 hover:text-accent-highlight transition-all duration-300"
                >
                  <span>Blog</span>
                </a>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="footer-link flex items-center gap-2 hover:text-accent-highlight transition-all duration-300"
                >
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Mobile Social Links - Visible only on mobile */}
        <div className="md:hidden flex justify-center space-x-6 mt-6 opacity-0"
             ref={(el) => (elementsRef.current[5] = el)}>
          <a href="mailto:contact@deepanshi.com" className="w-10 h-10 rounded-full bg-theme-50 flex items-center justify-center text-theme hover:bg-accent-highlight hover:text-white transition-colors duration-300">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-theme-50 flex items-center justify-center text-theme hover:bg-accent-highlight hover:text-white transition-colors duration-300">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://github.com/deepanshigautam" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-theme-50 flex items-center justify-center text-theme hover:bg-accent-highlight hover:text-white transition-colors duration-300">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        
        {/* Copyright notice */}
        <div className="text-center mt-10 text-theme-secondary text-sm opacity-0"
             ref={(el) => (elementsRef.current[6] = el)}>
          <p>© {mounted ? new Date().getFullYear() : "2025"} Deepanshi Gautam. All rights reserved.</p>
        </div>
      </div>

      {/* Large DEEPANSHI text at bottom - Visible on all screens - Keeping exactly as is */}
      <div 
        className="absolute bottom-0 left-0 right-0 overflow-hidden opacity-0" 
        ref={(el) => (elementsRef.current[4] = el)}
      >
        <h1 className="text-[4rem] md:text-9xl lg:text-[16rem] font-bold text-theme-lighter opacity-50 -mb-10 md:-mb-24 lg:-mb-32 text-center tracking-tighter transition-transform duration-700 hover:scale-105">
          DEEPANSHI<span className="align-top text-2xl md:text-4xl">©</span>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;