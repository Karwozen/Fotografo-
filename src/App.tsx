import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import Services from './components/Services';
import CtaBanner from './components/CtaBanner';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-white min-h-screen font-sans text-[#111111] selection:bg-gold-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Process />
        <Services />
        <CtaBanner />
        <Portfolio />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
