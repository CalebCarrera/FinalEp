import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';

const Home = () => {
  return (
    <div>
      <Hero />

      <Benefits />

      <section className="py-20 bg-gradient-to-r from-pink-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            ¿Listo para cambiar una vida?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Miles de perritos están esperando encontrar su hogar forever. Tu nuevo mejor amigo te está esperando.
          </p>
          <Link
            to="/adopt"
            className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
          >
            Explorar perritos disponibles
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;