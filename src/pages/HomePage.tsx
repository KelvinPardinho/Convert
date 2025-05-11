import { Link } from 'react-router-dom';
import { FileText, FileOutput, Image, FileImage, FileArchive } from 'lucide-react';
import SEO from '../components/SEO';
import ToolCard from '../components/ToolCard';
import BlogCard from '../components/BlogCard';

const HomePage = () => {
  const popularTools = [
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
  ];

  const featuredPosts = [
    {
      title: 'Como converter PDF para Word mantendo a formatação',
      excerpt: 'Aprenda técnicas para preservar a formatação original ao converter documentos PDF para Word.',
      slug: 'como-converter-pdf-para-word-mantendo-formatacao',
      coverImage: 'https://images.pexels.com/photos/6446709/pexels-photo-6446709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '10 Jun 2025',
      category: 'Tutoriais',
      readTime: '5 min de leitura',
    },
    {
      title: 'Dicas para reduzir o tamanho de arquivos PDF',
      excerpt: 'Conheça as melhores práticas para comprimir PDFs sem comprometer a qualidade dos documentos.',
      slug: 'dicas-para-reduzir-tamanho-arquivos-pdf',
      coverImage: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '05 Jun 2025',
      category: 'Dicas',
      readTime: '4 min de leitura',
    },
    {
      title: 'Como proteger documentos PDF com senha',
      excerpt: 'Guia completo para adicionar senhas e restrições aos seus arquivos PDF importantes.',
      slug: 'como-proteger-documentos-pdf-com-senha',
      coverImage: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '01 Jun 2025',
      category: 'Segurança',
      readTime: '6 min de leitura',
    },
  ];

  return (
    <>
      <SEO
        title="Converta arquivos PDF, Word, Excel e mais"
        description="Ferramentas gratuitas para converter PDF, Word, Excel, imagens e muito mais. Conversão rápida e segura, sem instalação de software."
        keywords="converter PDF, PDF para Word, Word para PDF, PDF para JPG, conversor online, ferramentas PDF"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Converta seus arquivos com facilidade e rapidez
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Ferramentas online gratuitas para converter PDF, Word, Excel, imagens e muito mais.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/ferramentas" className="btn btn-secondary">
                Ver todas as ferramentas
              </Link>
              <Link to="/blog" className="btn btn-outline bg-white/10 text-white border-white/20 hover:bg-white/20">
                Explorar o blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Por que escolher o ConvertPDF?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nossas ferramentas são projetadas para facilitar seu trabalho com documentos digitais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Rápido e Eficiente</h3>
              <p className="text-gray-600">
                Conversões instantâneas sem necessidade de instalação de software ou cadastro.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Seguro</h3>
              <p className="text-gray-600">
                Seus arquivos são processados localmente e excluídos automaticamente após a conversão.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Gratuito</h3>
              <p className="text-gray-600">
                Todas as nossas ferramentas são gratuitas para uso, sem limitações ou marcas d'água.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tools Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ferramentas Populares</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nossas ferramentas mais utilizadas para facilitar seu trabalho com documentos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTools.map((tool, index) => (
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

          <div className="text-center mt-10">
            <Link to="/ferramentas" className="btn btn-primary">
              Ver todas as ferramentas
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Artigos Recentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dicas, tutoriais e novidades sobre manipulação de documentos e produtividade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/blog" className="btn btn-outline">
              Ver todos os artigos
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Comece a converter seus arquivos agora</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Experimente nossas ferramentas gratuitas e descubra como é fácil converter e manipular seus documentos.
            </p>
            <Link to="/ferramentas" className="btn btn-primary">
              Explorar ferramentas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;