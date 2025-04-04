"use client"; // Add this line at the top of the file

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-black mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-400 to-purple-200"> 
              Welcome, I'm{""}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                'Aobakwe R P Kenosi',
                1000,
                'A Software Developer',
                1000,
                'A Web Developer',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-pink-600 via-purple-400 to-purple-200 hover:bg-slate-700 text-white mt-3">
            <a
                href="/assests/cv.pdf" // Link to the PDF CV
                download="cv.pdf" // Optional: Customize the file name for download
                className="block bg-[#6F8FAF] hover:bg-pink-500 rounded-full px-5 py-2"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center">
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