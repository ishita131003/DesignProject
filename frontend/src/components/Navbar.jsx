import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Shield, LayoutDashboard, LogOut, Menu, X } from 'lucide-react';

import logo from '../assets/logo.png';

const Navbar = () => {
    const { user, logout } = useAuth();
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="fixed w-full z-50 top-0 left-0 px-6 py-4 font-sans">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-3">
                    <img src={logo} alt="DesignProject.co" className="h-8 w-auto invert" />
                    <span className="text-xl font-bold tracking-[0.05em] text-white">
                        DesignProject.co
                    </span>
                </Link>

                <div className="hidden md:flex items-center space-x-12">
                    <Link to="/" className="text-sm font-medium hover:text-premium-gold transition-colors text-white/90">Home</Link>
                    
                    {/* Services Dropdown */}
                    <div className="relative group">
                        <button className="text-sm font-medium hover:text-premium-gold transition-colors text-white/90 flex items-center space-x-1 py-2">
                            <span>Services</span>
                            <span className="text-[10px] opacity-50 group-hover:rotate-180 transition-transform duration-300 ml-1">▼</span>
                        </button>
                        
                        <div className="absolute top-full left-0 w-64 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-[100]">
                            <div className="glass rounded-xl overflow-hidden border-white/5 shadow-2xl">
                                <Link to="/services/logo-design" className="block px-6 py-4 text-[10px] font-bold tracking-[0.2em] text-white/60 hover:text-white hover:bg-white/5 transition-all">LOGO DESIGN</Link>
                                <Link to="/services/graphic-design" className="block px-6 py-4 text-[10px] font-bold tracking-[0.2em] text-white/60 hover:text-white hover:bg-white/5 transition-all">GRAPHIC DESIGNING</Link>
                                <Link to="/services/web-development" className="block px-6 py-4 text-[10px] font-bold tracking-[0.2em] text-premium-gold hover:bg-premium-gold/5 transition-all">// WEB DEVELOPMENT</Link>
                                <Link to="/services/paid-advertisements" className="block px-6 py-4 text-[10px] font-bold tracking-[0.2em] text-white/60 hover:text-white hover:bg-white/5 transition-all">PAID ADVERTISEMENTS</Link>
                                <Link to="/services/branding" className="block px-6 py-4 text-[10px] font-bold tracking-[0.2em] text-white/60 hover:text-white hover:bg-white/5 transition-all">BRANDING</Link>
                            </div>
                        </div>
                    </div>

                    <Link to="/pricing" className="text-sm font-medium hover:text-premium-gold transition-colors text-white/90">Pricing</Link>
                    <Link to="/about" className="text-sm font-medium hover:text-premium-gold transition-colors text-white/90">About</Link>
                    <Link to="/contact" className="text-sm font-medium hover:text-premium-gold transition-colors text-white/90">Contact</Link>
                </div>

                <div className="hidden md:flex items-center">
                    {user ? (
                        <div className="flex items-center space-x-6">
                            <Link to="/dashboard" className="text-sm hover:text-premium-gold text-white/90">Dashboard</Link>
                            <button onClick={logout} className="text-sm hover:text-red-400 text-white/90">Logout</button>
                        </div>
                    ) : (
                        <Link to="/order" className="bg-premium-gold text-premium-black text-xs font-bold tracking-widest px-6 py-2.5 rounded-sm hover:brightness-110 transition-all uppercase">
                            Start Project
                        </Link>
                    )}
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 glass rounded-xl p-8 flex flex-col space-y-6 animate-in fade-in slide-in-from-top-4 max-h-[80vh] overflow-y-auto">
                    <Link to="/" className="text-lg font-bold" onClick={() => setIsOpen(false)}>Home</Link>
                    
                    <div className="space-y-4">
                        <div className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/30">Expertise</div>
                        <div className="flex flex-col space-y-4 pl-4 border-l border-white/5">
                            <Link to="/services/logo-design" className="text-sm hover:text-premium-gold" onClick={() => setIsOpen(false)}>Logo Design</Link>
                            <Link to="/services/graphic-design" className="text-sm hover:text-premium-gold" onClick={() => setIsOpen(false)}>Graphic Design</Link>
                            <Link to="/services/web-development" className="text-sm text-premium-gold" onClick={() => setIsOpen(false)}>// Web Development</Link>
                            <Link to="/services/paid-advertisements" className="text-sm hover:text-premium-gold" onClick={() => setIsOpen(false)}>Paid Ads</Link>
                            <Link to="/services/branding" className="text-sm hover:text-premium-gold" onClick={() => setIsOpen(false)}>Branding</Link>
                        </div>
                    </div>
                    
                    <Link to="/pricing" className="text-lg font-bold" onClick={() => setIsOpen(false)}>Pricing</Link>
                    <Link to="/about" className="text-lg font-bold" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/contact" className="text-lg font-bold" onClick={() => setIsOpen(false)}>Contact</Link>
                    {!user && <Link to="/order" className="btn-premium text-center" onClick={() => setIsOpen(false)}>Start Project</Link>}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
