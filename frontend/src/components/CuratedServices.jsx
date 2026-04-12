import React from 'react';
import { motion } from 'framer-motion';
import { Paintbrush, BarChart3, Globe, ArrowRight } from 'lucide-react';

const services = [
    {
        title: 'Graphics Designing',
        icon: <Paintbrush className="w-8 h-8 text-premium-gold" />,
        description: 'Graphic Designing includes Flyers and posters that help you to promote events, Products and Offers.',
        subServices: ['LOGO DESIGNING', 'BANNER DESIGNING', 'SOCIAL MEDIA GRAPHICS']
    },
    {
        title: 'Digital Marketing',
        icon: <BarChart3 className="w-8 h-8 text-premium-gold" />,
        description: 'We are known to deliver the most innovative digital marketing ideas to keep up with what your customers expect.',
        subServices: ['SOCIAL MEDIA MANAGEMENT', 'CONTENT MARKETING', 'VIDEO MARKETING']
    },
    {
        title: 'Web Development',
        icon: <Globe className="w-8 h-8 text-premium-gold" />,
        description: 'Grow your business seamlessly using our modern design aesthetics. Leverage the internet in a unique way.',
        subServices: ['STATIC WEB DEVELOPMENT', 'DYNAMIC WEB DEVELOPMENT', 'ECOMMERCE DEVELOPMENT']
    }
];

const CuratedServices = () => {
    return (
        <section className="py-24 bg-premium-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-serif mb-6 leading-tight"
                    >
                        We Offer a Wide Variety of <br />
                        <span className="gold-gradient">Marketing Services</span>
                    </motion.h2>
                    <div className="w-20 h-1 bg-premium-gold/30 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="glass p-10 rounded-[2.5rem] border-white/5 hover:border-premium-gold/30 transition-all group flex flex-col items-start story-card"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-premium-gold/10 transition-colors">
                                {service.icon}
                            </div>
                            
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-white/50 text-base leading-relaxed mb-8 flex-grow">
                                {service.description}
                            </p>

                            <div className="space-y-4 w-full">
                                {service.subServices.map((sub, i) => (
                                    <div key={i} className={`p-4 rounded-xl text-xs font-bold tracking-widest uppercase flex items-center justify-between ${i === 0 && index === 0 ? 'bg-white text-premium-black' : i === 1 && index === 1 ? 'bg-white text-premium-black' : i === 2 && index === 2 ? 'bg-white text-premium-black' : 'bg-white/5 text-white/60'}`}>
                                        <span>{sub === 'LOGO DESIGNING' || sub === 'CONTENT MARKETING' || sub === 'ECOMMERCE DEVELOPMENT' ? `// ${sub}` : sub}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-premium px-12 py-4 text-xs font-bold tracking-widest uppercase inline-flex items-center space-x-3"
                    >
                        <span>View All Services</span>
                        <ArrowRight size={18} />
                    </motion.button>
                </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-premium-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-premium-gold/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </section>
    );
};

export default CuratedServices;
