import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { Plus, Clock, CheckCircle, Package, ExternalLink, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/v1/orders/', {
                    headers: { Authorization: `Bearer ${user?.token}` }
                });
                setOrders(response.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        if (user?.token) fetchOrders();
    }, [user?.token]);

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Pending': return <Clock className="text-yellow-500" size={18} />;
            case 'In Progress': return <Package className="text-blue-500" size={18} />;
            case 'Delivered': return <CheckCircle className="text-green-500" size={18} />;
            default: return <Clock size={18} />;
        }
    };

    return (
        <div className="bg-premium-black min-h-screen text-white pt-32 pb-24 px-6 md:px-12">
            <Navbar />
            
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start mb-12">
                <div>
                    <h1 className="text-4xl font-bold tracking-tighter mb-2">Workspace</h1>
                    <p className="text-white/50 font-medium">Hello, manage your logo requests and identities.</p>
                </div>
                <Link to="/order" className="btn-premium px-8 py-4 flex items-center space-x-2 mt-6 md:mt-0 font-bold group">
                    <Plus size={20} className="group-hover:rotate-90 transition-transform"/>
                    <span>New Logo Request</span>
                </Link>
            </div>

            {loading ? (
                <div className="h-64 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-premium-gold"></div>
                </div>
            ) : orders.length === 0 ? (
                <div className="glass p-20 rounded-[3rem] text-center border-white/5">
                    <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8">
                        <ShieldCheck className="text-white/20" size={32}/>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 italic opacity-80">No Identities Found</h3>
                    <p className="text-white/40 mb-10 max-w-sm mx-auto leading-relaxed">You haven't requested any logo identities yet. Start your visual journey now.</p>
                    <Link to="/order" className="px-10 py-4 border border-white/10 rounded-full hover:bg-white/5 transition-colors font-bold text-premium-gold">
                        Begin Now
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {orders.map((order) => (
                        <div key={order.id} className="glass p-8 rounded-[2.5rem] border-white/5 hover:border-premium-gold/30 transition-all group flex flex-col justify-between h-auto shadow-xl hover:shadow-premium-gold/5">
                            <div>
                                <div className="flex justify-between items-start mb-8">
                                    <div className="px-4 py-1.5 rounded-full bg-white/5 text-xs font-bold uppercase tracking-widest flex items-center space-x-2 border border-white/10 group-hover:bg-premium-gold/10 transition-colors">
                                        {getStatusIcon(order.status)}
                                        <span className={order.status === 'Delivered' ? 'text-green-500' : 'text-white/70'}>{order.status}</span>
                                    </div>
                                    <span className="text-white/20 text-xs font-medium">#{order.id}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2 group-hover:gold-gradient transition-all italic">{order.brand_name}</h3>
                                {order.tagline && <p className="text-white/40 text-sm mb-6 leading-relaxed italic">"{order.tagline}"</p>}
                                <div className="space-y-3 mb-10">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-white/40">Style</span>
                                        <span className="font-semibold text-white/80">{order.style || 'Minimal'}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-white/40">Colors</span>
                                        <div className="flex items-center space-x-1">
                                             <span className="font-semibold text-white/80">{order.preferred_colors || 'Neutral'}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {order.delivered_file_url && (
                                <a href={order.delivered_file_url} className="w-full py-4 text-center rounded-2xl bg-premium-gold text-premium-black font-bold flex items-center justify-center space-x-2 hover:bg-white transition-colors">
                                    <ExternalLink size={18} />
                                    <span>Download Logo Assets</span>
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dashboard;
