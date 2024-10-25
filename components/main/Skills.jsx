import React, { useRef } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion, useInView } from "framer-motion";
import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

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
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-20 bg-zinc-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-zinc-200 rounded-full opacity-20" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zinc-200 rounded-full opacity-20" />
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-zinc-400 to-transparent" />
            <h2 className="text-4xl font-bold text-zinc-800 tracking-tight">Skills</h2>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-zinc-400 to-transparent" />
          </div>
          <p className="text-zinc-600 text-center max-w-2xl">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills marquee */}
        <div ref={ref} className="w-full ">
          <Marquee
            gradient={true}
            gradientColor={[249, 250, 251]} // matches bg-zinc-50
            speed={50}
            pauseOnHover={true}
            pauseOnClick={true}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex gap-6 py-4 px-6"
            >
              {skillsData.map((skill, id) => (
                <motion.div
                  key={id}
                  variants={skillVariants}
                  className="group"
                >
                  <div className="relative bg-white rounded-xl shadow-sm border border-zinc-200 p-6 
                    transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-zinc-300">
                    {/* Highlight effect */}
                    <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r from-transparent 
                      via-zinc-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex flex-col items-center gap-4">
                      <div className="relative h-12 w-20 flex items-center justify-center">
                        <Image
                          src={skillsImage(skill)?.src}
                          alt={skill}
                          width={45}
                          height={45}
                          className="object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <p className="text-sm font-medium text-zinc-700 group-hover:text-zinc-900">
                        {skill}
                      </p>
                    </div>

                    {/* Bottom highlight */}
                    <div className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent 
                      via-zinc-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Marquee>
        </div>

        
       
      </div>
    </section>
  );
};

export default Skills;