'use client';

import React, { useEffect, useState } from 'react';
import './globals.css'; 
import Hero from '@/components/Hero';
import { FaSun, FaMoon } from 'react-icons/fa';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Page() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;

    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <div className="min-h-screen relative bg-theme text-theme transition-all duration-300">
      {/* Theme toggle button */}
      <button
        onClick={toggleTheme}
        className="absolute top-6 right-6 p-3 rounded-full shadow-theme border-default bg-card text-theme z-50 transition-all hover:scale-110 focus:outline-none"
        aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
      >
        {isDark ? (
          <FaSun className="text-yellow-400 w-5 h-5" />
        ) : (
          <FaMoon className="text-indigo-700 w-5 h-5" />
        )}
      </button>
      
      {/* Main content */}
      <div className="flex items-center justify-center w-full h-full">
        <Hero />
        
      </div>
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}
