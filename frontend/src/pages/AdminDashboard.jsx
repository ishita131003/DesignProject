import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import { CheckCircle, Clock, Package, Edit3, Save, X, ExternalLink } from 'lucide-react';

const AdminDashboard = () => {
    const [orders, setOrders] = useState([]);
    const [editingOrder, setEditingOrder] = useState(null);
    const [status, setStatus] = useState('');
    const [fileUrl, setFileUrl] = useState('');
    const { user } = useAuth();

    const fetchAllOrders = async () => {
        const response = await axios.get('http://localhost:8000/api/v1/orders/', {
            headers: { Authorization: `Bearer ${user?.token}` }
        });
        setOrders(response.data);
    };

    useEffect(() => {
        if(user?.token) fetchAllOrders();
    }, [user?.token]);

    const handleUpdate = async (id) => {
        await axios.patch(`http://localhost:8000/api/v1/orders/${id}`, 
            { status, delivered_file_url: fileUrl },
            { headers: { Authorization: `Bearer ${user?.token}` } }
        );
        setEditingOrder(null);
        fetchAllOrders();
    };

    return (
        <div className="bg-premium-black min-h-screen text-white pt-32 pb-24 px-6 md:px-12">
            <Navbar />
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-12 gold-gradient uppercase tracking-tighter">Admin Control Panel</h1>

                <div className="glass rounded-[3rem] overflow-hidden border-white/5">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-white/5 bg-white/5">
                                <th className="p-8 text-sm font-bold uppercase tracking-widest text-premium-gold">Order ID</th>
                                <th className="p-8 text-sm font-bold uppercase tracking-widest text-premium-gold">Brand Name</th>
                                <th className="p-8 text-sm font-bold uppercase tracking-widest text-premium-gold">Owner ID</th>
                                <th className="p-8 text-sm font-bold uppercase tracking-widest text-premium-gold">Status</th>
                                <th className="p-8 text-sm font-bold uppercase tracking-widest text-premium-gold">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                                    <td className="p-8 font-mono text-white/40">#{order.id}</td>
                                    <td className="p-8 font-bold italic">{order.brand_name}</td>
                                    <td className="p-8 text-white/40">User {order.owner_id}</td>
                                    <td className="p-8">
                                        {editingOrder === order.id ? (
                                            <select 
                                                className="bg-premium-black border border-white/10 rounded-xl px-4 py-2 outline-none focus:border-premium-gold transition-all italic font-medium"
                                                value={status}
                                                onChange={(e) => setStatus(e.target.value)}
                                            >
                                                <option value="Pending">Pending</option>
                                                <option value="In Progress">In Progress</option>
                                                <option value="Delivered">Delivered</option>
                                            </select>
                                        ) : (
                                            <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${order.status === 'Delivered' ? 'bg-green-500/10 text-green-500' : 'bg-white/5 text-white/60'}`}>{order.status}</span>
                                        )}
                                    </td>
                                    <td className="p-8">
                                        {editingOrder === order.id ? (
                                            <div className="flex space-x-4">
                                                <input 
                                                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 outline-none focus:border-premium-gold transition-all italic text-sm w-48"
                                                    placeholder="Logo S3/Drive URL"
                                                    value={fileUrl}
                                                    onChange={(e) => setFileUrl(e.target.value)}
                                                />
                                                <button onClick={() => handleUpdate(order.id)} className="p-2 bg-premium-gold text-premium-black rounded-xl hover:bg-white transition-colors"><Save size={18}/></button>
                                                <button onClick={() => setEditingOrder(null)} className="p-2 border border-white/20 rounded-xl hover:bg-red-500/10 hover:text-red-500 transition-colors"><X size={18}/></button>
                                            </div>
                                        ) : (
                                            <button 
                                                onClick={() => {
                                                    setEditingOrder(order.id);
                                                    setStatus(order.status);
                                                    setFileUrl(order.delivered_file_url || '');
                                                }}
                                                className="p-3 glass rounded-2xl hover:border-premium-gold/30 hover:text-premium-gold transition-all"
                                            >
                                                <Edit3 size={18}/>
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
