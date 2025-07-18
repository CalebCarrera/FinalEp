import { Users, Award, Clock, Heart, Shield, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Adopciones exitosas' },
    { icon: Award, number: '15', label: 'Años de experiencia' },
    { icon: Clock, number: '24/7', label: 'Apoyo disponible' },
    { icon: Heart, number: '100%', label: 'Amor garantizado' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Amor y Compasión',
      description: 'Cada perrito recibe amor incondicional y cuidados personalizados mientras espera su hogar forever.'
    },
    {
      icon: Shield,
      title: 'Bienestar Animal',
      description: 'Priorizamos la salud física y emocional de cada animal con atención veterinaria de primera calidad.'
    },
    {
      icon: Star,
      title: 'Adopciones Responsables',
      description: 'Nos aseguramos de que cada adopción sea perfecta tanto para las familias como para nuestros peludos.'
    }
  ];

  const team = [
    {
      name: 'Dr. María González',
      role: 'Directora Veterinaria',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: '15 años de experiencia en medicina veterinaria y bienestar animal.'
    },
    {
      name: 'Carlos Ruiz',
      role: 'Coordinador de Adopciones',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Especialista en comportamiento canino y procesos de adopción.'
    },
    {
      name: 'Ana Martín',
      role: 'Cuidadora Principal',
      image: 'https://images.pexels.com/photos/5731849/pexels-photo-5731849.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Dedicada al cuidado diario y socialización de nuestros perritos.'
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde hace más de 15 años, hemos dedicado nuestras vidas a rescatar, cuidar y encontrar 
              hogares amorosos para perritos que necesitan una segunda oportunidad.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-pink-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-6 w-6 text-pink-500" />
                </div>
                <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                  Nuestra misión es conectar corazones
                </h2>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Creemos firmemente que cada perrito merece amor, cuidados médicos de calidad y una 
                    familia que los valore. Nuestro refugio no es solo un lugar temporal, es un hogar 
                    donde cada peludo recibe atención personalizada.
                  </p>
                  <p>
                    Trabajamos incansablemente para asegurar que cada adopción sea perfecta, tanto para 
                    las familias como para nuestros amigos de cuatro patas. Nuestro proceso incluye 
                    evaluaciones de compatibilidad, seguimiento post-adopción y apoyo continuo.
                  </p>
                  <p>
                    Además de las adopciones, ofrecemos programas educativos sobre tenencia responsable, 
                    campañas de esterilización y servicios veterinarios accesibles para la comunidad.
                  </p>
                </div>
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

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Los principios que guían cada decisión y acción en nuestro refugio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-pink-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Profesionales apasionados dedicados al bienestar de cada perrito
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-pink-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;