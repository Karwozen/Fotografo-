import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Qual é o prazo de entrega das fotografias?",
      answer: "Para ensaios autorais, as prévias são enviadas em até 48 horas, e o material final devidamente curado e tratado em nossa assinatura fine-art é entregue em até 15 dias úteis. Para eventos e casamentos, entregamos prévias na mesma semana, e o portfólio completo em até 30 dias úteis."
    },
    {
      question: "Vocês fotografam eventos fora da cidade ou estado?",
      answer: "Sim! Trabalhamos com Destination Weddings e coberturas de eventos em todo o Brasil (e exterior). Dispomos de cotações personalizadas que já incluem os custos de deslocamento, estadia e logística para garantir que o serviço fotográfico chegue até você."
    },
    {
      question: "Como funciona a curadoria e edição das imagens?",
      answer: "Cada imagem passa por uma triagem rigorosa. Rejeitamos fotos repetidas ou de expressão ruim, focando na excelência. A edição inclui correção de cor, contraste, luz e um tratamento de pele suave, buscando sempre um resultado natural, elegante e focado em manter texturas originais, padrão internacional de moda."
    },
    {
      question: "Os pacotes incluem álbuns impressos?",
      answer: "Sim, oferecemos opções de álbuns físicos Fine Art com impressão de altíssima fidelidade e acabamento em linho, couro ou materiais contemporâneos. Os álbuns servem como o ápice da entrega, transformando as fotos digitais em um patrimônio familiar tátil e emocionante."
    }
  ];

  return (
    <section id="faq" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16 md:mb-20">
          <p className="uppercase tracking-[0.4em] text-xs font-bold text-gold-500 mb-4">Informações</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#111111]">
            Dúvidas <span className="italic text-gold-500">Frequentes</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold-500 mx-auto mt-8"></div>
        </div>

        <div className="border-t border-gray-100">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100">
              <button
                className="w-full py-8 flex justify-between items-center text-left focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-serif text-xl sm:text-2xl transition-colors ${openIndex === index ? 'text-gold-500 italic' : 'text-[#111111] group-hover:text-gold-500'}`}>
                  {faq.question}
                </span>
                <span className="text-gold-500 ml-4 shrink-0">
                  {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed pt-2">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
