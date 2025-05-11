import { Link } from 'react-router-dom';
import { FilePenLine, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <FilePenLine className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">ConvertPDF</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Ferramentas gratuitas para converter e manipular arquivos PDF, Word, Excel, imagens e muito mais.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Ferramentas</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ferramentas/pdf-para-word" className="text-gray-400 hover:text-white transition-colors">
                  PDF para Word
                </Link>
              </li>
              <li>
                <Link to="/ferramentas/word-para-pdf" className="text-gray-400 hover:text-white transition-colors">
                  Word para PDF
                </Link>
              </li>
              <li>
                <Link to="/ferramentas/pdf-para-jpg" className="text-gray-400 hover:text-white transition-colors">
                  PDF para JPG
                </Link>
              </li>
              <li>
                <Link to="/ferramentas/jpg-para-pdf" className="text-gray-400 hover:text-white transition-colors">
                  JPG para PDF
                </Link>
              </li>
              <li>
                <Link to="/ferramentas/comprimir-pdf" className="text-gray-400 hover:text-white transition-colors">
                  Comprimir PDF
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/politica-de-privacidade" className="text-gray-400 hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos-de-uso" className="text-gray-400 hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Inscreva-se para receber dicas e novidades sobre nossas ferramentas.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} ConvertPDF. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;