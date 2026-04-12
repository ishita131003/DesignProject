import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { Shield, ArrowRight, Loader2 } from 'lucide-react';

import logo from '../assets/logo.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const params = new URLSearchParams();
            params.append('username', email);
            params.append('password', password);
            
            const response = await axios.post('http://localhost:8000/api/v1/auth/login', params, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
            login(response.data.access_token);
            navigate('/dashboard');
        } catch (err) {
            setError('Invalid email or password.');
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

                <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
                <p className="text-white/50 mb-8 font-medium">Continue your visual journey</p>

                {error && <div className="bg-red-500/20 text-red-400 p-4 rounded-2xl mb-6 text-sm">{error}</div>}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm text-white/60 mb-2">Email</label>
                        <input 
                            type="email" 
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-premium-gold outline-none transition-colors"
                            placeholder="admin@DesignProject.co"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-white/60 mb-2">Password</label>
                        <input 
                            type="password" 
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-premium-gold outline-none transition-colors"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full btn-premium py-4 font-bold flex items-center justify-center space-x-2"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <><span>Sign In</span> <ArrowRight size={20}/></>}
                    </button>
                    
                    <p className="text-center text-white/40 text-sm">
                        Don't have an account? <Link to="/signup" className="text-premium-gold hover:underline">Create one</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
