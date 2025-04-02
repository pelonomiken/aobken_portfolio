"use client"; // Add this line at the top of the file

import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
    {
        id: 1,
        title: "Travel-Website",
        description: "A website for exploring a certain destination.",
        image: "images/project-1.png",
        tag: ["All"],
        gitUrl: "https://github.com/pelonomiken/Travel-Website",
    },
    {
        id: 2,
        title: "Predictive Model Website",
        description: "A machine learning model integrated website for predictive analytics.",
        image: "images/project-2.png",
        tag: ["All"],
        gitUrl: "https://github.com/pelonomiken/Predictive-Modelling",
    },
    {
        id: 3,
        title: "HTML & CSS Portfolio Website",
        description: "A simple and elegant personal portfolio built with HTML & CSS.",
        image: "images/project-3.png",
        tag: ["All"],
        gitUrl: "https://github.com/pelonomiken/pelonomiken.github.io",
    },
    {
        id: 4,
        title: "React Portfolio Website",
        description: "My second personal portfolio built with Next.js.",
        image: "images/project-4.png",
        tag: ["All"],
        gitUrl: "/",
    },
];

const ProjectsSection = () => {
    return (
        <section className="text-white mt-10 border-t border-gray-300 dark:border-gray-700 py-12">
            <h2 className="text-center text-4xl font-extrabold text-gray-100 mb-8 uppercase tracking-wide">
                My Projects
            </h2>
            <div className="flex justify-center items-center gap-4 py-6">
                <button className="rounded-full border-4 border-pink-400 px-6 py-3 text-xl font-medium text-white hover:bg-pink-400 hover:text-white transition-all">
                    All
                </button>
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 px-4">
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        imgUrl={project.image}
                        tags={project.tag} 
                        gitUrl={project.gitUrl}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
