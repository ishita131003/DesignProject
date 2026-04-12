import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PricingComponent from '../components/Pricing';
import { motion } from 'framer-motion';

const PricingPage = () => {
    return (
        <div className="bg-premium-black min-h-screen text-white pt-32 font-sans overflow-hidden">
            <Navbar />
            
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <PricingComponent />
            </motion.div>

            {/* Frequently Asked Questions Section */}
            <section className="py-24 px-6 border-t border-white/5">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                         <h3 className="text-3xl font-serif">Frequently Asked <span className="gold-gradient">Questions</span></h3>
                    </div>
                    <div className="space-y-6">
                        {[
                            { q: "What is included in the full brand identity?", a: "The full identity kit includes logo variations, color palettes, typography systems, social media assets, and a set of brand guidelines to ensure consistency." },
                            { q: "Can I upgrade my plan later?", a: "Absolutely. You can start with the Essential plan and upgrade to Premium or Enterprise at any stage of the project." },
                            { q: "What is the turnaround time?", a: "Turnaround depends on the complexity, but initial concepts are usually delivered within 48 to 72 hours." }
                        ].map((faq, i) => (
                            <div key={i} className="glass p-8 rounded-2xl border-white/5">
                                <h4 className="font-bold mb-3">{faq.q}</h4>
                                <p className="text-white/40 text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <Footer />
            
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-premium-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
        </div>
    );
};

export default PricingPage;
