"use client"; // Add this line at the top of the file

import React, { useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import { HeartIcon } from '@heroicons/react/24/solid';

const TAB_DATA = [
    {
        title: "Technologies",
        id: "technologies",
        content: (
            <ul className="list-none space-y-2">
                {["Java", "Python", "JavaScript", "Next.js", "FastAPI", "Postman"].map((tech) => (
                    <li key={tech} className="flex items-center text-lg font-normal text-black">
                        <HeartIcon className="w-5 h-5 text-pink-400 mr-2 animate-pulse" />
                        {tech}
                    </li>
                ))}
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-none space-y-2">
                <li className="flex items-center text-lg font-normal text-black">
                    <HeartIcon className="w-5 h-5 text-pink-400 mr-2 animate-pulse" />
                    Bachelor of Science in Computer Systems Engineering, University Of Sunderland
                </li>
            </ul>
        )
    }
];

const AboutSection = () => {
    const [tab, setTab] = useState("technologies");

    return (
        <section className="text-white mt-10 border-t border-gray-300 dark:border-gray-700 py-12">
            <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 xl:px-16">
                <div className="relative flex justify-center">
                    <Image
                        src="/images/about.jpg"
                        width={400}
                        height={400}
                        className="rounded-full opacity-50 shadow-xl ring-4 ring-pink-500 ring-opacity-50 hover:ring-opacity-100 transition-all duration-300"
                        alt="aboutme"
                    />
                </div>
                <div className="mt-6 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-extrabold text-gray-100 mb-6 uppercase tracking-widest">About Me</h2>
                    <p className="text-black lg:text-lg leading-relaxed">
                    Software developer passionate about building impactful solutions. Skilled in Java, Python, JavaScript, React and more . Thrives on challenges, collaboration, and continuous learning in fast-paced environments.
                    </p>
                    <div className="flex flex-row justify-start mt-8 space-x-4 text-xl">
                        <TabButton
                            selectTab={() => setTab("technologies")}
                            active={tab === "technologies"}
                        >
                            Technologies
                        </TabButton>
                        <TabButton
                            selectTab={() => setTab("education")}
                            active={tab === "education"}
                        >
                            Education
                        </TabButton>
                    </div>
                    <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
