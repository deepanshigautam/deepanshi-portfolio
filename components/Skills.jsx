"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCode, 
  faLightbulb, 
  faHandshake, 
  faBrain,
  faComments,
  faUsers,
  faPuzzlePiece, 
  faClock 
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  // References for scroll animations
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const marqueeRef = useRef(null);
  const softSkillsRef = useRef(null);
  
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const titleInView = useInView(titleRef, { once: true });
  const marqueeInView = useInView(marqueeRef, { once: true });
  const softSkillsInView = useInView(softSkillsRef, { once: true });
  
  // Scroll animation values
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.9, 1, 1, 0.9]);
  const titleY = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [50, 0, 0, -50]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Group skills by category for the featured skills section
  const featuredSkills = {
    "Frontend": ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
    "Backend": ["Node.js", "Express", "MongoDB", "SQL"],
    "Tools": ["Git", "VS Code", "Figma", "Webpack", "Docker"]
  };

  // Soft skills with icons
  const softSkills = [
    { name: "Problem Solving", icon: faPuzzlePiece, description: "Breaking down complex issues into manageable solutions" },
    { name: "Communication", icon: faComments, description: "Clear and effective verbal and written communication" },
    { name: "Team Collaboration", icon: faUsers, description: "Working effectively in diverse team environments" },
    { name: "Adaptability", icon: faHandshake, description: "Quickly adjusting to new technologies and requirements" },
    { name: "Critical Thinking", icon: faBrain, description: "Analytical approach to challenges and decision-making" },
    { name: "Time Management", icon: faClock, description: "Efficient prioritization and meeting deadlines" }
  ];

  // Get skills by category
  const getSkillsByCategory = (category) => {
    return skillsData.filter(skill => 
      featuredSkills[category]?.includes(skill)
    );
  };
  
  // First, add this state at the top of your Skills component
  const [showAllSoftSkills, setShowAllSoftSkills] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  // Add this effect to handle window sizing
  React.useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <section className="py-28 relative bg-theme transition-colors duration-500 overflow-hidden" id="skills">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        <motion.div 
          style={{ y: backgroundY }} 
          className="absolute w-full h-full"
        >
          <div className="absolute top-40 -left-40 w-[500px] h-[500px] bg-accent-1 rounded-full mix-blend-multiply opacity-20 will-change-opacity" style={{ filter: 'blur(130px)' }}></div>
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-accent-2 rounded-full mix-blend-multiply opacity-20 will-change-opacity" style={{ filter: 'blur(130px)' }}></div>
        </motion.div>
      </div>

      <motion.div 
        ref={containerRef}
        style={{ opacity, scale }}
        className="max-w-6xl mx-auto px-4 relative z-10 will-change-transform"
      >
        {/* Floating title */}
        <motion.div 
          style={{ y: titleY }}
          className="absolute -top-20 left-1/2 transform -translate-x-1/2 pointer-events-none"
        >
          <div ref={titleRef} className="select-none">
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-gradient-theme opacity-10 will-change-transform" style={{ filter: 'blur(50px)' }}></div>
              <div className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-theme opacity-[0.03] tracking-tighter">MY SKILLS</div>
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
          {/* Section heading */}
          <div className="mb-16 text-center">
            <motion.div 
              className="mb-4 relative inline-flex"
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute -inset-2 bg-gradient-theme opacity-20 rounded-3xl will-change-transform" style={{ filter: 'blur(15px)' }}></div>
              <h2 className="relative z-10 text-5xl md:text-6xl font-bold text-theme inline-block">
                Skills & Expertise
              </h2>
            </motion.div>
            
            <motion.p 
              className="max-w-2xl mx-auto text-lg text-theme-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Technologies and tools I work with to bring ideas to life
            </motion.p>
          </div>

          {/* Featured Skills in Cards */}
         {/* Featured Skills with Enhanced UI */}
<div className="mb-20">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
    {Object.keys(featuredSkills).map((category, index) => (
      <motion.div
        key={category}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="relative group h-full perspective"
        whileHover={{ translateY: -5 }}
      >
        {/* Enhanced Background Glow Effect */}
        <div 
          className={`absolute -inset-2 bg-gradient-to-r from-accent-${index + 1} via-accent-${(index + 1) % 3 + 1} to-accent-${index + 1} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-700 animate-glow-slow`}>
        </div>
        
        {/* Main Card */}
        <div className="relative h-full p-6 sm:p-8 rounded-2xl bg-card shadow-theme border border-theme-border backdrop-filter backdrop-blur-sm hover:shadow-theme-lg transition-all duration-500 overflow-hidden flex flex-col transform group-hover:border-accent-highlight/40">
          {/* Background Decoration */}
          <div className={`absolute right-0 top-0 w-40 h-40 bg-accent-${index + 1} rounded-full filter blur-3xl opacity-5 -mt-10 -mr-10 group-hover:opacity-10 transition-opacity duration-700`}></div>
          <div className={`absolute left-0 bottom-0 w-32 h-32 bg-accent-${(index + 2) % 3 + 1} rounded-full filter blur-2xl opacity-5 -ml-10 -mb-10 group-hover:opacity-10 transition-opacity duration-700`}></div>
          
          {/* Animated Particles */}
          <div className={`particle-${index + 1} absolute w-1.5 h-1.5 rounded-full bg-accent-${index + 1} opacity-0 group-hover:opacity-60`}></div>
          <div className={`particle-${index + 1}-2 absolute w-2 h-2 rounded-full bg-accent-${(index + 1) % 3 + 1} opacity-0 group-hover:opacity-40`}></div>
          <div className={`particle-${index + 1}-3 absolute w-1 h-1 rounded-full bg-accent-${(index + 2) % 3 + 1} opacity-0 group-hover:opacity-50`}></div>
          
          {/* Category Header with Custom Icons */}
          <div className="flex items-start gap-4 mb-8">
            <div className={`relative flex-shrink-0 h-14 w-14 rounded-2xl bg-gradient-to-br from-accent-${index + 1} to-accent-${index + 1}-light p-0.5 shadow-lg shadow-accent-${index + 1}/30 group-hover:shadow-accent-${index + 1}/50`}>
              <div className="h-full w-full rounded-xl bg-card flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 overflow-hidden">
                <FontAwesomeIcon 
                  icon={index === 0 ? faCode : index === 1 ? faPuzzlePiece : faLightbulb} 
                  className={`text-accent-${index + 1} text-xl group-hover:scale-110 transition-all duration-500`} 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-all duration-1000"></div>
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-theme flex items-center relative">
                {category}
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: inView ? "100%" : 0 }}
                  transition={{ duration: 0.7, delay: 0.5 + index * 0.2 }}
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-accent-${index + 1} to-transparent rounded-full`}
                ></motion.span>
              </h3>
              <p className={`text-sm text-accent-${index + 1}/80 mt-1 opacity-80`}>
                {index === 0 ? "Creating engaging user experiences" : 
                 index === 1 ? "Building reliable server solutions" : 
                 "Optimizing development workflow"}
              </p>
            </div>
          </div>
          
          {/* Skills with Progress Indicators */}
          <div className="flex flex-col gap-4 mt-auto">
            {getSkillsByCategory(category).map((skill, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + (i * 0.1), duration: 0.5 }}
              >
                <div className="flex justify-between items-center mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 relative flex-shrink-0 rounded-md overflow-hidden bg-theme-50 p-0.5 border border-theme-border/50">
                      <Image
                        src={skillsImage(skill)?.src || "/placeholder.svg"}
                        alt={skill}
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-theme">{skill}</span>
                  </div>
                  
                  {/* Star rating system */}
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div 
                        key={star} 
                        className={`h-1.5 w-1.5 rounded-full ${star <= (i % 2 === 0 ? 5 : 4) ? `bg-accent-${index + 1}` : 'bg-theme-border'}`}
                      ></div>
                    ))}
                  </div>
                </div>
                
                <div className="relative h-1.5 w-full bg-theme-50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${85 - (i * 5)}%` }}
                    transition={{ duration: 1, delay: 1 + (i * 0.1), ease: "easeOut" }}
                    className={`absolute left-0 top-0 h-full bg-gradient-to-r from-accent-${index + 1} to-accent-${index + 1}-light rounded-full`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] animate-shimmer"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Decorative Bottom Border */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
        </div>
      </motion.div>
    ))}
  </div>
</div>

          {/* Marquee skills display - fixed vertical scrollbar */}
          <motion.div
            ref={marqueeRef}
            initial={{ opacity: 0 }}
            animate={marqueeInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative rounded-2xl bg-card shadow-theme border border-theme-border glass-effect-light p-6 overflow-hidden mb-16"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-1/5 via-transparent to-accent-2/5"></div>
            
            <h3 className="text-xl font-bold text-theme mb-6 relative z-10 flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-accent-highlight flex items-center justify-center shadow-theme">
                <FontAwesomeIcon icon={faLightbulb} className="text-white text-sm" />
              </div>
              <span>Technology Stack</span>
            </h3>
            
           

<div className="relative z-10 overflow-hidden">
  {/* First wrapper with explicit overflow control */}
  <div className="overflow-hidden" style={{ overflowY: 'hidden' }}>
    {/* Custom CSS class to ensure scrollbars are hidden */}
    <div className="no-scrollbar">
      <Marquee
        gradient={true}
        gradientColor={[25, 26, 27]} // Adjust this to match your bg-card color
        gradientWidth={50}
        speed={40}
        pauseOnHover={true}
        pauseOnClick={true}
        className="py-4"
        style={{ overflow: 'hidden' }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex gap-6 px-4 items-center" // Added items-center for better alignment
        >
          {skillsData.map((skill, id) => (
            <motion.div
              key={id}
              variants={skillVariants}
              className="group"
            >
              <div className="relative bg-theme-50 rounded-xl shadow-theme-sm border border-theme-border p-4 
                transition-all duration-300 hover:shadow-theme hover:scale-105">
                {/* Highlight effect */}
                <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r from-transparent 
                  via-accent-highlight/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col items-center gap-3">
                  <div className="relative h-10 w-16 flex items-center justify-center">
                    <Image
                      src={skillsImage(skill)?.src || "/placeholder.svg"}
                      alt={skill}
                      width={40}
                      height={40}
                      className="object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <p className="text-sm font-medium text-theme-secondary group-hover:text-theme whitespace-nowrap">
                    {skill}
                  </p>
                </div>

                {/* Bottom highlight */}
                <div className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent 
                  via-accent-highlight/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Marquee>
    </div>
  </div>
</div>
          </motion.div>

          {/* Soft Skills Section */}
          <motion.div
  ref={softSkillsRef}
  initial={{ opacity: 0, y: 20 }}
  animate={softSkillsInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
  className="relative rounded-2xl bg-card shadow-theme border border-theme-border backdrop-filter backdrop-blur-sm overflow-hidden"
>
  {/* Enhanced background effects */}
  <div className="absolute inset-0 bg-gradient-to-br from-accent-3/5 via-transparent to-accent-highlight/5"></div>
  <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent-3 opacity-5 blur-3xl -mt-40 -mr-40"></div>
  <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-accent-highlight opacity-5 blur-3xl -mb-40 -ml-20"></div>
  
  {/* Decorative lines */}
  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-3/30 to-transparent"></div>
  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-3/30 to-transparent"></div>
  
  <div className="relative z-10 p-8">
    {/* Enhanced header with decorative elements */}
    <div className="flex items-center gap-4 mb-10 relative">
      <div className="relative">
        <div className="absolute -inset-2 bg-accent-3 opacity-20 blur-xl rounded-full animate-pulse-slow"></div>
        <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-accent-3 to-accent-3-light p-0.5 shadow-lg shadow-accent-3/30">
          <div className="h-full w-full rounded-xl bg-card flex items-center justify-center">
            <FontAwesomeIcon icon={faBrain} className="text-accent-3 text-2xl" />
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-3xl font-bold text-theme mb-1 flex items-center">
          Soft Skills
          <span className="ml-2 inline-block px-2 py-0.5 bg-accent-3/10 text-accent-3 text-xs font-medium rounded-full">
            Interpersonal
          </span>
        </h3>
        <p className="text-theme-secondary">Essential professional abilities that complement my technical expertise</p>
      </div>
      
      <div className="absolute top-full left-20 w-[calc(100%-5rem)] h-0.5 bg-gradient-to-r from-accent-3 via-accent-highlight to-transparent opacity-20 mt-4"></div>
    </div>
    
    {/* Grid layout for soft skills with mobile optimization */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
      {softSkills
        .slice(0, showAllSoftSkills ? softSkills.length : (isMobile ? 3 : softSkills.length))
        .map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={softSkillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            whileHover={{ translateY: -8, scale: 1.02 }}
            className="group relative"
          >
            {/* Background glow on hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-3/20 to-accent-highlight/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300"></div>
            
            <div className="relative p-5 rounded-2xl bg-theme-50/70 border border-theme-border/60 hover:border-accent-3/40 transition-all duration-300 hover:shadow-theme overflow-hidden transform group-hover:bg-card">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 h-12 w-12 bg-accent-3 opacity-5 group-hover:opacity-10 rounded-full blur-xl -mt-6 -mr-6 transition-opacity duration-500"></div>
              
              <div className="flex items-start gap-4">
                {/* Enhanced icon container */}
                <div className="relative flex-shrink-0">
                  <div className="absolute -inset-1 bg-gradient-to-br from-accent-3 to-accent-highlight opacity-30 rounded-full blur group-hover:opacity-60 transition-opacity duration-500 animate-pulse-slow"></div>
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-accent-3/80 to-accent-highlight/80 p-0.5 shadow-lg group-hover:shadow-accent-3/30 transition-all duration-500">
                    <div className="h-full w-full rounded-lg bg-card flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                      <FontAwesomeIcon icon={skill.icon} className="text-accent-3 text-lg" />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-theme mb-1 flex items-center gap-2">
                    {skill.name}
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: softSkillsInView ? "100%" : 0 }}
                      transition={{ duration: 0.7, delay: 1 + index * 0.1 }}
                      className="absolute -bottom-0.5 left-0 h-0.5 bg-gradient-to-r from-accent-3 to-transparent rounded-full opacity-0 group-hover:opacity-100"
                    ></motion.span>
                  </h4>
                  <p className="text-sm text-theme-secondary group-hover:text-theme-secondary/90 transition-colors duration-300">
                    {skill.description}
                  </p>
                </div>
              </div>
              
              {/* Progress indicators */}
              <div className="mt-4 flex space-x-1">
                {[1, 2, 3, 4, 5].map((level) => (
                  <motion.div
                    key={level}
                    initial={{ scale: 0 }}
                    animate={softSkillsInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 + level * 0.05 }}
                    className={`h-1 ${level <= 4 + (index % 2) ? 'w-5 bg-gradient-to-r from-accent-3 to-accent-highlight' : 'w-5 bg-theme-border'} rounded-full`}
                  ></motion.div>
                ))}
              </div>
              
              {/* Bottom border animation */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-3 via-accent-highlight to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            </div>
          </motion.div>
        ))}
    </div>

    {/* Show More / Show Less Button - Only visible on mobile */}
    {softSkills.length > 3 && (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 text-center md:hidden"
      >
        <button
          onClick={() => setShowAllSoftSkills(!showAllSoftSkills)}
          className="relative px-5 py-2 rounded-xl bg-card border border-theme-border hover:border-accent-3/40 text-theme-secondary hover:text-theme transition-all duration-300 group overflow-hidden"
        >
          {/* Button background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent-3/10 to-accent-highlight/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <span className="relative z-10 font-medium flex items-center gap-2">
            {showAllSoftSkills ? (
              <>
                Show Less
                <FontAwesomeIcon icon={faCode} className="text-accent-3 text-xs transform rotate-90 transition-transform group-hover:-rotate-90" />
              </>
            ) : (
              <>
                Show More
                <FontAwesomeIcon icon={faCode} className="text-accent-3 text-xs transform -rotate-90 transition-transform group-hover:rotate-90" />
              </>
            )}
          </span>
        </button>
      </motion.div>
    )}
  </div>
</motion.div>
        </motion.div>
      </motion.div>

      {/* CSS for animation effects */}
      <style jsx>{`
        .bg-grid {
          background-image: linear-gradient(var(--theme-border) 1px, transparent 1px),
                            linear-gradient(90deg, var(--theme-border) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};

export default Skills;