"use client"
import { motion } from "framer-motion";
export const Contact = () => {

    return (
        <section id="contact" className="overflow-x-clip py-32 text-white max-w-[1200px] mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid px-4 lg:grid-cols-2 gap-16"
            >
                <div className="space-y-12">
                    <motion.h2

                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-7xl font-bold text-purple-300">
                        Entrar em <span className="text-purple-500">Contato</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="class p-8 rounded-2xl space-y-8"
                    >
                        <div className="space-y-2">
                            <p className="text-lg text-purple-300">Telefone</p>
                            <a href="tel:+5540038922" className="text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2">
                                +55 4003 8922
                                <span className="text-purple-500">➚</span>
                            </a>
                        </div>
                        <div className="space-y-2">
                            <p className="text-lg text-purple-300">Email</p>
                            <a href="mailto:boe@l.com" className="text-3xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2">
                                boe@l.com
                                <span className="text-purple-500">➚</span>
                            </a>
                        </div>
                        <div className="space-y-2">
                            <p className="text-lg text-purple-300">Escritorio</p>
                            <address>
                                Av. Washington Soares, 999 - Edson Queiroz, <br />Fortaleza<br />
                                Brasil
                            </address>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden"
                >

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.209273404847!2d-38.48605861605118!3d-3.764581733565388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74603ee2a15a3%3A0x8d1efb0de23670ce!2sCentro%20de%20Eventos%20do%20Cear%C3%A1!5e0!3m2!1ses!2ses!4v1743047795384!5m2!1ses!2ses"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>

                </motion.div>
            </motion.div>
        </section>
    );
}