"use client"; // Ensures it's a client component
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link"; // Importing Link from next

export default function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }} // Initial state
      animate={inView ? { opacity: 1, y: 0 } : {}} // Animate when in view
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1,
      }} // Animation properties
      className="bg-gray-200 rounded-lg shadow-lg mx-4 lg:mx-0 md:mx-0 overflow-hidden neuromorphic transition-transform duration-300 hover:shadow-lg"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
    >
      <Image
        src={project.image}
        alt={project.title}
        width={520}
        height={520}
        className="object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl text-black font-semibold mb-2">
          {project.title}
        </h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex items-center justify-between">
          <Link href={project.link} passHref legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              <FontAwesomeIcon icon={faCode} size="lg" />
            </a>
          </Link>
          <Link href={project.demo} passHref legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-lg font-semibold text-black bg-gray-200 rounded-lg neuromorphic hover:bg-gray-300 transition duration-300 shadow-md"
            >
              Demo
            </a>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
