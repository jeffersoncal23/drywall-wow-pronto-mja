
import { ArrowRight, CheckCircle, Star, Phone, Mail, MapPin, Hammer, Shield, Award, Users } from "lucide-react";
import { useState, useEffect } from "react";

const DrywallLandingA = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const projects = [
    {
      image: "/lovable-uploads/28749f1f-e60a-49d4-8d44-903733be62b6.png",
      title: "Sala de Estar Premium",
      description: "Projeto residencial com acabamento em mármore e iluminação integrada",
      area: "45m²"
    },
    {
      image: "/lovable-uploads/4367ec67-9f32-4845-a1b6-6cecd63e38d1.png", 
      title: "Casa Moderna Completa",
      description: "Residência com múltiplos ambientes e escada iluminada",
      area: "320m²"
    },
    {
      image: "/lovable-uploads/a61dd950-6b57-4d9b-8c64-97942916153b.png",
      title: "Ambiente Corporativo",
      description: "Escritório com divisórias e acabamento profissional",
      area: "80m²"
    }
  ];

  const testimonials = [
    {
      name: "Wagner Ortiz",
      role: "Arquiteto",
      text: "Uma empresa de amigos, onde se encontra tudo para sua construção em dry wall, steel frame, atendimento nota 10, e aproveito para parabenizar nossa vendedora Srta Ellen pelo excelente atendimento prestado...",
      rating: 5
    },
    {
      name: "Amanda Rodrigues", 
      role: "Construtora",
      text: "Uma excelente empresa, fui bem atendida pela vendedora Hellen, e os profissionais que vieram até minha casa, super bem educado e prestou um excelente serviço, Neurisvan e Kaian",
      rating: 5
    },
    {
      name: "Diego Godoy",
      role: "Incorporadora",
      text: "Loja super atenciosa e comprometida, fiz uma primeira compra por indicação, e entregaram tudo no tempo e dia combinado. A loja é super honesta e comprometida, ganhou um cliente fiel!!!!",
      rating: 5
    },
    {
      name: "Gilson Claudino",
      role: "Engenheiro",
      text: "Quero ressaltar o excelente atendimento da colaboradora Mel. Muito ágil, atenciosa, e simpática desde o primeiro contato até o fechamento. Atendimento rápido, claro, e eficiente. Recomendo! 5 estrelas.",
      rating: 5
    }
  ];

  useEffect(() => {
    const projectInterval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => {
      clearInterval(projectInterval);
      clearInterval(testimonialInterval);
    };
  }, []);

  const whatsappMessage = "Me interessei no serviço de Drywall Profissional da MJA Center. Gostaria de receber um orçamento para meu projeto.";
  const whatsappUrl = `https://wa.me/5511947946529?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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

      {/* Hero Section */}
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

      {/* Nosso Diferencial */}
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

      {/* Benefícios Técnicos */}
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

      {/* Galeria de Projetos */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              GALERIA DE PROJETOS
            </h2>
            <p className="text-xl text-gray-600">
              Conheça alguns dos nossos projetos executados
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-lg mb-1">{project.description}</p>
                        <p className="text-sm opacity-90">Área: {project.area}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentProject === index ? 'bg-blue-800' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              DEPOIMENTOS DE CLIENTES
            </h2>
            <p className="text-xl text-gray-600">
              O que nossos parceiros falam sobre nosso trabalho
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index ? 'bg-blue-800' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chamada Final para Ação */}
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

      {/* Rodapé */}
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

      {/* WhatsApp Flutuante */}
      <a 
        href={whatsappUrl}
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center space-x-2"
      >
        <span>💬</span>
        <span className="hidden sm:inline">Falar com Especialista</span>
      </a>
    </div>
  );
};

export default DrywallLandingA;
