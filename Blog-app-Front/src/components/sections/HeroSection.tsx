import React from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import {  useAppSelector } from '../../hooks/useAppSelector';
import { setCurrentPage } from '../../store/slices/uiSlice';

/**
 * Section Hero principale du landing page
 * Contient le message principal et les CTA
 */
const HeroSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isDark } = useAppSelector(state => state.ui);

  /**
   * Gère la navigation vers la page blog
   */
  const handleExploreBlog = () => {
    dispatch(setCurrentPage('blog'));
  };

  return (
    <section className={`relative overflow-hidden min-h-screen flex items-center ${
      isDark ? 'bg-slate-900' : 'bg-white'
    }`}>
      {/* Formes géométriques d'arrière-plan */}
      <div className="absolute inset-0 z-0">
        {/* Forme principale en diagonale */}
        <div className={`absolute top-0 right-0 w-2/3 h-full transform skew-x-12 ${
          isDark 
            ? 'bg-gradient-to-br from-violet-900/20 to-purple-900/30' 
            : 'bg-gradient-to-br from-violet-100 to-purple-200'
        }`} />
        
        {/* Cercles flottants animés */}
        <div className={`absolute top-20 left-20 w-32 h-32 rounded-full blur-2xl opacity-30 animate-pulse ${
          isDark ? 'bg-orange-500' : 'bg-orange-300'
        }`} />
        <div className={`absolute bottom-32 right-32 w-48 h-48 rounded-full blur-3xl opacity-20 animate-bounce ${
          isDark ? 'bg-emerald-500' : 'bg-emerald-300'
        }`} style={{ animationDuration: '3s' }} />
        
        {/* Formes organiques */}
        <div className={`absolute top-1/2 left-1/4 w-24 h-24 transform -translate-y-1/2 rotate-45 opacity-10 ${
          isDark ? 'bg-violet-500' : 'bg-violet-400'
        }`} style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenu textuel */}
          <div className="space-y-8">
            {/* Badge animé */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-orange-500/10 border border-violet-500/20">
              <Sparkles className="w-4 h-4 text-violet-500 animate-spin" style={{ animationDuration: '3s' }} />
              <span className={`text-sm font-medium ${
                isDark ? 'text-violet-300' : 'text-violet-700'
              }`}>
                Nouveau • Design Révolutionnaire
              </span>
            </div>

            {/* Titre principal avec animation */}
            <h1 className={`text-5xl lg:text-7xl font-black leading-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Créer{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-orange-500 bg-clip-text text-transparent animate-pulse">
                  l'Art
                </span>
                {/* Soulignement animé */}
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-orange-500 transform scale-x-0 animate-pulse" 
                     style={{ animation: 'scaleX 2s ease-in-out infinite alternate' }} />
              </span>{' '}
              du Contenu
            </h1>
            
            {/* Sous-titre */}
            <p className={`text-xl lg:text-2xl leading-relaxed max-w-2xl ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Découvrez des histoires qui <strong>inspirent</strong>, des idées qui <strong>transforment</strong>, 
              et des perspectives qui ouvrent de nouveaux horizons créatifs dans un univers digital unique.
            </p>

            {/* Statistiques */}
            <div className="flex flex-wrap gap-8 py-4">
              <div className="text-center">
                <div className={`text-3xl font-black ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>500+</div>
                <div className={`text-sm ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>Articles Publiés</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-black ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>50K+</div>
                <div className={`text-sm ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>Lecteurs Actifs</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-black ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>25+</div>
                <div className={`text-sm ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>Catégories</div>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleExploreBlog}
                className="group px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/25 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Explorer les Articles</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button className={`group px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 border-2 hover:scale-105 flex items-center justify-center space-x-2 ${
                isDark
                  ? 'border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400'
              }`}>
                <Zap className="w-5 h-5" />
                <span>Découvrir Plus</span>
              </button>
            </div>
          </div>

          {/* Élément visuel interactif */}
          <div className="relative">
            {/* Carte flottante principale */}
            <div className={`group relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 hover:scale-105 hover:rotate-1 ${
              isDark ? 'bg-slate-800 shadow-black/25' : 'bg-white'
            }`}>
              {/* Image avec effet parallax */}
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Design moderne"
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Contenu de la carte */}
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-4 text-sm">
                  <span className={`px-3 py-1 rounded-full font-medium ${
                    isDark 
                      ? 'bg-violet-900/30 text-violet-300' 
                      : 'bg-violet-100 text-violet-700'
                  }`}>
                    Article Vedette
                  </span>
                  <div className={`flex items-center space-x-1 ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    <span>5 min de lecture</span>
                  </div>
                </div>
                
                <h3 className={`text-xl font-bold leading-tight ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  L'Art du Design Moderne
                </h3>
                
                <p className={`leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Découvrez comment créer des interfaces utilisateur qui marquent les esprits...
                </p>
              </div>

              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </div>

            {/* Éléments décoratifs flottants */}
            <div className={`absolute -top-4 -right-4 w-8 h-8 rounded-full ${
              isDark ? 'bg-orange-500' : 'bg-orange-400'
            } animate-bounce`} style={{ animationDelay: '0.5s' }} />
            <div className={`absolute -bottom-4 -left-4 w-6 h-6 rounded-full ${
              isDark ? 'bg-emerald-500' : 'bg-emerald-400'
            } animate-bounce`} style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>

      {/* Styles CSS personnalisés pour les animations */}
      <style >{`
        @keyframes scaleX {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;