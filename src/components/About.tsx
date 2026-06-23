import aboutImg from '../assets/images/regenerated_image_1782156015064.jpg';

export default function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 lg:py-40 px-6 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        <div className="w-full lg:w-5/12 relative group">
           <div className="aspect-[3/4] overflow-hidden rounded-sm relative bg-gray-200">
             <img 
               src={aboutImg} 
               alt="[Inserir Imagem: Retrato de Paulo Cezar]"
               className="w-full h-full object-cover object-[center_25%] relative z-10 shadow-xl"
             />
             <div className="absolute inset-0 border-[20px] border-[#F9FAFB]/40 z-20 pointer-events-none"></div>
           </div>
           <div className="absolute -bottom-8 -right-8 w-48 h-48 border-b-2 border-r-2 border-gold-500 z-0 hidden md:block"></div>
        </div>

        <div className="w-full lg:w-7/12 flex flex-col">
          <p className="text-xs uppercase tracking-[0.4em] text-gold-500 font-bold mb-6">A Visão do Artista</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#111111] leading-tight mb-8">
            Um olhar que revela <br /> a sua <span className="italic text-gold-500">verdadeira essência</span>.
          </h2>
          
          <div className="w-16 h-[2px] bg-gold-500 mb-10"></div>
          
          <div className="space-y-6 text-gray-600 font-light text-base md:text-lg leading-relaxed">
            <p>
              Sou apaixonado por construir narrativas através da luz. Minha filosofia de trabalho não se resume a operar uma câmera, mas sim a criar um ambiente onde você se sinta completamente à vontade para expressar quem realmente é.
            </p>
            <p>
              Ao longo da minha carreira, percebi que as fotos mais impactantes nascem no limiar entre a direção de arte meticulosa e a mais pura espontaneidade. É por isso que divido meu foco entre Ensaios Autorais, onde construímos minuciosamente a estética, e as Coberturas de Eventos, onde assumo um papel discreto para imortalizar reações verdadeiras e abraços apertados.
            </p>
            <p>
              Meu compromisso é entregar não apenas um conjunto de fotos bonitas, mas um legado visual, um patrimônio familiar que será passado de geração em geração com o mesmo frescor do momento em que foi capturado. Uma fotografia que resiste ao teste do tempo com requinte, luxo e emoção autêntica.
            </p>
          </div>
          
          <div className="mt-12">
             <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Signature_placeholder.svg" className="h-12 opacity-80" alt="Assinatura Paulo Cezar" />
          </div>
        </div>

      </div>
    </section>
  );
}
