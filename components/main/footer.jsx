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
      className="bg-[#d0d0d0] text-[#2c2c2c] py-16 px-8 relative overflow-hidden"
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

          .animate-fadeIn {
            animation: fadeIn 1s ease-in-out forwards;
          }

          .animate-spin-slow {
            animation: spinSlow 3s linear infinite;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {/* Logo and Tagline */}
          <div
            className="mb-16 opacity-0"
            ref={(el) => (elementsRef.current[0] = el)}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 border-2 border-[#444444] rounded-full animate-spin-slow"></div>
            </div>
            <h2 className="text-2xl text-[#2c2c2c] mb-2">
              Let&apos;s create something
            </h2>
            <p className="text-2xl text-[#2c2c2c]">extraordinary together.</p>
          </div>

          {/* Connect Column */}
          <div
            className="opacity-0"
            ref={(el) => (elementsRef.current[1] = el)}
          >
            <h3 className="text-xs uppercase tracking-wider mb-4 text-[#444444]">Connect</h3>
            <ul className="space-y-2 text-[#2c2c2c]">
              {['Email', 'LinkedIn', 'GitHub'].map((text, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-[#F2F2F2] transition-transform transform hover:scale-105 duration-300"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Work Column */}
          <div
            className="opacity-0"
            ref={(el) => (elementsRef.current[2] = el)}
          >
            <h3 className="text-xs uppercase tracking-wider mb-4 text-[#444444]">Work</h3>
            <ul className="space-y-2 text-[#2c2c2c]">
              {['Projects', 'Resume', 'Skills'].map((text, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-[#F2F2F2] transition-transform transform hover:scale-105 duration-300"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Column */}
          <div
            className="opacity-0"
            ref={(el) => (elementsRef.current[3] = el)}
          >
            <h3 className="text-xs uppercase tracking-wider mb-4 text-[#444444]">More</h3>
            <ul className="space-y-2 text-[#2c2c2c]">
              {['About Me', 'Blog', 'Contact'].map((text, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-[#F2F2F2] transition-transform transform hover:scale-105 duration-300"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Large DEEPANSHI text at bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden opacity-0" ref={(el) => (elementsRef.current[4] = el)}>
        <h1 className="text-[17rem] font-bold text-[#616161] -mb-44 px-4 tracking-tighter opacity-90 transition-transform transform hover:scale-105 duration-700">
          DEEPANSHI<span className="align-top text-4xl">©</span>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
