import Hero from '../components/Hero';
import CuratedServices from '../components/CuratedServices';
import OurDesigns from '../components/OurDesigns';
import Comparison from '../components/Comparison';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div className="bg-premium-black min-h-screen text-white">
            <Navbar />
            <Hero />
            <CuratedServices />
            <OurDesigns />
            <Comparison />
            <Footer />
        </div>
    );
};

export default Home;
