import React from 'react';
import { Target, Users, Lightbulb, Rocket } from 'lucide-react';
import { useAppSelector } from '../../hooks/useAppSelector';

/**
 * Section À Propos
 * Présente la mission et les valeurs du blog
 */
const AboutSection: React.FC = () => {
  const { isDark } = useAppSelector(state => state.ui);

  const values = [
    {
      icon: Target,
      title: 'Mission Claire',
      description: 'Partager des connaissances de qualité pour inspirer et éduquer notre communauté.',
      color: 'from-blue-500 to-indigo-600',
      bgColor: isDark ? 'bg-blue-900/20' : 'bg-blue-50',
    },
    {
      icon: Users,
      title: 'Communauté',
      description: 'Créer un espace d\'échange bienveillant où chacun peut apprendre et grandir.',
      color: 'from-emerald-500 to-teal-600',
      bgColor: isDark ? 'bg-emerald-900/20' : 'bg-emerald-50',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Explorer les dernières tendances et technologies pour rester à la pointe.',
      color: 'from-yellow-500 to-orange-600',
      bgColor: isDark ? 'bg-yellow-900/20' : 'bg-yellow-50',
    },
    {
      icon: Rocket,
      title: 'Excellence',
      description: 'Viser l\'excellence dans chaque article publié et chaque interaction.',
      color: 'from-purple-500 to-pink-600',
      bgColor: isDark ? 'bg-purple-900/20' : 'bg-purple-50',
    },
  ];

  return (
    <section className={`py-20 relative overflow-hidden ${
      isDark ? 'bg-slate-800' : 'bg-gray-50'
    }`}>
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-10 left-10 w-40 h-40 rounded-full blur-3xl opacity-10 ${
          isDark ? 'bg-violet-500' : 'bg-violet-300'
        }`} />
        <div className={`absolute bottom-10 right-10 w-32 h-32 rounded-full blur-2xl opacity-15 ${
          isDark ? 'bg-emerald-500' : 'bg-emerald-300'
        }`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-600 mb-6">
            <Target className="w-8 h-8 text-white" />
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            À Propos de{' '}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Notre Blog
            </span>
          </h2>
          
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Nous sommes passionnés par le partage de connaissances et la création d'une communauté 
            d'apprentissage dynamique. Notre mission est de vous accompagner dans votre parcours 
            de découverte et de croissance personnelle.
          </p>
        </div>

        {/* Grille des valeurs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  value.bgColor
                } ${isDark ? 'border border-slate-700' : 'border border-gray-200'}`}
              >
                {/* Icône avec gradient */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${value.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>

                <h3 className={`text-xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {value.title}
                </h3>

                <p className={`leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {value.description}
                </p>

                {/* Effet de survol */}
                <div className={`absolute in  set-0 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${value.color} opacity-5`} />
              </div>
            );
          })}
        </div>

        {/* Section histoire */}
        <div className={`relative p-12 rounded-3xl ${
          isDark 
            ? 'bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700' 
            : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
        } shadow-2xl`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className={`text-3xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Notre Histoire
              </h3>
              
              <p className={`text-lg leading-relaxed mb-6 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Lancé en 2020, notre blog est né de la passion de partager des connaissances 
                et de créer des connexions authentiques. Nous avons commencé avec une simple 
                idée : rendre l'apprentissage accessible et engageant pour tous.
              </p>
              
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Aujourd'hui, nous sommes fiers d'avoir construit une communauté de plus de 
                50 000 lecteurs actifs qui partagent notre vision d'un monde où la connaissance 
                est libre et accessible.
              </p>
            </div>

            <div className="relative">
              {/* Placeholder pour une image ou illustration */}
              <div className={`aspect-square rounded-2xl ${
                isDark 
                  ? 'bg-gradient-to-br from-violet-900/30 to-purple-900/30' 
                  : 'bg-gradient-to-br from-violet-100 to-purple-200'
              } flex items-center justify-center`}>
                <div className={`text-center ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <Rocket className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">Notre Parcours</p>
                </div>
              </div>

              {/* Éléments décoratifs */}
              <div className={`absolute -top-4 -right-4 w-24 h-24 rounded-full ${
                isDark ? 'bg-violet-500/20' : 'bg-violet-300/30'
              } blur-xl`} />
              <div className={`absolute -bottom-4 -left-4 w-32 h-32 rounded-full ${
                isDark ? 'bg-emerald-500/20' : 'bg-emerald-300/30'
              } blur-xl`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
