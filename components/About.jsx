"use client";

import React, { useState, useTransition, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faGraduationCap,
  faBriefcase,
  faCertificate,
  faCode,
  faLaptopCode,
  faMagic,
  faChevronRight,
  faStar
} from "@fortawesome/free-solid-svg-icons";

// Define TAB_DATA here before using it
const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    icon: faGraduationCap,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="relative group perspective"
        >
          <div className="absolute -inset-3 bg-gradient-to-r from-accent-1-light/20 via-accent-1/30 to-transparent rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:duration-200"></div>
          <div className="relative h-full p-6 sm:p-8 rounded-2xl bg-card shadow-theme border border-theme-border backdrop-blur-sm hover:shadow-theme-lg transition-all duration-500 overflow-hidden flex flex-col transform group-hover:translate-y-[-8px] group-hover:scale-[1.01]">
            <div className="absolute right-0 top-0 w-40 h-40 bg-accent-1 rounded-full filter blur-2xl opacity-10 -m-12"></div>
            <div className="absolute left-1/2 bottom-0 w-32 h-32 bg-accent-2 rounded-full filter blur-2xl opacity-5 -m-10"></div>
            
            <div className="flex items-start gap-5 mb-5">
              <div className="flex-shrink-0 h-16 w-16 rounded-2xl bg-gradient-to-br from-accent-1 to-accent-1-light p-0.5 group-hover:p-1 transition-all duration-300">
                <div className="h-full w-full rounded-xl bg-card flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                  <FontAwesomeIcon icon={faGraduationCap} className="text-accent-1 text-xl" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-theme flex items-center">
                  B.Tech in Engineering
                  <motion.div 
                    initial={{ scale: 0, rotate: -5 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
                    className="ml-2"
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent-1/10 text-accent-1-solid">
                      <FontAwesomeIcon icon={faStar} className="text-xs" />
                    </span>
                  </motion.div>
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <p className="text-theme-secondary text-sm">2022-2026</p>
                  <div className="relative">
                    <span className="absolute inset-0 bg-accent-1 rounded-full blur-sm opacity-40 animate-pulse-slow"></span>
                    <span className="relative inline-flex px-3 py-1 rounded-full bg-accent-1/10 text-accent-1-solid text-xs font-semibold">
                      Current CGPA: 9.04
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-auto">
              <div className="relative overflow-hidden rounded-xl bg-theme-50/50 p-4 border border-theme-border/50 mb-5">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent-1/5 to-transparent rounded-full blur-md"></div>
                <p className="text-theme-secondary flex items-center">
                  <svg className="w-4 h-4 mr-2 text-accent-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Meerut Institute of Engineering and Technology
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {["Computer Science", "Web Development", "AI", "AIML"].map((tag, i) => (
                  <motion.span 
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + (i * 0.1) }}
                    className="text-xs px-3 py-1.5 bg-theme-50 rounded-full text-theme-secondary border border-theme-border inline-flex items-center gap-1.5 hover:bg-theme-100 transition-colors duration-200"
                  >
                    <span className={`h-2 w-2 rounded-full bg-accent-${(i % 3) + 1}`}></span>
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-1 via-accent-1-light to-accent-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          className="relative group perspective"
        >
          <div className="absolute -inset-3 bg-gradient-to-r from-accent-2-light/20 via-accent-2/30 to-transparent rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:duration-200"></div>
          <div className="relative h-full p-6 sm:p-8 rounded-2xl bg-card shadow-theme border border-theme-border backdrop-blur-sm hover:shadow-theme-lg transition-all duration-500 overflow-hidden flex flex-col transform group-hover:translate-y-[-8px] group-hover:scale-[1.01]">
            <div className="absolute right-0 top-0 w-40 h-40 bg-accent-2 rounded-full filter blur-2xl opacity-10 -m-12"></div>
            <div className="absolute left-1/2 bottom-0 w-32 h-32 bg-accent-3 rounded-full filter blur-2xl opacity-5 -m-10"></div>
            
            <div className="flex items-start gap-5 mb-5">
              <div className="flex-shrink-0 h-16 w-16 rounded-2xl bg-gradient-to-br from-accent-2 to-accent-2-light p-0.5 group-hover:p-1 transition-all duration-300">
                <div className="h-full w-full rounded-xl bg-card flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                  <FontAwesomeIcon icon={faGraduationCap} className="text-accent-2 text-xl" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-theme">Senior Secondary Education</h3>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <p className="text-theme-secondary text-sm">Class XII</p>
                  <div className="relative">
                    <span className="absolute inset-0 bg-accent-3 rounded-full blur-sm opacity-40 animate-pulse-slow"></span>
                    <span className="relative inline-flex px-3 py-1 rounded-full bg-accent-3/10 text-accent-3-solid text-xs font-semibold">
                      87%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-auto">
              <div className="relative overflow-hidden rounded-xl bg-theme-50/50 p-4 border border-theme-border/50 mb-5">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent-2/5 to-transparent rounded-full blur-md"></div>
                <p className="text-theme-secondary flex items-center">
                  <svg className="w-4 h-4 mr-2 text-accent-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Kendriya Vidyalaya Punjab Lines Meerut Cantt
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {["Physics", "Chemistry", "Mathematics"].map((tag, i) => (
                  <motion.span 
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + (i * 0.1) }}
                    className="text-xs px-3 py-1.5 bg-theme-50 rounded-full text-theme-secondary border border-theme-border inline-flex items-center gap-1.5 hover:bg-theme-100 transition-colors duration-200"
                  >
                    <span className={`h-2 w-2 rounded-full bg-accent-${(i % 3) + 1}`}></span>
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-2 via-accent-2-light to-accent-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    icon: faBriefcase,
    content: (
      <div className="relative">
        <div className="hidden sm:block absolute left-8 top-10 bottom-10 w-1 bg-gradient-to-b from-accent-1 via-accent-2 to-accent-3 rounded-full opacity-70"></div>
        <div className="hidden sm:block absolute left-8 top-10 bottom-10 w-1 bg-gradient-to-b from-accent-1 via-accent-2 to-accent-3 rounded-full opacity-30 blur-md"></div>

        <div className="space-y-12 relative">
          {/* Web Developer Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative group"
          >
            <div className="absolute -inset-4 -left-6 bg-gradient-to-r from-accent-1/10 to-transparent rounded-3xl blur-lg opacity-0 group-hover:opacity-70 transition-all duration-500"></div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 relative">
              <div className="sm:flex-shrink-0 relative flex sm:block">
                <div className="hidden sm:block absolute left-0 top-0 h-16 w-16 bg-accent-1 rounded-full opacity-20 animate-ping-slow"></div>
                <div className="relative z-10 h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-accent-1 to-accent-1-light p-0.5 shadow-lg shadow-accent-1/20 flex items-center justify-center mr-4 sm:mr-0">
                  <div className="h-full w-full rounded-full bg-card flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 ease-out">
                    <FontAwesomeIcon icon={faBriefcase} className="text-accent-1 text-xl" />
                  </div>
                </div>
                <div className="hidden sm:flex absolute top-20 left-[30px] h-[calc(100%-5rem)] w-0.5 bg-accent-1/10"></div>
              </div>

              <div className="flex-1 sm:ml-4 bg-card backdrop-blur-sm rounded-2xl border border-theme-border shadow-theme transition-shadow duration-300 group-hover:shadow-theme-lg overflow-hidden">
                <div className="relative p-6 sm:p-8">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-1 rounded-full opacity-5 blur-2xl -mt-10 -mr-10"></div>
                  
                  <div className="flex flex-col">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-theme flex items-center gap-2">
                        Web Developer
                        <span className="inline-flex px-2.5 py-0.5 text-xs font-medium rounded-full bg-accent-2/10 text-accent-2-solid">
                          Current
                        </span>
                      </h3>
                      
                      <div className="flex items-center">
                        <div className="relative">
                          <span className="absolute inset-0 bg-accent-2 rounded-full blur-sm opacity-30 animate-pulse-slow"></span>
                          <span className="relative inline-flex px-3 py-1 rounded-full bg-accent-2/10 text-accent-2-solid text-xs font-semibold whitespace-nowrap">
                            Oct 2023 - Present
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 pb-5 border-b border-theme-border/50">
                      <div className="flex items-center gap-2">
                        <h4 className="text-theme font-semibold">Intellia Society</h4>
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-1"></span>
                        <span className="text-sm text-theme-secondary/80">Meerut, Uttar Pradesh</span>
                      </div>
                    </div>
                    
                    <div className="mt-5 text-theme-secondary space-y-3">
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex gap-3"
                      >
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-accent-1/10 flex items-center justify-center mt-0.5">
                          <svg className="h-3 w-3 text-accent-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p>Developed responsive websites using React.js, Next.js, and Tailwind CSS, integrating Firebase services.</p>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex gap-3"
                      >
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-accent-1/10 flex items-center justify-center mt-0.5">
                          <svg className="h-3 w-3 text-accent-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p>Optimized performance by 55% through comprehensive testing and effective team collaboration.</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Freelance Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative group"
          >
            <div className="absolute -inset-4 -left-6 bg-gradient-to-r from-accent-2/10 to-transparent rounded-3xl blur-lg opacity-0 group-hover:opacity-70 transition-all duration-500"></div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 relative">
              <div className="sm:flex-shrink-0 relative flex sm:block">
                <div className="hidden sm:block absolute left-0 top-0 h-16 w-16 bg-accent-2 rounded-full opacity-20 animate-ping-slow"></div>
                <div className="relative z-10 h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-accent-2 to-accent-2-light p-0.5 shadow-lg shadow-accent-2/20 flex items-center justify-center mr-4 sm:mr-0">
                  <div className="h-full w-full rounded-full bg-card flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 ease-out">
                    <FontAwesomeIcon icon={faLaptopCode} className="text-accent-2 text-xl" />
                  </div>
                </div>
                <div className="hidden sm:flex absolute top-20 left-[30px] h-[calc(100%-5rem)] w-0.5 bg-accent-2/10"></div>
              </div>

              <div className="flex-1 sm:ml-4 bg-card backdrop-blur-sm rounded-2xl border border-theme-border shadow-theme transition-shadow duration-300 group-hover:shadow-theme-lg overflow-hidden">
                <div className="relative p-6 sm:p-8">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-2 rounded-full opacity-5 blur-2xl -mt-10 -mr-10"></div>
                  
                  <div className="flex flex-col">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-theme">Freelance Frontend Developer</h3>
                      
                      <div className="flex items-center">
                        <div className="relative">
                          <span className="absolute inset-0 bg-accent-3 rounded-full blur-sm opacity-30 animate-pulse-slow"></span>
                          <span className="relative inline-flex px-3 py-1 rounded-full bg-accent-3/10 text-accent-3-solid text-xs font-semibold whitespace-nowrap">
                            Dec 2024 - Present
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 pb-5 border-b border-theme-border/50">
                      <div className="flex items-center gap-2">
                        <h4 className="text-theme font-semibold">QODEE</h4>
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-2"></span>
                        <span className="text-sm text-theme-secondary/80">Remote</span>
                      </div>
                    </div>
                    
                    <div className="mt-5 text-theme-secondary space-y-3">
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex gap-3"
                      >
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-accent-2/10 flex items-center justify-center mt-0.5">
                          <svg className="h-3 w-3 text-accent-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p>Built responsive UIs with React.js and Tailwind CSS, collaborating closely with backend teams.</p>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex gap-3"
                      >
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-accent-2/10 flex items-center justify-center mt-0.5">
                          <svg className="h-3 w-3 text-accent-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p>Managed end-to-end development with Git-based workflows, ensuring timely delivery and UI consistency.</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Open Source Contributions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="relative group"
          >
            <div className="absolute -inset-4 -left-6 bg-gradient-to-r from-accent-3/10 to-transparent rounded-3xl blur-lg opacity-0 group-hover:opacity-70 transition-all duration-500"></div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 relative">
              <div className="sm:flex-shrink-0 relative flex sm:block">
                <div className="hidden sm:block absolute left-0 top-0 h-16 w-16 bg-accent-3 rounded-full opacity-20 animate-ping-slow"></div>
                <div className="relative z-10 h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-accent-3 to-accent-3-light p-0.5 shadow-lg shadow-accent-3/20 flex items-center justify-center mr-4 sm:mr-0">
                  <div className="h-full w-full rounded-full bg-card flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 ease-out">
                    <FontAwesomeIcon icon={faMagic} className="text-accent-3 text-xl" />
                  </div>
                </div>
              </div>

              <div className="flex-1 sm:ml-4 bg-card backdrop-blur-sm rounded-2xl border border-theme-border shadow-theme transition-shadow duration-300 group-hover:shadow-theme-lg overflow-hidden">
                <div className="relative p-6 sm:p-8">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-3 rounded-full opacity-5 blur-2xl -mt-10 -mr-10"></div>
                  
                  <div className="flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-bold text-theme">Open Source Contributions</h3>
                    
                    <div className="mt-4 pb-5 border-b border-theme-border/50">
                      <p className="text-theme-secondary">Actively contributing to open source projects to enhance skills and give back to the community.</p>
                    </div>
                    
                    <div className="mt-5">
                      <div className="relative p-5 rounded-xl bg-gradient-to-br from-theme-50/50 to-theme-50/20 border border-theme-border overflow-hidden group-hover:border-accent-3/30 transition-colors duration-300">
                        <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent-3/10 rounded-full blur-xl"></div>
                        
                        <div className="relative flex items-center gap-3">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-accent-3/20 to-accent-3/10 flex items-center justify-center">
                            <FontAwesomeIcon icon={faStar} className="text-accent-3-solid" />
                          </div>
                          
                          <div className="flex-1">
                            <p className="text-theme-secondary">Find me on <a href="https://github.com/deepanshigautam" target="_blank" rel="noopener noreferrer" className="text-accent-highlight font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">GitHub <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span></a></p>
                            <div className="mt-2 flex gap-2">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-1/10 text-accent-1-solid">
                                React
                              </span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-2/10 text-accent-2-solid">
                                Next.js
                              </span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-3/10 text-accent-3-solid">
                                Open Source
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    icon: faCertificate,
    content: (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden perspective-1000"
      >
        <div className="absolute top-0 left-0 h-64 w-64 bg-gradient-to-r from-accent-1/10 to-transparent rounded-full blur-3xl -mt-32 -ml-32"></div>
        <div className="absolute bottom-0 right-0 h-64 w-64 bg-gradient-to-r from-accent-3/10 to-transparent rounded-full blur-3xl -mb-32 -mr-32"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {[
            { name: "Journey to Cloud: Envisioning Your Solution", provider: "IBM", color: "accent-1", icon: "☁️" },
            { name: "Getting Started with Enterprise Data Science", provider: "IBM", color: "accent-2", icon: "📊" },
            { name: "Artificial Intelligence Fundamentals", provider: "IBM", color: "accent-3", icon: "🤖" },
            { name: "Cyber Threat Management", provider: "CISCO", color: "accent-1", icon: "🔐" },
          ].map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, rotateY: 5 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ translateY: -10, scale: 1.02, rotateY: 5, transition: { duration: 0.3 } }}
              className="group relative transform-gpu h-full flex"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-theme-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg"></div>
              <div className={`absolute inset-0 bg-${cert.color}/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300`}></div>
              
              <div className="relative flex-1 p-6 sm:p-7 rounded-2xl bg-card shadow-theme border border-theme-border hover:border-accent-2/20 backdrop-blur-sm h-full flex flex-col">
                <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-gradient-theme opacity-5 blur-2xl -mt-10 -mr-10 transform transition-transform duration-500 group-hover:scale-150"></div>

                <div className="flex items-center gap-4 mb-4">
                  <div className={`h-12 w-12 rounded-xl bg-${cert.color}/10 flex items-center justify-center mb-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-${cert.color}/20`}>
                    <span className="text-xl">{cert.icon}</span>
                  </div>
                  
                  <div className="flex-1 truncate">
                    <div className={`h-1.5 w-10 bg-${cert.color} rounded-full mb-2 transform origin-left transition-all duration-300 group-hover:w-20`}></div>
                    <p className="text-xs text-theme-secondary/80 uppercase tracking-wider font-medium">{cert.provider}</p>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-theme leading-snug">{cert.name}</h3>
                
                <div className="mt-auto pt-6">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-0.5 rounded-full bg-theme-50 border border-theme-border text-theme-secondary">
                      <FontAwesomeIcon icon={faStar} className="text-accent-highlight text-xs" />
                      <span>Verified</span>
                    </div>
                    
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-theme-50 border border-theme-border text-theme-secondary group-hover:text-accent-highlight">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-highlight to-transparent transform scaleX-0 group-hover:scaleX-100 transition-transform duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 p-8 rounded-2xl bg-card backdrop-blur-sm shadow-theme border border-theme-border relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-1/5 via-transparent to-accent-2/5"></div>
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-accent-1/10 via-accent-2/5 to-accent-3/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-shrink-0 h-18 w-18 md:h-20 md:w-20 rounded-full bg-gradient-to-br from-accent-1 via-accent-2 to-accent-3 p-0.5 shadow-xl shadow-accent-1/20">
              <div className="h-full w-full rounded-full bg-card backdrop-blur-sm flex items-center justify-center p-3">
                <div className="relative h-full w-full rounded-full bg-gradient-to-br from-accent-1/10 to-accent-3/10 flex items-center justify-center overflow-hidden">
                  <FontAwesomeIcon icon={faCertificate} className="text-accent-highlight text-2xl animate-pulse-slow" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-shimmer"></div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-theme mb-2 flex items-center gap-2">
                Complete Certification Portfolio
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-highlight/10 text-accent-highlight">
                  Verified
                </span>
              </h3>
              <p className="text-theme-secondary">
                Explore my full range of professional certifications and badges on Credly, showcasing my diverse skill set and continuous learning journey.
              </p>
            </div>

            <div className="flex-shrink-0 self-center md:self-auto">
              <a
                href="https://www.credly.com/users/deepanshi-gautam"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-theme-border text-theme font-medium shadow-theme hover:shadow-theme-lg transition-all duration-300 hover:border-accent-highlight/30"
              >
                <span>View All</span>
                <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-accent-highlight/10 text-accent-highlight transform transition-transform duration-300 group-hover:translate-x-1">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();
  const [expandedInfo, setExpandedInfo] = useState(false);
  const ref = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const textInView = useInView(titleRef, { once: true });

  // Scroll animation values
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);
  const titleY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const handleTabChange = (id) => {
    // Remove useTransition to make tab switching more responsive
    if (id !== tab) {
      setTab(id);
    }
  };

  // Add this memo hook to prevent unnecessary re-renders
  const currentTabContent = React.useMemo(() => {
    const currentTab = TAB_DATA.find((t) => t.id === tab);
    return currentTab ? currentTab.content : null;
  }, [tab]);

  // Text reveal animation settings
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // 3D orbit effect for tech icons with improved performance
  const techIcons = [
    { icon: '⚛️', label: 'React' },
    { icon: '▲', label: 'Next.js' },
    { icon: '🌊', label: 'Tailwind' },
    { icon: '🟨', label: 'JavaScript' },
    { icon: '📱', label: 'Responsive' },
    { icon: '🚀', label: 'Performance' },
    { icon: '✨', label: 'Animation' },
    { icon: '🔍', label: 'SEO' },
  ];

  return (
    <section className="py-28 relative bg-theme transition-colors duration-500 overflow-hidden will-change-transform" id="about">
      {/* Static background elements with optimized blur effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        <motion.div
          style={{ y: backgroundY }}
          className="absolute w-full h-full will-change-transform"
        >
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent-1 rounded-full mix-blend-multiply opacity-20 will-change-opacity" style={{ filter: 'blur(100px)' }}></div>
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-accent-2 rounded-full mix-blend-multiply opacity-20 will-change-opacity" style={{ filter: 'blur(100px)' }}></div>
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-accent-3 rounded-full mix-blend-multiply opacity-20 will-change-opacity" style={{ filter: 'blur(100px)' }}></div>
        </motion.div>
      </div>

      <motion.div
        ref={containerRef}
        style={{ opacity, scale }}
        className="max-w-6xl mx-auto px-4 relative z-10 will-change-transform"
      >
        {/* Simplified 3D static title */}
        <motion.div
          style={{ y: titleY }}
          className="absolute -top-20 left-1/2 transform -translate-x-1/2 pointer-events-none"
        >
          <div ref={titleRef} className="select-none">
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-gradient-theme opacity-10 will-change-transform" style={{ filter: 'blur(50px)' }}></div>
              <div className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-theme opacity-[0.03] tracking-tighter">ABOUT ME</div>
            </div>
          </div>
        </motion.div>

        {/* Main content container */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative will-change-transform"
        >
          {/* Top section with heading and tech stack */}
          <div className="relative mb-16 mt-10">
            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* Left side with title and descriptions */}
              <div className="md:w-3/5 relative z-10">
                <motion.div
                  className="mb-8 relative inline-flex"
                  variants={titleVariants}
                  initial="hidden"
                  animate={textInView ? "visible" : "hidden"}
                >
                  <div className="absolute -inset-2 bg-gradient-theme opacity-20 rounded-3xl will-change-transform" style={{ filter: 'blur(15px)' }}></div>
                  <h2 className="relative z-10 text-5xl md:text-6xl font-bold text-theme inline-block">
                    About Me
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={textInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative"
                >
                  <div className="relative z-10">
                    <p className="text-lg md:text-xl text-theme-secondary leading-relaxed">
                      Hello! I&apos;m <span className="font-semibold relative inline-block">
                        <span className="relative z-10 text-theme">Deepanshi Gautam</span>
                        <span className="absolute bottom-0 left-0 w-full h-[6px] bg-accent-highlight opacity-30"></span>
                      </span>,
                      a passionate Web Developer with a creative mindset and a drive for innovation.
                    </p>

                    <AnimatePresence initial={false}>
                      {expandedInfo && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 text-lg md:text-xl text-theme-secondary leading-relaxed">
                            I transform ideas into elegant, user-centric digital experiences using modern web technologies.
                            My journey in web development is driven by a perfect blend of technical expertise and
                            artistic vision. I believe in creating websites that not only function flawlessly but
                            also tell compelling stories through design.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.button
                      onClick={() => setExpandedInfo(!expandedInfo)}
                      className="mt-4 text-accent-highlight flex items-center gap-1 group"
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{expandedInfo ? "Read less" : "Read more"}</span>
                      <motion.span
                        animate={{ rotate: expandedInfo ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                      </motion.span>
                    </motion.button>
                  </div>
                </motion.div>
              </div>

              {/* Right side with optimized tech stack orbit */}
              <div className="md:w-2/5 relative h-64 md:h-80">
                <div className="absolute inset-0">
                  <div className="tech-orbit relative w-full h-full">
                    {techIcons.map((tech, i) => (
                      <div
                        key={i}
                        className="absolute tech-icon transform -translate-x-1/2 -translate-y-1/2"
                        style={{
                          '--rotation': `${i * (360 / techIcons.length)}deg`,
                          '--delay': `${i * -0.5}s`,
                        }}
                      >
                        <div className="relative group">
                          {/* Tech icon bubble */}
                          <div className="tech-bubble relative z-10 text-2xl flex items-center justify-center h-14 w-14 rounded-full bg-card glass-effect border border-theme-border shadow-theme transition-transform duration-300 group-hover:scale-110 will-change-transform">
                            {tech.icon}
                          </div>
                          
                          {/* Fixed tooltip that appears above all other elements */}
                          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-3 py-1.5 rounded-full bg-card/95 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none glass-effect-heavy whitespace-nowrap text-theme-secondary shadow-theme-lg border border-theme-border z-50">
                            {tech.label}
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {/* Center tech stack label */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-theme glass-effect-heavy flex items-center justify-center shadow-theme-lg border border-theme-border z-20">
                      <div className="text-button-text font-bold tracking-widest text-xs text-center">
                        TECH<br />STACK
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive tab section with optimized animations */}
          <div className="relative mt-16">
            {/* Mobile-responsive tab navigation with horizontal scroll */}
            <div className="relative mb-8 md:mb-12">
              <div className="overflow-x-auto pb-2 scrollbar-hide flex justify-center">
                <div className="relative bg-card rounded-full p-1 sm:p-1.5 glass-effect-light border border-theme-border shadow-theme flex w-max mx-auto">
                  {TAB_DATA.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => handleTabChange(t.id)}
                      className={`relative z-10 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full flex items-center gap-1 sm:gap-2 text-theme-secondary transition-colors duration-200 whitespace-nowrap`}
                      aria-selected={tab === t.id}
                    >
                      <FontAwesomeIcon
                        icon={t.icon}
                        className={`transition-colors duration-200 text-sm sm:text-base ${tab === t.id ? "text-button-text" : ""}`}
                      />
                      <span className={`transition-colors duration-200 text-xs sm:text-sm md:text-base ${tab === t.id ? "text-button-text" : ""}`}>
                        {t.title}
                      </span>
                    </button>
                  ))}
                  
                  {/* Optimized sliding indicator */}
                  <div
                    className="absolute top-1 bottom-1 sm:top-1.5 sm:bottom-1.5 rounded-full bg-gradient-theme will-change-transform"
                    style={{
                      left: `${(TAB_DATA.findIndex(t => t.id === tab) * (100 / TAB_DATA.length)) + (100 / TAB_DATA.length / 25)}%`,
                      width: `${100 / TAB_DATA.length - (100 / TAB_DATA.length / 10)}%`,
                      transition: 'all 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67)'
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Simplified tab content transitions */}
            <div className="min-h-[400px]"> {/* Fixed height container prevents layout shifts */}
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={tab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="h-full"
                >
                  {currentTabContent}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Resume download button with functional download and animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <a
                href="/resume/Deepanshi-Gautam.pdf"
                download="Deepanshi-Gautam.pdf"
                className="group relative inline-flex items-center px-8 py-4 rounded-full bg-gradient-theme text-button-text font-medium shadow-theme overflow-hidden transition-all duration-300 hover:shadow-theme-lg hover:shadow-accent-highlight/20"
                onClick={(e) => {
                  // Add download animation/feedback
                  const button = e.currentTarget;
                  button.classList.add('animate-button-pulse');
                  setTimeout(() => button.classList.remove('animate-button-pulse'), 600);
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FontAwesomeIcon icon={faDownload} className="text-lg group-hover:animate-bounce-subtle" />
                  <span className="font-semibold tracking-wide">Download Resume</span>
                </span>

                <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-white/10"></div>
                </div>
              </a>
            </motion.div>

          </div>
        </motion.div>
      </motion.div>

      {/* CSS for optimized animations */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-gpu {
          transform-style: preserve-3d;
          will-change: transform;
        }
        
        .tech-orbit {
          perspective: 1000px;
          transform-style: preserve-3d;
        }
        
        .tech-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(var(--rotation)) translateX(120px) rotate(calc(-1 * var(--rotation)));
          animation: orbit 30s linear infinite;
          animation-delay: var(--delay);
          will-change: transform;
        }
        
        .tech-bubble {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        
        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(var(--rotation)) translateX(120px) rotate(calc(-1 * var(--rotation)));
          }
          to {
            transform: translate(-50%, -50%) rotate(calc(var(--rotation) + 360deg)) translateX(120px) rotate(calc(-1 * var(--rotation) - 360deg));
          }
        }
        
        .bg-grid {
          background-image: linear-gradient(var(--theme-border) 1px, transparent 1px),
                            linear-gradient(90deg, var(--theme-border) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .perspective {
          perspective: 1000px;
        }
        
        .transform-gpu {
          transform-style: preserve-3d;
          will-change: transform;
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes ping-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.4;
          }
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .scaleX-0 {
          transform: scaleX(0);
        }
        
        .scaleX-100 {
          transform: scaleX(1);
        }
      `}</style>
    </section>
  );
};

export default About;