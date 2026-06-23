import { useRef } from 'react';
import portfolioImg1 from '../assets/images/regenerated_image_1782156015658.jpg';
import portfolioImg2 from '../assets/images/regenerated_image_1782156016333.jpg';
import portfolioImg3 from '../assets/images/regenerated_image_1782156016917.jpg';
import portfolioImg4 from '../assets/images/regenerated_image_1782156017414.jpg';
import portfolioImg5 from '../assets/images/regenerated_image_1782156017924.jpg';

export default function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const carouselItems = [
    { id: 1, src: portfolioImg1, alt: "[Inserir Imagem: Ensaio Cliente 1 - Moda]", position: "object-[center_20%]" },
    { id: 2, src: portfolioImg2, alt: "[Inserir Imagem: Ensaio Cliente 2 - Casamento]", position: "object-[center_35%]" },
    { id: 3, src: portfolioImg3, alt: "[Inserir Imagem: Ensaio Cliente 3 - Retrato]", position: "object-[center_25%]" },
    { id: 4, src: portfolioImg4, alt: "[Inserir Imagem: Ensaio Cliente 4 - Editorial]", position: "object-[center_30%]" },
    { id: 5, src: portfolioImg5, alt: "[Inserir Imagem: Ensaio Cliente 5 - Joias/Detalhe]", position: "object-center" },
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-20 text-center">
        <p className="uppercase tracking-[0.4em] text-xs font-bold text-gold-500 mb-4">Galeria de Obras</p>
        <h2 className="font-serif text-4xl md:text-5xl text-[#111111]">
          Últimos <span className="italic text-gold-500">Trabalhos</span>
        </h2>
        <div className="w-16 h-[2px] bg-gold-500 mx-auto mt-8 mb-8"></div>
        <p className="text-gray-600 font-light max-w-2xl mx-auto text-lg">Um recorte das histórias mais recentes que tive a honra de fotografar.</p>
      </div>

      {/* Horizontal Scroll Carousel for Highlights */}
      <div className="mb-24 relative">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2))] pb-8 gap-6 md:gap-10"
          style={{ scrollBehavior: 'smooth' }}
        >
          {carouselItems.map((item) => (
            <div 
              key={item.id} 
              className="snap-center sm:snap-start shrink-0 relative group"
            >
              <div className="w-[85vw] sm:w-[400px] md:w-[450px] lg:w-[500px] h-[550px] md:h-[700px] overflow-hidden bg-gray-100 rounded-sm shadow-xl">
                <img 
                  src={item.src} 
                  alt={item.alt}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${item.position}`}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <span className="text-xs uppercase tracking-widest text-gray-400 font-bold flex items-center gap-2">
            Deslize horizontalmente
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-500"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </div>

      {/* Masonry Grid Section for Volume */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-[250px]">
          
          <div className="lg:col-span-1 lg:row-span-2 bg-gray-100 overflow-hidden group shadow-md rounded-sm">
             <img src="https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?q=80&w=800&auto=format&fit=crop" alt="[Placeholder Grid 1]" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          
          <div className="lg:col-span-2 lg:row-span-1 bg-gray-100 overflow-hidden group shadow-md rounded-sm">
            <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop" alt="[Placeholder Grid 2]" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          
          <div className="lg:col-span-1 lg:row-span-1 bg-gray-100 overflow-hidden group shadow-md rounded-sm">
            <img src="https://images.unsplash.com/photo-1601288494632-4752b0cc3ffc?q=80&w=800&auto=format&fit=crop" alt="[Placeholder Grid 3]" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>

          <div className="lg:col-span-1 lg:row-span-1 bg-gray-100 overflow-hidden group shadow-md rounded-sm">
            <img src="https://images.unsplash.com/photo-1541250848049-b4f71416cb12?q=80&w=800&auto=format&fit=crop" alt="[Placeholder Grid 4]" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>

          <div className="lg:col-span-2 lg:row-span-1 bg-gray-100 overflow-hidden group shadow-md rounded-sm">
            <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200&auto=format&fit=crop" alt="[Placeholder Grid 5]" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>

          <div className="lg:col-span-1 lg:row-span-1 bg-gray-100 overflow-hidden group shadow-md rounded-sm">
            <img src="https://images.unsplash.com/photo-1445053023192-8d45cb66099d?q=80&w=800&auto=format&fit=crop" alt="[Placeholder Grid 6]" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>

        </div>
      </div>
    </section>
  );
}
