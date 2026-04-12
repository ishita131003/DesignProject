import React from 'react';

const designs = [
    "/designs/logo_design_1_1775632848682.png",
    "/designs/logo_design_2_1775632865298.png",
    "/designs/logo_design_3_1775632880645.png",
    "/designs/logo_design_4_1775632906552.png",
    "/designs/logo_design_5_1775632927149.png",
];

const OurDesigns = () => {
    // Duplicate designs to ensure seamless loop
    const allDesigns = [...designs, ...designs, ...designs];

    return (
        <section className="bg-premium-black py-20 overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <h2 className="text-[10px] tracking-[0.4em] uppercase text-premium-gold font-bold mb-4">Portfolio</h2>
                <h3 className="text-4xl md:text-5xl font-serif italic text-white">Our Designs</h3>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee-right py-2 flex whitespace-nowrap">
                    {allDesigns.map((src, i) => (
                        <div key={i} className="mx-4 w-[180px] md:w-[240px] aspect-[4/5] flex-shrink-0 relative cursor-pointer overflow-hidden rounded-xl border border-premium-gold/20 shadow-[0_0_20px_rgba(250,203,78,0.05)] group">
                            <img 
                                src={src} 
                                alt={`Design ${i}`} 
                                className="w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-premium-black via-premium-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                            
                            <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <span className="text-premium-gold text-[8px] tracking-[0.4em] uppercase font-bold mb-1 block opacity-0 group-hover:opacity-100 transition-opacity duration-700">Premium</span>
                                        <span className="text-white font-serif italic text-sm tracking-wider block">Identity // 0{(i % 5) + 1}</span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full border border-premium-gold/30 flex items-center justify-center group-hover:bg-premium-gold group-hover:border-premium-gold transition-all duration-500">
                                        <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-white group-hover:border-l-premium-black border-b-[4px] border-b-transparent ml-1"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative gold line */}
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-premium-gold group-hover:w-full transition-all duration-700"></div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes marquee-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0%); }
                }
                .animate-marquee-right {
                    animation: marquee-right 80s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default OurDesigns;
