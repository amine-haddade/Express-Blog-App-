import React from 'react';
import { Zap, Shield, Users, Search, Bell, Bookmark, MessageSquare, TrendingUp } from 'lucide-react';
import { useAppSelector } from '../../hooks/useAppSelector';

/**
 * Section des Fonctionnalités
 * Présente les principales fonctionnalités de la plateforme blog
 */
const FeaturesSection: React.FC = () => {
  const { isDark } = useAppSelector(state => state.ui);

  const features = [
    {
      icon: Zap,
      title: 'Performance Optimale',
      description: 'Chargement ultra-rapide et expérience utilisateur fluide grâce à notre architecture moderne.',
      color: 'from-yellow-500 to-orange-600',
      bgColor: isDark ? 'bg-yellow-900/20' : 'bg-yellow-50',
    },
    {
      icon: Search,
      title: 'Recherche Avancée',
      description: 'Trouvez instantanément le contenu qui vous intéresse avec notre moteur de recherche intelligent.',
      color: 'from-blue-500 to-indigo-600',
      bgColor: isDark ? 'bg-blue-900/20' : 'bg-blue-50',
    },
    {
      icon: Users,
      title: 'Communauté Active',
      description: 'Rejoignez une communauté passionnée de 50k+ lecteurs et partagez vos idées.',
      color: 'from-emerald-500 to-teal-600',
      bgColor: isDark ? 'bg-emerald-900/20' : 'bg-emerald-50',
    },
    {
      icon: Bell,
      title: 'Notifications Personnalisées',
      description: 'Restez informé des nouveaux articles de vos auteurs préférés et sujets d\'intérêt.',
      color: 'from-purple-500 to-violet-600',
      bgColor: isDark ? 'bg-purple-900/20' : 'bg-purple-50',
    },
    {
      icon: Bookmark,
      title: 'Sauvegarde & Organisation',
      description: 'Organisez vos articles favoris dans des collections personnalisées pour un accès facile.',
      color: 'from-pink-500 to-rose-600',
      bgColor: isDark ? 'bg-pink-900/20' : 'bg-pink-50',
    },
    {
      icon: MessageSquare,
      title: 'Discussions Enrichissantes',
      description: 'Participez à des débats constructifs et échangez avec d\'autres passionnés.',
      color: 'from-cyan-500 to-blue-600',
      bgColor: isDark ? 'bg-cyan-900/20' : 'bg-cyan-50',
    },
    {
      icon: Shield,
      title: 'Sécurité & Confidentialité',
      description: 'Vos données sont protégées avec les plus hauts standards de sécurité et de confidentialité.',
      color: 'from-red-500 to-pink-600',
      bgColor: isDark ? 'bg-red-900/20' : 'bg-red-50',
    },
    {
      icon: TrendingUp,
      title: 'Contenu Tendance',
      description: 'Découvrez les sujets qui font le buzz et restez à la pointe des dernières tendances.',
      color: 'from-indigo-500 to-purple-600',
      bgColor: isDark ? 'bg-indigo-900/20' : 'bg-indigo-50',
    },
  ];

  return (
    <section className={`py-20 relative overflow-hidden ${
      isDark ? 'bg-slate-900' : 'bg-white'
    }`}>
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-32 left-32 w-72 h-72 rounded-full blur-3xl opacity-10 ${
          isDark ? 'bg-blue-500' : 'bg-blue-300'
        }`} />
        <div className={`absolute bottom-32 right-32 w-56 h-56 rounded-full blur-2xl opacity-15 ${
          isDark ? 'bg-purple-500' : 'bg-purple-300'
        }`} />
        
        {/* Grille de points décorative */}
        <div className={`absolute inset-0 opacity-5 ${
          isDark ? 'bg-white' : 'bg-gray-900'
        }`} style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
            <Zap className="w-8 h-8 text-white" />
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Fonctionnalités{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Avancées
            </span>
          </h2>
          
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Découvrez toutes les fonctionnalités qui font de notre plateforme 
            l'endroit idéal pour lire, apprendre et partager vos connaissances.
          </p>
        </div>

        {/* Grille des fonctionnalités */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  feature.bgColor
                } ${isDark ? 'border border-slate-700' : 'border border-gray-200'} backdrop-blur-sm`}
              >
                {/* Icône avec gradient */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>

                <h3 className={`text-xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>

                <p className={`leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>

                {/* Effet de survol */}
                {/* <div className={`absolute  -z-10 inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${feature.color} opacity-5`} /> */}
                
                {/* Indicateur de survol */}
                <div className={`absolute top-4 right-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${feature.color}`} />
              </div>
            );
          })}
        </div>

        {/* Section mise en avant */}
        <div className={`mt-20 relative p-12 rounded-3xl ${
          isDark 
            ? 'bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700' 
            : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
        } shadow-2xl`}>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-600 mb-6">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            
            <h3 className={`text-3xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Plateforme en Constante Évolution
            </h3>
            
            <p className={`text-lg leading-relaxed max-w-2xl mx-auto mb-8 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Nous ajoutons régulièrement de nouvelles fonctionnalités basées sur vos retours. 
              Notre équipe travaille sans relâche pour améliorer votre expérience de lecture et d'apprentissage.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <div className={`px-6 py-3 rounded-xl ${
                isDark ? 'bg-slate-700' : 'bg-white'
              } shadow-lg`}>
                <div className={`text-2xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  99.9%
                </div>
                <div className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Uptime
                </div>
              </div>
              
              <div className={`px-6 py-3 rounded-xl ${
                isDark ? 'bg-slate-700' : 'bg-white'
              } shadow-lg`}>
                <div className={`text-2xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  &lt;2s
                </div>
                <div className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Temps de chargement
                </div>
              </div>
              
              <div className={`px-6 py-3 rounded-xl ${
                isDark ? 'bg-slate-700' : 'bg-white'
              } shadow-lg`}>
                <div className={`text-2xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  24/7
                </div>
                <div className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Support
                </div>
              </div>
            </div>
          </div>

          {/* Éléments décoratifs */}
          <div className={`absolute -top-4 -left-4 w-32 h-32 rounded-full ${
            isDark ? 'bg-violet-500/10' : 'bg-violet-300/20'
          } blur-2xl`} />
          <div className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full ${
            isDark ? 'bg-purple-500/10' : 'bg-purple-300/20'
          } blur-xl`} />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
