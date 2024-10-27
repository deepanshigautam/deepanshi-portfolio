'use client'
import React, { useState, useEffect } from "react";
import Hero from "@/components/main/Hero";
import Aboutme from "@/components/main/Aboutme";
import Skills from "@/components/main/Skills";
import ProjectSection from "@/components/main/ProjectSection";
import Footer from "@/components/main/footer";
import { motion } from "framer-motion";
import "@/app/globals.css";

const Loading = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50">
    {/* Loader SVGs and animations */}
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          >
            <Footer />
          </motion.div>
        </>
      )}
    </main>
  );
}
