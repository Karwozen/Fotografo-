export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Um profissional de uma sensibilidade ímpar. Conseguiu capturar toda a emoção do nosso evento de maneira tão discreta que as fotos parecem cenas de um filme clássico. O resultado foi além de todas as nossas expectativas.",
      client: "Mariana & Thiago",
      role: "Casamento no Campo",
      imgSrc: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 2,
      quote: "O ensaio não foi apenas uma sessão de fotos, mas sim uma experiência de redescoberta. A direção de arte impecável me fez sentir incrivelmente confiante. As fotos geraram um impacto surreal no meu posicionamento de marca.",
      client: "Camila Vilar",
      role: "Ensaio Personal Branding",
      imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 3,
      quote: "As fotos do nosso editorial ficaram espetaculares. O Paulo tem um dom para a iluminação e para encontrar o ângulo perfeito. Com certeza criamos um material riquíssimo e de padrão internacional para a nova coleção da marca.",
      client: "Beatriz M.",
      role: "Campanha de Moda",
      imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <section id="clientes" className="py-24 md:py-32 lg:py-40 px-6 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <p className="uppercase tracking-[0.4em] text-xs font-bold text-gold-500 mb-4 text-center">Depoimentos</p>
        <h2 className="font-serif text-4xl md:text-5xl text-[#111111] mb-20 text-center">
          Experiências <span className="italic text-gold-500">Reais</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 w-full">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col text-left bg-white p-10 md:p-12 shadow-lg shadow-gray-100 rounded-sm border-t-4 border-transparent hover:border-gold-500 transition-colors">
              
              <div className="mb-8">
                 <span className="text-5xl text-gold-500 font-serif leading-none italic block mb-4">"</span>
                 <p className="text-gray-600 font-light text-base leading-relaxed h-[180px] overflow-hidden">
                   {t.quote}
                 </p>
              </div>
              
              <div className="flex items-center gap-5 mt-auto pt-8 border-t border-gray-100">
                 <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-200 shrink-0">
                   <img src={t.imgSrc} alt={`[Imagem Cliente: ${t.client}]`} className="w-full h-full object-cover" />
                 </div>
                 <div>
                   <h4 className="font-bold text-sm uppercase tracking-wider text-[#111111]">{t.client}</h4>
                   <p className="text-[10px] uppercase tracking-widest text-gold-600 mt-1">{t.role}</p>
                 </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
