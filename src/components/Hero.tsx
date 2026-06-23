import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import heroImg from '../assets/images/regenerated_image_1782156014466.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <div className="order-2 lg:order-1 flex flex-col items-start z-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.4em] text-xs font-bold text-gold-500 mb-6"
          >
            Fotografia de Alto Padrão
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#111111] leading-[1.1] mb-8"
          >
            A arte de <br />
            <span className="italic text-gold-500">eternizar</span> a sua <br />
            verdade.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 max-w-xl font-light"
          >
            Muito além de um simples registro. Nosso trabalho é capturar a essência da sua história, traduzindo emoções espontâneas e momentos únicos em um acervo fotográfico de alto padrão. Experimente uma fotografia com direção de arte, elegância e alma.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <a
              href="#contato"
              className="bg-gold-500 text-white px-10 py-5 text-xs uppercase tracking-[0.2em] font-bold shadow-xl shadow-gold-500/20 hover:bg-gold-600 transition-colors flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              Agendar Meu Ensaio
              <ArrowRight size={16} />
            </a>
            <a
              href="#portfolio"
              className="border border-gray-300 text-[#111111] px-10 py-5 text-xs uppercase tracking-[0.2em] font-bold hover:border-gold-500 hover:text-gold-500 transition-colors flex items-center justify-center w-full sm:w-auto"
            >
              Ver Portfólio
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="order-1 lg:order-2 relative h-[50vh] lg:h-[85vh] w-full"
        >
          <div className="absolute inset-0 bg-[#F9FAFB] animate-pulse rounded-sm" /> 
          <img 
            src={heroImg} 
            alt="[Inserir Imagem: Paulo Cezar Fotografia - Hero]"
            className="absolute inset-0 w-full h-full object-cover object-[center_35%] z-10 shadow-2xl rounded-sm"
          />
          <div className="absolute inset-0 border-[16px] border-white/40 z-20 pointer-events-none rounded-sm"></div>
          
          <div className="hidden md:block absolute -bottom-10 -left-10 bg-white p-8 shadow-2xl max-w-[320px] z-30">
            <p className="font-serif italic text-xl leading-relaxed text-[#111111]">"A fotografia é o botão de pausa da vida."</p>
            <div className="w-12 h-[1px] bg-gold-500 mt-6 mb-4"></div>
            <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Paulo Cezar</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
