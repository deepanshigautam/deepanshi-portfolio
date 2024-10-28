import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, Play, Calendar, Clock } from "lucide-react";
import Image from "next/image";

const Badge = ({ children, className = "" }) => (
  <span
    className={`px-2 py-1 rounded-lg text-xs font-semibold backdrop-blur-md bg-white/30 text-white shadow-sm md:px-3 ${className}`}
  >
    {children}
  </span>
);

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "group inline-flex items-center justify-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out md:px-4";
  const variants = {
    primary:
      "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    outline:
      "bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 text-white hover:-translate-y-0.5",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const ProjectCard = ({ project, index = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
        delay: index * 0.1,
      }}
      whileHover={{ y: -8 }}
      className="w-full h-full perspective-1000 sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
    >
      <div className="relative overflow-hidden h-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl group border border-gray-300 md:border-2">
        {/* Ambient background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -inset-2 bg-gradient-to-r from-yellow-100 to-gray-500 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500" />

        {/* Image Container */}
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80 z-10" />
          <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-out">
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="filter brightness-90"
              priority
            />
          </div>

          {/* Project Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6 relative z-10">
          <p className="text-sm md:text-base text-gray-800 mb-4 md:mb-6 line-clamp-3">
            {project.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            {project.demo && (
              <button
                className="flex-1 flex items-center justify-center px-3 md:px-4 py-2 relative overflow-hidden bg-yellow-200 hover:bg-yellow-300 text-gray-700 border-none before:absolute before:inset-0 before:bg-white before:opacity-0 before:hover:opacity-20 before:transition-opacity shadow-[0_4px_0px_0px_rgba(109,109,100,1)] hover:shadow-none hover:translate-y-1 transition-all duration-300 rounded-lg md:rounded-xl text-sm md:text-base font-bold"
                onClick={() => window.open(project.demo, "_blank")}
              >
                <Play className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Live Demo
              </button>
            )}

            {project.link && (
              <button
                className="flex-1 flex items-center justify-center px-3 md:px-4 py-2 bg-white border border-gray-400 md:border-2 hover:border-gray-500 text-gray-800 hover:text-gray-900 shadow-sm hover:shadow-md backdrop-blur-sm hover:bg-gray-50/80 transition-all duration-300 rounded-lg md:rounded-xl text-sm md:text-base font-medium"
                onClick={() => window.open(project.link, "_blank")}
              >
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:translate-x-1 transition-transform text-gray-700" />
                Visit
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;