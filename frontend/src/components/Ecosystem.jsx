import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Wind, Lock, ArrowUpRight, ChevronRight } from 'lucide-react';

const Ecosystem = () => {
    return (
        <section className="bg-[#080808] py-32 px-6 relative overflow-hidden">
            {/* Subtle glow background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-900/10 blur-[150px] rounded-full"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div>
                        <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 block mb-4">Modular Architecture</span>
                        <h2 className="text-5xl md:text-7xl font-serif italic text-white leading-none">
                            Our <span className="text-white">Ecosystem</span>
                        </h2>
                        <p className="mt-8 max-w-lg text-white/50 text-base leading-relaxed">
                            An integrated suite of neural nodes and visual engines designed to synchronize with your core identity.
                        </p>
                    </div>
                    
                    <a href="#" className="flex items-center space-x-3 text-[10px] font-bold tracking-[0.3em] uppercase text-white/60 hover:text-white transition-colors group pb-2">
                        <span>Explore Technical Docs</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Neural Core */}
                    <div className="bg-[#111111] p-10 rounded-2xl border border-white/5 flex flex-col items-start h-full min-h-[400px]">
                        <div className="flex justify-between w-full items-start mb-12">
                            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                                <Cpu className="text-purple-400 w-6 h-6" />
                            </div>
                            <span className="text-[10px] px-3 py-1 bg-white/5 text-purple-300 rounded-full font-bold">42.8%</span>
                        </div>
                        <h3 className="text-2xl font-serif italic text-white/90 mb-4">Neural Core</h3>
                        <p className="text-white/40 text-sm leading-relaxed mb-10 flex-grow">
                            Our hardest intelligence processing that adapts brand elements across vast networks of consumer entry points.
                        </p>
                        <div className="w-full h-[2px] bg-white/5 rounded-full relative overflow-hidden">
                            <div className="absolute top-0 left-0 h-full w-[42.8%] bg-purple-500/50"></div>
                        </div>
                    </div>

                    {/* Liquid UI Engine */}
                    <div className="bg-[#111111] p-10 rounded-2xl border border-white/5 flex flex-col items-start h-full min-h-[400px]">
                        <div className="flex justify-between w-full items-start mb-12">
                            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                                <Wind className="text-cyan-400 w-6 h-6" />
                            </div>
                            <span className="text-[10px] px-3 py-1 bg-cyan-900/20 text-cyan-400 rounded-full font-bold">ALPHA</span>
                        </div>
                        <h3 className="text-2xl font-serif italic text-white/90 mb-4">Liquid UI Engine</h3>
                        <p className="text-white/40 text-sm leading-relaxed mb-10 flex-grow">
                            A generative interface system that morphs and breathes, ensuring visual harmony across every digital footprint.
                        </p>
                        <div className="flex space-x-1.5 w-full">
                            <div className="h-1.5 w-8 bg-cyan-500 rounded-full"></div>
                            <div className="h-1.5 w-8 bg-[#222] rounded-full"></div>
                            <div className="h-1.5 w-8 bg-[#222] rounded-full"></div>
                        </div>
                    </div>

                    {/* Ethos Vault */}
                    <div className="bg-[#111111] p-10 rounded-2xl border border-white/5 flex flex-col items-start h-full min-h-[400px]">
                        <div className="flex justify-between w-full items-start mb-12">
                            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                                <Lock className="text-premium-gold w-6 h-6" />
                            </div>
                            <span className="text-[10px] px-3 py-1 bg-premium-gold/10 text-premium-gold rounded-full font-bold uppercase">Open</span>
                        </div>
                        <h3 className="text-2xl font-serif italic text-white/90 mb-4">Ethos Vault</h3>
                        <p className="text-white/40 text-sm leading-relaxed mb-10 flex-grow">
                            Cryptographic protection for your brand assets, ensuring that your digital identity remains unique and untouchable.
                        </p>
                        <a href="#" className="flex items-center space-x-2 text-[10px] font-bold tracking-[0.1em] text-premium-gold uppercase hover:opacity-80 transition-opacity">
                            <ChevronRight className="w-4 h-4" />
                            <span>Read the Principles</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ecosystem;
