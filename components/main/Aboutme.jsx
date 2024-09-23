"use client";

import React, { useState, useTransition, useRef } from "react";
import TabButton from "@/components/main/TabButton"; // Adjust path if necessary
import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

// Tab data
const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5 space-y-3 text-gray-700 text-lg">
        <li className="border-l-4 border-gray-300 pl-2 hover:border-blue-400 transition duration-300">
          B.tech(2022-2026)- Meerut Institute of Engineering and Technology
        </li>
        <li className="border-l-4 border-gray-300 pl-2 hover:border-blue-400 transition duration-300">
          Schooling- Kendriya vidyalaya Punjan Lines Meerut Cantt
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-5 space-y-3 text-gray-700 text-lg">
        <li className="border-l-4 border-gray-300 pl-2 hover:border-green-400 transition duration-300">
          My certifications and badges are visible at <a href="https://www.credly.com/users/deepanshi-gautam" target="_blank"><strong>here!</strong></a>
        </li>
        
      </ul>
    ),
  },
];

const Aboutme = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();
  
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  // State for transform style
  const [transformStyle, setTransformStyle] = useState({});

  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    setTransformStyle({
      transform: `translate(${(x - window.innerWidth / 2) * 0.02}px, ${(y - window.innerHeight / 2) * 0.02}px)`,
      transition: "transform 0.1s ease-out",
    });
  };

  return (
    <section className="text-black flex justify-center items-center py-16 bg-gray-50" id="about" onMouseMove={handleMouseMove}>
      <style jsx>{`
        .neuromorphic {
          background: #f0f0f0; /* Light background for neuromorphism */
          box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.2),
                      -8px -8px 15px rgba(255, 255, 255, 0.5); /* Shadow effect */
          border-radius: 15px; /* Rounded corners */
          transition: all 0.3s ease; /* Smooth transition */
        }
        
        .neuromorphic:hover {
          box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2),
                      -4px -4px 10px rgba(255, 255, 255, 0.5); /* Slight change on hover */
        }
      `}</style>
      <div ref={ref} className="max-w-2xl text-center p-10 rounded-lg neuromorphic" style={transformStyle}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} // Trigger when in view
          transition={{ duration: 0.5, delay: 0.2 }} // Delay for the heading
          className="text-4xl font-bold text-black mb-4"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} // Trigger when in view
          transition={{ duration: 0.5, delay: 0.4 }} // Delay for the paragraph
          className="text-base lg:text-lg mb-6"
        >
        Hi, I&apos;m <strong>Deepanshi Gautam</strong>, a seasoned Web Developer dedicated to creating outstanding web experiences. My work revolves around transforming design concepts into interactive and user-friendly websites. With a solid grasp of web technologies, I take great pride in consistently exceeding expectations through the delivery of clean and efficient code.I&apos;m passionate about learning and continually expanding my skill set. I&apos;m a collaborative team player, excited to work with others to create amazing applications. I look forward to the opportunity to collaborate on web projects!
        </motion.p>
        <div className="flex flex-row justify-center mt-8 space-x-4">
          <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
          >
            Education
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("certifications")}
            active={tab === "certifications"}
          >
            Certifications
          </TabButton>
        </div>
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} // Trigger when in view
          transition={{ duration: 0.5, delay: 0.6 }} // Delay for the tab content
          className="mt-8"
        >
          {TAB_DATA.find((t) => t.id === tab).content}
        </motion.div>
        <div className="mt-8">
  <a 
    href="/path-to-your-resume.pdf" // Replace with your resume link
    className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-gray-500 rounded-lg shadow-lg transition-transform duration-300 transform hover:bg-gray-600 hover:scale-105"
  >
    <FontAwesomeIcon icon={faDownload} className="mr-2" />
    Download Resume
  </a>
</div>

      </div>
    </section>
  );
};

export default Aboutme;
