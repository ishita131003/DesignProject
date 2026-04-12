import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, MapPin, Send, Loader2, Sparkles } from 'lucide-react';

const Contact = () => {
    const [loading, setLoading] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert("Inquiry Sent. Our studio will contact you shortly.");
        }, 2000);
    };

    return (
        <div className="bg-premium-black min-h-screen text-white pt-32 pb-12 font-sans overflow-hidden">
            <Navbar />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-24">
                    
                    {/* Left Info Column */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[10px] tracking-[0.5em] text-premium-gold uppercase font-bold mb-6 block">// CONTACT</span>
                            <h1 className="text-4xl md:text-8xl font-serif italic mb-8">Initiate <br /> <span className="text-white/40">Dialogue</span></h1>
                            <p className="text-white/50 text-lg leading-relaxed max-w-md">
                                Ready to architect your brand's visual legacy? Reach out to schedule a consultation with our studio principals.
                            </p>
                        </motion.div>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-6 group">
                                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:bg-premium-gold/10 transition-colors">
                                    <Mail className="text-premium-gold w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold tracking-widest text-white/30 uppercase mb-1">Email Details</p>
                                    <p className="text-xl font-medium">hello@DesignProject.co</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-6 group">
                                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:bg-premium-gold/10 transition-colors">
                                    <MessageSquare className="text-premium-gold w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold tracking-widest text-white/30 uppercase mb-1">Office Line</p>
                                    <p className="text-xl font-medium">+1 (555) 789-0123</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-6 group">
                                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:bg-premium-gold/10 transition-colors">
                                    <MapPin className="text-premium-gold w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold tracking-widest text-white/30 uppercase mb-1">Studio</p>
                                    <p className="text-xl font-medium">Digital Nomadic, Planet Earth</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 glass rounded-3xl border-white/5 flex items-center space-x-6 relative overflow-hidden group cursor-pointer">
                            <div className="absolute inset-0 bg-premium-gold/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <Sparkles className="text-premium-gold w-8 h-8" />
                            <div>
                                <h4 className="font-bold text-sm tracking-wide">Premium Onboarding</h4>
                                <p className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] mt-1">Direct Client Pipeline</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="glass p-10 md:p-16 rounded-[3rem] border-white/5 relative shadow-2xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase ml-2">Full Name</label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-premium-gold outline-none transition-all placeholder:text-white/10"
                                        placeholder="Alexander Wright"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase ml-2">Work Email</label>
                                    <input 
                                        type="email" 
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-premium-gold outline-none transition-all placeholder:text-white/10"
                                        placeholder="alex@studio.com"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase ml-2">Brand Name</label>
                                <input 
                                    type="text" 
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-premium-gold outline-none transition-all placeholder:text-white/10"
                                    placeholder="Your Venture"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase ml-2">Project Brief</label>
                                <textarea 
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-6 focus:border-premium-gold outline-none transition-all min-h-[160px] placeholder:text-white/10"
                                    placeholder="Tell us about the aura you want to define..."
                                    required
                                />
                            </div>
                            
                            <button 
                                type="submit" 
                                disabled={loading}
                                className="w-full btn-premium py-5 font-bold flex items-center justify-center space-x-3 mt-4 group shadow-xl shadow-premium-gold/10"
                            >
                                {loading ? <Loader2 className="animate-spin" /> : (
                                    <>
                                        <span>Send Transmission</span>
                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
            
            <Footer />
            
            {/* Decorative background blur */}
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-premium-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-purple-900/5 blur-[120px] rounded-full pointer-events-none"></div>
        </div>
    );
};

export default Contact;
