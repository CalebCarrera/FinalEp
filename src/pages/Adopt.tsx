import { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import DogGallery from '../components/DogGallery';

const Adopt = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAge, setSelectedAge] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');

  const dogs = [
    {
      id: 1,
      name: 'Luna',
      age: '2 años',
      breed: 'Golden Retriever',
      size: 'Grande',
      location: 'Lima',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Muy cariñosa y juguetona. Le encanta correr en el parque y jugar con niños.',
      personality: ['Cariñosa', 'Juguetona', 'Activa'],
      vaccinated: true,
      sterilized: true
    },
    {
      id: 2,
      name: 'Max',
      age: '3 años',
      breed: 'Labrador',
      size: 'Grande',
      location: 'Arequipa',
      image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Perfecto para familias. Muy obediente y le encanta nadar.',
      personality: ['Obediente', 'Familiar', 'Tranquilo'],
      vaccinated: true,
      sterilized: true
    },
    {
      id: 3,
      name: 'Bella',
      age: '1 año',
      breed: 'Beagle',
      size: 'Mediano',
      location: 'Trujillo',
      image: 'https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Llena de energía y amor. Perfecta para personas activas.',
      personality: ['Energética', 'Curiosa', 'Sociable'],
      vaccinated: true,
      sterilized: false
    },
    {
      id: 4,
      name: 'Rocky',
      age: '4 años',
      breed: 'Pastor Alemán',
      size: 'Grande',
      location: 'Cusco',
      image: 'https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Leal y protector. Ideal para familias con experiencia en perros grandes.',
      personality: ['Leal', 'Protector', 'Inteligente'],
      vaccinated: true,
      sterilized: true
    },
    {
      id: 5,
      name: 'Coco',
      age: '6 meses',
      breed: 'French Bulldog',
      size: 'Pequeño',
      location: 'Piura',
      image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Adorable y sociable. Le encanta estar cerca de las personas.',
      personality: ['Adorable', 'Sociable', 'Calmado'],
      vaccinated: true,
      sterilized: false
    },
    {
      id: 6,
      name: 'Nala',
      age: '2 años',
      breed: 'Border Collie',
      size: 'Mediano',
      location: 'Chiclayo',
      image: 'https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Inteligente y activa. Necesita mucho ejercicio y estimulación mental.',
      personality: ['Inteligente', 'Activa', 'Leal'],
      vaccinated: true,
      sterilized: true
    },
    {
      id: 7,
      name: 'Toby',
      age: '5 años',
      breed: 'Cocker Spaniel',
      size: 'Mediano',
      location: 'Iquitos',
      image: 'https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Muy dulce y tranquilo. Perfecto para personas mayores o familias relajadas.',
      personality: ['Dulce', 'Tranquilo', 'Cariñoso'],
      vaccinated: true,
      sterilized: true
    },
    {
      id: 8,
      name: 'Mia',
      age: '1 año',
      breed: 'Husky Siberiano',
      size: 'Grande',
      location: 'Tacna',
      image: 'https://images.pexels.com/photos/605494/pexels-photo-605494.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Aventurera y llena de energía. Necesita mucho ejercicio diario.',
      personality: ['Aventurera', 'Energética', 'Independiente'],
      vaccinated: true,
      sterilized: false
    }
  ];

  const getAgeInYears = (ageString: string): number => {
    if (ageString.includes('meses')) {
      return parseInt(ageString) / 12;
    }
    return parseInt(ageString);
  };

  const filteredDogs = dogs.filter(dog => {
    const matchesSearch = dog.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dog.breed.toLowerCase().includes(searchTerm.toLowerCase());
    
    const dogAge = getAgeInYears(dog.age);
    const matchesAge = selectedAge === 'all' || 
                      (selectedAge === 'young' && dogAge <= 2) ||
                      (selectedAge === 'adult' && dogAge > 2 && dogAge <= 6) ||
                      (selectedAge === 'senior' && dogAge > 6);
    
    const matchesSize = selectedSize === 'all' || dog.size.toLowerCase() === selectedSize.toLowerCase();
    
    return matchesSearch && matchesAge && matchesSize;
  });

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Encuentra tu compañero perfecto
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Cada uno de estos perritos está esperando encontrar su hogar forever. 
            Explora nuestros adorables amigos y descubre quién robará tu corazón.
          </p>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar por nombre o raza..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            <div className="flex gap-4 items-center">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <span className="text-gray-700 font-medium">Filtros:</span>
              </div>
              
              <select
                value={selectedAge}
                onChange={(e) => setSelectedAge(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="all">Todas las edades</option>
                <option value="young">Joven (0-2 años)</option>
                <option value="adult">Adulto (3-6 años)</option>
                <option value="senior">Senior (7+ años)</option>
              </select>

              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="all">Todos los tamaños</option>
                <option value="pequeño">Pequeño</option>
                <option value="mediano">Mediano</option>
                <option value="grande">Grande</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <DogGallery dogs={filteredDogs} />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Proceso de Adopción
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Queremos asegurar que cada adopción sea perfecta. Aquí te explicamos nuestro proceso
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Conoce a tu futuro amigo',
                description: 'Visita nuestro refugio y pasa tiempo con el perrito que te interese.'
              },
              {
                step: '2',
                title: 'Completa la solicitud',
                description: 'Llena nuestro formulario de adopción con información sobre tu hogar.'
              },
              {
                step: '3',
                title: 'Entrevista y evaluación',
                description: 'Conversamos contigo para asegurar la mejor compatibilidad.'
              },
              {
                step: '4',
                title: '¡Bienvenido a casa!',
                description: 'Finalizamos el proceso y tu nuevo amigo va contigo a casa.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Adopt;