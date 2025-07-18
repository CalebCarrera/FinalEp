import { Heart, Calendar, MapPin } from 'lucide-react';

const DogGallery = () => {
  const dogs = [
    {
      id: 1,
      name: 'Luna',
      age: '2 años',
      breed: 'Golden Retriever',
      location: 'Madrid',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Muy cariñosa y juguetona'
    },
    {
      id: 2,
      name: 'Max',
      age: '3 años',
      breed: 'Labrador',
      location: 'Barcelona',
      image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Perfecto para familias'
    },
    {
      id: 3,
      name: 'Bella',
      age: '1 año',
      breed: 'Beagle',
      location: 'Valencia',
      image: 'https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Llena de energía y amor'
    },
    {
      id: 4,
      name: 'Rocky',
      age: '4 años',
      breed: 'Pastor Alemán',
      location: 'Sevilla',
      image: 'https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Leal y protector'
    },
    {
      id: 5,
      name: 'Coco',
      age: '6 meses',
      breed: 'French Bulldog',
      location: 'Bilbao',
      image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Adorable y sociable'
    },
    {
      id: 6,
      name: 'Nala',
      age: '2 años',
      breed: 'Border Collie',
      location: 'Granada',
      image: 'https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Inteligente y activa'
    }
  ];

  return (
    <section id="adopta" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Encuentra tu compañero perfecto
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada uno de estos perritos está esperando encontrar su hogar forever. ¿Cuál robará tu corazón?
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dogs.map((dog) => (
            <div
              key={dog.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={dog.image}
                  alt={dog.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="h-5 w-5 text-pink-500" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-gray-800">{dog.name}</h3>
                  <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">
                    {dog.breed}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{dog.description}</p>

                <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{dog.age}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{dog.location}</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white py-3 rounded-2xl font-semibold hover:from-pink-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Adóptame ❤️
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold border-2 border-pink-300 hover:bg-pink-50 transition-all duration-300 shadow-lg hover:shadow-xl">
            Ver todos los perritos disponibles
          </button>
        </div>
      </div>
    </section>
  );
};

export default DogGallery;