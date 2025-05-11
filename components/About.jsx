"use client";

import React, { useState, useTransition, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faDownload, 
  faGraduationCap, 
  faBriefcase, 
  faCertificate, 
  faCode, 
  faLaptopCode, 
  faMagic, 
  faChevronRight,
  faStar
} from "@fortawesome/free-solid-svg-icons";

// Define TAB_DATA here before using it
const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    icon: faGraduationCap,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-accent-1-light/20 to-accent-1/30 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative h-full p-6 rounded-2xl bg-card shadow-theme border border-theme-border glass-effect hover:shadow-theme-lg transition-all duration-500 overflow-hidden flex flex-col">
            <div className="absolute right-0 top-0 w-32 h-32 bg-accent-1 rounded-full filter blur-2xl opacity-10 -m-10"></div>
            
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 h-16 w-16 rounded-2xl bg-gradient-theme flex items-center justify-center shadow-theme group-hover:scale-110 transition-transform duration-500">
                <FontAwesomeIcon icon={faGraduationCap} className="text-button-text text-xl" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-theme">
                  B.Tech in Engineering
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <p className="text-theme-secondary">2022-2026</p>
                  <span className="inline-flex px-3 py-1 rounded-full bg-accent-1 text-accent-1-solid text-xs font-medium">
                    CGPA: 9.09
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-auto">
              <p className="text-theme-secondary">Meerut Institute of Engineering and Technology</p>
              <div className="mt-4 flex gap-2">
                {["Computer Science", "Web Development", "AI"].map((tag, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-theme-50 rounded-md text-theme-secondary border border-theme-border">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-theme transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-accent-2-light/20 to-accent-2/30 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative h-full p-6 rounded-2xl bg-card shadow-theme border border-theme-border glass-effect hover:shadow-theme-lg transition-all duration-500 overflow-hidden flex flex-col">
            <div className="absolute right-0 top-0 w-32 h-32 bg-accent-2 rounded-full filter blur-2xl opacity-10 -m-10"></div>
            
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 h-16 w-16 rounded-2xl bg-gradient-theme flex items-center justify-center shadow-theme group-hover:scale-110 transition-transform duration-500">
                <FontAwesomeIcon icon={faGraduationCap} className="text-button-text text-xl" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-theme">
                  Senior Secondary Education
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <p className="text-theme-secondary">Class XII</p>
                  <span className="inline-flex px-3 py-1 rounded-full bg-accent-3 text-accent-3-solid text-xs font-medium">
                    95%
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-auto">
              <p className="text-theme-secondary">Kendriya Vidyalaya Punjab Lines Meerut Cantt</p>
              <div className="mt-4 flex gap-2">
                {["Physics", "Chemistry", "Mathematics"].map((tag, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-theme-50 rounded-md text-theme-secondary border border-theme-border">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-theme transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    icon: faBriefcase,
    content: (
      <div className="relative">
        <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-accent-1 via-accent-2 to-accent-3 rounded-full"></div>
        
        <div className="space-y-12 relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-2 left-5 bg-gradient-to-r from-accent-1/20 to-transparent rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="flex gap-4 relative">
              <div className="flex-shrink-0 relative">
                <div className="absolute left-0 top-0 h-16 w-16 bg-accent-1 rounded-full opacity-20 animate-pulse-slow"></div>
                <div className="relative z-10 h-16 w-16 rounded-full bg-gradient-theme flex items-center justify-center shadow-theme border-4 border-theme">
                  <FontAwesomeIcon icon={faCode} className="text-button-text text-xl" />
                </div>
              </div>
              
              <div className="flex-1 p-6 rounded-2xl bg-card shadow-theme border border-theme-border glass-effect transition-all duration-500 group-hover:shadow-theme-lg">
                <h3 className="text-xl font-bold text-theme mb-2">Web Development Projects</h3>
                
                <div className="space-y-4 mt-4">
                  {[
                    {
                      title: "React Applications",
                      description: "Built responsive web applications using React and Next.js",
                      icon: faCode
                    },
                    {
                      title: "UI/UX Design",
                      description: "Implemented modern UI/UX designs using Tailwind CSS",
                      icon: faLaptopCode
                    },
                    {
                      title: "Interactive Experiences",
                      description: "Created interactive user experiences with Framer Motion",
                      icon: faMagic
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      className="relative overflow-hidden group/item"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-1/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      <div className="relative z-10 flex gap-3 p-3 rounded-xl group-hover/item:bg-theme-50 transition-colors duration-300">
                        <div className="flex-shrink-0 mt-1 h-7 w-7 rounded-lg bg-accent-1/10 flex items-center justify-center shadow-theme-sm group-hover/item:bg-accent-1/20 transition-colors duration-300">
                          <FontAwesomeIcon icon={item.icon} className="text-accent-1-solid text-sm" />
                        </div>
                        <div>
                          <h4 className="font-medium text-theme">{item.title}</h4>
                          <p className="text-sm text-theme-secondary mt-1">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute -inset-2 left-5 bg-gradient-to-r from-accent-3/20 to-transparent rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="flex gap-4 relative">
              <div className="flex-shrink-0 relative">
                <div className="absolute left-0 top-0 h-16 w-16 bg-accent-3 rounded-full opacity-20 animate-pulse-slow"></div>
                <div className="relative z-10 h-16 w-16 rounded-full bg-gradient-theme flex items-center justify-center shadow-theme border-4 border-theme">
                  <FontAwesomeIcon icon={faMagic} className="text-button-text text-xl" />
                </div>
              </div>
              
              <div className="flex-1 p-6 rounded-2xl bg-card shadow-theme border border-theme-border glass-effect transition-all duration-500 group-hover:shadow-theme-lg">
                <h3 className="text-xl font-bold text-theme mb-2">Open Source Contributions</h3>
                <p className="text-theme-secondary">Actively contributing to open source projects to enhance skills and give back to the community.</p>
                
                <div className="mt-4 p-4 rounded-xl bg-theme-50 border border-theme-border relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mt-3 -mr-3 h-12 w-12 rounded-full bg-accent-3/20 flex items-center justify-center blur-sm"></div>
                  <div className="relative z-10 flex items-center gap-2">
                    <FontAwesomeIcon icon={faStar} className="text-accent-3-solid" />
                    <span className="text-sm text-theme-secondary">Find me on <a href="https://github.com/deepanshigautam" target="_blank" rel="noopener noreferrer" className="text-accent-highlight font-medium">GitHub</a></span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    icon: faCertificate,
    content: (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden perspective-1000"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Web Development", provider: "Udemy", date: "2024", color: "accent-1" },
            { name: "React Masterclass", provider: "Coursera", date: "2023", color: "accent-2" },
            { name: "UI/UX Design", provider: "FreeCodeCamp", date: "2023", color: "accent-3" }
          ].map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotateY: 15 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ translateY: -10, rotateY: 5, scale: 1.03 }}
              className="relative transform-gpu h-full"
            >
              <div className={`absolute inset-0 bg-${cert.color} rounded-2xl opacity-5`}></div>
              <div className="relative p-6 rounded-2xl bg-card shadow-theme border border-theme-border glass-effect h-full flex flex-col group">
                <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-gradient-theme opacity-5 blur-2xl -mt-10 -mr-10 transform transition-transform duration-500 group-hover:scale-150"></div>
                
                <div className={`h-14 w-14 rounded-2xl bg-${cert.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-theme`}>
                  <FontAwesomeIcon icon={faCertificate} className="text-white text-xl" />
                </div>
                
                <h3 className="text-xl font-bold text-theme">{cert.name}</h3>
                <p className="text-theme-secondary mt-2">{cert.provider}</p>
                <div className="mt-2 text-sm text-theme-secondary/70">{cert.date}</div>
                
                <div className="mt-auto pt-4">
                  <div className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full bg-theme-50 border border-theme-border text-theme-secondary">
                    <FontAwesomeIcon icon={faStar} className="text-accent-highlight text-xs" />
                    <span>Verified Certificate</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 p-6 rounded-2xl bg-card shadow-theme border border-theme-border glass-effect-heavy relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-1/5 via-transparent to-accent-2/5"></div>
          <div className="absolute top-0 right-0 bg-gradient-theme w-40 h-40 rounded-full opacity-10 blur-3xl -mt-20 -mr-20"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-shrink-0 h-16 w-16 rounded-full bg-gradient-theme p-0.5 shadow-theme">
              <div className="h-full w-full rounded-full bg-card flex items-center justify-center">
                <FontAwesomeIcon icon={faCertificate} className="text-accent-highlight text-xl" />
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-bold text-theme mb-2">Complete Certification Portfolio</h3>
              <p className="text-theme-secondary">
                Explore my full range of professional certifications and badges on Credly, showcasing my diverse skill set and continuous learning journey.
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <a
                href="https://www.credly.com/users/deepanshi-gautam"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-theme-border text-theme font-medium shadow-theme hover:shadow-theme-lg transition-all duration-300"
              >
                <span>View All</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();
  const [expandedInfo, setExpandedInfo] = useState(false);
  const ref = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const textInView = useInView(titleRef, { once: true });
  
  // Scroll animation values
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);
  const titleY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  
  const handleTabChange = (id) => {
    // Remove useTransition to make tab switching more responsive
    if (id !== tab) {
      setTab(id);
    }
  };

  // Add this memo hook to prevent unnecessary re-renders
  const currentTabContent = React.useMemo(() => {
    const currentTab = TAB_DATA.find((t) => t.id === tab);
    return currentTab ? currentTab.content : null;
  }, [tab]);

  // Text reveal animation settings
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  // 3D orbit effect for tech icons with improved performance
  const techIcons = [
    { icon: '⚛️', label: 'React' },
    { icon: '▲', label: 'Next.js' },
    { icon: '🌊', label: 'Tailwind' },
    { icon: '🟨', label: 'JavaScript' },
    { icon: '📱', label: 'Responsive' },
    { icon: '🚀', label: 'Performance' },
    { icon: '✨', label: 'Animation' },
    { icon: '🔍', label: 'SEO' },
  ];

  return (
    <section className="py-28 relative bg-theme transition-colors duration-500 overflow-hidden will-change-transform" id="about">
      {/* Static background elements with optimized blur effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        <motion.div 
          style={{ y: backgroundY }} 
          className="absolute w-full h-full will-change-transform"
        >
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent-1 rounded-full mix-blend-multiply opacity-20 will-change-opacity" style={{ filter: 'blur(100px)' }}></div>
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-accent-2 rounded-full mix-blend-multiply opacity-20 will-change-opacity" style={{ filter: 'blur(100px)' }}></div>
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-accent-3 rounded-full mix-blend-multiply opacity-20 will-change-opacity" style={{ filter: 'blur(100px)' }}></div>
        </motion.div>
      </div>

      <motion.div 
        ref={containerRef}
        style={{ opacity, scale }}
        className="max-w-6xl mx-auto px-4 relative z-10 will-change-transform"
      >
        {/* Simplified 3D static title */}
        <motion.div 
          style={{ y: titleY }}
          className="absolute -top-20 left-1/2 transform -translate-x-1/2 pointer-events-none"
        >
          <div ref={titleRef} className="select-none">
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-gradient-theme opacity-10 will-change-transform" style={{ filter: 'blur(50px)' }}></div>
              <div className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-theme opacity-[0.03] tracking-tighter">ABOUT ME</div>
            </div>
          </div>
        </motion.div>

        {/* Main content container */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative will-change-transform"
        >
          {/* Top section with heading and tech stack */}
          <div className="relative mb-16 mt-10">
            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* Left side with title and descriptions */}
              <div className="md:w-3/5 relative z-10">
                <motion.div 
                  className="mb-8 relative inline-flex"
                  variants={titleVariants}
                  initial="hidden"
                  animate={textInView ? "visible" : "hidden"}
                >
                  <div className="absolute -inset-2 bg-gradient-theme opacity-20 rounded-3xl will-change-transform" style={{ filter: 'blur(15px)' }}></div>
                  <h2 className="relative z-10 text-5xl md:text-6xl font-bold text-theme inline-block">
                    About Me
                  </h2>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={textInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative"
                >
                  <div className="relative z-10">
                    <p className="text-lg md:text-xl text-theme-secondary leading-relaxed">
                      Hello! I&apos;m <span className="font-semibold relative inline-block">
                        <span className="relative z-10 text-theme">Deepanshi Gautam</span>
                        <span className="absolute bottom-0 left-0 w-full h-[6px] bg-accent-highlight opacity-30"></span>
                      </span>, 
                      a passionate Web Developer with a creative mindset and a drive for innovation.
                    </p>
                    
                    <AnimatePresence initial={false}>
                      {expandedInfo && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 text-lg md:text-xl text-theme-secondary leading-relaxed">
                            I transform ideas into elegant, user-centric digital experiences using modern web technologies.
                            My journey in web development is driven by a perfect blend of technical expertise and 
                            artistic vision. I believe in creating websites that not only function flawlessly but 
                            also tell compelling stories through design.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    <motion.button
                      onClick={() => setExpandedInfo(!expandedInfo)}
                      className="mt-4 text-accent-highlight flex items-center gap-1 group"
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{expandedInfo ? "Read less" : "Read more"}</span>
                      <motion.span
                        animate={{ rotate: expandedInfo ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                      </motion.span>
                    </motion.button>
                  </div>
                </motion.div>
              </div>
              
              {/* Right side with optimized tech stack orbit */}
              <div className="md:w-2/5 relative h-64 md:h-80">
                <div className="absolute inset-0">
                  <div className="tech-orbit relative w-full h-full">
                    {techIcons.map((tech, i) => (
                      <div 
                        key={i} 
                        className="absolute tech-icon transform -translate-x-1/2 -translate-y-1/2"
                        style={{
                          '--rotation': `${i * (360 / techIcons.length)}deg`,
                          '--delay': `${i * -0.5}s`,
                        }}
                      >
                        <div className="relative group">
                          <div className="tech-bubble relative z-10 text-2xl flex items-center justify-center h-14 w-14 rounded-full bg-card glass-effect border border-theme-border shadow-theme transition-transform duration-300 group-hover:scale-110 will-change-transform">
                            {tech.icon}
                          </div>
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full bg-card text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none glass-effect whitespace-nowrap text-theme-secondary shadow-theme">
                            {tech.label}
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-theme glass-effect-heavy flex items-center justify-center shadow-theme-lg border border-theme-border z-10">
                      <div className="text-button-text font-bold tracking-widest text-xs text-center">TECH<br/>STACK</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive tab section with optimized animations */}
          <div className="relative mt-16">
            {/* Tab selection with animated highlight */}
            <div className="relative mb-12 flex justify-center">
              <div className="relative bg-card rounded-full p-1.5 glass-effect-light border border-theme-border shadow-theme flex">
                {TAB_DATA.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => handleTabChange(t.id)}
                    className={`relative z-10 px-6 py-3 rounded-full flex items-center gap-2 text-theme-secondary transition-colors duration-200`}
                  >
                    <FontAwesomeIcon 
                      icon={t.icon} 
                      className={`transition-colors duration-200 ${tab === t.id ? "text-button-text" : ""}`} 
                    />
                    <span className={`transition-colors duration-200 ${tab === t.id ? "text-button-text" : ""}`}>
                      {t.title}
                    </span>
                  </button>
                ))}
                {/* Optimize the sliding indicator */}
                <div 
                  className="absolute top-1.5 bottom-1.5 rounded-full bg-gradient-theme will-change-transform"
                  style={{
                    left: `${(TAB_DATA.findIndex(t => t.id === tab) * (100 / TAB_DATA.length)) + (100 / TAB_DATA.length / 10)}%`,
                    width: `${100 / TAB_DATA.length - (100 / TAB_DATA.length / 5)}%`,
                    transition: 'all 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67)'
                  }}
                ></div>
              </div>
            </div>

            {/* Simplified tab content transitions */}
            <div className="min-h-[400px]"> {/* Fixed height container prevents layout shifts */}
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={tab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="h-full"
                >
                  {currentTabContent}
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Resume download button with optimized effects */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <a
                href="/path-to-your-resume.pdf"
                className="group relative inline-flex items-center px-8 py-4 rounded-full bg-gradient-theme text-button-text font-medium shadow-theme overflow-hidden transition-all duration-300 hover:shadow-theme-lg hover:shadow-accent-highlight/20"
              >                
                <span className="relative z-10 flex items-center gap-2">
                  <FontAwesomeIcon icon={faDownload} className="text-lg" />
                  <span className="font-semibold tracking-wide">Download Resume</span>
                </span>
                
                <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-white/10"></div>
                </div>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* CSS for optimized animations */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-gpu {
          transform-style: preserve-3d;
          will-change: transform;
        }
        
        .tech-orbit {
          perspective: 1000px;
          transform-style: preserve-3d;
        }
        
        .tech-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(var(--rotation)) translateX(120px) rotate(calc(-1 * var(--rotation)));
          animation: orbit 30s linear infinite;
          animation-delay: var(--delay);
          will-change: transform;
        }
        
        .tech-bubble {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        
        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(var(--rotation)) translateX(120px) rotate(calc(-1 * var(--rotation)));
          }
          to {
            transform: translate(-50%, -50%) rotate(calc(var(--rotation) + 360deg)) translateX(120px) rotate(calc(-1 * var(--rotation) - 360deg));
          }
        }
        
        .bg-grid {
          background-image: linear-gradient(var(--theme-border) 1px, transparent 1px),
                            linear-gradient(90deg, var(--theme-border) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};

export default About;