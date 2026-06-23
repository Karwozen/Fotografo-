import { MessageSquare, Camera, Sparkles, Image as ImageIcon } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: <MessageSquare size={32} className="text-gold-500" />,
      title: "1. O Alinhamento",
      description: "Começamos com uma conversa detalhada para entender a sua história, suas expectativas, referências e a mensagem que desejamos transmitir nas fotos."
    },
    {
      icon: <Camera size={32} className="text-gold-500" />,
      title: "2. O Dia das Fotos",
      description: "Uma experiência leve e dirigida. Seja no seu evento ou em um ensaio, a prioridade é o seu conforto para garantir capturas autênticas."
    },
    {
      icon: <Sparkles size={32} className="text-gold-500" />,
      title: "3. Curadoria & Edição",
      description: "Seleção minuciosa das melhores fotografias e um tratamento de cor exclusivo e sofisticado, aprimorando a luz sem perder a naturalidade."
    },
    {
      icon: <ImageIcon size={32} className="text-gold-500" />,
      title: "4. A Entrega",
      description: "O momento da revelação. Entregamos seu acervo fotográfico em alta resolução através de uma galeria premium online e, se desejar, em álbuns fine-art."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-gold-500 font-bold mb-4">Experiência</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#111111]">
            Nosso <span className="italic text-gold-500">Processo</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold-500 mx-auto mt-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-[#F9FAFB] rounded-full flex items-center justify-center mb-8 border border-gray-100 group-hover:border-gold-500 transition-colors shadow-sm">
                {step.icon}
              </div>
              <h3 className="font-bold text-lg text-[#111111] mb-4 uppercase tracking-wider">{step.title}</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
