"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import udemy from "@/public/images/udemy.png";
import fiverr from "@/public/images/fiverr.png";
import elementor from "@/public/images/elementor.png";
import logitec from "@/public/images/logitech.png";
import oracle from "@/public/images/oracle.png";

const images = [
    { src: udemy, alt: 'udemy' },
    { src: fiverr, alt: 'fiverr' },
    { src: elementor, alt: 'elementor' },
    { src: logitec, alt: 'logitec' },
    { src: oracle, alt: 'oracle' }, { src: udemy, alt: 'udemy' },
    { src: fiverr, alt: 'fiverr' },
    { src: elementor, alt: 'elementor' },
    { src: logitec, alt: 'logitec' },
    { src: oracle, alt: 'oracle' }, { src: udemy, alt: 'udemy' },
    { src: fiverr, alt: 'fiverr' },
    { src: elementor, alt: 'elementor' },
    { src: logitec, alt: 'logitec' },
    { src: oracle, alt: 'oracle' }, { src: udemy, alt: 'udemy' },
    { src: fiverr, alt: 'fiverr' },
    { src: elementor, alt: 'elementor' },
    { src: logitec, alt: 'logitec' },
    { src: oracle, alt: 'oracle' }, { src: udemy, alt: 'udemy' },
    { src: fiverr, alt: 'fiverr' },
    { src: elementor, alt: 'elementor' },
    { src: logitec, alt: 'logitec' },
    { src: oracle, alt: 'oracle' },
]
export const LogoAnimation = () => {
    return (
        <div className="py-8 bg-purple-200/10 glass opacity-80 ">
            <div className="overflow-hidden [mask-image:linear-gradient(to_right,_transparent,black_75%,_transparent)]">
                <motion.div
                    className="flex gap-14 flex-none pr-14"
                    animate={{
                        translateX: '-50%',

                    }}
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: 'linear',
                        repeatType: 'loop',
                    }}
                >
                        {images.map((image, index)=> (
                            <Image
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            height={30}
                            />
                        ))}

                </motion.div>
            </div>

        </div>
    )
}