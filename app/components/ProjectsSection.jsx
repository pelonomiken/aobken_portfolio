"use client";

import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react"; // Importing Lucide Icons

const projectsData = [
    {
        id: 1,
        title: "Travel Website",
        description: "A modern website for exploring dream destinations with interactive features.",
        image: "images/project-1.png",
        tag: ["All"],
        gitUrl: "https://github.com/pelonomiken/Travel-Website",
    },
    {
        id: 2,
        title: "Predictive Analytics",
        description: "Model integrated with a responsive dashboard for real-time predictions.",
        image: "images/project-2.png",
        tag: ["All"],
        gitUrl: "https://github.com/pelonomiken/Predictive-Modelling",
    },
    {
        id: 3,
        title: "Portfolio v1",
        description: "Clean and minimalist portfolio showcasing my early work with pure HTML/CSS.",
        image: "images/project-3.png",
        tag: ["All"],
        gitUrl: "https://github.com/pelonomiken/pelonomiken.github.io",
    },
    {
        id: 4,
        title: "Portfolio v2",
        description: "Modern React portfolio showcasing my second version with Next.js and JS.",
        image: "images/project-4.png",
        tag: ["All"],
        gitUrl: "https://github.com/pelonomiken/aobken_portfolio",
    },
];

const ProjectsSection = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(activeFilter)
    );

    return (
        <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-300 dark:border-gray-700">
            <div className="max-w-7xl mx-auto">
                {/* Animated header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-semibold uppercase text-[#0047AB] font-sans mb-4">
                        My Projects
                    </h2>
                    <p className="text-xl text-white max-w-3xl mx-auto font-normal">
                        A collection of my work showcasing different technologies and design approaches.
                    </p>
                </motion.div>

                {/* Projects grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                imgUrl={project.image}
                                gitUrl={project.gitUrl}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* View more button */}
                <motion.div
                    className="flex justify-center mt-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <a
                        href="https://github.com/pelonomiken"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-8 py-3 rounded-md bg-gradient-to-r  from-pink-600 via-purple-400 to-purple-200 text-black font-sans font-medium hover:shadow-lg hover:shadow-pink-500/30 transition-all"
                    >
                        <Github className="text-xl" />
                        View All Projects
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;
