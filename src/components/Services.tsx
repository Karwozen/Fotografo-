import { Camera, CalendarRange, Check } from 'lucide-react';

export default function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32 px-6 bg-[#F9FAFB] border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-20 gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold-500 font-bold mb-4">Portfólio de Serviços</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#111111] leading-tight">
              Especialidades <br /> <span className="italic text-gold-500">Fotográficas</span>
            </h2>
          </div>
          <p className="text-gray-600 font-light max-w-md md:text-right leading-relaxed">
            Atendimento personalizado e dedicado para dois focos principais da fotografia em alto padrão.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Ensaios */}
          <div className="bg-white p-10 md:p-14 shadow-lg shadow-gray-100 border border-gray-100 rounded-sm hover:-translate-y-2 transition-transform duration-500">
            <Camera size={40} className="text-gold-500 mb-8" />
            <h3 className="font-serif text-3xl text-[#111111] mb-4">Ensaios Autorais</h3>
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              Retratos de luxo focados em direção de arte, estética apurada e no resgate da sua melhor versão. Voltado para ensaios moda, gestante, casais e personal branding corporativo.
            </p>
            
            <ul className="space-y-4 mb-10 border-t border-gray-100 pt-8">
              {['Reunião criativa de pré-produção', 'Direção de posse direcionada', 'Auxílio na escolha de locações e looks', 'Tratamento de cor e pele (Retouching) premium', 'Entrega em galeria digital exclusiva'].map((item, i) => (
                <li key={i} className="flex gap-4 items-start text-sm text-gray-700">
                  <Check size={18} className="text-gold-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <a href="#contato" className="inline-block text-xs uppercase tracking-[0.2em] font-bold text-gold-500 border-b-2 border-gold-500 pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors">
              Agendar Ensaio
            </a>
          </div>

          {/* Eventos */}
          <div className="bg-white p-10 md:p-14 shadow-lg shadow-gray-100 border border-gray-100 rounded-sm hover:-translate-y-2 transition-transform duration-500">
            <CalendarRange size={40} className="text-gold-500 mb-8" />
            <h3 className="font-serif text-3xl text-[#111111] mb-4">Cobertura de Eventos</h3>
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              Um registro imersivo, discreto e fotojornalístico das suas maiores celebrações. Casamentos, bodas e eventos sociais requintados, eternizados de maneira espontânea.
            </p>
            
            <ul className="space-y-4 mb-10 border-t border-gray-100 pt-8">
              {['Cobertura completa (Making of até a festa)', 'Equipe dedicada (2 ou mais fotógrafos)', 'Estilo fotojornalístico e discreto', 'Entrega de prévia em até 48 horas', 'Possibilidade de álbuns físicos Fine Art'].map((item, i) => (
                <li key={i} className="flex gap-4 items-start text-sm text-gray-700">
                  <Check size={18} className="text-gold-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a href="#contato" className="inline-block text-xs uppercase tracking-[0.2em] font-bold text-gold-500 border-b-2 border-gold-500 pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors">
              Solicitar Orçamento
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
