"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faArrowUpRightFromSquare,
  faCode,
  
  faLightbulb,
  faFolder,
  faStar
} from "@fortawesome/free-solid-svg-icons";



// Import your project images

// import aircanvas from "../public/assets/aircanvas.png";


// Project data with your projects
const projectsData = [
  {
    id: "project-1",
    title: "Gemini Clone",
    description: "Developed user friendly replica of the original platform having several functionality.",
    image:"/assets/gemini-clone.png",
    tags: ["React", "Next.js", "Tailwind CSS"],
    links: {
      github: "https://github.com/deepanshigautam/Gemini-clone",
      live: "https://chat-gemini-2.vercel.app/",
    },
    featured: true
  },
  {
    id: "project-2",
    title: "Air Canvas",
    description: "Developed an interactive drawing application utilizing OpenCV in Python.",
    image: "/assets/aircanvas.png",
    tags: ["Python", "OpenCV", "Computer Vision"],
    links: {
      github: "https://github.com/deepanshigautam/Air-canvas",
      live: "#",
    },
    featured: true
  },
  {
    id: "project-3",
    title: "Face Detection",
    description: "Developed a real-time application using OpenCV for accurate face detection.",
    image: "/assets/face-detection.png",
    tags: ["Python", "OpenCV", "Computer Vision"],
    links: {
      github: "#",
      live: "#",
    },
    featured: true
  },
  {
    id: "project-4",
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for e-commerce management with real-time analytics, inventory tracking, and sales statistics.",
    image: "",
    tags: ["React", "Next.js", "Tailwind CSS", "MongoDB"],
    links: {
      github: "https://github.com/username/ecommerce-dashboard",
      live: "https://ecommerce-dashboard.demo",
    },
    featured: false
  },
  {
    id: "project-5",
    title: "Personal Finance Tracker",
    description: "A money management application for tracking expenses, setting budgets, and visualizing spending habits with interactive charts.",
    image: "",
    tags: ["Vue.js", "Firebase", "Chart.js"],
    links: {
      github: "https://github.com/username/finance-tracker",
      live: "https://finance-tracker.demo",
    },
    featured: false
  },
  {
    id: "project-6",
    title: "Weather Forecast App",
    description: "A weather application providing accurate forecasts, interactive maps, and personalized weather alerts based on location.",
    image: "/assets/aircanvas.png", 
    tags: ["React Native", "Redux", "Weather API"],
    links: {
      github: "https://github.com/username/weather-app",
      live: "#",
    },
    featured: false
  }
];

// Featured project component with horizontal showcase layout
const FeaturedProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 * index, ease: [0.22, 1, 0.36, 1] }}
      className={`relative z-10 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-10 mb-20 last:mb-10`}
    >
      {/* Project image with perspective effect */}
      <div className="relative w-full md:w-3/5 aspect-[16/9] transform-gpu">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent-1/30 to-accent-2/20 rounded-xl -rotate-1 scale-[1.02] -z-10 blur-sm"></div>
        <div className={`relative overflow-hidden rounded-xl border-2 border-theme-border ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] group h-full`}>
          {project.image ? (
            // Replace the next/image with a standard img tag for testing
            <img 
              src={typeof project.image === 'string' ? project.image : '/assets/gemini-clone.png'} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full aspect-[16/9] bg-gradient-to-br from-accent-1/10 to-accent-2/10 flex items-center justify-center">
              <FontAwesomeIcon icon={faFolder} className="text-5xl text-theme-secondary/50" />
            </div>
          )}
          
          {/* Overlay with reveal effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="px-3 py-1.5 bg-accent-highlight rounded-full text-white text-xs font-medium">
                Featured Project
              </div>
            </div>
            
            <div className="flex gap-3 mt-auto">
              {project.links.github && project.links.github !== "#" && (
                <Link href={project.links.github} target="_blank" aria-label={`View GitHub repository for ${project.title}`}>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-white/40">
                    <FontAwesomeIcon 
                      icon={faCode} 
                      className="text-white"
                    />
                  </div>
                </Link>
              )}
              
              {project.links.live && project.links.live !== "#" && (
                <Link href={project.links.live} target="_blank" aria-label={`View live demo for ${project.title}`}>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-white/40">
                    <FontAwesomeIcon 
                      icon={faArrowUpRightFromSquare} 
                      className="text-white"
                    />
                  </div>
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Project info with staggered reveal */}
      <div className="flex flex-col justify-center flex-1 relative">
        {/* Accent line */}
        <div className={`hidden md:block absolute ${index % 2 === 0 ? '-left-5' : '-right-5'} top-0 bottom-0 w-[3px] bg-gradient-to-b from-accent-highlight/80 via-accent-1/50 to-transparent`}></div>
        
        <motion.h3 
          className="text-2xl md:text-3xl font-bold text-theme mb-3 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 + 0.2 * index }}
        >
          {project.title}
        </motion.h3>
        
        <motion.div 
          className="bg-card rounded-xl p-4 md:p-6 shadow-lg relative z-10 border border-theme-border"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 + 0.2 * index }}
        >
          <p className="text-theme-secondary mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <motion.span 
                key={i} 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + 0.05 * i + 0.2 * index }}
                className="px-2.5 py-1 bg-theme-50 text-theme-secondary text-xs rounded-md border border-theme-border"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Standard project card with unique design
const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.7, 
        delay: 0.2 * index,
        ease: [0.22, 1, 0.36, 1] 
      }}
      className="group transform-gpu"
    >
      <div className="relative h-full">
        {/* Hover accent */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent-1/20 via-accent-highlight/10 to-accent-2/20 blur opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
        
        {/* Card with diagonal design */}
        <div className="relative h-full bg-card rounded-xl overflow-hidden border border-theme-border shadow-theme transition-all duration-500 group-hover:shadow-xl group-hover:border-accent-highlight/30 flex flex-col">
          {/* Diagonal header with image */}
          <div className="relative h-[180px] overflow-hidden">
            {/* Diagonal overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-1/10 to-accent-2/10"></div>
            
            {/* Background pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            
            {/* Diagonal cut */}
            <div className="absolute -bottom-10 left-0 right-0 h-20 bg-card transform rotate-5 scale-110 origin-bottom-right"></div>
            
            {project.image ? (
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent-1/10 to-accent-2/10">
                <div className="relative z-10 transform -rotate-12">
                  <FontAwesomeIcon icon={faLightbulb} className="text-4xl text-theme-secondary/30" />
                </div>
              </div>
            )}
          </div>
          
          {/* Content area with drop shadow */}
          <div className="flex flex-col flex-grow p-5 relative">
            <h3 className="text-xl font-bold text-theme mb-2 relative">
              {project.title}
              {/* Animated underline on hover */}
              <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-accent-highlight to-accent-2/80 group-hover:w-full transition-all duration-500"></div>
            </h3>
            
            <p className="text-sm text-theme-secondary mb-4 line-clamp-3 flex-grow">{project.description}</p>
            
            {/* Links with subtle reveal */}
            <div className="flex items-center justify-between mt-auto pt-3 border-t border-theme-border/40">
              <div className="flex gap-3">
                {project.links.github && project.links.github !== "#" && (
                  <Link href={project.links.github} target="_blank" className="text-theme-secondary hover:text-theme transition-colors" aria-label="View GitHub repository">
                    <FontAwesomeIcon icon={faCode} className="text-lg" />
                  </Link>
                )}
              </div>
              
              {/* Tech tags in pill form */}
              <div className="flex gap-1.5">
                {project.tags.slice(0, 2).map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-0.5 bg-theme-50 text-theme-secondary text-xs rounded-full border border-theme-border"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 2 && (
                  <span className="px-2 py-0.5 bg-theme-50 text-theme-secondary text-xs rounded-full border border-theme-border">
                    +{project.tags.length - 2}
                  </span>
                )}
              </div>
            </div>
            
            {/* Live demo button that appears on hover */}
            {project.links.live && project.links.live !== "#" && (
              <div className="absolute inset-x-0 -bottom-12 group-hover:bottom-0 transition-all duration-500 p-3 bg-gradient-to-t from-theme to-transparent">
                <Link href={project.links.live} target="_blank" className="block w-full py-2 bg-accent-highlight text-white text-center rounded-lg font-medium text-sm hover:bg-accent-1 transition-colors">
                  Live Demo
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  // References for scroll animations
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const featuredRef = useRef(null);
  const projectsRef = useRef(null);
  
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const titleInView = useInView(titleRef, { once: true });
  const featuredInView = useInView(featuredRef, { once: true });
  const projectsInView = useInView(projectsRef, { once: true });
  
  // Enhanced scroll animation values
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.95, 1, 1, 0.98]);
  const titleY = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [50, 0, 0, -50]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotateBackground = useTransform(scrollYProgress, [0, 1], [0, 5]);

  // Featured projects
  const featuredProjects = projectsData.filter(project => project.featured);
  const regularProjects = projectsData.filter(project => !project.featured);
  
  return (
    <section className="py-28 md:py-36 relative bg-theme transition-colors duration-500 overflow-hidden" id="projects">
      {/* Enhanced background elements with better animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        <motion.div 
          style={{ 
            y: backgroundY,
            rotate: rotateBackground
          }} 
          className="absolute w-full h-full origin-center"
        >
          <motion.div 
            animate={{ 
              filter: ["blur(100px)", "blur(130px)", "blur(100px)"],
              scale: [1, 1.05, 1],
              opacity: [0.15, 0.2, 0.15]
            }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
            className="absolute top-40 -left-40 w-[500px] h-[500px] bg-accent-2 rounded-full mix-blend-multiply will-change-transform"
          />
          <motion.div 
            animate={{ 
              filter: ["blur(130px)", "blur(100px)", "blur(130px)"],
              scale: [1, 1.1, 1],
              opacity: [0.15, 0.2, 0.15]
            }}
            transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", delay: 2 }}
            className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-accent-3 rounded-full mix-blend-multiply will-change-transform"
          />
          {/* Additional subtle background elements */}
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-accent-1 rounded-full mix-blend-multiply opacity-10" style={{ filter: 'blur(100px)' }}></div>
        </motion.div>
      </div>

      <motion.div 
        ref={containerRef}
        style={{ opacity, scale }}
        className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 will-change-transform"
      >
        {/* Enhanced floating title with 3D effect */}
        <motion.div 
          style={{ y: titleY }}
          className="absolute -top-20 left-1/2 transform -translate-x-1/2 pointer-events-none w-full"
        >
          <div ref={titleRef} className="select-none">
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-gradient-theme opacity-10 will-change-transform" style={{ filter: 'blur(50px)' }}></div>
              <motion.div 
                animate={{ rotateX: [2, -2, 2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-theme opacity-[0.03] tracking-tighter text-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                MY PROJECTS
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Main content container */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative will-change-transform"
        >
          {/* Section heading with creative design */}
          <div className="mb-20 text-center">
            <motion.div 
              className="mb-4 relative inline-flex"
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Animated highlights */}
              <motion.div 
                animate={{ 
                  opacity: [0.2, 0.3, 0.2],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -inset-2 bg-gradient-to-r from-accent-1/30 via-accent-2/30 to-accent-highlight/30 opacity-20 rounded-3xl will-change-transform" 
                style={{ filter: 'blur(15px)' }}
              />
              <h2 className="relative z-10 text-5xl md:text-6xl font-bold inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-highlight via-theme to-theme">
                  Recent
                </span>{" "}
                Projects
              </h2>
            </motion.div>
            
            <motion.p 
              className="max-w-2xl mx-auto text-lg text-theme-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Explore my latest work and creative endeavors
            </motion.p>
          </div>

          {/* Featured Projects with horizontal layout */}
          {featuredProjects.length > 0 && (
            <motion.div
              ref={featuredRef}
              initial={{ opacity: 0 }}
              animate={featuredInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-24"
            >
              <div className="flex items-center gap-3 mb-10 relative">
                <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-6 h-[1px] bg-accent-highlight"></div>
                <div className="h-10 w-10 rounded-xl bg-accent-highlight flex items-center justify-center shadow-lg">
                  <FontAwesomeIcon icon={faStar} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-theme">Featured Projects</h3>
              </div>
              
              <div className="space-y-32">
                {featuredProjects.map((project, index) => (
                  <FeaturedProjectCard 
                    key={project.id} 
                    project={project} 
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Other Projects Grid */}
          {regularProjects.length > 0 && (
            <motion.div
              ref={projectsRef}
              initial={{ opacity: 0 }}
              animate={projectsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="mt-20"
            >
              <div className="flex items-center gap-3 mb-10 relative">
                <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-6 h-[1px] bg-accent-highlight"></div>
                <div className="h-10 w-10 rounded-xl bg-theme-50 border border-theme-border flex items-center justify-center">
                  <FontAwesomeIcon icon={faFolder} className="text-theme-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-theme">Other Projects</h3>
              </div>
              
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 md:gap-y-10"
              >
                {regularProjects.map((project, index) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    index={index}
                  />
                ))}
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Enhanced CSS for animation effects */}
      <style jsx>{`
        .bg-grid {
          background-image: linear-gradient(var(--theme-border) 1px, transparent 1px),
                            linear-gradient(90deg, var(--theme-border) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        .bg-grid-pattern {
          background-image: radial-gradient(circle, var(--theme-border) 1px, transparent 1px);
          background-size: 15px 15px;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}