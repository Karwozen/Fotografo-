import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Clientes', href: '#clientes' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 border-gray-100' : 'bg-white py-6 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="font-serif text-2xl tracking-widest uppercase font-bold text-[#111111]">
          Paulo <span className="text-gold-500">Cezar</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-bold text-gray-500">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-gold-500 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden md:inline-block px-6 py-2 border border-gold-500 text-[10px] uppercase tracking-widest font-bold text-gold-500 hover:bg-gold-500 hover:text-white transition-colors"
        >
          Agendar Ensaio
        </a>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-[#111111] focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-8 flex flex-col items-center gap-6 text-[11px] uppercase tracking-[0.2em] font-bold text-gray-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-gold-500 transition-colors duration-300 w-full text-center py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contato"
            className="mt-4 px-8 py-3 bg-gold-500 text-white text-[10px] uppercase tracking-widest font-bold w-11/12 text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Agendar Ensaio
          </a>
        </div>
      )}
    </header>
  );
}
