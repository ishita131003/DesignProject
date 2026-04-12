import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import { Shield, ArrowRight, Loader2, Info, Sparkle } from 'lucide-react';

const OrderForm = () => {
    const [brandName, setBrandName] = useState('');
    const [tagline, setTagline] = useState('');
    const [colors, setColors] = useState('');
    const [style, setStyle] = useState('Minimal');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();
    const navigate = useNavigate();

    const generateAISuggestion = () => {
        setBrandName("AuraX");
        setTagline("The Future of Visual Presence");
        setColors("Gold, Obsidian Black, Electric Purple");
        setStyle("Luxury");
        setDescription("A futuristic, minimalist logo that uses negative space to represent the 'A' and 'X' of AuraX. The 'X' should feel like a pulse of energy, while the 'A' provides a solid, premium foundation.");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post('http://localhost:8000/api/v1/orders/', 
                { brand_name: brandName, tagline, preferred_colors: colors, style, description },
                { headers: { Authorization: `Bearer ${user?.token}` } }
            );
            navigate('/dashboard');
        } catch (err) {
            alert('Failed to submit order.');
            setLoading(false);
        }
    };

    return (
        <div className="bg-premium-black min-h-screen text-white pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
             
            <Navbar />
            <div className="absolute inset-0 bg-premium-purple/10 blur-[120px] transition-all animate-pulse"></div>
            
            <div className="max-w-4xl mx-auto relative z-10 glass p-10 md:p-16 rounded-[4rem] border-white/5 shadow-2xl">
                <div className="flex items-center space-x-3 mb-10">
                    <div className="w-12 h-12 rounded-full bg-premium-gold/10 flex items-center justify-center border border-premium-gold/30">
                        <Shield className="text-premium-gold" size={24}/>
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold tracking-tighter">Your Identity Canvas</h1>
                        <p className="text-white/40 italic">We translate your vision into premium visual assets.</p>
                    </div>
                </div>

                <div className="mb-10 p-6 rounded-3xl bg-premium-gold/5 border border-premium-gold/20 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center space-x-4">
                        <div className="bg-premium-gold p-3 rounded-2xl text-premium-black"><Sparkle size={24}/></div>
                        <div>
                             <h4 className="font-bold">Not sure where to start?</h4>
                             <p className="text-white/40 text-sm">Let our AI suggest a premium branding concept for you.</p>
                        </div>
                    </div>
                    <button type="button" onClick={generateAISuggestion} className="px-8 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-premium-gold hover:text-premium-black transition-all font-bold text-sm">
                        Apply AI Suggestion
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm text-white/50 mb-3 font-bold uppercase tracking-widest">Brand Name*</label>
                            <input 
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-premium-gold outline-none transition-all placeholder-white/20 italic font-medium"
                                placeholder="e.g. DesignProject.co"
                                value={brandName}
                                onChange={(e) => setBrandName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-white/50 mb-3 font-bold uppercase tracking-widest">Tagline</label>
                            <input 
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-premium-gold outline-none transition-all placeholder-white/20 italic font-medium"
                                placeholder="e.g. Design that Scales"
                                value={tagline}
                                onChange={(e) => setTagline(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-white/50 mb-3 font-bold uppercase tracking-widest">Preferred Colors</label>
                            <input 
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-premium-gold outline-none transition-all placeholder-white/20 italic font-medium"
                                placeholder="e.g. Gold, Midnight Black, Purple"
                                value={colors}
                                onChange={(e) => setColors(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm text-white/50 mb-3 font-bold uppercase tracking-widest">Design Style</label>
                            <select 
                                className="w-full bg-premium-black border border-white/10 rounded-2xl px-6 py-4 focus:border-premium-gold outline-none transition-all appearance-none italic font-medium cursor-pointer"
                                value={style}
                                onChange={(e) => setStyle(e.target.value)}
                            >
                                <option value="Minimal">Minimal</option>
                                <option value="Luxury">Luxury</option>
                                <option value="Modern">Modern</option>
                                <option value="Bold">Bold</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm text-white/50 mb-3 font-bold uppercase tracking-widest">Brand Narrative</label>
                            <textarea 
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-premium-gold outline-none transition-all min-h-[160px] placeholder-white/20 italic font-medium"
                                placeholder="Tell us more about your vision, values, and story..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="md:col-span-2 mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                       <span className="flex items-center space-x-2 text-white/40 text-sm font-medium">
                         <Info size={16} className="text-premium-gold"/>
                         <span>Detailed descriptions help our designers define your aura better.</span>
                       </span>
                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full md:w-auto btn-premium px-16 py-5 font-bold flex items-center justify-center space-x-3 shadow-2xl shadow-premium-gold/10 group"
                        >
                            {loading ? <Loader2 className="animate-spin" /> : <><span>Initiate Request</span> <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform"/></>}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OrderForm;
