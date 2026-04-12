import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    { id: 1, title: 'Luminary', category: 'Luxury Identity', color: 'bg-premium-gold/20' },
    { id: 2, title: 'Vortex', category: 'Tech Branding', color: 'bg-premium-purple/20' },
    { id: 3, title: 'Aether', category: 'Modern Minimalist', color: 'bg-premium-gold/30' },
    { id: 4, title: 'Echo', category: 'Creative Studio', color: 'bg-white/10' },
    { id: 5, title: 'Nexus', category: 'Corporate Vision', color: 'bg-indigo-900/40' },
    { id: 6, title: 'Horizon', category: 'Social Media Kit', color: 'bg-premium-purple/30' },
];

const Portfolio = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-32 bg-premium-black relative overflow-hidden">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">Selected <span className="gold-gradient">Masterpieces</span></h2>
                <p className="text-white/50">Experience the quality of craftmanship from designproject.co.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, i) => (
                    <motion.div 
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="group relative h-96 rounded-3xl glass overflow-hidden cursor-pointer"
                    >
                        <div className={`absolute inset-0 ${project.color} group-hover:scale-110 transition-transform duration-700`}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-premium-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                        <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <span className="text-premium-gold text-sm font-medium tracking-widest uppercase mb-1 block opacity-0 group-hover:opacity-100 transition-opacity">{project.category}</span>
                            <h3 className="text-2xl font-bold">{project.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
