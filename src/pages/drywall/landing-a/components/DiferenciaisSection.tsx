
import { Hammer, Award, Users, Shield } from "lucide-react";

export const DiferenciaisSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            NOSSO DIFERENCIAL
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Metodologia exclusiva que garante resultados superiores em cada projeto
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <Hammer className="w-8 h-8 text-blue-800" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Metodologia Própria</h3>
            <p className="text-gray-600">Sistema exclusivo de medição e instalação com tolerância mínima de erro</p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <Award className="w-8 h-8 text-blue-800" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Materiais Premium</h3>
            <p className="text-gray-600">Seleção criteriosa dos melhores fornecedores do mercado</p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <Users className="w-8 h-8 text-blue-800" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Equipe Especializada</h3>
            <p className="text-gray-600">Profissionais treinados e certificados para máxima qualidade</p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <Shield className="w-8 h-8 text-blue-800" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Controle de Qualidade</h3>
            <p className="text-gray-600">Processo rigoroso de inspeção em todas as etapas</p>
          </div>
        </div>
      </div>
    </section>
  );
};
