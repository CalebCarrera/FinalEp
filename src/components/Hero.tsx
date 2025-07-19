import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [counts, setCounts] = useState({
    adopted: 0,
    experience: 0,
    support: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const statsSection = document.querySelector('#inicio');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1500;
    const steps = 80;
    const stepDuration = duration / steps;

    const finalValues = {
      adopted: 500,
      experience: 15,
      support: 24
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      const progress = currentStep / steps;
      
      setCounts({
        adopted: Math.floor(finalValues.adopted * progress),
        experience: Math.floor(finalValues.experience * progress),
        support: Math.floor(finalValues.support * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(finalValues);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section id="inicio" className="pt-16 bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Adopta un{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500">
                  amigo
                </span>{' '}
                para toda la vida
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Dale una segunda oportunidad a un perrito que necesita amor. 
                Encuentra tu compañero perfecto y llena tu hogar de alegría incondicional.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('adopta')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Ver perritos</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button 
                onClick={() => document.getElementById('sobre-nosotros')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-pink-300 text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-all duration-300"
              >
                Conoce más
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-pink-600 transition-all duration-300">
                  {counts.adopted}+
                </div>
                <div className="text-sm text-gray-600">Adoptados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-orange-500 transition-all duration-300">
                  {counts.experience}+
                </div>
                <div className="text-sm text-gray-600">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-500 transition-all duration-300">
                  {counts.support}/7
                </div>
                <div className="text-sm text-gray-600">Apoyo post-adopción</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Perrito feliz esperando adopción"
                className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-pink-200 rounded-full opacity-60 blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-200 rounded-full opacity-60 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;