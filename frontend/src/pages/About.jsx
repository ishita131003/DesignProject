import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Sparkles, Target, Users, Shield } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-premium-black min-h-screen text-white pt-32 pb-12 font-sans overflow-hidden">
            <Navbar />
            
            <div className="max-w-7xl mx-auto px-6 relative">
                {/* Hero Section */}
                <div className="text-center mb-32 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[10px] tracking-[0.5em] text-premium-gold uppercase font-bold mb-6 block">// THE STUDIO</span>
                        <h1 className="text-5xl md:text-9xl font-serif italic mb-8">Architecting <br /> <span className="text-white/40">Auras</span></h1>
                        <p className="max-w-2xl mx-auto text-white/50 text-lg leading-relaxed">
                            DesignProject.co is a bespoke identity studio based in the digital avant-garde. We specialize in creating visual legacies for high-growth companies and premium brands.
                        </p>
                    </motion.div>
                </div>

                {/* Narrative Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif leading-tight">Our philosophy is <br/> <span className="gold-gradient">Chameleonic.</span></h2>
                        <p className="text-white/60 leading-relaxed text-lg">
                            We don't believe in a "signature style." We believe in a signature result. Your brand's aura is unique, and our mission is to translate that essence into a visual language that resonates with your core audience.
                        </p>
                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                            <div>
                                <h4 className="text-3xl font-bold mb-2">100+</h4>
                                <p className="text-white/30 text-xs uppercase tracking-widest font-bold">Identities Crafted</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold mb-2">15</h4>
                                <p className="text-white/30 text-xs uppercase tracking-widest font-bold">Global Awards</p>
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="aspect-square glass rounded-[3rem] p-12 relative flex items-center justify-center border-white/5 shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-premium-gold/5 via-transparent to-transparent"></div>
                        <div className="w-64 h-64 border border-white/10 rounded-full flex items-center justify-center animate-pulse">
                            <div className="w-48 h-48 border border-white/5 rounded-full flex items-center justify-center">
                                <Sparkles className="text-premium-gold w-12 h-12" />
                            </div>
                        </div>
                        <div className="absolute top-12 left-12 p-6 glass rounded-2xl border-white/10">
                            <Users className="text-white/40 mb-3" />
                            <p className="text-xs font-bold tracking-widest uppercase text-white/80">Collaborative</p>
                        </div>
                        <div className="absolute bottom-12 right-12 p-6 glass rounded-2xl border-white/10">
                            <Shield className="text-white/40 mb-3" />
                            <p className="text-xs font-bold tracking-widest uppercase text-white/80">Untouchable</p>
                        </div>
                    </motion.div>
                </div>

                {/* Values Section */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                         <h3 className="text-3xl md:text-4xl font-serif">Our Core <span className="gold-gradient italic">Principles</span></h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Intellectual Rigor', desc: 'We dive deep into the psychology of your market before drawing a single line.', icon: <Target className="text-premium-gold" /> },
                            { title: 'Visual Excellence', desc: 'We settle for nothing less than world-class craft and pixel-perfect execution.', icon: <Sparkles className="text-premium-gold" /> },
                            { title: 'Strategic Depth', desc: 'Design without strategy is just decoration. We build systems that drive growth.', icon: <Shield className="text-premium-gold" /> }
                        ].map((item, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="glass p-10 rounded-3xl border-white/5 hover:border-premium-gold/20 transition-all flex flex-col items-start"
                            >
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">{item.icon}</div>
                                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                                <p className="text-white/40 leading-relaxed text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            
            <Footer />
            
            {/* Background elements */}
            <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-premium-gold/5 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-purple-900/5 blur-[150px] rounded-full pointer-events-none"></div>
        </div>
    );
};

export default About;
