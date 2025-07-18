import { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-pink-200 p-2 rounded-full">
              <Heart className="h-6 w-6 text-pink-600" fill="currentColor" />
            </div>
            <span className="text-xl font-bold text-gray-800">PuppyHome</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium">
              Inicio
            </a>
            <a href="#sobre-nosotros" className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium">
              Sobre Nosotros
            </a>
            <a href="#adopta" className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium">
              Adopta
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium">
              Contacto
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-pink-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#inicio"
                className="block px-3 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md transition-colors duration-200"
                onClick={toggleMenu}
              >
                Inicio
              </a>
              <a
                href="#sobre-nosotros"
                className="block px-3 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md transition-colors duration-200"
                onClick={toggleMenu}
              >
                Sobre Nosotros
              </a>
              <a
                href="#adopta"
                className="block px-3 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md transition-colors duration-200"
                onClick={toggleMenu}
              >
                Adopta
              </a>
              <a
                href="#contacto"
                className="block px-3 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md transition-colors duration-200"
                onClick={toggleMenu}
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;