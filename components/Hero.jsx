'use client';
import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { Code, Terminal, Monitor, Database, Cpu, Layers, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import deepi from "../public/assets/deepanshiimg.jpg";

export default function Hero() {
  // Use refs instead of state for values that don't need to trigger re-renders
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const particlesRef = useRef([]);
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  
  // Generate particles once and store in ref
  useEffect(() => {
    const particles = [];
    for (let i = 0; i < 30; i++) { // Reduced from 50 to 30 particles
      particles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1, // Slightly smaller
        vx: Math.random() * 0.15 - 0.075, // Slower movement
        vy: Math.random() * 0.15 - 0.075, // Slower movement
        color: i % 3 === 0 ? 'var(--accent-1-solid)' : 
               i % 3 === 1 ? 'var(--accent-2-solid)' : 'var(--accent-3-solid)',
        opacity: Math.random() * 0.4 + 0.2
      });
    }
    particlesRef.current = particles;
    
    // Staggered reveal animation
    const visibilityTimer = setTimeout(() => setIsVisible(true), 200);
    const loadTimer = setTimeout(() => setIsLoaded(true), 800);
    
    return () => {
      clearTimeout(visibilityTimer);
      clearTimeout(loadTimer);
    };
  }, []);
  
  // Debounced mouse position tracking
  useEffect(() => {
    let lastUpdateTime = 0;
    const updateInterval = 50; // Only update position every 50ms
    
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastUpdateTime > updateInterval) {
        mousePositionRef.current = { x: e.clientX, y: e.clientY };
        lastUpdateTime = now;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Optimized particle animation using refs instead of state updates
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    const canvas = canvasRef.current;
    
    // Set canvas size with devicePixelRatio for retina displays
    const updateCanvasSize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    
    const animate = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);
      
      // Update particles without triggering component re-renders
      particlesRef.current.forEach(particle => {
        // Update position
        particle.x = (particle.x + particle.vx + 100) % 100;
        particle.y = (particle.y + particle.vy + 100) % 100;
        
        // Draw particle
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.beginPath();
        ctx.arc(
          particle.x * width / 100, 
          particle.y * height / 100, 
          particle.size, 
          0, 
          2 * Math.PI
        );
        ctx.fill();
      });
      
      rafRef.current = requestAnimationFrame(animate);
    };
    
    // Only start animation when component is visible
    if (isVisible) {
      rafRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [isVisible]);
  
  // Memoized calculation functions to prevent recalculations
  const calculateParallax = useCallback((factor = 20) => {
    if (typeof window === 'undefined') return {};
    
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = (mousePositionRef.current.x - centerX) / centerX;
    const deltaY = (mousePositionRef.current.y - centerY) / centerY;
    
    return {
      transform: `translate3d(${deltaX * factor}px, ${deltaY * factor}px, 0)`,
      willChange: 'transform'
    };
  }, []);
  
  const calculate3DEffect = useCallback((factor = 2, perspective = 1000) => {
    if (typeof window === 'undefined') return {};
    
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = (mousePositionRef.current.x - centerX) / centerX;
    const deltaY = (mousePositionRef.current.y - centerY) / centerY;
    
    return {
      transform: `perspective(${perspective}px) rotateX(${deltaY * factor}deg) rotateY(${-deltaX * factor}deg)`,
      willChange: 'transform'
    };
  }, []);
  
  // Memoize static data to prevent recreating arrays on each render
  const iconConfigs = useMemo(() => [
    { Icon: Code, size: 28, position: 'top-[15%] left-[10%]', delay: 'delay-100', color: 'text-accent-1-solid' },
    { Icon: Terminal, size: 22, position: 'top-[25%] right-[15%]', delay: 'delay-300', color: 'text-accent-2-solid' },
    { Icon: Monitor, size: 30, position: 'bottom-[30%] left-[20%]', delay: 'delay-500', color: 'text-accent-1-solid' },
    { Icon: Database, size: 24, position: 'bottom-[20%] right-[25%]', delay: 'delay-200', color: 'text-accent-3-solid' },
    { Icon: Cpu, size: 26, position: 'top-[40%] left-[25%]', delay: 'delay-400', color: 'text-accent-2-solid' },
    { Icon: Layers, size: 32, position: 'bottom-[15%] left-[15%]', delay: 'delay-600', color: 'text-accent-3-solid' },
  ], []);
  
  const techStack = useMemo(() => [
    { name: 'React', delay: 'delay-100', icon: '⚛️' },
    { name: 'Next.js', delay: 'delay-200', icon: '▲' },
    { name: 'Tailwind CSS', delay: 'delay-300', icon: '🌊' },
    { name: 'JavaScript', delay: 'delay-400', icon: '🟨' },
    { name: 'Node.js', delay: 'delay-500', icon: '🟢' },
  ], []);
  
  const socialLinks = useMemo(() => [
    { Icon: Github, href: 'https://github.com/deepanshigautam', label: 'GitHub', delay: 'delay-100' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/deepanshi-gautam-754532278/', label: 'LinkedIn', delay: 'delay-200' },
    { Icon: Mail, href: 'mailto:gdeepanshi7505@gmail.com', label: 'Email', delay: 'delay-300' },
  ], []);

  // Memoize parallax update
  useEffect(() => {
    if (!isVisible) return;
    
    // Use RAF for smooth parallax updates
    const updateParallax = () => {
      if (heroRef.current) {
        // Force repaint by accessing a property that requires layout
        heroRef.current.getBoundingClientRect();
      }
      rafRef.current = requestAnimationFrame(updateParallax);
    };
    
    updateParallax();
    
    return () => cancelAnimationFrame(rafRef.current);
  }, [isVisible]);
  
  // Reduced number of grid cells (200 instead of 400)
  const gridCells = useMemo(() => 
    Array.from({ length: 200 }).map((_, i) => ({
      key: i,
      isAccent: Math.random() > 0.85,
      scale: 1 + Math.random() * 0.2,
      delay: Math.random() * 5
    })), []
  );

  return (
    <div 
      ref={heroRef}
      className="relative w-full min-h-screen overflow-hidden bg-theme will-change-auto"
      style={{ 
        // use the content-visibility property to improve performance
        contentVisibility: 'auto', 
        containIntrinsicSize: '0 100vh' 
      }}
    >
      {/* Hardware-accelerated particle canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0 transform-gpu"
        style={{ willChange: 'transform' }}
      />
      
      {/* Simplified grid with fewer elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 transform-gpu"
          style={calculateParallax(5)}
        >
          <div className="w-full h-full grid grid-cols-[repeat(10,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))] gap-1">
            {gridCells.map(cell => (
              <div 
                key={cell.key} 
                className={`border border-theme-border rounded-sm ${
                  cell.isAccent ? 'bg-accent-highlight opacity-20' : 'opacity-0'
                }`}
                style={{
                  transform: `scale(${cell.scale})`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Optimized blob background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 -left-24 w-96 h-96 bg-accent-1 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob transform-gpu"
          style={calculateParallax(10)}
        />
        <div 
          className="absolute -top-20 right-0 w-96 h-96 bg-accent-2 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 transform-gpu"
          style={calculateParallax(15)}
        />
        <div 
          className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent-3 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 transform-gpu"
          style={calculateParallax(20)}
        />
      </div>
      
      {/* Simplified gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent-1 to-transparent opacity-10 animate-gradient-shift pointer-events-none"></div>
      
      {/* Floating tech icons - with reduced visibility on mobile */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        {iconConfigs.map(({ Icon, size, position, delay, color }, index) => (
          <div 
            key={index}
            className={`absolute ${position} ${color} opacity-0 ${isVisible ? 'animate-float' : ''} transform-gpu`}
            style={{
              animationDelay: `${index * 0.2}s`,
              opacity: isVisible ? 0.6 : 0,
              transition: 'opacity 0.5s ease',
              ...calculateParallax(Math.random() * 15 + 5) // Reduced parallax movement
            }}
          >
            <Icon size={size} strokeWidth={1.5} className="filter drop-shadow-md" />
          </div>
        ))}
      </div>
      
      {/* Main content container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-4 py-20">
        {/* Left side - Image */}
        <div 
          className={`w-full md:w-2/5 flex flex-col items-center md:items-end justify-center mb-12 md:mb-0 transition-opacity duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="relative transform-gpu"
            style={calculate3DEffect(4, 2000)} // Reduced 3D effect
          >
            {/* Outer glow */}
            <div className="absolute -inset-4 bg-gradient-theme rounded-full opacity-75 blur-xl animate-pulse-slow"></div>
            
            {/* Secondary outer ring */}
            <div className="absolute -inset-3 rounded-full border-2 border-accent-highlight opacity-40 animate-spin-slow"></div>
            
            {/* Inner content */}
            <div className="relative rounded-full overflow-hidden border-4 border-theme-border shadow-theme-lg p-1 bg-card">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-1-light/30 via-transparent to-accent-2-light/30 mix-blend-overlay"></div>
              
              <div className="relative overflow-hidden group">
                <Image
                  src={deepi}
                  alt="Deepanshi Gautam"
                  width={320}
                  height={320}
                  priority
                  className="rounded-full w-64 h-64 md:w-72 md:h-72 object-cover group-hover:scale-105 filter drop-shadow-xl transform-gpu"
                  style={{ transition: 'transform 0.7s ease' }}
                />
                
                {/* Spotlight effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Sparkle effect */}
                <div className="absolute top-4 right-4 text-white animate-ping-slow">
                  <Sparkles size={18} className="filter drop-shadow-lg" />
                </div>
              </div>
            </div>
            
            {/* Social links - elevated with hover effects */}
            <div 
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4"
            >
              {socialLinks.map(({ Icon, href, label, delay }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer" 
                  aria-label={label}
                  className={`relative flex items-center justify-center w-12 h-12 rounded-full bg-card shadow-theme-lg border border-theme-border hover:scale-110 transition-transform duration-300 group ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
                >
                  <Icon size={20} className="text-theme relative z-10" />
                  <span className="absolute inset-0 bg-gradient-theme opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></span>
                  
                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-card text-theme text-xs font-medium rounded-full border border-theme-border shadow-theme-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right side - Content with glass effect panel */}
        <div 
          className={`w-full md:w-3/5 md:pl-12 flex flex-col items-center md:items-start text-center md:text-left transition-opacity duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="relative max-w-2xl p-8 rounded-2xl border border-theme-border shadow-theme-lg bg-card/80 backdrop-blur-sm transform-gpu"
            style={calculate3DEffect(1.5, 1500)} // Reduced 3D effect
          >
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-1/5 to-accent-2/5 rounded-2xl"></div>
            
            <div 
              className={`text-sm font-medium text-accent-highlight mb-2 tracking-widest uppercase transition-all duration-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              <span className="inline-flex items-center gap-1">
                <span className="inline-block w-2 h-2 bg-accent-highlight rounded-full animate-pulse"></span>
                Hello, I&apos;m
              </span>
            </div>
            
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 transition-all duration-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              <span className="relative inline-block text-theme">
                Deepanshi
              </span>{' '}
              <span className="relative">
                <span className="absolute inset-0 bg-gradient-theme blur-2xl opacity-30 rounded-lg"></span>
                <span className="relative bg-gradient-theme bg-clip-text text-white">Gautam</span>
              </span>
            </h1>
            
            <h2 
              className={`text-xl md:text-2xl lg:text-3xl font-bold text-theme-secondary mb-6 transition-all duration-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.5s' }}
            >
              <span className="typing-effect">Student & Developer</span>
            </h2>
            
            <p 
              className={`text-theme-secondary mb-8 leading-relaxed transition-all duration-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.6s' }}
            >
              Passionate about creating beautiful, functional, and user-centered digital experiences. 
              I&apos;m constantly learning and experimenting with new technologies to build engaging web applications 
              that solve real-world problems.
            </p>
            
            {/* Action buttons with enhanced hover effects */}
            <div 
              className={`flex flex-wrap gap-4 justify-center md:justify-start mb-12 transition-all duration-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.7s' }}
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 rounded-full bg-gradient-theme text-button-text font-medium shadow-theme overflow-hidden transition-transform duration-300 hover:shadow-theme-lg hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>View My Work</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <span className="absolute inset-0 bg-gradient-theme opacity-0 group-hover:opacity-100 blur-md transition-opacity"></span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/deepanshigautam" target='_blank'
                className="group relative px-8 py-4 rounded-full bg-card border border-theme-border text-theme font-medium shadow-theme-sm overflow-hidden transition-transform duration-300 hover:shadow-theme-lg hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Get In Touch</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <span className="absolute inset-0 bg-gradient-theme opacity-0 group-hover:opacity-10 transition-opacity"></span>
              </a>
            </div>
            
            {/* Tech stack with interactive badges */}
            <div 
              className={`transition-all duration-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.8s' }}
            >
              <div className="text-xs text-theme-lighter font-medium uppercase tracking-wider mb-3">
                Tech Stack
              </div>
              <div className="flex flex-wrap gap-3">
                {techStack.map(({ name, icon, delay }, index) => (
                  <div
                    key={index}
                    className={`group relative px-4 py-2 text-sm font-medium bg-card text-theme-secondary rounded-full border border-theme-border shadow-theme-sm hover:shadow-theme hover:scale-105 cursor-pointer transform-gpu ${
                      isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                    style={{ 
                      transitionDelay: `${0.9 + index * 0.1}s`,
                      transition: 'opacity 0.4s ease, transform 0.3s ease, box-shadow 0.3s ease'
                    }}
                  >
                    <span className="flex items-center gap-1.5">
                      <span className="text-base">{icon}</span>
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simplified animations and effects */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(0.8); opacity: 0.8; }
          70%, 100% { transform: scale(1.5); opacity: 0; }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .typing-effect {
          position: relative;
          display: inline-block;
        }
        
        .typing-effect::after {
          content: "";
          position: absolute;
          right: -5px;
          top: 50%;
          transform: translateY(-50%);
          width: 2px;
          height: 1em;
          background-color: var(--accent-highlight);
          animation: blink-caret 0.75s step-end infinite;
        }
        
        
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s ease-in-out infinite;
        }
        
        .animate-gradient-shift {
          background-size: 400% 400%;
          animation: gradient-shift 8s ease infinite;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>
    </div>
  );
}