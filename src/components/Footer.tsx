import { MessageCircle, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#F9FAFB] text-[#111111] pt-32 pb-12 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center border-b border-gray-200 pb-24 mb-12">
        
        <p className="uppercase tracking-[0.4em] text-xs font-bold text-gold-500 mb-6">Entre em contato</p>
        <h2 className="font-serif text-5xl md:text-6xl md:leading-tight mb-8 max-w-3xl">
          Vamos <span className="italic text-gold-500">eternizar</span> a sua história?
        </h2>
        
        <p className="text-gray-600 font-light text-lg max-w-xl mb-12 leading-relaxed">
          Nossa agenda é limitada para garantirmos a excelência e exclusividade em cada projeto. Fale conosco para avaliarmos a disponibilidade e criar um orçamento sob medida para você.
        </p>

        {/* [INSTRUÇÃO PARA O USUÁRIO]: Insira o link do seu WhatsApp no href abaixo */}
        <a 
          href="https://wa.me/5599999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-gold-500 hover:bg-gold-600 text-white px-10 py-5 shadow-xl shadow-gold-500/20 text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 rounded-sm"
        >
          <MessageCircle size={20} />
          <span>Iniciar Atendimento via WhatsApp</span>
        </a>
        
        <a href="mailto:contato@paulocezar.com" className="mt-8 text-sm text-gray-500 hover:text-gold-500 font-light border-b border-transparent hover:border-gold-500 transition-colors uppercase tracking-widest">
          ou envie um E-mail
        </a>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 items-center">
        
        {/* Left Col */}
        <div className="flex flex-col items-center md:items-start gap-4">
           <div className="font-serif text-3xl tracking-widest uppercase font-bold text-[#111111]">
             Paulo <span className="text-gold-500">Cezar</span>
           </div>
           <p className="text-xs tracking-widest uppercase font-bold text-gray-400">Fotografia</p>
        </div>
        
        {/* Middle Col */}
        <div className="flex justify-center gap-6">
          {/* [INSTRUÇÃO PARA O USUÁRIO]: Insira os links abaixo */}
          <a href="https://instagram.com/paulocezar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-500 transition-colors bg-white p-4 rounded-full shadow-sm hover:shadow-md border border-gray-100">
            <Instagram strokeWidth={1.5} size={22} />
          </a>
          <a href="mailto:contato@paulocezar.com" className="text-gray-400 hover:text-gold-500 transition-colors bg-white p-4 rounded-full shadow-sm hover:shadow-md border border-gray-100">
            <Mail strokeWidth={1.5} size={22} />
          </a>
          <a href="tel:+5599999999999" className="text-gray-400 hover:text-gold-500 transition-colors bg-white p-4 rounded-full shadow-sm hover:shadow-md border border-gray-100">
            <Phone strokeWidth={1.5} size={22} />
          </a>
        </div>
        
        {/* Right Col */}
        <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold text-center md:text-right flex flex-col md:items-end gap-2">
          <p>&copy; {new Date().getFullYear()} Paulo Cezar Fotografia.</p>
          <p>Todos os direitos reservados.</p>
        </div>

      </div>
    </footer>
  );
}
