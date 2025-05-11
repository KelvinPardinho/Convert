import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FilePenLine, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block py-2 px-3 rounded-md transition-colors ${
      isActive
        ? 'bg-blue-100 text-blue-700 font-medium'
        : 'text-gray-700 hover:bg-gray-100'
    }`;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <FilePenLine className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">ConvertPDF</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className={navLinkClasses} end>
              Início
            </NavLink>
            <NavLink to="/ferramentas" className={navLinkClasses}>
              Ferramentas
            </NavLink>
            <NavLink to="/blog" className={navLinkClasses}>
              Blog
            </NavLink>
            <NavLink to="/sobre" className={navLinkClasses}>
              Sobre
            </NavLink>
            <NavLink to="/contato" className={navLinkClasses}>
              Contato
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-2 space-y-1">
            <NavLink to="/" className={navLinkClasses} onClick={closeMenu} end>
              Início
            </NavLink>
            <NavLink to="/ferramentas" className={navLinkClasses} onClick={closeMenu}>
              Ferramentas
            </NavLink>
            <NavLink to="/blog" className={navLinkClasses} onClick={closeMenu}>
              Blog
            </NavLink>
            <NavLink to="/sobre" className={navLinkClasses} onClick={closeMenu}>
              Sobre
            </NavLink>
            <NavLink to="/contato" className={navLinkClasses} onClick={closeMenu}>
              Contato
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;