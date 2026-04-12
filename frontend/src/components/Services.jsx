import { Diamond, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
    return (
        <section className="bg-premium-black py-20 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    
                    {/* Unrivaled Precision */}
                    <div className="p-12 lg:border-r border-white/5 flex flex-col justify-end min-h-[400px]">
                        <Diamond className="w-8 h-8 text-premium-gold mb-8" />
                        <h2 className="text-4xl font-serif italic text-white mb-6">Unrivaled Precision</h2>
                        <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                            Every anchor point and serif is curated to reflect your unique market position. 
                            We don't follow trends; we set the tempo.
                        </p>
                    </div>

                    {/* Middle Graphic */}
                    <div className="relative overflow-hidden min-h-[400px] bg-premium-gray/50 flex items-center justify-center p-12">
                        {/* Mockup for the design process graphic */}
                        <div className="relative z-10 text-center">
                            <div className="text-[10px] tracking-[0.3em] uppercase text-premium-gold mb-2 font-bold opacity-60">Bolt</div>
                            <div className="text-4xl font-bold tracking-tighter text-white/20 mb-4">DESIGN PROCESS</div>
                            <div className="flex justify-center">
                                <div className="w-12 h-12 rounded-full border border-premium-gold/30 flex items-center justify-center">
                                    <div className="w-6 h-6 rounded-md bg-premium-gold/20 flex items-center justify-center">
                                        <div className="w-2 h-2 bg-premium-gold rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative background elements */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-premium-gold rounded-full blur-3xl"></div>
                        </div>
                    </div>

                    {/* Chameleonic Growth */}
                    <div className="p-12 bg-premium-gold flex flex-col justify-between min-h-[400px]">
                        <div>
                            <h2 className="text-3xl font-bold text-premium-black leading-tight uppercase mb-8">
                                Chameleonic<br />Growth
                            </h2>
                            <p className="text-premium-black/60 text-sm font-medium leading-relaxed max-w-[200px]">
                                Adaptable identities that scale across every medium, from digital to physical.
                            </p>
                        </div>
                        <div className="mt-8">
                            <ArrowRight className="w-10 h-10 text-premium-black" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;
