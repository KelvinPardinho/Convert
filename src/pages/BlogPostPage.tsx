import { useParams } from 'react-router-dom';
import { Calendar, Clock, Tag, Share2, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import SEO from '../components/SEO';
import AdBanner from '../components/AdBanner';
import { useThemeStore } from '../stores/themeStore';

const ToolsPage = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();

  // Dados simulados para o post do blog
  // Em um app real, isso seria buscado de uma API ou banco de dados
  const blogPost = {
    title: 'Como converter PDF para Word mantendo a formatação',
    excerpt: 'Aprenda técnicas para preservar a formatação original ao converter documentos PDF para Word.',
    content: `
      <p>A conversão de arquivos PDF para documentos Word editáveis é uma necessidade comum para muitos profissionais e estudantes. No entanto, manter a formatação original durante esse processo pode ser um desafio. Neste artigo, vamos explorar as melhores técnicas e ferramentas para garantir que seus documentos convertidos mantenham a aparência original.</p>
      
      <h2>Por que a formatação se perde durante a conversão?</h2>
      
      <p>Antes de mergulharmos nas soluções, é importante entender por que a formatação frequentemente se perde durante a conversão de PDF para Word:</p>
      
      <ul>
        <li>PDFs são formatos de documento fixos, projetados para manter a aparência exata independentemente do dispositivo ou software usado para visualizá-los.</li>
        <li>Documentos Word são formatos editáveis que se adaptam a diferentes tamanhos de tela e configurações.</li>
        <li>Durante a conversão, elementos como fontes, espaçamento, imagens e tabelas podem ser interpretados de maneira diferente.</li>
      </ul>
      
      <h2>Melhores ferramentas para conversão com preservação de formatação</h2>
      
      <p>Existem várias ferramentas disponíveis para converter PDF para Word, mas nem todas são igualmente eficazes na preservação da formatação. Aqui estão algumas das melhores opções:</p>
      
      <h3>1. Adobe Acrobat Pro DC</h3>
      
      <p>O Adobe Acrobat Pro DC é considerado o padrão ouro para conversão de PDF. Como é desenvolvido pela mesma empresa que criou o formato PDF, oferece os melhores resultados em termos de preservação de formatação.</p>
      
      <p>Vantagens:</p>
      <ul>
        <li>Preservação precisa de fontes, imagens e layouts</li>
        <li>Suporte para documentos complexos com tabelas e gráficos</li>
        <li>Opções avançadas de configuração para otimizar a conversão</li>
      </ul>
      
      <p>Desvantagens:</p>
      <ul>
        <li>Custo elevado (assinatura mensal ou anual)</li>
        <li>Pode ser excessivo para necessidades básicas de conversão</li>
      </ul>
      
      <h3>2. Ferramentas online gratuitas</h3>
      
      <p>Para conversões ocasionais, ferramentas online como o ConvertPDF oferecem uma alternativa gratuita e acessível.</p>
      
      <p>Vantagens:</p>
      <ul>
        <li>Gratuito e fácil de usar</li>
        <li>Não requer instalação de software</li>
        <li>Resultados razoáveis para documentos simples</li>
      </ul>
      
      <p>Desvantagens:</p>
      <ul>
        <li>Limitações de tamanho de arquivo</li>
        <li>Pode não preservar perfeitamente documentos complexos</li>
        <li>Considerações de privacidade ao fazer upload de documentos sensíveis</li>
      </ul>
      
      <h2>Técnicas para melhorar a preservação da formatação</h2>
      
      <p>Independentemente da ferramenta que você escolher, estas técnicas podem ajudar a melhorar os resultados da conversão:</p>
      
      <h3>1. Verifique se o PDF é pesquisável</h3>
      
      <p>PDFs que contêm texto real (pesquisável) são convertidos com muito mais precisão do que PDFs escaneados. Se você estiver trabalhando com um documento escaneado, use OCR (Reconhecimento Óptico de Caracteres) antes da conversão.</p>
      
      <h3>2. Simplifique documentos complexos</h3>
      
      <p>Se possível, divida documentos complexos em partes menores antes da conversão. Isso pode melhorar significativamente a precisão da formatação em cada seção.</p>
      
      <h3>3. Preste atenção às fontes</h3>
      
      <p>Certifique-se de que as fontes usadas no PDF estejam instaladas no seu sistema. Isso ajudará a manter a aparência do texto após a conversão.</p>
      
      <h3>4. Ajustes pós-conversão</h3>
      
      <p>Mesmo com as melhores ferramentas, algum ajuste manual pode ser necessário após a conversão. Reserve tempo para revisar e corrigir pequenos problemas de formatação no documento Word resultante.</p>
      
      <h2>Conclusão</h2>
      
      <p>Converter PDF para Word mantendo a formatação original pode ser desafiador, mas com as ferramentas e técnicas certas, é possível obter resultados excelentes. Para documentos simples, ferramentas online gratuitas como o ConvertPDF podem ser suficientes. Para documentos complexos ou profissionais, considere investir em uma solução premium como o Adobe Acrobat Pro DC.</p>
      
      <p>Lembre-se de que algum ajuste manual pode ser necessário mesmo com as melhores ferramentas, então reserve tempo para revisar o documento convertido antes de finalizá-lo.</p>
    `,
    coverImage: 'https://images.pexels.com/photos/6446709/pexels-photo-6446709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '10 Jun 2025',
    category: 'Tutoriais',
    readTime: '5 min de leitura',
    author: {
      name: 'Ana Silva',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Especialista em produtividade digital e conversão de documentos. Ana escreve sobre tecnologia e ferramentas para otimizar fluxos de trabalho.',
    },
    relatedPosts: [
      {
        title: 'Dicas para reduzir o tamanho de arquivos PDF',
        slug: 'dicas-para-reduzir-tamanho-arquivos-pdf',
        coverImage: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        title: 'Como extrair páginas específicas de um PDF',
        slug: 'como-extrair-paginas-especificas-pdf',
        coverImage: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        title: 'OCR: Como converter PDFs escaneados em texto editável',
        slug: 'ocr-converter-pdfs-escaneados-texto-editavel',
        coverImage: 'https://images.pexels.com/photos/5077393/pexels-photo-5077393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ],
  };

  // Em um app real, você buscaria o post com base no slug
  // const post = fetchPostBySlug(slug);
  const post = blogPost; // Simulação

  if (!post) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Artigo não encontrado</h1>
        <p className="text-gray-600 mb-8">O artigo que você está procurando não existe ou foi removido.</p>
        <a href="/blog" className="btn btn-primary">
          Voltar para o Blog
        </a>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={`${post.category.toLowerCase()}, converter pdf, tutorial pdf, ${post.title.toLowerCase()}`}
        canonicalUrl={`https://convertpdf.com.br/blog/${slug}`}
        ogImage={post.coverImage}
        ogType="article"
        articlePublishedTime="2025-06-10T10:00:00Z"
        articleModifiedTime="2025-06-10T10:00:00Z"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-blue-500 text-white text-sm px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {post.title}
            </h1>
            <p className="text-xl mb-6 text-blue-100">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-blue-100">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                
                <div className="p-6 md:p-8">
                  {/* Author Info */}
                  <div className="flex items-center mb-6 pb-6 border-b border-gray-200">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{post.author.name}</p>
                      <p className="text-sm text-gray-600">{post.author.bio}</p>
                    </div>
                  </div>
                  
                  {/* Article Content */}
                  <div 
                    className="prose prose-blue max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                  
                  {/* Tags */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center flex-wrap gap-2">
                      <Tag className="h-5 w-5 text-gray-500" />
                      <span className="text-sm text-gray-500 mr-2">Tags:</span>
                      <a href="#" className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200">
                        PDF
                      </a>
                      <a href="#" className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200">
                        Word
                      </a>
                      <a href="#" className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200">
                        Conversão
                      </a>
                      <a href="#" className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200">
                        Formatação
                      </a>
                    </div>
                  </div>
                  
                  {/* Share */}
                  <div className="mt-6">
                    <div className="flex items-center mb-3">
                      <Share2 className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-500">Compartilhar:</span>
                    </div>
                    <div className="flex space-x-2">
                      <a href="#" className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a href="#" className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500">
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a href="#" className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href="#" className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600">
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
              
              {/* Ad Banner */}
              <div className="my-8">
                <AdBanner position="bottom" />
              </div>
              
              {/* Related Posts */}
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-6">Artigos Relacionados</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {post.relatedPosts.map((relatedPost, index) => (
                    <a 
                      key={index} 
                      href={`/blog/${relatedPost.slug}`}
                      className="group"
                    >
                      <div className="rounded-lg overflow-hidden shadow-sm">
                        <img
                          src={relatedPost.coverImage}
                          alt={relatedPost.title}
                          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="mt-3 text-gray-800 font-medium group-hover:text-blue-600 transition-colors">
                        {relatedPost.title}
                      </h4>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              {/* Ad Banner */}
              <AdBanner position="sidebar" className="w-full" />
              
              {/* Author Card */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Sobre o Autor</h3>
                <div className="flex items-center mb-4">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{post.author.name}</p>
                    <p className="text-sm text-gray-500">Autor</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  {post.author.bio}
                </p>
                <div className="mt-4 flex space-x-2">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="bg-blue-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">Inscreva-se na Newsletter</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Receba as últimas dicas e tutoriais sobre manipulação de documentos diretamente no seu e-mail.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Inscrever-se
                  </button>
                </form>
              </div>
              
              {/* Popular Tools */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Ferramentas Populares</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="/ferramentas/pdf-para-word" className="flex items-center text-gray-700 hover:text-blue-600">
                      <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>PDF para Word</span>
                    </a>
                  </li>
                  <li>
                    <a href="/ferramentas/word-para-pdf" className="flex items-center text-gray-700 hover:text-blue-600">
                      <svg className="h-5 w-5 text-emerald-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <span>Word para PDF</span>
                    </a>
                  </li>
                  <li>
                    <a href="/ferramentas/pdf-para-jpg" className="flex items-center text-gray-700 hover:text-blue-600">
                      <svg className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>PDF para JPG</span>
                    </a>
                  </li>
                  <li>
                    <a href="/ferramentas/comprimir-pdf" className="flex items-center text-gray-700 hover:text-blue-600">
                      <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                      </svg>
                      <span>Comprimir PDF</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;