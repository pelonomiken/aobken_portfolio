"use client";
import React from 'react';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <div className="group transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
      <div
        className="h-30 md:h-46 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-white bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link 
            href={gitUrl} 
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-black group/link"
          >
            <CodeBracketIcon 
              className="h-10 w-10 text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-black"
            />
          </Link>
        </div>
      </div>
      <div className="text-black rounded-b-xl mt-3 bg-white py-6 px-4">
        <h5 className="text-xl font-normal mb-2">{title}</h5>
        <p className="text-black">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
