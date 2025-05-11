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
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.keys(featuredSkills).map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className={`absolute -inset-2 bg-gradient-to-r from-accent-${index + 1}/30 to-accent-${index + 1}/10 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="relative p-6 rounded-2xl bg-card shadow-theme border border-theme-border glass-effect hover:shadow-theme-lg transition-all duration-500">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`flex-shrink-0 h-12 w-12 rounded-2xl bg-accent-${index + 1} flex items-center justify-center shadow-theme group-hover:scale-110 transition-transform duration-500`}>
                        <FontAwesomeIcon icon={faCode} className="text-white text-lg" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-theme pt-2">{category}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {getSkillsByCategory(category).map((skill, i) => (
                        <div 
                          key={i} 
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-theme-50 border border-theme-border text-theme-secondary hover:bg-card hover:shadow-theme-sm transition-colors duration-300"
                        >
                          <div className="w-5 h-5 relative">
                            <Image
                              src={skillsImage(skill)?.src || "/placeholder.svg"}
                              alt={skill}
                              width={20}
                              height={20}
                              className="object-contain"
                            />
                          </div>
                          <span className="text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
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
            className="relative rounded-2xl bg-card shadow-theme border border-theme-border glass-effect p-6 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-3/5 via-transparent to-accent-highlight/5"></div>
            <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-accent-highlight opacity-5 blur-3xl -mt-20 -mr-20"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-xl bg-accent-3 flex items-center justify-center shadow-theme">
                  <FontAwesomeIcon icon={faBrain} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-theme">Soft Skills</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={softSkillsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="group relative"
                  >
                    <div className="p-4 rounded-xl bg-theme-50 border border-theme-border transition-all duration-300 group-hover:shadow-theme group-hover:bg-card">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-accent-3/10 flex items-center justify-center text-accent-3">
                          <FontAwesomeIcon icon={skill.icon} className="text-sm" />
                        </div>
                        <div>
                          <h4 className="font-medium text-theme mb-1">{skill.name}</h4>
                          <p className="text-xs text-theme-secondary">{skill.description}</p>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-3/40 to-accent-highlight/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
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