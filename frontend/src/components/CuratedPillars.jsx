import React from 'react';
import { motion } from 'framer-motion';
import { Layers, MousePointer2, ShieldCheck, Component } from 'lucide-react';

const CuratedPillars = () => {
    return (
        <section className="bg-premium-black py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif italic text-premium-gold mb-6">Curated Pillars</h2>
                    <p className="max-w-2xl text-white/40 text-sm leading-relaxed">
                        Our structural framework for building iconic visual identities that stand ahead of temporal shifts.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Large Left Card - Dynamic Scalability */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#1A1A1A] rounded-3xl p-10 flex flex-col justify-between border border-white/5 relative overflow-hidden group min-h-[500px]"
                    >
                        <div className="relative z-10">
                            <Layers className="text-premium-gold w-6 h-6 mb-6" />
                            <h3 className="text-3xl font-serif italic text-white/90 mb-4">Dynamic Scalability</h3>
                        </div>
                        {/* Visual element (3D-like circle) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-80 h-80 pointer-events-none">
                            <div className="w-full h-full rounded-full border-[1.5rem] border-[#1C1C1C] shadow-[inset_0_0_60px_rgba(0,0,0,1),0_40px_80px_rgba(0,0,0,0.8),0_0_20px_rgba(250,203,78,0.05)] bg-[#111] flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
                                <div className="w-48 h-48 rounded-full bg-[#0A0A0A] shadow-[inset_0_0_30px_rgba(255,255,255,0.05)] border border-white/5"></div>
                            </div>
                        </div>

                        <div className="relative z-10">
                            <p className="text-white/30 text-xs leading-relaxed max-w-[200px]">
                                Systems that expand and contract based on market resonance, ensuring your brand never remains static.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Top Right Span 2 - Digital Tactility */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#111111] rounded-3xl p-8 border border-white/5 md:col-span-2 flex items-start space-x-6 h-[240px]"
                        >
                            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center shrink-0">
                                <div className="w-6 h-[2px] bg-cyan-400 rotate-45 relative">
                                    <div className="w-6 h-[2px] bg-cyan-400 -rotate-90 absolute top-0 left-0"></div>
                                </div>
                            </div>
                            <div>
                                <span className="text-[10px] tracking-[0.2em] uppercase text-premium-gold/40 font-bold mb-2 block">Materiality</span>
                                <h3 className="text-2xl font-serif italic text-white/90 mb-3">Digital Tactility</h3>
                                <p className="text-white/30 text-xs leading-relaxed max-w-xs">
                                    Crafting interfaces that feel physical through glass and light.
                                </p>
                            </div>
                        </motion.div>

                        {/* Bottom Small 1 - Fluid Visage */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#111111] rounded-3xl p-8 border border-white/5 flex flex-col items-center justify-center text-center h-[240px]"
                        >
                            <div className="relative w-12 h-12 mb-6">
                                <div className="absolute inset-0 border-[1px] border-white/20 rotate-45"></div>
                                <div className="absolute inset-0 border-[1px] border-white/20 -rotate-45"></div>
                            </div>
                            <h3 className="text-xl font-serif italic text-white/80">Fluid Visage</h3>
                        </motion.div>

                        {/* Bottom Small 2 - Monolithic Security */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-premium-gold rounded-3xl p-8 flex flex-col justify-between h-[240px]"
                        >
                            <ShieldCheck className="text-premium-black w-6 h-6" />
                            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-premium-black">Monolithic Security</h3>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CuratedPillars;
