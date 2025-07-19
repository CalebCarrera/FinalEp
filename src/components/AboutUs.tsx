import { Users, Award, Clock, Heart } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Adopciones exitosas' },
    { icon: Award, number: '15', label: 'Años de experiencia' },
    { icon: Clock, number: '24/7', label: 'Apoyo disponible' },
    { icon: Heart, number: '100%', label: 'Amor garantizado' }
  ];

  return (
    <section id="sobre-nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                Nuestra misión es conectar corazones
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Desde hace más de 15 años, hemos dedicado nuestras vidas a rescatar, cuidar y encontrar 
                  hogares amorosos para perritos que necesitan una segunda oportunidad.
                </p>
                <p>
                  Creemos firmemente que cada perrito merece amor, cuidados médicos de calidad y una 
                  familia que los valore. Nuestro refugio no es solo un lugar temporal, es un hogar 
                  donde cada peludo recibe atención personalizada.
                </p>
                <p>
                  Trabajamos incansablemente para asegurar que cada adopción sea perfecta, tanto para 
                  las familias como para nuestros amigos de cuatro patas.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-pink-50 to-orange-50 p-6 rounded-2xl text-center">
                  <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                    <stat.icon className="h-6 w-6 text-pink-500" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Refugio de perritos - Nuestro equipo cuidando a los perritos"
                className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Heart className="h-5 w-5 text-green-600" fill="currentColor" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Certificados</div>
                  <div className="text-sm text-gray-600">Refugio oficial</div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Registrados y certificados por las autoridades competentes para el bienestar animal.
              </p>
            </div>

            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 rounded-full opacity-40 blur-xl"></div>
            <div className="absolute top-1/2 -left-6 w-16 h-16 bg-green-200 rounded-full opacity-40 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;