import React from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Comparison = () => {
    const aiPoints = [
        "AI outputs can't be trademarked.",
        "You might save money now, but pay more later to fix your image.",
        "Poor design quality with no soul and strategy.",
        "Only one file in JPEG"
    ];

    const agencyPoints = [
        "Extremely expensive with unclear outcomes",
        "Endless meetings / too much time consuming",
        "Unreliable freelancers and hit-or-miss design",
        "No money back"
    ];

    const designProjectPoints = [
        "Top 1% global designers create tailored, high-converting visuals.",
        "We deliver fast in 48 hours with world class quality",
        "Everything you need starting from $120.",
        "100% Money back if not satisfied"
    ];

    return (
        <section className="py-24 px-4 bg-premium-black relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-premium-purple/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-premium-gold/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-serif mb-6 leading-tight"
                    >
                        Why smart brands choose us <br />
                        <span className="gold-gradient">over everyone else</span>
                    </motion.h2>
                </div>

                <div className="glass rounded-[2rem] p-8 md:p-12 border-white/5 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                        
                        {/* Column 1: Using AI */}
                        <div className="space-y-8">
                            <h3 className="text-xl font-semibold text-white/90 px-2">Using AI</h3>
                            <ul className="space-y-6">
                                {aiPoints.map((point, i) => (
                                    <li key={i} className="flex gap-4 group">
                                        <X className="w-5 h-5 text-red-500/60 shrink-0 mt-1 transition-transform group-hover:scale-110" />
                                        <p className="text-white/60 text-sm md:text-base leading-relaxed">{point}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 2: Freelancers / Classic Agencies */}
                        <div className="space-y-8">
                            <h3 className="text-xl font-semibold text-white/90 px-2">Freelancers / Agencies</h3>
                            <ul className="space-y-6">
                                {agencyPoints.map((point, i) => (
                                    <li key={i} className="flex gap-4 group">
                                        <X className="w-5 h-5 text-red-500/60 shrink-0 mt-1 transition-transform group-hover:scale-110" />
                                        <p className="text-white/60 text-sm md:text-base leading-relaxed">{point}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: designproject.co */}
                        <motion.div 
                            initial={{ scale: 0.95, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 lg:-mt-4 lg:-mb-4 shadow-[0_20px_50px_rgba(250,203,78,0.15)] transform transition-all hover:translate-y-[-5px]"
                        >
                            <h3 className="text-2xl font-bold text-premium-black mb-8">With designproject.co</h3>
                            <ul className="space-y-6">
                                {designProjectPoints.map((point, i) => (
                                    <li key={i} className="flex gap-4 group">
                                        <div className="bg-premium-purple/10 rounded-full p-1 shrink-0 mt-0.5">
                                            <Check className="w-5 h-5 text-premium-purple" strokeWidth={3} />
                                        </div>
                                        <p className="text-premium-black font-medium text-sm md:text-base leading-relaxed">{point}</p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
