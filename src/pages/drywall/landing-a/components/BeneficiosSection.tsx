
import { CheckCircle, Star, Award, Shield } from "lucide-react";

export const BeneficiosSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            BENEFÍCIOS TÉCNICOS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">PRECISÃO TÉCNICA</h3>
            <p className="text-gray-600">Metodologia própria com tolerância mínima de erro</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">ACABAMENTO SUPERIOR</h3>
            <p className="text-gray-600">Resultado profissional que impressiona clientes finais</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">MATERIAIS PREMIUM</h3>
            <p className="text-gray-600">Seleção criteriosa dos melhores fornecedores</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">EXPERIÊNCIA SÓLIDA</h3>
            <p className="text-gray-600">17 anos de mercado, sede própria, equipe especializada</p>
          </div>
        </div>
      </div>
    </section>
  );
};
