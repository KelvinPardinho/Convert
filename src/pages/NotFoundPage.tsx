import { Link } from 'react-router-dom';
import { FileQuestion } from 'lucide-react';
import SEO from '../components/SEO';

const NotFoundPage = () => {
  return (
    <>
      <SEO
        title="Página Não Encontrada"
        description="A página que você está procurando não existe ou foi removida."
        keywords="404, página não encontrada, erro"
      />

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <FileQuestion className="h-24 w-24 text-blue-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Página Não Encontrada
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A página que você está procurando não existe ou foi removida.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/" className="btn btn-primary">
                Voltar para a Página Inicial
              </Link>
              <Link to="/ferramentas" className="btn btn-outline">
                Explorar Ferramentas
              </Link>
            </div>

            <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Você pode estar procurando por:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Ferramentas Populares</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/ferramentas/pdf-para-word" className="text-blue-600 hover:underline">
                        PDF para Word
                      </Link>
                    </li>
                    <li>
                      <Link to="/ferramentas/word-para-pdf" className="text-blue-600 hover:underline">
                        Word para PDF
                      </Link>
                    </li>
                    <li>
                      <Link to="/ferramentas/pdf-para-jpg" className="text-blue-600 hover:underline">
                        PDF para JPG
                      </Link>
                    </li>
                    <li>
                      <Link to="/ferramentas/comprimir-pdf" className="text-blue-600 hover:underline">
                        Comprimir PDF
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Páginas Importantes</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/blog" className="text-blue-600 hover:underline">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/sobre" className="text-blue-600 hover:underline">
                        Sobre Nós
                      </Link>
                    </li>
                    <li>
                      <Link to="/contato" className="text-blue-600 hover:underline">
                        Contato
                      </Link>
                    </li>
                    <li>
                      <Link to="/ferramentas" className="text-blue-600 hover:underline">
                        Todas as Ferramentas
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;