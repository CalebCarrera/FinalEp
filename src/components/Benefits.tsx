import { Heart, Shield, Users, Smile } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Amor Incondicional',
      description: 'Recibe el amor más puro y sincero que solo un perrito puede dar. Una conexión que durará toda la vida.',
      color: 'pink'
    },
    {
      icon: Shield,
      title: 'Mejora tu Salud',
      description: 'Los estudios demuestran que tener una mascota reduce el estrés, mejora el estado de ánimo y fortalece el sistema inmune.',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Compañía Fiel',
      description: 'Nunca más te sentirás solo. Tu nuevo amigo estará siempre ahí para acompañarte en cada momento.',
      color: 'green'
    },
    {
      icon: Smile,
      title: 'Alegría Diaria',
      description: 'Despierta cada día con energía positiva y sonrisas garantizadas. La felicidad de tu perrito es contagiosa.',
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      pink: 'bg-pink-100 text-pink-600 group-hover:bg-pink-200',
      blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-200',
      green: 'bg-green-100 text-green-600 group-hover:bg-green-200',
      orange: 'bg-orange-100 text-orange-600 group-hover:bg-orange-200'
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    
    <section className="py-20 bg-white">

        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            ¿Por qué adoptar?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Adoptar no solo cambia la vida de un perrito, también transforma la tuya de maneras increíbles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${getColorClasses(benefit.color)}`}>
                <benefit.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
          
        </div>
        
      </div>
    </section>
  );
};

export default Benefits;