"use client"
import React from "react";
import { motion, useInView } from 'framer-motion';


const metrics = [
    {
        id: 1,
        value: '9999+',
        label: 'Anos de experiencia',
        description: 'Dedicados a aperfeiçoar minhas habilidades de desenvolvimento Full Esterco.'
    },
    {
        id: 2,
        value: '9999+',
        label: 'Projetos Finalizados',
        description: 'Desde aplicações pequenas a plataformas WEB complexas.'
    },
    {
        id: 3,
        value: '9999+',
        label: 'Tecnologias masterizadas',
        description: 'Proficiencia em varias linguagens de programação.'
    },
    {
        id: 4,
        value: '100%',
        label: 'Qualidade do código',
        description: 'Focando em escrever somente codigo limpo, eficiente e de fácil manuntenção.'
    },
    {
        id: 5,
        value: '9999+',
        label: 'Commits no GitHub',
        description: 'Contribuidor ativo em comunidades open-source e projetos pessoais.'
    },
]
export const KeyMetrics = () => {
    const ref = React.useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: false });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className=" px-4 py-32 text-white glass"
            id="about"

        >   <div className="container mx-auto ">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl font-bold mb-12 text-purple-300">
                    Métricas-chave
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={metric.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                            className="flex flex-col">

                            <motion.h3
                                initial={{ scale: 0.5 }}
                                animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                                transition={{ delay: 0.6 + index * 0.1, duration: 0.4, type: 'spring' }}
                                className="text-5xl font-bold text-purple-300 mb-2">
                                {metric.value}
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                                className="text-xl font-semibold mb-2">
                                {metric.label}
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                                className="text-gray-400">
                                {metric.description}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}