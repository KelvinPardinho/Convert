import { 
  FileText, FileOutput, Image, FileImage, FileArchive, FileSpreadsheet, 
  FileSignature, FilePlus, Scissors, FileSearch, Lock, Unlock, Sun, Moon 
} from 'lucide-react';
import SEO from '../components/SEO';
import ToolCard from '../components/ToolCard';
import { useThemeStore } from '../stores/themeStore';


  const tools = [
    {
      title: 'PDF para Word',
      description: 'Converta seus arquivos PDF para documentos Word editáveis com facilidade.',
      icon: FileText,
      to: '/ferramentas/pdf-para-word',
      color: 'text-blue-500 dark:text-blue-400',
    },
    {
      title: 'Word para PDF',
      description: 'Transforme documentos Word em arquivos PDF de alta qualidade.',
      icon: FileOutput,
      to: '/ferramentas/word-para-pdf',
      color: 'text-emerald-500 dark:text-emerald-400',
    },
    {
      title: 'PDF para JPG',
      description: 'Extraia imagens de arquivos PDF ou converta páginas em imagens JPG.',
      icon: Image,
      to: '/ferramentas/pdf-para-jpg',
      color: 'text-purple-500 dark:text-purple-400',
    },
    {
      title: 'JPG para PDF',
      description: 'Combine várias imagens em um único documento PDF organizado.',
      icon: FileImage,
      to: '/ferramentas/jpg-para-pdf',
      color: 'text-orange-500 dark:text-orange-400',
    },
    {
      title: 'Comprimir PDF',
      description: 'Reduza o tamanho dos seus arquivos PDF sem perder qualidade.',
      icon: FileArchive,
      to: '/ferramentas/comprimir-pdf',
      color: 'text-red-500 dark:text-red-400',
    },
    {
      title: 'PDF para Excel',
      description: 'Converta tabelas de PDF para planilhas Excel editáveis.',
      icon: FileSpreadsheet,
      to: '/ferramentas/pdf-para-excel',
      color: 'text-green-500 dark:text-green-400',
    },
    {
      title: 'Assinar PDF',
      description: 'Assine documentos PDF com certificado digital de forma segura.',
      icon: FileSignature,
      to: '/ferramentas/assinar-pdf',
      color: 'text-indigo-500 dark:text-indigo-400',
    },
    {
      title: 'Mesclar PDF',
      description: 'Combine múltiplos arquivos PDF em um único documento.',
      icon: FilePlus,
      to: '/ferramentas/mesclar-pdf',
      color: 'text-blue-600 dark:text-blue-500',
    },
    {
      title: 'Dividir PDF',
      description: 'Divida um PDF em múltiplos arquivos ou extraia páginas específicas.',
      icon: Scissors,
      to: '/ferramentas/dividir-pdf',
      color: 'text-purple-600 dark:text-purple-500',
    },
    {
      title: 'OCR PDF',
      description: 'Converta PDFs digitalizados em texto pesquisável.',
      icon: FileSearch,
      to: '/ferramentas/ocr-pdf',
      color: 'text-cyan-600 dark:text-cyan-500',
    },
    {
      title: 'Proteger PDF',
      description: 'Adicione proteção por senha aos seus documentos PDF.',
      icon: Lock,
      to: '/ferramentas/proteger-pdf',
      color: 'text-gray-600 dark:text-gray-400',
    },
    {
      title: 'Remover Senha PDF',
      description: 'Remova a proteção por senha dos seus arquivos PDF.',
      icon: Unlock,
      to: '/ferramentas/remover-senha-pdf',
      color: 'text-red-600 dark:text-red-500',
    },
  ];

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        <SEO
          title="Ferramentas de Conversão de Arquivos"
          description="Ferramentas gratuitas para converter e manipular arquivos PDF, Word, Excel, imagens e muito mais. Conversão rápida e segura, sem instalação de software."
          keywords="ferramentas PDF, converter PDF, PDF para Word, Word para PDF, PDF para JPG, conversor online"
        />

        {/* Theme Toggle */}
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label={isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 text-white py-12">
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
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
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
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4 dark:text-white">Por que usar nossas ferramentas?</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Nossas ferramentas são projetadas para oferecer a melhor experiência de conversão de arquivos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-4">
                <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Rápido</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Conversões instantâneas sem espera ou processamento lento.
                </p>
              </div>

              <div className="text-center p-4">
                <div className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Seguro</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Seus arquivos são processados localmente e excluídos após a conversão.
                </p>
              </div>

              <div className="text-center p-4">
                <div className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Gratuito</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Todas as ferramentas são gratuitas, sem limitações ou marcas d'água.
                </p>
              </div>

              <div className="text-center p-4">
                <div className="bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Alta Qualidade</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Mantemos a qualidade original dos seus documentos durante a conversão.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ToolsPage;