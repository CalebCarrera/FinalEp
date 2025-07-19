import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-pink-500 p-2 rounded-full">
                <Heart className="h-6 w-6 text-white" fill="currentColor" />
              </div>
              <span className="text-2xl font-bold">PuppyHome</span>
            </Link>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Conectamos corazones y creamos familias felices. Cada adopción es una historia de amor 
              que comienza aquí, en nuestro refugio donde cada perrito es tratado como parte de nuestra familia.
            </p>
            
            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="bg-gray-700 p-3 rounded-full hover:bg-pink-500 transition-colors duration-300 group"
              >
                <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="bg-gray-700 p-3 rounded-full hover:bg-pink-500 transition-colors duration-300 group"
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="bg-gray-700 p-3 rounded-full hover:bg-pink-500 transition-colors duration-300 group"
              >
                <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/adopt" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">
                  Adoptar
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">
                  Contacto
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">
                  Donar
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">
                  Voluntariado
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-pink-400" />
                <span className="text-gray-300">+51 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-pink-400" />
                <span className="text-gray-300">info@puppyhome.es</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-pink-400 mt-1" />
                <span className="text-gray-300">
                  Av. Los Próceres 456<br />
                  Lima 15038, Perú
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-2 text-pink-400">Horarios de visita</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <div>Lunes - Viernes: 10:00 - 18:00</div>
                <div>Sábados: 9:00 - 17:00</div>
                <div>Domingos: 10:00 - 15:00</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 PuppyHome. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
                Términos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;