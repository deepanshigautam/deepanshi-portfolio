import React, { useEffect, useRef } from 'react';

const Footer = () => {
  const footerRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
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
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-neutral-300 text-neutral-800 py-8 md:py-16 px-4 md:px-8 relative overflow-hidden"
    >
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
        `}
      </style>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-2 md:mb-10 lg:mb-16">
          {/* Logo and Tagline - Visible on all screens */}
          <div
            className="col-span-1 md:col-span-1 mb-8 md:mb-0 opacity-0 flex flex-col items-center md:items-start text-center md:text-left"
            ref={(el) => (elementsRef.current[0] = el)}
          >
             <div className="relative w-6 h-6 mb-2">
      <div className="absolute w-full h-full border-2 border-neutral-600 rounded-full " />
      <div className="absolute w-full h-full rounded-full">
        <div className="absolute top-1/2 left-1/2 w-1/2 h-0.5 bg-neutral-600 -translate-x-1/2 -translate-y-1/2 animate-spin-slow origin-left" />
      </div>
    </div>
            <h2 className="text-xl md:text-2xl text-neutral-800 mb-2">
              Let&apos;s create something
            </h2>
            <p className="text-xl md:text-2xl text-neutral-800">extraordinary together.</p>
          </div>

          {/* Connect Column - Hidden on mobile */}
          <div
            className="hidden md:block opacity-0"
            ref={(el) => (elementsRef.current[1] = el)}
          >
            <h3 className="text-xs uppercase tracking-wider mb-4 text-neutral-600">Connect</h3>
            <ul className="space-y-2 text-neutral-800">
              {['Email', 'LinkedIn', 'GitHub'].map((text, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-neutral-100 transition-all duration-300 hover:scale-105 inline-block"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Work Column - Hidden on mobile */}
          <div
            className="hidden md:block opacity-0"
            ref={(el) => (elementsRef.current[2] = el)}
          >
            <h3 className="text-xs uppercase tracking-wider mb-4 text-neutral-600">Work</h3>
            <ul className="space-y-2 text-neutral-800">
              {['Projects', 'Resume', 'Skills'].map((text, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-neutral-100 transition-all duration-300 hover:scale-105 inline-block"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Column - Hidden on mobile */}
          <div
            className="hidden md:block opacity-0"
            ref={(el) => (elementsRef.current[3] = el)}
          >
            <h3 className="text-xs uppercase tracking-wider mb-4 text-neutral-600">More</h3>
            <ul className="space-y-2 text-neutral-800">
              {['About Me', 'Blog', 'Contact'].map((text, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-neutral-100 transition-all duration-300 hover:scale-105 inline-block"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Large DEEPANSHI text at bottom - Visible on all screens */}
      <div 
        className="absolute bottom-0 left-0 right-0 overflow-hidden opacity-0" 
        ref={(el) => (elementsRef.current[4] = el)}
      >
        <h1 className="text-[4rem] md:text-9xl lg:text-[16rem] font-bold text-neutral-600 -mb-10 md:-mb-24 lg:-mb-32 text-center tracking-tighter opacity-90 transition-transform duration-700 hover:scale-105">
          DEEPANSHI<span className="align-top text-2xl md:text-4xl">©</span>
        </h1>
      </div>
     
    </footer>
  );
};

export default Footer;