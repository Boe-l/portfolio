"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import project1 from "@/public/images/kanjilogia.png";
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";

const projects = [
    {
        id: 1,
        year: 2025,
        image: project1,
        title: 'Kanjilogia',
        github: 'https://github.com/Boe-l/Kanjilogia',
        description: 'Kanjilogia é um aplicativo de aprendizado de idiomas projetado para aprimorar a retenção de vocabulário por meio da repetição de palavras e gamificação.'
    }
];

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "DD335C"];

export const PortfolioWidget = () => {
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        });
    }, []);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;
    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    return (
        <motion.section style={{ backgroundImage }} id="portfolio" className="py-32 text-white">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-6xl font-bold mb-10 text-purple-300">Projetos <span className="text-gray-400">Selecionados</span></h2>
                    {projects.map((project) => (
                        <div key={project.id} onClick={() => setSelectedProject(project)} className="cursor-pointer mb-8 group">
                            <p className="text-gray-400 text-lg mb-2">{project.year}</p>
                            <h3 className={`text-3xl font-semibold group-hover:text-grey-400 transition-colors 
                        ${selectedProject.id === project.id ? 'text-gray-200 ' : ''}duration-300`}>
                                {project.title}
                            </h3>
                            {selectedProject.id === project.id && (
                                <div className="border-b-2 border-gray-200 my-4"></div>
                            )}
                            {selectedProject.id === project.id && (
                                <p className="text-gray-400 transition-all duration-500 ease-in-out">{project.description}</p>
                            )}
                            {selectedProject.id === project.id && project.github && (
                                <motion.a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-block py-2 px-6 text-white rounded-lg"
                                    style={{ border, boxShadow }}
                                    whileHover={{ scale: 1.015 }}
                                    whileTap={{ scale: 0.985 }}
                                >
                                    Ver no GitHub
                                </motion.a>
                            )}
                        </div>
                    ))}
                </div>
                <Image
                    src={selectedProject.image.src}
                    alt={selectedProject.title}
                    className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
                    width={800}
                    height={450}
                />
            </div>
        </motion.section>
    );
}
