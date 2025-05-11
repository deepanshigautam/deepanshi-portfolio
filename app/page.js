'use client';

import React, { useEffect, useState } from 'react';
import './globals.css'; 
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

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
      {/* Main content */}
      <div className="flex items-center justify-center w-full h-full">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
