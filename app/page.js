"use client"; // This makes the component a client component

import React, { useState, useEffect } from "react";
import Hero from "@/components/main/Hero";
import Aboutme from "@/components/main/Aboutme";
import Skills from "@/components/main/Skills";
import ProjectSection from "@/components/main/ProjectSection";
import { motion } from "framer-motion";
import "@/app/globals.css";

const Loading = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50">
    <div className="loader">
      <svg viewBox="0 0 80 80">
        <circle r="32" cy="40" cx="40"></circle>
      </svg>
    </div>
    <div className="loader triangle">
      <svg viewBox="0 0 86 80">
        <polygon points="43 8 79 72 7 72"></polygon>
      </svg>
    </div>
    <div className="loader">
      <svg viewBox="0 0 80 80">
        <rect height="64" width="64" y="8" x="8"></rect>
      </svg>
    </div>
    <style jsx>{`
      .loader {
        --path: #2f3545;
        --dot: #5628ee;
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
        animation: dotRect var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86)
          infinite;
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
        animation: pathTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86)
          infinite;
      }

      .loader svg rect {
        stroke-dasharray: 192 64 192 64;
        stroke-dashoffset: 0;
        animation: pathRect var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
      }

      .loader svg circle {
        stroke-dasharray: 150 50 150 50;
        stroke-dashoffset: 75;
        animation: pathCircle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86)
          infinite;
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
  </div>
);

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen w-full bg-[#F6f7f8]">
      {loading && <Loading />}
      {!loading && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Hero />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <Aboutme />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <Skills />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            <ProjectSection />
          </motion.div>
        </>
      )}
    </main>
  );
}
