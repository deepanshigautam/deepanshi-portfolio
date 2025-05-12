'use client'
import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';
import { FaSun, FaMoon, FaCode, FaUser, FaLaptopCode, FaEnvelope } from 'react-icons/fa';

export default function Navbar({ isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const navRef = useRef(null);
  const scrollTimeout = useRef(null);
  
  // Debounced scroll handler to improve performance
  const handleScroll = useCallback(() => {
    // Only update scrolled state when crossing the threshold
    const shouldBeScrolled = window.scrollY > 20;
    if (scrolled !== shouldBeScrolled) {
      setScrolled(shouldBeScrolled);
    }
    
    // Debounce section detection for better performance
    if (scrollTimeout.current) {
      window.cancelAnimationFrame(scrollTimeout.current);
    }
    
    scrollTimeout.current = window.requestAnimationFrame(() => {
      // Use simple and efficient section detection
      const sections = ['about', 'skills', 'projects', 'contact'];
      const viewportMid = window.innerHeight / 2;
      
      for (const id of sections) {
        const section = document.getElementById(id);
        if (!section) continue;
        
        const rect = section.getBoundingClientRect();
        // Check if section is in middle of viewport
        if (rect.top <= viewportMid && rect.bottom >= viewportMid) {
          if (activeSection !== id) {
            setActiveSection(id);
          }
          break;
        }
      }
    });
  }, [scrolled, activeSection]);
  
  // Set up scroll listener once
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        window.cancelAnimationFrame(scrollTimeout.current);
      }
    };
  }, [handleScroll]);
  
  // Menu items with icons for visual enhancement
  const navItems = [
    { name: 'About', href: '#about', icon: <FaUser className="text-accent-highlight" /> },
    { name: 'Skills', href: '#skills', icon: <FaCode className="text-accent-1" /> },
    { name: 'Projects', href: '#projects', icon: <FaLaptopCode className="text-accent-2" /> },
    { name: 'Contact', href: '#contact', icon: <FaEnvelope className="text-accent-highlight" /> },
  ];

  // Navigation link click handler - memoize
  const handleNavClick = useCallback((id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  }, []);

  // Handle outside click to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    // Prevent body scroll when menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      
      <nav 
        ref={navRef}
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'py-3 bg-card/80 shadow-lg border-b border-theme-border/30 backdrop-blur-lg'
            : 'py-5 bg-transparent'
        }`}
        aria-label="Main navigation"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute -left-16 -top-16 w-32 h-32 rounded-full bg-accent-highlight/10 blur-2xl transition-opacity duration-500 ${scrolled ? 'opacity-80' : 'opacity-0'}`}></div>
          <div className={`absolute right-1/4 -bottom-8 w-24 h-24 rounded-full bg-accent-1/10 blur-2xl transition-opacity duration-500 ${scrolled ? 'opacity-80' : 'opacity-0'}`}></div>
          <div className="absolute inset-0 lg:border-b md:border-b md:border-gray-100/10 lg:border-gray-100/10 "></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center">
            {/* Logo with enhanced design - Mobile optimized */}
            <div className="flex-shrink-0 relative z-10">
              <Link 
                href="#" 
                className="group flex items-center"
                aria-label="Deepanshi Gautam"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-accent-highlight via-accent-1 to-accent-2 p-0.5 rotate-3 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <div className="w-full h-full rounded-lg bg-card flex items-center justify-center">
                    <span className=" bg-clip-text bg-gradient-to-br from-accent-highlight to-accent-2 font-bold text-base sm:text-lg">DG</span>
                  </div>
                </div>
                <div className="ml-2 sm:ml-3 overflow-hidden">
                  <span className="block text-base sm:text-lg font-bold text-theme">
                    Deepanshi
                    <span className="text-accent-highlight inline-block transition-transform duration-300 group-hover:rotate-12 origin-bottom ml-0.5">.</span>
                  </span>
                  <div className="flex space-x-1 -mt-1">
                    <span className="text-[10px] sm:text-xs text-theme-secondary transition-transform duration-300 group-hover:translate-x-1">Web</span>
                    <span className="text-[10px] sm:text-xs text-accent-highlight">•</span>
                    <span className="text-[10px] sm:text-xs text-theme-secondary transition-transform duration-300 group-hover:translate-x-1">Developer</span>
                  </div>
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation - Enhanced design */}
            <div className="hidden md:flex items-center">
              <div className="relative p-1 rounded-full bg-theme-50/50 backdrop-blur-sm border border-theme-border/20 shadow-sm">
                {navItems.map((item) => (
                  <Link 
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 inline-flex items-center gap-2 ${
                      activeSection === item.href.substring(1) 
                        ? 'text-white shadow-md' 
                        : 'text-theme-secondary hover:text-theme'
                    } group`}
                    onClick={() => handleNavClick(item.href.substring(1))}
                  >
                    {/* Active background pill */}
                    {activeSection === item.href.substring(1) && (
                      <span className="absolute inset-0 bg-gradient-to-r from-accent-highlight to-accent-1 rounded-full -z-10"></span>
                    )}
                    <span className={`transition-opacity duration-300 ${activeSection === item.href.substring(1) ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'} mr-1`}>
                      {item.icon}
                    </span>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Theme Toggle + Mobile Menu Button */}
            <div className="flex items-center gap-2 sm:gap-3 mr-6">
              {/* Theme Toggle Button - Enhanced & size responsive */}
              <button
                onClick={toggleTheme}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl relative overflow-hidden group transition-all duration-300 ${
                  isDark 
                    ? 'bg-gradient-to-br from-indigo-900 to-slate-900 text-yellow-300' 
                    : 'bg-gradient-to-br from-blue-400 to-sky-300 text-amber-500'
                }`}
                aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
              >
                {/* Background animation */}
                <div className={`absolute inset-0 transition-opacity duration-300 opacity-20 ${
                  isDark 
                    ? 'bg-[radial-gradient(circle_at_25%_30%,_white_1px,_transparent_1px),radial-gradient(circle_at_75%_60%,_white_1px,_transparent_1px),radial-gradient(circle_at_50%_40%,_white_1px,_transparent_1px)]'
                    : 'bg-[radial-gradient(circle_at_20%_80%,_#fcf3b6_4px,_transparent_4px),radial-gradient(circle_at_80%_20%,_#fcf3b6_3px,_transparent_3px)]'
                }`} style={{ backgroundSize: '50px 50px' }}></div>
                
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className={`transition-all duration-500 absolute ${isDark ? '-rotate-90 scale-0' : 'rotate-0 scale-100'}`}>
                    <FaSun className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className={`transition-all duration-500 absolute ${!isDark ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`}>
                    <FaMoon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </button>
              
              {/* Mobile menu button - Enhanced & responsive */}
              <button 
                className={`md:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center relative overflow-hidden transition-all duration-300 ${
                  mobileMenuOpen 
                    ? 'bg-gradient-to-br from-accent-highlight to-accent-1 text-white shadow-lg'
                    : 'bg-theme-50 border border-theme-border text-theme shadow-sm hover:bg-theme-100'
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                <div className="relative h-5 w-5">
                  <span className={`absolute block h-0.5 rounded-full bg-current transition-all duration-300 w-5 ${
                    mobileMenuOpen ? 'top-2 rotate-45' : 'top-0.5'
                  }`}></span>
                  <span className={`absolute block h-0.5 rounded-full bg-current transition-all duration-300 w-3 top-2 right-0 ${
                    mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}></span>
                  <span className={`absolute block h-0.5 rounded-full bg-current transition-all duration-300 w-5 ${
                    mobileMenuOpen ? 'bottom-2 -rotate-45' : 'bottom-0.5'
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu - Side drawer for larger phones, dropdown for smaller phones */}
        <div 
          className={`fixed md:hidden top-[65px] sm:top-[72px] right-0 bottom-0 w-full xs:w-3/4 max-w-xs bg-card/95 backdrop-blur-md border-l border-theme-border shadow-2xl transition-transform duration-300 ease-in-out transform z-50 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } overflow-y-auto`}
          style={{ maxHeight: 'calc(100vh - 65px)' }}
        >
          <div className="px-4 py-5 space-y-2 h-full flex flex-col">
            {/* Mobile navigation header */}
            <div className="mb-3 pb-2 border-b border-theme-border/30">
              <h3 className="text-xs uppercase tracking-wider text-theme-secondary font-medium">Navigation</h3>
            </div>
            
            {/* Navigation links */}
            <div className="space-y-1.5">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-theme-secondary transition-all duration-200 ${
                    activeSection === item.href.substring(1) 
                      ? 'bg-gradient-to-r from-accent-highlight/10 to-accent-1/5 text-theme border border-accent-highlight/20 shadow-sm' 
                      : 'hover:bg-theme-50'
                  }`}
                  onClick={() => handleNavClick(item.href.substring(1))}
                >
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center bg-theme-50 border border-theme-border/30 shadow-sm">
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.name}</span>
                  {activeSection === item.href.substring(1) && (
                    <ChevronRight size={16} className="ml-auto text-accent-highlight" />
                  )}
                </Link>
              ))}
            </div>
            
            {/* Decorative elements at bottom */}
            <div className="mt-auto pt-4 border-t border-theme-border/30 flex flex-col space-y-4">
              <div className="text-xs text-theme-secondary/70 px-1">
                <p>© 2025 Deepanshi Gautam</p>
              </div>
              
              <div className="px-1">
                <div className="px-3 py-1.5 rounded-lg bg-theme-50/50 text-xs text-theme-secondary inline-flex items-center">
                  <span className={`inline-block w-2 h-2 rounded-full ${isDark ? 'bg-indigo-500' : 'bg-sky-400'} mr-2`}></span>
                  {isDark ? 'Dark Mode Active' : 'Light Mode Active'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}