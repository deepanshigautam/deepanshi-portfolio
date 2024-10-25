"use client";

import React, { useState, useTransition, useRef } from "react";
import TabButton from "@/components/main/TabButton";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faGraduationCap, faBriefcase, faCertificate } from "@fortawesome/free-solid-svg-icons";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    icon: faGraduationCap,
    content: (
      <ul className="space-y-4">
        <motion.li 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-gray-700"
        >
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center">
              <FontAwesomeIcon icon={faGraduationCap} className="text-white text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                B.Tech in Engineering
              </h3>
              <p className="text-gray-600">2022-2026</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-700 font-medium">Meerut Institute of Engineering and Technology</p>
            <div className="mt-2">
            <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">Current CGPA: 9.09</span>
            </div>
          </div>
        </motion.li>
        <motion.li 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-gray-700"
        >
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center">
              <FontAwesomeIcon icon={faGraduationCap} className="text-white text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                Senior Secondary Education
              </h3>
              <p className="text-gray-600">Class XII</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-700 font-medium">Kendriya Vidyalaya Punjab Lines Meerut Cantt</p>
            <div className="mt-2">
            <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">Class XII: 95%</span>
            
            </div>
          </div>
        </motion.li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    icon: faBriefcase,
    content: (
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-gray-700"
      >
        <div className="flex items-center space-x-3 mb-4">
          <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center">
            <FontAwesomeIcon icon={faBriefcase} className="text-white text-xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">
            Web Development Projects
          </h3>
        </div>
        <ul className="space-y-3">
          {[
            "Built responsive web applications using React and Next.js",
            "Implemented modern UI/UX designs using Tailwind CSS"
            
          ].map((item, index) => (
            <motion.li 
              key={index} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3"
            >
              <div className="h-2 w-2 rounded-full bg-gray-700" />
              <p className="text-gray-700">{item}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    icon: faCertificate,
    content: (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-gray-700"
      >
        <div className="flex items-center space-x-3 mb-4">
          <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center">
            <FontAwesomeIcon icon={faCertificate} className="text-white text-xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">
            Professional Certifications
          </h3>
        </div>
        <p className="text-gray-700">
          Explore my complete certification portfolio on{" "}
          <a
            href="https://www.credly.com/users/deepanshi-gautam"
            target="_blank"
            className="text-blue-800 hover:text-gray-600 font-medium transition-colors duration-300 underline"
          >
            Credly!
          </a>
        </p>
      </motion.div>
    ),
  },
];

const Aboutme = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();
  const ref = useRef(null);
  const containerRef = useRef(null);
  const inView = useInView(ref, { once: true });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative" id="about">
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] -z-1" />

      <motion.div 
        ref={containerRef}
        style={{ opacity, scale }}
        className="max-w-5xl mx-auto px-4 relative"
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <h2 className="text-4xl font-bold text-gray-900 relative">
                About Me
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gray-900 rounded-full origin-left"
                />
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Hello! I&apos;
                m <span className="font-semibold text-gray-900">Deepanshi Gautam</span>, 
                a passionate Web Developer with a creative mindset and a drive for innovation. 
                I transform ideas into elegant, user-centric digital experiences using modern web technologies.
              </p>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                My journey in web development is driven by a perfect blend of technical expertise and 
                artistic vision. I believe in creating websites that not only function flawlessly but 
                also tell compelling stories through design.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {TAB_DATA.map((t, index) => (
              <motion.button
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => handleTabChange(t.id)}
                className={`px-6 py-3 rounded-xl flex items-center space-x-2 transition-all duration-300 ${
                  tab === t.id
                    ? "bg-gray-800 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <FontAwesomeIcon icon={t.icon} />
                <span>{t.title}</span>
              </motion.button>
            ))}
          </div>

          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            {TAB_DATA.find((t) => t.id === tab).content}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a
              href="/path-to-your-resume.pdf"
              className="inline-flex items-center px-8 py-4 bg-gray-800 text-white font-semibold rounded-xl shadow-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Aboutme;