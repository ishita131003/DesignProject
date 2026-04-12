import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const ServiceDetail = () => {
    const { serviceName } = useParams();
    
    const formattedName = serviceName
        .split('-')
        .map(word => word.toUpperCase())
        .join(' ');

    return (
        <div className="bg-premium-black min-h-screen text-white pt-32 pb-24 font-sans">
            <Navbar />
            
            <div className="max-w-7xl mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass p-12 md:p-24 rounded-[4rem] border-white/5 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-premium-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    
                    <span className="text-[10px] tracking-[0.4em] text-premium-gold uppercase font-bold mb-6 block">// SERVICE OVERVIEW</span>
                    <h1 className="text-5xl md:text-8xl font-serif italic mb-8">{formattedName}</h1>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-xl text-white/60 leading-relaxed mb-10">
                                We provide state-of-the-art {formattedName} solutions tailored for high-end brands. 
                                Our approach combines technical precision with artistic vision to deliver 
                                unmatched results in the digital landscape.
                            </p>
                            <button className="btn-premium">Inquire About {formattedName}</button>
                        </div>
                        
                        <div className="aspect-video bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
                            <span className="text-white/20 italic font-serif">Visual Asset Rendering Placeholder</span>
                        </div>
                    </div>
                </motion.div>
            </div>
            
            <Footer />
        </div>
    );
};

export default ServiceDetail;
