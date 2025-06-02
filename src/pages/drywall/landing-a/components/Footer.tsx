
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img 
              src="/lovable-uploads/1510805a-63e6-45a0-b1f8-8c7f4d7d566b.png" 
              alt="MJA Center" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300">
              Tecnologias em Construção a Seco
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Endereços</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <div>Av. Guarulhos, 1179</div>
                  <div>Vila Augusta Guarulhos - SP</div>
                  <div>CEP: 07025-000</div>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <div>Av. Min. Laudo Ferreira de Camargo, 75</div>
                  <div>Jardim Peri Peri São Paulo - SP</div>
                  <div>CEP: 05537-001</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+55 (11) 2414-0929</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+55 (11) 94794-6529</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>faleconosco@mjacenter.com.br</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MJA Center. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
