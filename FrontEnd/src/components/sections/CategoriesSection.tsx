import React from 'react';
import { Code, Palette, Briefcase, Heart, Globe, Zap, BookOpen, Camera } from 'lucide-react';
import { useAppSelector } from '../../hooks/useAppSelector';

/**
 * Section des Catégories
 * Présente les différentes catégories d'articles du blog
 */
const CategoriesSection: React.FC = () => {
  const { isDark } = useAppSelector(state => state.ui);

  const categories = [
    {
      icon: Code,
      title: 'Développement',
      description: 'Tutoriels, frameworks et bonnes pratiques',
      articleCount: '120+',
      color: 'from-blue-500 to-indigo-600',
      bgColor: isDark ? 'bg-blue-900/20' : 'bg-blue-50',
      borderColor: isDark ? 'border-blue-500/20' : 'border-blue-200',
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'UI/UX, créativité et tendances visuelles',
      articleCount: '85+',
      color: 'from-pink-500 to-rose-600',
      bgColor: isDark ? 'bg-pink-900/20' : 'bg-pink-50',
      borderColor: isDark ? 'border-pink-500/20' : 'border-pink-200',
    },
    {
      icon: Briefcase,
      title: 'Business',
      description: 'Entrepreneuriat, marketing et stratégie',
      articleCount: '95+',
      color: 'from-emerald-500 to-teal-600',
      bgColor: isDark ? 'bg-emerald-900/20' : 'bg-emerald-50',
      borderColor: isDark ? 'border-emerald-500/20' : 'border-emerald-200',
    },
    {
      icon: Heart,
      title: 'Lifestyle',
      description: 'Bien-être, productivité et développement personnel',
      articleCount: '70+',
      color: 'from-purple-500 to-violet-600',
      bgColor: isDark ? 'bg-purple-900/20' : 'bg-purple-50',
      borderColor: isDark ? 'border-purple-500/20' : 'border-purple-200',
    },
    {
      icon: Globe,
      title: 'Tech News',
      description: 'Actualités technologiques et innovations',
      articleCount: '150+',
      color: 'from-orange-500 to-red-600',
      bgColor: isDark ? 'bg-orange-900/20' : 'bg-orange-50',
      borderColor: isDark ? 'border-orange-500/20' : 'border-orange-200',
    },
    {
      icon: Zap,
      title: 'Productivité',
      description: 'Outils, méthodes et astuces d\'efficacité',
      articleCount: '60+',
      color: 'from-yellow-500 to-orange-600',
      bgColor: isDark ? 'bg-yellow-900/20' : 'bg-yellow-50',
      borderColor: isDark ? 'border-yellow-500/20' : 'border-yellow-200',
    },
    {
      icon: BookOpen,
      title: 'Éducation',
      description: 'Apprentissage, formations et ressources',
      articleCount: '80+',
      color: 'from-indigo-500 to-blue-600',
      bgColor: isDark ? 'bg-indigo-900/20' : 'bg-indigo-50',
      borderColor: isDark ? 'border-indigo-500/20' : 'border-indigo-200',
    },
    {
      icon: Camera,
      title: 'Créatif',
      description: 'Photographie, art et expression créative',
      articleCount: '45+',
      color: 'from-teal-500 to-cyan-600',
      bgColor: isDark ? 'bg-teal-900/20' : 'bg-teal-50',
      borderColor: isDark ? 'border-teal-500/20' : 'border-teal-200',
    },
  ];

  return (
    <section className={`py-20 relative overflow-hidden ${
      isDark ? 'bg-slate-900' : 'bg-white'
    }`}>
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10 ${
          isDark ? 'bg-violet-500' : 'bg-violet-300'
        }`} />
        <div className={`absolute bottom-20 left-20 w-48 h-48 rounded-full blur-2xl opacity-15 ${
          isDark ? 'bg-emerald-500' : 'bg-emerald-300'
        }`} />
        
        {/* Forme géométrique */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5 ${
          isDark ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-blue-300 to-purple-300'
        }`} style={{ 
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          transform: 'translate(-50%, -50%) rotate(45deg)'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 mb-6">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Explorez Nos{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Catégories
            </span>
          </h2>
          
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Découvrez une variété de sujets passionnants, des dernières technologies 
            aux conseils de productivité, en passant par le design et l'entrepreneuriat.
          </p>
        </div>

        {/* Grille des catégories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                  category.bgColor
                } border ${category.borderColor} backdrop-blur-sm`}
              >
                {/* Badge nombre d'articles */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  isDark ? 'bg-slate-700 text-gray-300' : 'bg-white text-gray-600'
                } shadow-sm`}>
                  {category.articleCount}
                </div>

                {/* Icône avec gradient */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                <h3 className={`text-lg font-bold mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.title}
                </h3>

                <p className={`text-sm leading-relaxed ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {category.description}
                </p>

                {/* Effet de survol */}
                <div className={`absolute -z-10 inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${category.color} opacity-5`} /> 
                
                {/* Flèche d'action */}
                <div className={`absolute bottom-4 right-4 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 ${
                  isDark ? 'bg-slate-700' : 'bg-white'
                } shadow-lg`}>
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call-to-action */}
        <div className="text-center mt-16">
          <button className={`group inline-flex items-center px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
            isDark 
              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white' 
              : 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white'
          } shadow-lg hover:shadow-2xl`}>
            Voir Tous les Articles
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
