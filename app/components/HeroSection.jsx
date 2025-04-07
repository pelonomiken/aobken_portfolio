"use client"; // Add this line at the top of the file

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Twitter } from 'lucide-react';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Left: Text Content */}
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-sans">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0047AB] via-blue-700 to-pink-600">
              Welcome, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Aobakwe R P Kenosi',
                1000,
                'A Software Developer 💻',
                1000,
                'A Web Developer 🌐',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          {/* Social Media Icons */}
          {/* Social Media Icons and Download Button */}
        <div className="flex flex-wrap gap-4 mt-6 justify-center sm:justify-start items-center">
        <a href="https://linkedin.com/in/arpk18" target="_blank" rel="noopener noreferrer">
    <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#0047AB] text-white hover:scale-110 transition-transform duration-200 shadow-md">
      <Linkedin size={20} />
    </div>
  </a>
  <a href="https://github.com/pelonomiken" target="_blank" rel="noopener noreferrer">
    <div className="w-11 h-11 flex items-center justify-center rounded-full bg-black text-white hover:scale-110 transition-transform duration-200 shadow-md">
      <Github size={20} />
    </div>
  </a>
  {/* Download CV Button */}
  <button className="px-4 py-3 rounded-md bg-gradient-to-r from-pink-600 via-purple-400 to-purple-200 text-black font-sans uppercase text-sm hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30 transition-transform duration-200 shadow-md">
    <a
      href="/assests/cv.pdf"
      download="cv.pdf"
      className="block"
    >
      Download CV
    </a>
  </button>
</div>

        </div>

        {/* Right: Profile Image */}
        <div className="col-span-5 place-self-center mt-8 sm:mt-0">
          <div className="rounded-full bg-black w-[250px] h-[250px] relative overflow-hidden">
            <Image
              src="/images/dp.jpeg"
              alt="hero image"
              className="object-cover w-full h-full"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
