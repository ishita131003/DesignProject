import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Shield, ArrowRight, Loader2 } from 'lucide-react';

import logo from '../assets/logo.png';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            await axios.post('http://localhost:8000/api/v1/auth/signup', {
                email,
                password,
                full_name: fullName
            });
            navigate('/login');
        } catch (err) {
            setError(err.response?.data?.detail || 'Something went wrong.');
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-premium-black relative px-6 font-sans">
            <div className="absolute inset-0 bg-premium-purple/10 blur-[100px] z-0"></div>
            
            <div className="w-full max-w-md glass p-10 rounded-[2.5rem] relative z-10">
                <Link to="/" className="flex flex-col items-center justify-center space-y-4 mb-10">
                    <img src={logo} alt="DesignProject.co" className="h-12 w-auto invert" />
                    <span className="text-2xl font-bold tracking-[0.05em] text-white italic">DesignProject.co</span>
                </Link>

                <h1 className="text-3xl font-bold mb-2">Create Identity</h1>
                <p className="text-white/50 mb-8 font-medium">Start your visual journey</p>

                {error && <div className="bg-red-500/20 text-red-400 p-4 rounded-2xl mb-6 text-sm">{error}</div>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm text-white/60 mb-2 font-medium">Full Name</label>
                        <input 
                            type="text" 
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-premium-gold outline-none transition-colors placeholder-white/20"
                            placeholder="John Doe"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-white/60 mb-2 font-medium">Email</label>
                        <input 
                            type="email" 
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-premium-gold outline-none transition-colors placeholder-white/20"
                            placeholder="hello@world.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-white/60 mb-2 font-medium">Password</label>
                        <input 
                            type="password" 
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-premium-gold outline-none transition-colors placeholder-white/20"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full btn-premium py-4 font-bold flex items-center justify-center space-x-2 mt-4"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <><span>Get Started</span> <ArrowRight size={20}/></>}
                    </button>
                    
                    <p className="text-center text-white/40 text-sm mt-6">
                        Already have an account? <Link to="/login" className="text-premium-gold hover:underline font-medium">Log In</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
