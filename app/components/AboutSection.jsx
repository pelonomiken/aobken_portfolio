"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HeartIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

const AboutSection = () => {
  const [isTechOpen, setIsTechOpen] = useState(false);
  const [isEduOpen, setIsEduOpen] = useState(false);

  return (
    <section id="about" className="text-white mt-10 border-t border-gray-300 dark:border-gray-700 py-12">
      <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 xl:px-16">
        <div className="relative flex justify-center">
          <Image
            src="/images/about.jpg"
            width={400}
            height={400}
            className="rounded-full opacity-50 shadow-xl ring-4 ring-white ring-opacity-50 hover:ring-opacity-100 transition-all duration-300 hover:opacity-80 hover:scale-105"
            alt="aboutme"
          />
        </div>
        <div className="mt-6 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-semibold text-[#0047AB] mb-6 uppercase tracking-widest font-sans bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            About Me
          </h2>
          <p className="text-white lg:text-lg leading-relaxed font-sans mb-8">
            Software developer passionate about creating impactful solutions. Proficient in Java, Python, JavaScript, React, and more. Excels in challenges, collaboration, and continuous learning in fast-paced environments.
          </p>

          {/* Technologies Section (Stylish Expandable) */}
          <motion.div 
            className="mt-6 bg-gradient-to-br from-blue-900/30 to-blue-800/20 backdrop-blur-sm p-1 rounded-xl shadow-2xl border border-blue-500/20 overflow-hidden"
            initial={false}
            animate={{ 
              borderColor: isTechOpen ? "rgba(0, 71, 171, 0.5)" : "rgba(0, 71, 171, 0.2)"
            }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="w-full flex justify-between items-center p-5 text-left"
              onClick={() => setIsTechOpen(!isTechOpen)}
            >
              <div className="flex items-center">
                <span className="text-xl font-normal text-white">
                  Technologies I Work With
                </span>
              </div>
              {isTechOpen ? (
                <ChevronUpIcon className="w-6 h-6 text-blue-400" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 text-blue-400" />
              )}
            </button>
            
            <AnimatePresence>
              {isTechOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="px-5 pb-5"
                >
                  <div className="grid grid-cols-2 gap-3">
                    {["Python", "JavaScript", "Next.js", "FastAPI", "Postman", "Many More..."].map((tech) => (
                      <motion.div
                        key={tech}
                        className="flex items-center py-2 px-3 bg-blue-900/30 rounded-lg backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/50 transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <HeartIcon className="w-5 h-5 text-blue-400 mr-2" />
                        <span className="text-blue-100 font-medium">{tech}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Education Section (Stylish Expandable) */}
          <motion.div 
            className="mt-6 bg-gradient-to-br from-blue-900/30 to-blue-800/20 backdrop-blur-sm p-1 rounded-xl shadow-2xl border border-blue-500/20 overflow-hidden"
            initial={false}
            animate={{ 
              borderColor: isEduOpen ? "rgba(0, 71, 171, 0.5)" : "rgba(0, 71, 171, 0.2)"
            }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="w-full flex justify-between items-center p-5 text-left"
              onClick={() => setIsEduOpen(!isEduOpen)}
            >
              <div className="flex items-center">
                <span className="text-xl font-normal text-white">
                  Education
                </span>
              </div>
              {isEduOpen ? (
                <ChevronUpIcon className="w-6 h-6 text-blue-400" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 text-blue-400" />
              )}
            </button>
            
            <AnimatePresence>
              {isEduOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="px-5 pb-5"
                >
                  <div className="space-y-3">
                    <motion.div
                      className="flex items-start py-3 px-4 bg-blue-900/30 rounded-lg backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/50 transition-all"
                      whileHover={{ scale: 1.01 }}
                    >
                      <HeartIcon className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-blue-100 font-bold">Bachelor of Science (BSc) in Computer Systems Engineering</h4>
                        <p className="text-blue-200/80 text-sm font-semibold">University Of Sunderland</p>
                      </div>
                    </motion.div>
                    
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;