import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Heart, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Contáctanos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes preguntas sobre adopción? ¿Quieres conocer más sobre nuestros perritos? 
            Estamos aquí para ayudarte en cada paso del camino.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Envíanos un mensaje
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors duration-200"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors duration-200"
                      placeholder="+51 123 456 789"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Asunto *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="adoption">Consulta sobre adopción</option>
                      <option value="visit">Agendar visita</option>
                      <option value="volunteer">Voluntariado</option>
                      <option value="donation">Donaciones</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Enviar mensaje</span>
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  Información de contacto
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-pink-100 p-3 rounded-xl">
                      <Phone className="h-6 w-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Teléfono</h3>
                      <p className="text-gray-600">+51 123 456 789</p>
                      <p className="text-sm text-gray-500">Lunes a Domingo, 9:00 - 20:00</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-600">info@puppyhome.pe</p>
                      <p className="text-sm text-gray-500">Respuesta en 24 horas</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-xl">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Dirección</h3>
                      <p className="text-gray-600">
                        Av. Los Próceres 456<br />
                        Lima 15038, Perú
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-xl">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Horarios de visita</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Lunes - Viernes: 10:00 - 18:00</p>
                        <p>Sábados: 9:00 - 17:00</p>
                        <p>Domingos: 10:00 - 15:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Síguenos en redes sociales
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-colors duration-200 group"
                  >
                    <Facebook className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
                  </a>
                  <a
                    href="#"
                    className="bg-pink-600 text-white p-3 rounded-xl hover:bg-pink-700 transition-colors duration-200 group"
                  >
                    <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-400 text-white p-3 rounded-xl hover:bg-blue-500 transition-colors duration-200 group"
                  >
                    <Twitter className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
                  </a>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <Heart className="h-5 w-5 text-red-600" fill="currentColor" />
                  </div>
                  <h3 className="font-semibold text-red-800">Emergencias</h3>
                </div>
                <p className="text-red-700 text-sm mb-2">
                  Si encuentras un animal en situación de emergencia:
                </p>
                <p className="font-semibold text-red-800">
                  📞 Emergencias 24/7: +51 123 456 789
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Cómo llegar
            </h2>
            <p className="text-lg text-gray-600">
              Visítanos en nuestro refugio y conoce a nuestros adorables perritos
            </p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.965!2d-77.0428!3d-12.0464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAyJzQ3LjAiUyA3N8KwMDInMzQuMSJX!5e0!3m2!1ses!2spe!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación PuppyHome"
              className="w-full h-96"
            ></iframe>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚇</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Metro</h3>
              <p className="text-gray-600 text-sm">
                Línea 1 - Estación Los Próceres<br />
                3 minutos caminando
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚌</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Autobús</h3>
              <p className="text-gray-600 text-sm">
                Líneas 301, 302, 303<br />
                Parada "Los Próceres"
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Coche</h3>
              <p className="text-gray-600 text-sm">
                Parking gratuito disponible<br />
                Entrada por Av. Secundaria
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;