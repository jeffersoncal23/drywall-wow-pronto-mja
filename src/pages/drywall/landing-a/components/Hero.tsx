
import { ArrowRight, CheckCircle } from "lucide-react";
import { whatsappUrl } from '../utils/constants';

export const Hero = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                DRYWALL PROFISSIONAL DE 
                <span className="text-blue-800"> ALTA QUALIDADE</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Precisão milimétrica, acabamento impecável e excelência técnica em cada projeto
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>17 anos transformando projetos</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Sede própria</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Qualidade superior</span>
              </div>
            </div>

            <a 
              href={whatsappUrl}
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>SOLICITAR ORÇAMENTO VIA WHATSAPP</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          <div className="relative">
            <img 
              src="/lovable-uploads/28749f1f-e60a-49d4-8d44-903733be62b6.png" 
              alt="Ambiente com drywall profissional" 
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
