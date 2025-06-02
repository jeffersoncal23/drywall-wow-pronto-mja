
import { whatsappUrl } from '../utils/constants';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <img 
          src="/lovable-uploads/1510805a-63e6-45a0-b1f8-8c7f4d7d566b.png" 
          alt="MJA Center" 
          className="h-12 w-auto"
        />
        <div className="hidden md:flex items-center space-x-6">
          <span className="text-blue-800 font-semibold">17 anos de experiência</span>
          <a 
            href={whatsappUrl}
            className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </header>
  );
};
