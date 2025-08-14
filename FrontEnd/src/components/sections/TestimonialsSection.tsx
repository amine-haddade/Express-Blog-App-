import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useAppSelector } from '../../hooks/useAppSelector';

/**
 * Section des témoignages
 * Affiche les avis et retours des lecteurs
 */
const TestimonialsSection: React.FC = () => {
  const { isDark } = useAppSelector(state => state.ui);

  /**
   * Données des témoignages
   */
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Designer UX/UI',
      company: 'TechCorp',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Ce blog a complètement transformé ma façon de voir le design. Les articles sont profonds, inspirants et toujours à la pointe des tendances.',
      rating: 5,
      featured: true,
    },
    {
      id: 2,
      name: 'Marc Dubois',
      role: 'Développeur Full-Stack',
      company: 'StartupXYZ',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Une source inépuisable d\'inspiration et de connaissances techniques. Je recommande vivement à tous les développeurs.',
      rating: 5,
      featured: false,
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Product Manager',
      company: 'InnovateLab',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Les insights sur l\'innovation et la gestion de produit sont exceptionnels. Chaque article apporte une nouvelle perspective.',
      rating: 5,
      featured: false,
    },
    {
      id: 4,
      name: 'Thomas Chen',
      role: 'Creative Director',
      company: 'DesignStudio',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'La qualité du contenu et la présentation visuelle sont remarquables. C\'est devenu ma référence quotidienne.',
      rating: 5,
      featured: true,
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Marketing Manager',
      company: 'GrowthCo',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Les stratégies marketing présentées sont innovantes et applicables immédiatement. Résultats garantis !',
      rating: 5,
      featured: false,
    },
    {
      id: 6,
      name: 'Alex Martin',
      role: 'Entrepreneur',
      company: 'VisionTech',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Ce blog m\'a aidé à structurer mes idées et à développer mon entreprise. Une ressource incontournable.',
      rating: 5,
      featured: false,
    },
  ];

  return (
    <section className={`py-20 ${
      isDark ? 'bg-slate-800/30' : 'bg-gradient-to-br from-slate-50 to-violet-50/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="text-center space-y-6 mb-16">
          <h2 className={`text-4xl lg:text-5xl font-black ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Ce Que Disent{' '}
            <span className="bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">
              Nos Lecteurs
            </span>
          </h2>
          
          <p className={`text-xl max-w-2xl mx-auto ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Découvrez les témoignages de notre communauté de créateurs, 
            développeurs et entrepreneurs qui nous font confiance.
          </p>

          {/* Note moyenne */}
          <div className="flex items-center justify-center space-x-2">
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className={`text-lg font-bold ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              5.0
            </span>
            <span className={`text-sm ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              (500+ avis)
            </span>
          </div>
        </div>

        {/* Grille des témoignages avec layout en mosaïque */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:scale-105 cursor-pointer ${
                testimonial.featured ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''
              } ${
                isDark 
                  ? 'bg-slate-800 shadow-xl shadow-black/25' 
                  : 'bg-white shadow-xl shadow-slate-200/50'
              }`}
              style={{
                transform: `rotate(${Math.sin(index) * 1.5}deg)`,
              }}
            >
              {/* Effet de gradient au survol */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                index % 4 === 0 
                  ? 'bg-gradient-to-br from-violet-500 to-purple-600'
                  : index % 4 === 1
                  ? 'bg-gradient-to-br from-emerald-500 to-teal-600'
                  : index % 4 === 2
                  ? 'bg-gradient-to-br from-orange-500 to-red-500'
                  : 'bg-gradient-to-br from-blue-500 to-indigo-600'
              }`} />

              {/* Icône de citation */}
              <div className="relative z-10 space-y-4">
                <div className={`inline-flex p-2 rounded-xl ${
                  index % 4 === 0 
                    ? 'bg-violet-100 text-violet-600'
                    : index % 4 === 1
                    ? 'bg-emerald-100 text-emerald-600'
                    : index % 4 === 2
                    ? 'bg-orange-100 text-orange-600'
                    : 'bg-blue-100 text-blue-600'
                } ${isDark ? 'bg-opacity-20' : ''}`}>
                  <Quote className="w-5 h-5" />
                </div>

                {/* Étoiles */}
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`w-4 h-4 ${
                        star <= testimonial.rating 
                          ? 'fill-yellow-400 text-yellow-400' 
                          : isDark ? 'text-slate-600' : 'text-slate-300'
                      }`} 
                    />
                  ))}
                </div>

                {/* Contenu du témoignage */}
                <p className={`text-sm leading-relaxed ${
                  testimonial.featured ? 'text-base' : ''
                } ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  "{testimonial.content}"
                </p>

                {/* Informations de l'auteur */}
                <div className="flex items-center space-x-3 pt-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                  />
                  <div>
                    <h4 className={`font-bold text-sm ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-xs ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Badge "Featured" pour les témoignages mis en avant */}
              {testimonial.featured && (
                <div className="absolute top-4 right-4">
                  <div className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
                    ⭐ Vedette
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Section de confiance supplémentaire */}
        <div className="mt-16 text-center">
          <div className={`inline-flex items-center space-x-6 px-8 py-6 rounded-3xl ${
            isDark 
              ? 'bg-slate-800 border border-slate-700' 
              : 'bg-white border border-slate-200 shadow-lg'
          }`}>
            <div className="text-center">
              <div className={`text-2xl font-black ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                98%
              </div>
              <div className={`text-xs ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Satisfaction
              </div>
            </div>
            <div className="w-px h-12 bg-slate-300" />
            <div className="text-center">
              <div className={`text-2xl font-black ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                50K+
              </div>
              <div className={`text-xs ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Lecteurs Fidèles
              </div>
            </div>
            <div className="w-px h-12 bg-slate-300" />
            <div className="text-center">
              <div className={`text-2xl font-black ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                4.9★
              </div>
              <div className={`text-xs ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Note Moyenne
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;