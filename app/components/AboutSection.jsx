"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  HeartIcon,
  ChevronDownIcon, 
  ChevronUpIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  CalendarIcon
} from "@heroicons/react/24/outline";
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
            Software developer focused on impactful solutions. Skilled in Java, Python, JavaScript, and React. Thrives on challenges, teamwork, and continuous learning in dynamic settings.
          </p>

          {/* Technologies Section */}
          <motion.div 
            className="mt-6 bg-gray-900/80 backdrop-blur-md p-1 rounded-xl shadow-lg border border-gray-700 overflow-hidden"
            initial={false}
            animate={{ 
              borderColor: isTechOpen ? "rgba(96, 165, 250, 0.4)" : "rgba(55, 65, 81, 0.5)"
            }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="w-full flex justify-between items-center p-5 hover:bg-gray-800/30 transition-colors duration-200"
              onClick={() => setIsTechOpen(!isTechOpen)}
            >
              <div className="flex items-center space-x-3">
                <CodeBracketIcon className="w-5 h-5 text-blue-400" />
                <span className="text-lg font-medium text-gray-100">
                  Technical Expertise
                </span>
              </div>
              <motion.div
                animate={{ rotate: isTechOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDownIcon className="w-5 h-5 text-gray-400" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {isTechOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="px-5 pb-5"
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["Python", "JavaScript", "Next.js", "FastAPI", "Postman"].map((tech) => (
                      <motion.div
                        key={tech}
                        className="flex items-center py-2 px-3 bg-gray-800/50 rounded-md border border-gray-700 hover:border-blue-400/40 transition-all"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                        <span className="text-gray-100 font-medium text-sm">{tech}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Education Section */}
          <motion.div 
            className="mt-6 bg-gray-900/80 backdrop-blur-md p-1 rounded-xl shadow-lg border border-gray-700 overflow-hidden"
            initial={false}
            animate={{ 
              borderColor: isEduOpen ? "rgba(96, 165, 250, 0.4)" : "rgba(55, 65, 81, 0.5)"
            }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="w-full flex justify-between items-center p-5 hover:bg-gray-800/30 transition-colors duration-200"
              onClick={() => setIsEduOpen(!isEduOpen)}
            >
              <div className="flex items-center space-x-3">
                <AcademicCapIcon className="w-5 h-5 text-blue-400" />
                <span className="text-lg font-medium text-gray-100">
                  Education Background
                </span>
              </div>
              <motion.div
                animate={{ rotate: isEduOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDownIcon className="w-5 h-5 text-gray-400" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {isEduOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="px-5 pb-5"
                >
                  <div className="space-y-4">
                    <motion.div
                      className="py-3 px-4 bg-gray-800/50 rounded-md border border-gray-700 hover:border-blue-400/40 transition-all"
                      whileHover={{ y: -2 }}
                    >
                      <div className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-400 mr-3 mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-gray-100 font-semibold">BSc Computer Systems Engineering</h4>
                          <p className="text-gray-300 text-sm mt-1">University of Sunderland</p>
                          <div className="flex items-center mt-2">
                            <CalendarIcon className="w-4 h-4 text-gray-400 mr-1" />
                            <span className="text-gray-400 text-xs">2020 - 2024</span>
                          </div>
                        </div>
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