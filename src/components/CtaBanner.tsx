import { MessageCircle } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-32 px-6 bg-white border-y border-gray-100 overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale mix-blend-multiply"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        <p className="uppercase tracking-[0.4em] text-xs font-bold text-gold-500 mb-6">Atendimento Exclusivo</p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#111111] leading-tight mb-10">
          Pronto para dar o <span className="italic text-gold-500">próximo passo</span> e criar memórias extraordinárias?
        </h2>
        
        <a 
          href="https://wa.me/5599999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-gold-500 hover:bg-gold-600 text-white px-10 py-5 text-xs uppercase tracking-[0.2em] font-bold transition-colors duration-300 shadow-lg shadow-gold-500/20"
        >
          <MessageCircle size={20} />
          Fazer Orçamento no WhatsApp
        </a>
      </div>
    </section>
  );
}
