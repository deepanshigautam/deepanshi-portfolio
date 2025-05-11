import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Code, Terminal, Monitor, Database, Cpu, Layers, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import deepi from "../public/assets/deepanshiimg.jpg";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeParticles, setActiveParticles] = useState([]);
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  
  // Generate particles on load
  useEffect(() => {
    const particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 5 + 1,
        vx: Math.random() * 0.2 - 0.1,
        vy: Math.random() * 0.2 - 0.1,
        color: i % 3 === 0 ? 'var(--accent-1-solid)' : 
               i % 3 === 1 ? 'var(--accent-2-solid)' : 'var(--accent-3-solid)',
        opacity: Math.random() * 0.5 + 0.2
      });
    }
    setActiveParticles(particles);
    
    // Staggered reveal animation
    const visibilityTimer = setTimeout(() => setIsVisible(true), 200);
    const loadTimer = setTimeout(() => setIsLoaded(true), 800);
    
    return () => {
      clearTimeout(visibilityTimer);
      clearTimeout(loadTimer);
    };
  }, []);
  
  // Mouse and scroll event handlers
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Animated particles
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;
    
    let animationFrame;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      setActiveParticles(prevParticles => 
        prevParticles.map(particle => {
          // Update position
          const newX = (particle.x + particle.vx + 100) % 100;
          const newY = (particle.y + particle.vy + 100) % 100;
          
          // Draw particle
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.opacity;
          ctx.beginPath();
          ctx.arc(
            newX * width / 100, 
            newY * height / 100, 
            particle.size, 
            0, 
            2 * Math.PI
          );
          ctx.fill();
          
          // Return updated particle
          return {
            ...particle,
            x: newX,
            y: newY
          };
        })
      );
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible]);
  
  const calculateParallax = (factor = 20) => {
    if (typeof window === 'undefined') return {};
    
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = (mousePosition.x - centerX) / centerX;
    const deltaY = (mousePosition.y - centerY) / centerY;
    
    return {
      transform: `translate(${deltaX * factor}px, ${deltaY * factor}px)`,
      transition: 'transform 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67)'
    };
  };
  
  const calculate3DEffect = (factor = 2, perspective = 1000) => {
    if (typeof window === 'undefined') return {};
    
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = (mousePosition.x - centerX) / centerX;
    const deltaY = (mousePosition.y - centerY) / centerY;
    
    return {
      transform: `perspective(${perspective}px) rotateX(${deltaY * factor}deg) rotateY(${-deltaX * factor}deg)`,
      transition: 'transform 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67)'
    };
  };
  
  const iconConfigs = [
    { Icon: Code, size: 28, position: 'top-[15%] left-[10%]', delay: 'delay-100', color: 'text-accent-1-solid' },
    { Icon: Terminal, size: 22, position: 'top-[25%] right-[15%]', delay: 'delay-300', color: 'text-accent-2-solid' },
    { Icon: Monitor, size: 30, position: 'bottom-[30%] left-[20%]', delay: 'delay-500', color: 'text-accent-1-solid' },
    { Icon: Database, size: 24, position: 'bottom-[20%] right-[25%]', delay: 'delay-200', color: 'text-accent-3-solid' },
    { Icon: Cpu, size: 26, position: 'top-[40%] left-[25%]', delay: 'delay-400', color: 'text-accent-2-solid' },
    { Icon: Layers, size: 32, position: 'bottom-[15%] left-[15%]', delay: 'delay-600', color: 'text-accent-3-solid' },
  ];
  
  const techStack = [
    { name: 'React', delay: 'delay-100', icon: '⚛️' },
    { name: 'Next.js', delay: 'delay-200', icon: '▲' },
    { name: 'Tailwind CSS', delay: 'delay-300', icon: '🌊' },
    { name: 'JavaScript', delay: 'delay-400', icon: '🟨' },
    { name: 'Node.js', delay: 'delay-500', icon: '🟢' },
  ];
  
  const socialLinks = [
    { Icon: Github, href: 'https://github.com/deepanshigautam', label: 'GitHub', delay: 'delay-100' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/deepanshi-gautam-754532278/', label: 'LinkedIn', delay: 'delay-200' },
    { Icon: Mail, href: 'mailto:gdeepanshi7505@gmail.com', label: 'Email', delay: 'delay-300' },
  ];

  return (
    <div 
      ref={heroRef}
      className="relative w-full min-h-screen overflow-hidden bg-theme transition-colors duration-500"
    >
      {/* Particle canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0"
        width={typeof window !== 'undefined' ? window.innerWidth : 1000}
        height={typeof window !== 'undefined' ? window.innerHeight : 1000}
      />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={calculateParallax(5)}
        >
          <div className="w-full h-full grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))] gap-1">
            {Array.from({ length: 400 }).map((_, i) => (
              <div 
                key={i} 
                className={`border border-theme-border rounded-sm transition-all duration-700 ${
                  Math.random() > 0.85 ? 'bg-accent-highlight opacity-20' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${Math.random() * 5}s`,
                  transform: `scale(${1 + Math.random() * 0.2})`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Animated blob background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div 
          className="absolute top-1/4 -left-24 w-96 h-96 bg-accent-1 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"
          style={calculateParallax(10)}
        />
        <div 
          className="absolute -top-20 right-0 w-96 h-96 bg-accent-2 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"
          style={calculateParallax(15)}
        />
        <div 
          className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent-3 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"
          style={calculateParallax(20)}
        />
      </div>
      
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent-1 to-transparent opacity-10 animate-gradient-shift pointer-events-none"></div>
      
      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {iconConfigs.map(({ Icon, size, position, delay, color }, index) => (
          <div 
            key={index}
            className={`absolute ${position} ${color} opacity-0 ${isVisible ? 'animate-float' : ''}`}
            style={{
              animationDelay: `${index * 0.2}s`,
              opacity: isVisible ? 0.6 : 0,
              transition: 'opacity 0.5s ease',
              ...calculateParallax(Math.random() * 20 + 10)
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
          className={`w-full md:w-2/5 flex flex-col items-center md:items-end justify-center mb-12 md:mb-0 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}
        >
          <div 
            className="relative transform-gpu"
            style={calculate3DEffect(6, 2000)}
          >
            {/* Outer glow */}
            <div className="absolute -inset-4 bg-gradient-theme rounded-full opacity-75 blur-xl transition-all duration-500 animate-pulse-slow"></div>
            
            {/* Secondary outer ring */}
            <div className="absolute -inset-3 rounded-full border-2 border-accent-highlight opacity-40 animate-spin-slow"></div>
            
            {/* Inner content */}
            <div className="relative rounded-full overflow-hidden border-4 border-theme-border shadow-theme-lg p-1 bg-card glass-effect-heavy">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-1-light/30 via-transparent to-accent-2-light/30 mix-blend-overlay"></div>
              
              <div className="relative overflow-hidden group">
                <Image
                  src={deepi}
                  alt="Deepanshi Gautam"
                  width={320}
                  height={320}
                  priority
                  className="rounded-full w-64 h-64 md:w-72 md:h-72 object-cover transition-all duration-700 group-hover:scale-105 filter drop-shadow-xl"
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
                  className={`relative flex items-center justify-center w-12 h-12 rounded-full bg-card shadow-theme-lg border border-theme-border glass-effect hover:scale-110 transition-all duration-300 group ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
                >
                  <Icon size={20} className="text-theme relative z-10" />
                  <span className="absolute inset-0 bg-gradient-theme opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></span>
                  
                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-card text-theme text-xs font-medium rounded-full border border-theme-border shadow-theme-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap glass-effect-light">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right side - Content with glass effect panel */}
        <div 
          className={`w-full md:w-3/5 md:pl-12 flex flex-col items-center md:items-start text-center md:text-left transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}
        >
          <div 
            className="relative max-w-2xl p-8 rounded-2xl border border-theme-border glass-effect shadow-theme-lg"
            style={calculate3DEffect(2, 1500)}
          >
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-1/5 to-accent-2/5 rounded-2xl"></div>
            
            <div 
              className={`text-sm font-medium text-accent-highlight mb-2 tracking-widest uppercase transition-all duration-700 ${
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
              className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 transition-all duration-700 text-balance ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              <span className="relative inline-block text-theme">
                Deepanshi
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent-highlight transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
              </span>{' '}
              <span className="relative">
                <span className="absolute inset-0 bg-gradient-theme blur-2xl opacity-30 rounded-lg"></span>
                <span className="relative bg-gradient-theme bg-clip-text text-white">Gautam</span>
              </span>
            </h1>
            
            <h2 
              className={`text-xl md:text-2xl lg:text-3xl font-bold text-theme-secondary mb-6 transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.5s' }}
            >
              <span className="typing-effect-enhanced">Student & Developer</span>
            </h2>
            
            <p 
              className={`text-theme-secondary mb-8 leading-relaxed transition-all duration-700 ${
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
              className={`flex flex-wrap gap-4 justify-center md:justify-start mb-12 transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.7s' }}
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 rounded-full bg-gradient-theme text-button-text font-medium shadow-theme overflow-hidden transition-all duration-300 hover:shadow-theme-lg hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>View My Work</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <span className="absolute inset-0 bg-gradient-theme opacity-0 group-hover:opacity-100 blur-md transition-opacity"></span>
                <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left bg-white/20 transition-transform duration-500"></span>
              </a>
              
              <a
                href="#contact"
                className="group relative px-8 py-4 rounded-full bg-card border border-theme-border text-theme font-medium shadow-theme-sm overflow-hidden transition-all duration-300 hover:shadow-theme-lg hover:scale-105"
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
              className={`transition-all duration-700 ${
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
                    className={`group relative px-4 py-2 text-sm font-medium bg-card text-theme-secondary rounded-full border border-theme-border shadow-theme-sm transition-all duration-500 hover:shadow-theme hover:scale-105 cursor-pointer ${
                      isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                    style={{ transitionDelay: `${0.9 + index * 0.1}s` }}
                  >
                    <span className="flex items-center gap-1.5">
                      <span className="text-base">{icon}</span>
                      {name}
                    </span>
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-1-light/20 to-accent-2-light/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Interactive scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
          isLoaded ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '1.2s' }}
      >
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-xs font-medium text-theme-secondary mb-2">Scroll Down</span>
          <div className="relative w-8 h-12 rounded-full border-2 border-theme-secondary flex items-start justify-center p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-theme-secondary animate-scroll-down"></div>
          </div>
        </div>
      </div>

      {/* Animations and effects */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(2deg);
          }
          66% {
            transform: translateY(5px) rotate(-2deg);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes ping-slow {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          70%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes scroll-down {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          75% {
            opacity: 0;
            transform: translateY(6px);
          }
          80% {
            opacity: 0;
            transform: translateY(0);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .typing-effect-enhanced {
          position: relative;
          display: inline-block;
        }
        
        .typing-effect-enhanced::after {
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
        
        .animate-scroll-down {
          animation: scroll-down 2s ease-out infinite;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
}