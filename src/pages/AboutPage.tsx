import { FileText, Users, Award, Globe } from 'lucide-react';
import SEO from '../components/SEO';

const AboutPage = () => {
  return (
    <>
      <SEO
        title="Sobre Nós"
        description="Conheça a equipe por trás do ConvertPDF. Nossa missão é fornecer ferramentas gratuitas e de alta qualidade para manipulação de documentos."
        keywords="sobre ConvertPDF, equipe, missão, história, ferramentas PDF"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Sobre o ConvertPDF
            </h1>
            <p className="text-xl mb-0 text-blue-100">
              Conheça nossa história, missão e a equipe por trás das ferramentas.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-gray-600">
                O ConvertPDF nasceu da necessidade de oferecer ferramentas simples, gratuitas e eficientes para manipulação de documentos digitais, acessíveis a todos os usuários, independentemente de seu conhecimento técnico.
              </p>

              <h2>Nossa História</h2>
              <p>
                Fundado em 2023 por um grupo de desenvolvedores apaixonados por produtividade digital, o ConvertPDF começou como um simples conversor de PDF para Word. Com o tempo, expandimos nossa oferta para incluir uma ampla gama de ferramentas de conversão e manipulação de documentos.
              </p>
              <p>
                Ao longo dos anos, mantivemos nosso compromisso com a simplicidade e acessibilidade, garantindo que nossas ferramentas sejam fáceis de usar e gratuitas para todos. Hoje, atendemos milhões de usuários em todo o mundo, ajudando-os a trabalhar de forma mais eficiente com seus documentos digitais.
              </p>

              <h2>Nossa Missão</h2>
              <p>
                Nossa missão é democratizar o acesso a ferramentas de manipulação de documentos de alta qualidade, eliminando barreiras técnicas e financeiras. Acreditamos que todos deveriam ter acesso a ferramentas que os ajudem a trabalhar de forma mais eficiente, independentemente de seu orçamento ou conhecimento técnico.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold m-0">Simplicidade</h3>
                  </div>
                  <p className="m-0">
                    Criamos ferramentas intuitivas que qualquer pessoa pode usar, independentemente de seu conhecimento técnico.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <Globe className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold m-0">Acessibilidade</h3>
                  </div>
                  <p className="m-0">
                    Mantemos nossas ferramentas gratuitas e acessíveis para todos, em qualquer lugar do mundo.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      <Award className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold m-0">Qualidade</h3>
                  </div>
                  <p className="m-0">
                    Comprometemo-nos com a excelência técnica, garantindo que nossas ferramentas produzam resultados de alta qualidade.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-100 p-3 rounded-full mr-4">
                      <Users className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold m-0">Comunidade</h3>
                  </div>
                  <p className="m-0">
                    Valorizamos o feedback dos usuários e continuamente melhoramos nossas ferramentas com base em suas necessidades.
                  </p>
                </div>
              </div>

              <h2>Nossa Equipe</h2>
              <p>
                Somos uma equipe diversificada de desenvolvedores, designers e especialistas em experiência do usuário, unidos pela paixão de criar ferramentas que facilitem o trabalho com documentos digitais. Cada membro da nossa equipe traz uma perspectiva única e habilidades valiosas para o projeto.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="text-center">
                  <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Carlos Oliveira"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-1">Carlos Oliveira</h3>
                  <p className="text-gray-600 mb-2">Fundador & CEO</p>
                  <p className="text-sm text-gray-500">
                    Desenvolvedor full-stack com mais de 15 anos de experiência em tecnologias web.
                  </p>
                </div>

                <div className="text-center">
                  <img
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Mariana Santos"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-1">Mariana Santos</h3>
                  <p className="text-gray-600 mb-2">CTO</p>
                  <p className="text-sm text-gray-500">
                    Especialista em algoritmos de processamento de documentos e otimização de performance.
                  </p>
                </div>

                <div className="text-center">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Rafael Costa"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-1">Rafael Costa</h3>
                  <p className="text-gray-600 mb-2">Head de Design</p>
                  <p className="text-sm text-gray-500">
                    Designer de experiência do usuário focado em criar interfaces intuitivas e acessíveis.
                  </p>
                </div>
              </div>

              <h2>Nossos Valores</h2>
              <p>
                No ConvertPDF, acreditamos que a tecnologia deve servir às pessoas, não o contrário. Nossos valores fundamentais guiam todas as nossas decisões e desenvolvimento de produtos:
              </p>

              <ul>
                <li><strong>Privacidade:</strong> Respeitamos a privacidade dos usuários. Seus documentos são processados localmente e nunca armazenados em nossos servidores.</li>
                <li><strong>Transparência:</strong> Somos claros sobre como nossas ferramentas funcionam e como mantemos nosso serviço gratuito.</li>
                <li><strong>Inovação:</strong> Buscamos constantemente melhorar nossas ferramentas e adicionar novos recursos úteis.</li>
                <li><strong>Inclusão:</strong> Projetamos nossas ferramentas para serem acessíveis a todos, incluindo pessoas com deficiências.</li>
                <li><strong>Sustentabilidade:</strong> Operamos de forma sustentável, minimizando nosso impacto ambiental e garantindo a viabilidade a longo prazo do nosso modelo de negócios.</li>
              </ul>

              <h2>Como Mantemos Nosso Serviço Gratuito</h2>
              <p>
                Muitos usuários se perguntam como podemos oferecer ferramentas de alta qualidade gratuitamente. Nosso modelo de negócios é baseado em publicidade não intrusiva e parcerias estratégicas que nos permitem manter nossas ferramentas gratuitas para uso pessoal.
              </p>
              <p>
                Também oferecemos planos premium para usuários corporativos que necessitam de recursos avançados, maior capacidade de processamento ou suporte prioritário. Esta abordagem nos permite atender às necessidades de todos os usuários, desde estudantes até grandes empresas.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Entre em Contato</h3>
                <p className="mb-4">
                  Tem perguntas, sugestões ou feedback? Adoraríamos ouvir de você! Entre em contato conosco através da nossa página de contato ou diretamente pelo e-mail abaixo.
                </p>
                <a href="/contato" className="btn btn-primary inline-block">
                  Fale Conosco
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">ConvertPDF em Números</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Desde o nosso lançamento, temos ajudado milhões de usuários a trabalhar de forma mais eficiente com seus documentos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5M+</div>
              <p className="text-gray-600">Usuários Mensais</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">50M+</div>
              <p className="text-gray-600">Documentos Convertidos</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
              <p className="text-gray-600">Ferramentas Gratuitas</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">190+</div>
              <p className="text-gray-600">Países Atendidos</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;