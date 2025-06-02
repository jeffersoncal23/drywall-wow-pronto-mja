
import { ArrowRight } from "lucide-react";
import { whatsappUrl } from '../utils/constants';

export const CtaSection = () => {
  return (
    <section className="py-16 px-4 bg-blue-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          TRANSFORME SEU PROJETO COM ALTA QUALIDADE
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          17 anos de experiência • Sede própria • Atendimento personalizado
        </p>
        <a 
          href={whatsappUrl}
          className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <span>FALAR COM ESPECIALISTA NO WHATSAPP</span>
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
