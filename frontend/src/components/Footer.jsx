import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Instagram, Linkedin, Twitter, Mail, ArrowRight, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#080808] border-t border-white/5 pt-24 pb-12 px-6 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    
                    {/* Brand Column */}
                    <div className="space-y-8">
                        <Link to="/" className="flex items-center space-x-3 group">
                            <img src={logo} alt="DesignProject.co" className="h-8 w-auto invert" />
                            <span className="text-xl font-bold tracking-tight text-white group-hover:gold-gradient transition-all">
                                DesignProject.co
                            </span>
                        </Link>
                        <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                            Architecting visual legacies for the digital avant-garde. We define the aura of premium brands through bespoke identity systems.
                        </p>
                        <div className="flex items-center space-x-5">
                            <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-premium-gold hover:text-premium-black transition-all">
                                <Instagram size={16} />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-premium-gold hover:text-premium-black transition-all">
                                <Linkedin size={16} />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-premium-gold hover:text-premium-black transition-all">
                                <Twitter size={16} />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-premium-gold hover:text-premium-black transition-all">
                                <Github size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Expertise Column */}
                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-8">Expertise</h4>
                        <ul className="space-y-4">
                            <li><Link to="/services/logo-design" className="text-white/40 hover:text-premium-gold text-sm transition-colors uppercase tracking-widest text-[10px]">Logo Design</Link></li>
                            <li><Link to="/services/graphic-design" className="text-white/40 hover:text-premium-gold text-sm transition-colors uppercase tracking-widest text-[10px]">Graphic Design</Link></li>
                            <li><Link to="/services/web-development" className="text-white/40 hover:text-premium-gold text-sm transition-colors uppercase tracking-widest text-[10px]">Web Development</Link></li>
                            <li><Link to="/services/branding" className="text-white/40 hover:text-premium-gold text-sm transition-colors uppercase tracking-widest text-[10px]">Branding</Link></li>
                            <li><Link to="/services/paid-advertisements" className="text-white/40 hover:text-premium-gold text-sm transition-colors uppercase tracking-widest text-[10px]">Paid Advertisements</Link></li>
                        </ul>
                    </div>

                    {/* Studio Column */}
                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-8">Studio</h4>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-white/40 hover:text-premium-gold text-sm transition-colors uppercase tracking-widest text-[10px]">Our Story</Link></li>
                            <li><Link to="/portfolio" className="text-white/40 hover:text-premium-gold text-sm transition-colors uppercase tracking-widest text-[10px]">Portfolio</Link></li>
                            <li><Link to="/contact" className="text-white/40 hover:text-premium-gold text-sm transition-colors uppercase tracking-widest text-[10px]">Contact Us</Link></li>
                            <li><a href="#" className="text-white/40 hover:text-premium-gold text-sm transition-colors italic uppercase tracking-widest text-[10px]">Case Studies</a></li>
                            <li><a href="#" className="text-white/40 hover:text-premium-gold text-sm transition-colors italic uppercase tracking-widest text-[10px]">Careers</a></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div className="space-y-8">
                        <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-4">Newsletter</h4>
                        <p className="text-white/40 text-sm leading-relaxed">
                            Subscribe to receive curated branding insights and studio updates.
                        </p>
                        <div className="relative group">
                            <input 
                                type="email" 
                                placeholder="email@example.com"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm focus:border-premium-gold outline-none transition-all placeholder:text-white/20"
                            />
                            <button className="absolute right-2 top-2 bottom-2 bg-premium-gold text-premium-black px-4 rounded-lg hover:brightness-110 transition-all">
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    <div className="text-[10px] tracking-[0.2em] text-white/20 uppercase font-medium">
                        © 2024 DesignProject.co. ALL RIGHTS RESERVED. THE CHAMELEONIC MONOLITH.
                    </div>
                    
                    <div className="flex items-center space-x-8 text-[10px] tracking-[0.2em] text-white/30 font-bold uppercase">
                        <span className="flex items-center space-x-2">
                             <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                             <span>Systems Operational</span>
                        </span>
                        <a href="#" className="hover:text-premium-gold transition-colors">Dribbble</a>
                        <a href="#" className="hover:text-premium-gold transition-colors">Behance</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
