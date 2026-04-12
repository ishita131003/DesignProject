import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
    { id: 1, name: 'Essential', price: '499', features: ['1 Logo Concept', 'Basic Identity Kit', 'Social Media Kit', '3 Revisions'] },
    { id: 2, name: 'Premium', price: '999', features: ['3 Logo Concepts', 'Full Brand Guidelines', 'Stationary Design', 'Unlimited Revisions', 'Priority Support'], popular: true },
    { id: 3, name: 'Enterprise', price: '2499', features: ['5 Logo Concepts', 'Full Brand Identity', 'Digital Presence Strategy', 'Copyright Transfer', '1 Year Brand Shield'] },
];

const Pricing = () => {
    return (
        <section className="bg-premium-black py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">Your Investment In <span className="gold-gradient">Quality</span></h2>
                    <p className="text-white/50">Transparent pricing for premium results.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div key={plan.id} className={`p-10 rounded-[3rem] glass ${plan.popular ? 'border-premium-gold/30 bg-premium-gold/5 scale-105' : 'border-white/5 hover:border-white/20'} transition-all flex flex-col`}>
                            {plan.popular && <span className="inline-block px-4 py-1.5 rounded-full bg-premium-gold text-premium-black text-xs font-bold self-start mb-6 uppercase tracking-widest">Most Popular</span>}
                            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                            <div className="flex items-baseline mb-8">
                                <span className="text-xl text-white/50">$</span>
                                <span className="text-5xl font-bold ml-1">{plan.price}</span>
                            </div>
                            
                            <ul className="space-y-6 mb-10 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center space-x-3 text-white/60">
                                        <Check className="text-premium-gold" size={18} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link to="/order" className={`block w-full py-4 text-center rounded-3xl font-bold transition-all ${plan.popular ? 'bg-premium-gold text-premium-black hover:bg-white hover:text-premium-black' : 'border border-white/20 hover:border-premium-gold hover:text-premium-gold'}`}>
                                Get Started
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
