
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Redireciona para o site principal da MJA Center
    window.location.href = "https://mjacenter.com.br";
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-800 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecionando para MJA Center...</p>
      </div>
    </div>
  );
};

export default Index;
