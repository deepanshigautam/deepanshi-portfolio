'use client'
import React, { useState, useEffect } from "react";
import Hero from "@/components/main/Hero";
import Aboutme from "@/components/main/Aboutme";
import Skills from "@/components/main/Skills";
import ProjectSection from "@/components/main/ProjectSection";
import Footer from "@/components/main/footer";
import { motion, useScroll, useSpring } from "framer-motion";
import "@/app/globals.css";

// New Custom Loader Component
const CustomLoader = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="flex items-center justify-center gap-4">
        <style jsx>{`
          .loader {
            --path: #2f3545;
            --dot: #fbb117;
            --duration: 3s;
            width: 44px;
            height: 44px;
            position: relative;
            display: inline-block;
            margin: 0 16px;
          }

          .loader:before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 50%;
            position: absolute;
            display: block;
            background: var(--dot);
            top: 37px;
            left: 19px;
            transform: translate(-18px, -18px);
            animation: dotRect var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
          }

          .loader svg {
            display: block;
            width: 100%;
            height: 100%;
          }

          .loader svg rect,
          .loader svg polygon,
          .loader svg circle {
            fill: none;
            stroke: var(--path);
            stroke-width: 10px;
            stroke-linejoin: round;
            stroke-linecap: round;
          }

          .loader svg polygon {
            stroke-dasharray: 145 76 145 76;
            stroke-dashoffset: 0;
            animation: pathTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
          }

          .loader svg rect {
            stroke-dasharray: 192 64 192 64;
            stroke-dashoffset: 0;
            animation: pathRect 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
          }

          .loader svg circle {
            stroke-dasharray: 150 50 150 50;
            stroke-dashoffset: 75;
            animation: pathCircle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
          }

          .loader.triangle {
            width: 48px;
          }

          .loader.triangle:before {
            left: 21px;
            transform: translate(-10px, -18px);
            animation: dotTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
          }

          @keyframes pathTriangle {
            33% {
              stroke-dashoffset: 74;
            }
            66% {
              stroke-dashoffset: 147;
            }
            100% {
              stroke-dashoffset: 221;
            }
          }

          @keyframes dotTriangle {
            33% {
              transform: translate(0, 0);
            }
            66% {
              transform: translate(10px, -18px);
            }
            100% {
              transform: translate(-10px, -18px);
            }
          }

          @keyframes pathRect {
            25% {
              stroke-dashoffset: 64;
            }
            50% {
              stroke-dashoffset: 128;
            }
            75% {
              stroke-dashoffset: 192;
            }
            100% {
              stroke-dashoffset: 256;
            }
          }

          @keyframes dotRect {
            25% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(18px, -18px);
            }
            75% {
              transform: translate(0, -36px);
            }
            100% {
              transform: translate(-18px, -18px);
            }
          }

          @keyframes pathCircle {
            25% {
              stroke-dashoffset: 125;
            }
            50% {
              stroke-dashoffset: 175;
            }
            75% {
              stroke-dashoffset: 225;
            }
            100% {
              stroke-dashoffset: 275;
            }
          }
        `}</style>

        <div className="loader">
          <svg viewBox="0 0 80 80">
            <circle id="test" cx="40" cy="40" r="32"></circle>
          </svg>
        </div>

        <div className="loader triangle">
          <svg viewBox="0 0 86 80">
            <polygon points="43 8 79 72 7 72"></polygon>
          </svg>
        </div>

        <div className="loader">
          <svg viewBox="0 0 80 80">
            <rect x="8" y="8" width="64" height="64"></rect>
          </svg>
        </div>
      </div>
    </div>
  );
};

// Optimized Particle component using transform instead of y position
const Particle = ({ className, style }) => (
  <motion.div
    className={`absolute rounded-full bg-gray-200 ${className}`}
    style={style}
    animate={{
      transform: ['translateY(-20px)', 'translateY(20px)'],
      opacity: [0.15, 0.3, 0.15],
    }}
    transition={{
      duration: Math.random() * 2 + 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }}
  />
);

// Optimized background with fewer particles
const ParticleBackground = () => (
  <div className="fixed inset-0 pointer-events-none">
    {[...Array(12)].map((_, i) => (
      <Particle
        key={i}
        className="w-2 h-2"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          willChange: 'transform'
        }}
      />
    ))}
  </div>
);

// Optimized progress indicator
const ProgressIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 origin-left z-50"
      style={{ scaleX, willChange: 'transform' }}
    />
  );
};

// Optimized navigation dots
const NavigationDots = () => {
 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-20% 0px -20% 0px' }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 space-y-4 z-50">
      {sections.map((section) => (
        <motion.div
          key={section}
          className={`w-2 h-2 rounded-full cursor-pointer ${
            activeSection === section ? 'bg-purple-400' : 'bg-gray-300'
          }`}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={() => {
            document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Optimized animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const aboutVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.2
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const projectItem = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  return (
    <main className="h-full w-full relative bg-gray-100">
      {loading ? (
        <CustomLoader />
      ) : (
        <>
          <ProgressIndicator />
          
          <ParticleBackground />
          
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-16"
          >
            <motion.section
              id="hero"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <Hero />
            </motion.section>

            <motion.section
              id="about"
              variants={aboutVariants}
              viewport={{ once: true, margin: "-100px" }}
              whileInView="visible"
              initial="hidden"
              className="transform-gpu"
            >
              <Aboutme />
            </motion.section>

            <motion.section
              id="skills"
              variants={fadeIn}
              viewport={{ once: true, margin: "-100px" }}
              whileInView="visible"
              initial="hidden"
              className="transform-gpu"
            >
              <Skills />
            </motion.section>

            <motion.section
              id="projects"
              variants={staggerContainer}
              viewport={{ once: true, margin: "-100px" }}
              whileInView="visible"
              initial="hidden"
              className="w-full transform-gpu"
            >
              <ProjectSection itemVariants={projectItem} />
            </motion.section>

            <motion.footer
              variants={fadeIn}
              viewport={{ once: true }}
              whileInView="visible"
              initial="hidden"
            >
              <Footer />
            </motion.footer>
          </motion.div>
        </>
      )}
    </main>
  );
}