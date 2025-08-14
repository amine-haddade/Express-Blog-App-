import React from 'react';
import { Users, BookOpen, Heart, Award, TrendingUp, Globe } from 'lucide-react';
import { useAppSelector } from '../../hooks/useAppSelector';

/**
 * Section des statistiques
 * Affiche les métriques importantes du blog avec des animations
 */
const StatsSection: React.FC = () => {
  const { isDark } = useAppSelector(state => state.ui);

  /**
   * Données des statistiques avec icônes et couleurs
   */
  const stats = [
    {
      icon: Users,
      value: '50K+',
      label: 'Lecteurs Actifs',
      description: 'Communauté engagée',
      color: 'from-blue-500 to-indigo-600',
      bgColor: isDark ? 'bg-blue-900/20' : 'bg-blue-50',
      textColor: isDark ? 'text-blue-300' : 'text-blue-700',
    },
    {
      icon: BookOpen,
      value: '500+',
      label: 'Articles Publiés',
      description: 'Contenu de qualité',
      color: 'from-emerald-500 to-teal-600',
      bgColor: isDark ? 'bg-emerald-900/20' : 'bg-emerald-50',
      textColor: isDark ? 'text-emerald-300' : 'text-emerald-700',
    },
    {
      icon: Heart,
      value: '25K+',
      label: 'Likes Reçus',
      description: 'Appréciation communauté',
      color: 'from-pink-500 to-rose-600',
      bgColor: isDark ? 'bg-pink-900/20' : 'bg-pink-50',
      textColor: isDark ? 'text-pink-300' : 'text-pink-700',
    },
    {
      icon: Award,
      value: '15+',
      label: 'Prix Remportés',
      description: 'Excellence reconnue',
      color: 'from-yellow-500 to-orange-600',
      bgColor: isDark ? 'bg-yellow-900/20' : 'bg-yellow-50',
      textColor: isDark ? 'text-yellow-300' : 'text-yellow-700',
    },
    {
      icon: TrendingUp,
      value: '200%',
      label: 'Croissance Annuelle',
      description: 'Expansion continue',
      color: 'from-violet-500 to-purple-600',
      bgColor: isDark ? 'bg-violet-900/20' : 'bg-violet-50',
      textColor: isDark ? 'text-violet-300' : 'text-violet-700',
    },
    {
      icon: Globe,
      value: '45+',
      label: 'Pays Représentés',
      description: 'Portée internationale',
      color: 'from-cyan-500 to-blue-600',
      bgColor: isDark ? 'bg-cyan-900/20' : 'bg-cyan-50',
      textColor: isDark ? 'text-cyan-300' : 'text-cyan-700',
    },
  ];

  return (
    <section className={`py-20 ${
      isDark ? 'bg-slate-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="text-center space-y-6 mb-16">
          <h2 className={`text-4xl lg:text-5xl font-black ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Notre{' '}
            <span className="bg-gradient-to-r from-violet-500 to-orange-500 bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          
          <p className={`text-xl max-w-2xl mx-auto ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Des chiffres qui témoignent de notre engagement envers l'excellence 
            et l'innovation dans le monde du contenu digital.
          </p>
        </div>

        {/* Grille des statistiques */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:scale-105 cursor-pointer ${
                  isDark 
                    ? 'bg-slate-800 shadow-xl shadow-black/25' 
                    : 'bg-white shadow-xl shadow-slate-200/50'
                } ${stat.bgColor}`}
                style={{
                  transform: `rotate(${Math.sin(index) * 2}deg)`,
                }}
              >
                {/* Effet de brillance au survol */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r ${stat.color} opacity-10`} />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Contenu de la carte */}
                <div className="relative z-10 space-y-4">
                  {/* Icône avec gradient */}
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${stat.color}`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Valeur principale */}
                  <div className={`text-4xl font-black ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {stat.value}
                  </div>

                  {/* Label et description */}
                  <div className="space-y-1">
                    <h3 className={`text-lg font-bold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {stat.label}
                    </h3>
                    <p className={`text-sm ${stat.textColor}`}>
                      {stat.description}
                    </p>
                  </div>
                </div>

                {/* Forme décorative */}
                <div className={`absolute -bottom-4 -right-4 w-16 h-16 rounded-full opacity-20 ${
                  isDark ? 'bg-white' : 'bg-slate-900'
                }`} />
              </div>
            );
          })}
        </div>

        {/* Section de confiance */}
        <div className="mt-20 text-center">
          <div className={`inline-flex items-center space-x-4 px-8 py-4 rounded-2xl ${
            isDark 
              ? 'bg-slate-800 border border-slate-700' 
              : 'bg-slate-50 border border-slate-200'
          }`}>
            <div className="flex -space-x-2">
              {/* Avatars des utilisateurs */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full border-2 ${
                    isDark ? 'border-slate-800' : 'border-white'
                  } bg-gradient-to-r from-violet-500 to-orange-500 flex items-center justify-center text-white font-bold text-sm`}
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className={`text-sm font-bold ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Rejoint par 50,000+ créateurs
              </div>
              <div className={`text-xs ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Faites partie de notre communauté grandissante
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;