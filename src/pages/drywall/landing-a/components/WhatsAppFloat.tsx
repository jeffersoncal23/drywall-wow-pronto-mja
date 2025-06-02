
import { whatsappUrl } from '../utils/constants';

export const WhatsAppFloat = () => {
  return (
    <a 
      href={whatsappUrl}
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center space-x-2"
    >
      <span>💬</span>
      <span className="hidden sm:inline">Falar com Especialista</span>
    </a>
  );
};
