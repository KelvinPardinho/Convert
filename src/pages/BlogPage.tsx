import { useState } from 'react';
import { Search } from 'lucide-react';
import SEO from '../components/SEO';
import BlogCard from '../components/BlogCard';
import AdBanner from '../components/AdBanner';
import { useThemeStore } from '../stores/themeStore';

const ToolsPage = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Dados simulados para o blog
  const blogPosts = [
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
    {
      title: 'Convertendo imagens para PDF: guia completo',
      excerpt: 'Aprenda a converter diferentes formatos de imagem para PDF e organize-os em um único documento.',
      slug: 'convertendo-imagens-para-pdf-guia-completo',
      coverImage: 'https://images.pexels.com/photos/5473337/pexels-photo-5473337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '28 Mai 2025',
      category: 'Tutoriais',
      readTime: '7 min de leitura',
    },
    {
      title: 'Como extrair páginas específicas de um PDF',
      excerpt: 'Tutorial passo a passo para extrair apenas as páginas que você precisa de documentos PDF extensos.',
      slug: 'como-extrair-paginas-especificas-pdf',
      coverImage: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '22 Mai 2025',
      category: 'Tutoriais',
      readTime: '3 min de leitura',
    },
    {
      title: 'Melhores ferramentas gratuitas para editar PDFs em 2025',
      excerpt: 'Conheça as ferramentas online e desktop mais eficientes para editar seus documentos PDF sem custo.',
      slug: 'melhores-ferramentas-gratuitas-editar-pdfs-2025',
      coverImage: 'https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '15 Mai 2025',
      category: 'Ferramentas',
      readTime: '8 min de leitura',
    },
    {
      title: 'OCR: Como converter PDFs escaneados em texto editável',
      excerpt: 'Entenda como funciona a tecnologia OCR e como utilizá-la para transformar documentos escaneados em texto.',
      slug: 'ocr-converter-pdfs-escaneados-texto-editavel',
      coverImage: 'https://images.pexels.com/photos/5077393/pexels-photo-5077393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '10 Mai 2025',
      category: 'Tecnologia',
      readTime: '6 min de leitura',
    },
    {
      title: 'Como criar formulários PDF preenchíveis',
      excerpt: 'Aprenda a criar formulários interativos em PDF que podem ser preenchidos digitalmente pelos usuários.',
      slug: 'como-criar-formularios-pdf-preenchiveis',
      coverImage: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '05 Mai 2025',
      category: 'Tutoriais',
      readTime: '9 min de leitura',
    },
    {
      title: 'PDF/A: O formato ideal para arquivamento de longo prazo',
      excerpt: 'Descubra o que é o formato PDF/A e por que ele é essencial para preservação de documentos a longo prazo.',
      slug: 'pdf-a-formato-ideal-arquivamento-longo-prazo',
      coverImage: 'https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '01 Mai 2025',
      category: 'Tecnologia',
      readTime: '5 min de leitura',
    },
  ];

  // Extrair categorias únicas
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  // Filtrar posts com base na pesquisa e categoria
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEO
        title="Blog - Dicas e Tutoriais sobre PDFs e Documentos"
        description="Artigos, tutoriais e dicas sobre manipulação de PDFs, conversão de documentos e produtividade digital."
        keywords="blog PDF, tutoriais PDF, dicas documentos, converter arquivos, produtividade"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Blog ConvertPDF
            </h1>
            <p className="text-xl mb-0 text-blue-100">
              Dicas, tutoriais e novidades sobre manipulação de documentos e produtividade.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Search and Filter */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder="Pesquisar artigos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`px-3 py-1 text-sm rounded-full ${
                      selectedCategory === null
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Todos
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1 text-sm rounded-full ${
                        selectedCategory === category
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Blog Posts */}
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPosts.map((post, index) => (
                    <BlogCard key={index} {...post} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <h3 className="text-xl font-semibold mb-2">Nenhum artigo encontrado</h3>
                  <p className="text-gray-600">
                    Não encontramos artigos correspondentes à sua pesquisa. Tente outros termos ou remova os filtros.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              {/* Ad Banner */}
              <AdBanner position="sidebar" className="w-full" />

              {/* Popular Posts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Artigos Populares</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 5).map((post, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="text-blue-600 font-bold">{index + 1}</span>
                      <div>
                        <a href={`/blog/${post.slug}`} className="text-gray-800 hover:text-blue-600 font-medium text-sm">
                          {post.title}
                        </a>
                        <p className="text-gray-500 text-xs mt-1">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Categorias</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className="text-gray-700 hover:text-blue-600 flex items-center justify-between w-full"
                      >
                        <span>{category}</span>
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          {blogPosts.filter(post => post.category === category).length}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;