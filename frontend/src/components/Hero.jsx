import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Zap, Globe, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-5 pb-20 bg-premium-black overflow-hidden">
            {/* Background grain/noise effect could be added here */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>

            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                
                {/* Left Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-start"
                >
                    <div className="flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-8">
                        <div className="w-1.5 h-1.5 bg-premium-gold rounded-full shadow-[0_0_8px_#FACB4E]"></div>
                        <span className="text-[10px] tracking-[0.3em] font-medium text-white/60 uppercase">Bespoke Identity Studio</span>
                    </div>
                    
                    <h1 className="text-7xl md:text-8xl lg:text-[100px] leading-[0.9] mb-10">
                        <span className="font-serif italic text-white block">We Define</span>
                        <span className="font-serif text-premium-gold block mt-2">Your Aura</span>
                    </h1>
                    
                    <p className="max-w-md text-base text-white/50 mb-12 leading-relaxed">
                        At DesignProject.co, we don't just design logos; we architect visual legacies. 
                        Elevate your brand through our chameleonic monolith philosophy.
                    </p>

                    <div className="flex items-center space-x-10">
                        <Link to="/order" className="bg-premium-gold text-premium-black px-8 py-4 text-xs font-bold tracking-widest uppercase hover:brightness-110 transition-all rounded-sm">
                            Get Your Logo
                        </Link>
                        <Link to="/portfolio" className="group flex items-center space-x-3">
                            <div className="w-10 h-[1px] bg-white/20 group-hover:w-14 group-hover:bg-premium-gold transition-all duration-300"></div>
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/80 group-hover:text-white transition-colors">View Portfolio</span>
                        </Link>
                    </div>
                </motion.div>

                {/* Right Content - Visual */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative aspect-[4/5] bg-premium-gray border border-white/5 rounded-sm overflow-hidden shadow-2xl group">
                        {/* Placeholder for the main visual */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-premium-black via-transparent to-white/5"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-56 h-56 border border-white/10 rounded-full flex items-center justify-center relative">
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                    <div className="text-[10px] tracking-[0.4em] text-white/40 uppercase mb-1">Luxury</div>
                                    <div className="text-[12px] tracking-[0.4em] text-white/50 uppercase font-bold mb-1">Branding</div>
                                    <div className="text-[8px] tracking-[0.4em] text-white/30 uppercase">Safe Work</div>
                                </div>
                                <div className="w-48 h-48 border border-white/5 rounded-full flex items-center justify-center">
                                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-premium-gold border-b-[10px] border-b-transparent ml-2 cursor-pointer hover:scale-110 transition-transform"></div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Overlay text bottom right */}
                        <div className="absolute bottom-6 right-6 text-[8px] tracking-widest text-white/30 uppercase">
                            001 // MK
                        </div>
                        <div className="absolute bottom-6 left-6 font-serif italic text-white/40 text-sm">
                            Collective
                        </div>
                    </div>

                    {/* Testimonial Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="absolute -bottom-8 -left-12 max-w-[240px] bg-[#111111]/80 backdrop-blur-xl border border-white/10 p-6 shadow-2xl"
                    >
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-8 h-8 rounded-full bg-premium-gold flex items-center justify-center">
                                <Sparkles className="w-4 h-4 text-premium-black" fill="currentColor" />
                            </div>
                            <span className="text-[8px] tracking-widest font-bold text-white/40 uppercase">Industry Leader</span>
                        </div>
                        <p className="font-serif italic text-white/90 text-sm leading-relaxed">
                            "A masterclass in digital sophistication."
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
