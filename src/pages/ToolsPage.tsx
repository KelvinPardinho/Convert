import { FileText, FileOutput, Image, FileImage, FileArchive, FilePlus, FileMinus, FileSearch, FileCheck, FileWarning } from 'lucide-react';
import SEO from '../components/SEO';
import ToolCard from '../components/ToolCard';

const ToolsPage = () => {
  const tools = [
    {
      title: 'PDF para Word',
      description: 'Converta seus arquivos PDF para documentos Word editáveis com facilidade.',
      icon: FileText,
      to: '/ferramentas/pdf-para-word',
      color: 'text-blue-500',
    },
    {
      title: 'Word para PDF',
      description: 'Transforme documentos Word em arquivos PDF de alta qualidade.',
      icon: FileOutput,
      to: '/ferramentas/word-para-pdf',
      color: 'text-emerald-500',
    },
    {
      title: 'PDF para JPG',
      description: 'Extraia imagens de arquivos PDF ou converta páginas em imagens JPG.',
      icon: Image,
      to: '/ferramentas/pdf-para-jpg',
      color: 'text-purple-500',
    },
    {
      title: 'JPG para PDF',
      description: 'Combine várias imagens em um único documento PDF organizado.',
      icon: FileImage,
      to: '/ferramentas/jpg-para-pdf',
      color: 'text-orange-500',
    },
    {
      title: 'Comprimir PDF',
      description: 'Reduza o tamanho dos seus arquivos PDF sem perder qualidade.',
      icon: FileArchive,
      to: '/ferramentas/comprimir-pdf',
      color: 'text-red-500',
    },
    {
      title: 'Mesclar PDFs',
      description: 'Combine múltiplos arquivos PDF em um único documento.',
      icon: FilePlus,
      to: '/ferramentas/mesclar-pdf',
      color: 'text-indigo-500',
    },
    {
      title: 'Dividir PDF',
      description: 'Separe um arquivo PDF em múltiplos documentos menores.',
      icon: FileMinus,
      to: '/ferramentas/dividir-pdf',
      color: 'text-yellow-500',
    },
    {
      title: 'OCR PDF',
      description: 'Converta PDFs escaneados em texto pesquisável.',
      icon: FileSearch,
      to: '/ferramentas/ocr-pdf',
      color: 'text-cyan-500',
    },
    {
      title: 'Proteger PDF',
      description: 'Adicione senha e restrições aos seus documentos PDF.',
      icon: FileCheck,
      to: '/ferramentas/proteger-pdf',
      color: 'text-lime-500',
    },
    {
      title: 'Remover Senha PDF',
      description: 'Remova senhas e restrições de documentos PDF.',
      icon: FileWarning,
      to: '/ferramentas/remover-senha-pdf',
      color: 'text-pink-500',
    },
  ];

  return (
    <>
      <SEO
        title="Ferramentas de Conversão de Arquivos"
        description="Ferramentas gratuitas para converter e manipular arquivos PDF, Word, Excel, imagens e muito mais. Conversão rápida e segura, sem instalação de software."
        keywords="ferramentas PDF, converter PDF, PDF para Word, Word para PDF, PDF para JPG, conversor online"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Ferramentas de Conversão de Arquivos
            </h1>
            <p className="text-xl mb-0 text-blue-100">
              Converta, edite e manipule seus documentos com nossas ferramentas gratuitas.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <ToolCard
                key={index}
                title={tool.title}
                description={tool.description}
                icon={tool.icon}
                to={tool.to}
                color={tool.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Por que usar nossas ferramentas?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nossas ferramentas são projetadas para oferecer a melhor experiência de conversão de arquivos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-4">
              <div className="bg-blue-100 text-blue-600 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Rápido</h3>
              <p className="text-gray-600 text-sm">
                Conversões instantâneas sem espera ou processamento lento.
              </p>
            </div>

            <div className="text-center p-4">
              <div className="bg-green-100 text-green-600 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Seguro</h3>
              <p className="text-gray-600 text-sm">
                Seus arquivos são processados localmente e excluídos após a conversão.
              </p>
            </div>

            <div className="text-center p-4">
              <div className="bg-purple-100 text-purple-600 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Gratuito</h3>
              <p className="text-gray-600 text-sm">
                Todas as ferramentas são gratuitas, sem limitações ou marcas d'água.
              </p>
            </div>

            <div className="text-center p-4">
              <div className="bg-orange-100 text-orange-600 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Alta Qualidade</h3>
              <p className="text-gray-600 text-sm">
                Mantemos a qualidade original dos seus documentos durante a conversão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Respostas para as dúvidas mais comuns sobre nossas ferramentas.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">As ferramentas são realmente gratuitas?</h3>
                <p className="text-gray-600">
                  Sim, todas as nossas ferramentas são completamente gratuitas para uso. Não há custos ocultos, limitações de uso ou necessidade de cadastro.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Meus arquivos ficam salvos no servidor?</h3>
                <p className="text-gray-600">
                  Não. Seus arquivos são processados localmente no seu navegador e não são enviados para nossos servidores. Após a conversão, os arquivos são automaticamente excluídos.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Qual é o tamanho máximo de arquivo suportado?</h3>
                <p className="text-gray-600">
                  O tamanho máximo varia de acordo com a ferramenta, mas geralmente suportamos arquivos de até 100MB. Para arquivos maiores, recomendamos dividir o documento em partes menores.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">A formatação original é mantida na conversão?</h3>
                <p className="text-gray-600">
                  Sim, nossas ferramentas são projetadas para preservar a formatação original dos documentos na medida do possível. No entanto, documentos muito complexos podem apresentar pequenas diferenças.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Preciso instalar algum software?</h3>
                <p className="text-gray-600">
                  Não, todas as nossas ferramentas funcionam diretamente no seu navegador. Não é necessário instalar nenhum software adicional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToolsPage;