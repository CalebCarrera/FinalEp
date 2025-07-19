import { Heart, Calendar, MapPin } from 'lucide-react';

interface Dog {
  id: number;
  name: string;
  age: string;
  breed: string;
  size: string;
  location: string;
  image: string;
  description: string;
  personality: string[];
  vaccinated: boolean;
  sterilized: boolean;
}

interface DogGalleryProps {
  dogs: Dog[];
}

const DogGallery = ({ dogs }: DogGalleryProps) => {
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

        {dogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No se encontraron perritos con los filtros seleccionados.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dogs.map((dog) => (
              <div
                key={dog.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              >
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
        )}

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