"use client";

import React, { useRef, useCallback, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faArrowUpRightFromSquare,
  faCode,
  faLightbulb,
  faFolder,
  faStar
} from "@fortawesome/free-solid-svg-icons";

// Project data with your projects
const projectsData = [
  {
    id: "project-naari",
    title: "NaariSayz",
    description: "Built a responsive women's safety platform with Supabase and Framer Motion, boosting engagement by 40%.",
    image: "/assets/naarisayz.png", 
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "NextAuth"],
    links: {
      github: "https://github.com/deepanshigautam/naarisayz",
      live: "https://naarisayz.vercel.app/",
    },
    featured: true
  },
  {
    id: "project-medstudy",
    title: "Med Study",
    description: "Built an MBBS abroad study platform using HTML, Tailwind CSS, and JavaScript, deployed on Vercel.",
    image: "/assets/medstudy-1.png", 
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    links: {
      github: "https://github.com/deepanshigautam/medstudy",
      live: "https://medstudy.vercel.app/",
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
    id: "project-1",
    title: "Gemini Clone",
    description: "Developed user friendly replica of the original platform having several functionality.",
    image: "/assets/gemini-clone.png",
    tags: ["React", "Next.js", "Tailwind CSS"],
    links: {
      github: "https://github.com/deepanshigautam/Gemini-clone",
      live: "https://chat-gemini-2.vercel.app/",
    },
    featured: false
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
    id: "project-6",
    title: "Weather Forecast App",
    description: "A weather application providing accurate forecasts, interactive maps, and personalized weather alerts based on location.",
    image: "/assets/weatherApp.png", 
    tags: ["React Native", "Redux", "Weather API"],
    links: {
      github: "https://github.com/username/weather-app",
      live: "#",
    },
    featured: false
  }
];

// Optimization: Memoize project cards to prevent unnecessary re-renders
const FeaturedProjectCard = memo(({ project, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 * index, ease: "easeOut" }}
      className={`relative z-10 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-10 mb-20 last:mb-10`}
    >
      {/* Project image with group class for hover effects */}
      <div className="relative w-full md:w-3/5 aspect-[16/9] group">
        {/* Simplified shadow effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-accent-1/20 to-accent-2/10 rounded-xl -rotate-1 scale-[1.02] -z-10 opacity-75"></div>
        <div className={`relative overflow-hidden rounded-xl border-2 border-theme-border ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} shadow-xl hover:shadow-2xl h-full transform-gpu`}>
          {project.image ? (
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              loading={index < 2 ? "eager" : "lazy"}
            />
          ) : (
            <div className="w-full h-full aspect-[16/9] bg-gradient-to-br from-accent-1/10 to-accent-2/10 flex items-center justify-center">
              <FontAwesomeIcon icon={faFolder} className="text-5xl text-theme-secondary/50" />
            </div>
          )}
          
          {/* Simple hover overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="px-3 py-1.5 bg-accent-highlight rounded-full text-white text-xs font-medium">
                Featured Project
              </div>
            </div>
            
            <div className="flex gap-3 mt-auto">
              {project.links.github && project.links.github !== "#" && (
                <Link href={project.links.github} target="_blank" aria-label={`View GitHub repository for ${project.title}`}>
                  <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all border border-white/20">
                    <FontAwesomeIcon icon={faCode} className="text-white" />
                  </div>
                </Link>
              )}
              
              {project.links.live && project.links.live !== "#" && (
                <Link href={project.links.live} target="_blank" aria-label={`View live demo for ${project.title}`}>
                  <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all border border-white/20">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-white" />
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Project info - simplified animations */}
      <div className="flex flex-col justify-center flex-1 relative">
        {/* Accent line */}
        <div className={`hidden md:block absolute ${index % 2 === 0 ? '-left-5' : '-right-5'} top-0 bottom-0 w-[3px] bg-gradient-to-b from-accent-highlight/60 via-accent-1/30 to-transparent`}></div>
        
        <h3 
          className="text-2xl md:text-3xl font-bold text-theme mb-3 leading-tight"
        >
          {project.title}
        </h3>
        
        <div 
          className="bg-card rounded-xl p-4 md:p-6 shadow-lg relative z-10 border border-theme-border"
        >
          <p className="text-theme-secondary mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span 
                key={i} 
                className="px-2.5 py-1 bg-theme-50 text-theme-secondary text-xs rounded-md border border-theme-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
});
FeaturedProjectCard.displayName = "FeaturedProjectCard";

// Optimization: Memoize standard project card
const ProjectCard = memo(({ project, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="group"
    >
      <div className="relative h-full">
        {/* Simplified hover effect */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent-1/10 to-accent-2/10 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
        
        {/* Card with simplified design */}
        <div className="relative h-full bg-card rounded-xl overflow-hidden border border-theme-border shadow-md hover:shadow-lg transition-all duration-300 hover:border-accent-highlight/20 flex flex-col">
          {/* Image section */}
          <div className="relative h-[180px] overflow-hidden">
            {/* Simplified diagonal design */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-1/5 to-accent-2/5"></div>
            
            {/* Diagonal cut */}
            <div className="absolute -bottom-10 left-0 right-0 h-20 bg-card transform rotate-5 scale-110 origin-bottom-right"></div>
            
            {project.image ? (
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent-1/10 to-accent-2/10">
                <FontAwesomeIcon icon={faLightbulb} className="text-4xl text-theme-secondary/30" />
              </div>
            )}
          </div>
          
          {/* Content area */}
          <div className="flex flex-col flex-grow p-5 relative">
            <h3 className="text-xl font-bold text-theme mb-2 relative">
              {project.title}
              {/* Simple underline animation */}
              <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-accent-highlight to-accent-2/80 group-hover:w-full transition-all duration-500"></div>
            </h3>
            
            <p className="text-sm text-theme-secondary mb-4 line-clamp-3 flex-grow">{project.description}</p>
            
            {/* Links */}
            <div className="flex items-center justify-between mt-auto pt-3 border-t border-theme-border/40">
              <div className="flex gap-3">
                {project.links.github && project.links.github !== "#" && (
                  <Link href={project.links.github} target="_blank" className="text-theme-secondary hover:text-theme transition-colors" aria-label="View GitHub repository">
                    <FontAwesomeIcon icon={faCode} className="text-lg" />
                  </Link>
                )}
              </div>
              
              {/* Tech tags */}
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
            
            {/* Simplified live demo button */}
            {project.links.live && project.links.live !== "#" && (
              <div className="absolute inset-x-0 -bottom-12 group-hover:bottom-0 transition-all duration-300 p-3 bg-gradient-to-t from-theme to-transparent">
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
});
ProjectCard.displayName = "ProjectCard";

export default function Projects() {
  // Simplified references for essential animations only
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  
  const inView = useInView(sectionRef, { once: true });
  const titleInView = useInView(titleRef, { once: true });
  
  // Featured projects
  const featuredProjects = projectsData.filter(project => project.featured);
  const regularProjects = projectsData.filter(project => !project.featured);
  
  return (
    <section className="py-28 md:py-36 relative bg-theme transition-colors duration-500" id="projects">
      {/* Static background elements - removes heavy animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        <div className="absolute top-40 -left-40 w-[500px] h-[500px] bg-accent-2 rounded-full mix-blend-multiply opacity-15" style={{ filter: 'blur(100px)' }}></div>
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-accent-3 rounded-full mix-blend-multiply opacity-15" style={{ filter: 'blur(100px)' }}></div>
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-accent-1 rounded-full mix-blend-multiply opacity-10" style={{ filter: 'blur(100px)' }}></div>
      </div>

      <div 
        className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10"
      >
        {/* Simplified title */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 pointer-events-none w-full">
          <div ref={titleRef} className="select-none">
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-gradient-theme opacity-10" style={{ filter: 'blur(50px)' }}></div>
              <div 
                className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-theme opacity-[0.03] tracking-tighter text-center"
              >
                MY PROJECTS
              </div>
            </div>
          </div>
        </div>

        {/* Main content container */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Section heading */}
          <div className="mb-20 text-center">
            <div className="mb-4 relative inline-flex">
              <div className="absolute -inset-2 bg-gradient-to-r from-accent-1/20 via-accent-2/20 to-accent-highlight/20 opacity-20 rounded-3xl" style={{ filter: 'blur(15px)' }}></div>
              <h2 className="relative z-10 text-5xl md:text-6xl font-bold inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-highlight via-theme to-theme">
                  Recent
                </span>{" "}
                Projects
              </h2>
            </div>
            
            <p className="max-w-2xl mx-auto text-lg text-theme-secondary">
              Explore my latest work and creative endeavors
            </p>
          </div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="mb-24">
              <div className="flex items-center gap-3 mb-10">
                <div className="h-10 w-10 rounded-xl bg-accent-highlight flex items-center justify-center shadow-lg">
                  <FontAwesomeIcon icon={faStar} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-theme">Featured Projects</h3>
              </div>
              
              <div className="space-y-24">
                {featuredProjects.map((project, index) => (
                  <FeaturedProjectCard 
                    key={project.id} 
                    project={project} 
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Other Projects Grid */}
          {regularProjects.length > 0 && (
            <div className="mt-20">
              <div className="flex items-center gap-3 mb-10">
                <div className="h-10 w-10 rounded-xl bg-theme-50 border border-theme-border flex items-center justify-center">
                  <FontAwesomeIcon icon={faFolder} className="text-theme-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-theme">Other Projects</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                {regularProjects.map((project, index) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Simplified CSS */}
      <style jsx>{`
        .bg-grid {
          background-image: linear-gradient(var(--theme-border) 1px, transparent 1px),
                            linear-gradient(90deg, var(--theme-border) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}