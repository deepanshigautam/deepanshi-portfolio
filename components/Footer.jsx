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

  useEffect(() => {
    setMounted(true);
  }, []);

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
      { threshold: 0.2 }
    );

    elementsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [mounted]);

  if (!mounted) {
    return (
      <footer className="bg-theme py-8 md:py-12 px-4 md:px-8 relative overflow-hidden border-t border-theme-border/20">
        <div className="max-w-7xl mx-auto">
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
      className="bg-gray-400/10 py-8 md:py-12 px-4 md:px-8 relative overflow-hidden border-t border-theme-border/20"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <style jsx global>{`
        @keyframes slideIn {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .animate-slideIn {
          animation: slideIn 0.7s ease-out forwards;
        }

        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .footer-link {
          position: relative;
          transition: all 0.2s ease;
        }
        
        .footer-link:hover {
          color: var(--accent-highlight);
        }
        
        .footer-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1.5px;
          bottom: -2px;
          left: 0;
          background: linear-gradient(to right, var(--accent-highlight), transparent);
          transition: width 0.3s ease;
          border-radius: 1px;
        }
        
        .footer-link:hover::after {
          width: 100%;
        }
      `}</style>

      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-theme-50/5 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[200px] bg-accent-1/5 rounded-full filter blur-[100px] mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[150px] bg-accent-2/5 rounded-full filter blur-[80px] mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Footer Links Grid - More compact layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-2 md:mb-8">
          {/* Logo and Tagline */}
          <div
            className="col-span-1 mb-6 md:mb-0 opacity-0 flex flex-col items-center md:items-start text-center md:text-left"
            ref={(el) => (elementsRef.current[0] = el)}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="relative w-6 h-6">
                <div className="absolute w-full h-full border border-accent-highlight rounded-full"></div>
                <div className="absolute w-full h-full rounded-full">
                  <div className="absolute top-1/2 left-1/2 w-1/2 h-0.5 bg-accent-highlight -translate-x-1/2 -translate-y-1/2 animate-spin-slow origin-left"></div>
                </div>
              </div>
              <h2 className="text-xl font-semibold text-theme">Deepanshi Gautam</h2>
            </div>
            <p className="text-sm text-theme-secondary mb-4">Let&apos;s create something extraordinary together.</p>
            
            {/* Contact CTA Button */}
            <Link href="#contact">
              <div className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-accent-highlight to-accent-1 text-white text-sm font-medium transition-all duration-300 hover:shadow-md hover:shadow-accent-highlight/10">
                <span>Get in Touch</span>
                <FontAwesomeIcon icon={faPaperPlane} className="ml-2 text-xs" />
              </div>
            </Link>
          </div>

          {/* Connect Column */}
          <div
            className="hidden md:block opacity-0"
            ref={(el) => (elementsRef.current[1] = el)}
          >
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-3 text-theme">Connect</h3>
            <ul className="space-y-2 text-theme-secondary text-sm">
              <li>
                <a
                  href="mailto:contact@deepanshi.com"
                  className="footer-link flex items-center gap-2"
                  aria-label="Email contact"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="w-3.5" />
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link flex items-center gap-2"
                  aria-label="LinkedIn profile"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="w-3.5" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/deepanshigautam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link flex items-center gap-2"
                  aria-label="GitHub profile"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-3.5" />
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Work Column */}
          <div
            className="hidden md:block opacity-0"
            ref={(el) => (elementsRef.current[2] = el)}
          >
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-3 text-theme">Work</h3>
            <ul className="space-y-2 text-theme-secondary text-sm">
              <li>
                <Link
                  href="#projects"
                  className="footer-link flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faCode} className="w-3.5" />
                  <span>Projects</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#resume"
                  className="footer-link flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faFileAlt} className="w-3.5" />
                  <span>Resume</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="footer-link flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faLightbulb} className="w-3.5" />
                  <span>Skills</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* More Column */}
          <div
            className="hidden md:block opacity-0"
            ref={(el) => (elementsRef.current[3] = el)}
          >
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-3 text-theme">More</h3>
            <ul className="space-y-2 text-theme-secondary text-sm">
              <li>
                <Link
                  href="#about"
                  className="footer-link flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faUser} className="w-3.5" />
                  <span>About Me</span>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link flex items-center gap-2"
                >
                  <span>Blog</span>
                </a>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="footer-link flex items-center gap-2"
                >
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Mobile Social Links - More compact */}
        <div 
          className="md:hidden flex justify-center space-x-4 mt-4 opacity-0"
          ref={(el) => (elementsRef.current[5] = el)}
        >
          <a href="mailto:contact@deepanshi.com" className="w-8 h-8 rounded-full bg-theme-50 flex items-center justify-center text-theme-secondary hover:bg-accent-highlight hover:text-white transition-colors duration-300">
            <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-theme-50 flex items-center justify-center text-theme-secondary hover:bg-accent-highlight hover:text-white transition-colors duration-300">
            <FontAwesomeIcon icon={faLinkedinIn} className="text-sm" />
          </a>
          <a href="https://github.com/deepanshigautam" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-theme-50 flex items-center justify-center text-theme-secondary hover:bg-accent-highlight hover:text-white transition-colors duration-300">
            <FontAwesomeIcon icon={faGithub} className="text-sm" />
          </a>
        </div>
        
        {/* Copyright notice */}
        <div className="text-center mt-6 text-theme-secondary text-xs opacity-0"
             ref={(el) => (elementsRef.current[6] = el)}>
          <p>© {mounted ? new Date().getFullYear() : "2025"} Deepanshi Gautam. All rights reserved.</p>
        </div>
      </div>

      {/* Reduced height DEEPANSHI text */}
      <div 
        className="absolute bottom-0 left-0 right-0 overflow-hidden opacity-0 pointer-events-none" 
        ref={(el) => (elementsRef.current[4] = el)}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-theme via-transparent to-transparent z-10"></div>
          <h1 className="text-[3rem] md:text-8xl lg:text-[12rem] font-bold text-theme-lighter opacity-30 -mb-6 md:-mb-16 lg:-mb-24 text-center tracking-tight">
            DEEPANSHI<span className="align-top text-lg md:text-3xl">©</span>
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;