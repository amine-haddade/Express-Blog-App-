import React from 'react';
import { ArrowRight, Sparkles, Users, BookOpen, Star } from 'lucide-react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setCurrentPage } from '../../store/slices/uiSlice';

/**
 * Section Call-to-Action
 * Encourage l'engagement des utilisateurs avec des actions clés
 */
const CallToActionSection: React.FC = () => {
  const { isDark } = useAppSelector(state => state.ui);
  const dispatch = useAppDispatch();

  const handleStartReading = () => {
    dispatch(setCurrentPage('blog'));
  };

  const handleJoinCommunity = () => {
    // Navigation vers une page d'inscription ou modal
    console.log('Join community clicked');
  };

  const benefits = [
    {
      icon: BookOpen,
      text: 'Accès à 500+ articles de qualité',
    },
    {
      icon: Users,
      text: 'Rejoignez 50k+ lecteurs passionnés',
    },
    {
      icon: Star,
      text: 'Contenu exclusif et premium',
    },
    {
      icon: Sparkles,
      text: 'Notifications personnalisées',
    },
  ];

  return (
    <section className={`py-20 relative overflow-hidden ${
      isDark ? 'bg-slate-900' : 'bg-white'
    }`}>
      {/* Arrière-plan avec gradient et formes */}
      <div className="absolute inset-0 z-0">
        {/* Gradient principal */}
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-gradient-to-br from-violet-900/30 via-purple-900/20 to-pink-900/30' 
            : 'bg-gradient-to-br from-violet-100/50 via-purple-100/30 to-pink-100/50'
        }`} />
        
        {/* Formes géométriques animées */}
        <div className={`absolute top-20 left-20 w-64 h-64 rounded-full blur-3xl opacity-20 animate-pulse ${
          isDark ? 'bg-violet-500' : 'bg-violet-300'
        }`} style={{ animationDuration: '4s' }} />
        
        <div className={`absolute bottom-20 right-20 w-48 h-48 rounded-full blur-2xl opacity-25 animate-bounce ${
          isDark ? 'bg-pink-500' : 'bg-pink-300'
        }`} style={{ animationDuration: '3s' }} />
        
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10 ${
          isDark ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-blue-300 to-purple-300'
        }`} style={{ 
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          animation: 'spin 20s linear infinite'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge d'introduction */}
          <div className={`inline-flex items-center px-4 py-2 rounded-full mb-8 ${
            isDark 
              ? 'bg-gradient-to-r from-violet-600/20 to-purple-600/20 border border-violet-500/30' 
              : 'bg-gradient-to-r from-violet-100 to-purple-100 border border-violet-200'
          }`}>
            <Sparkles className={`w-4 h-4 mr-2 ${
              isDark ? 'text-violet-400' : 'text-violet-600'
            }`} />
            <span className={`text-sm font-medium ${
              isDark ? 'text-violet-300' : 'text-violet-700'
            }`}>
              Rejoignez notre communauté dès aujourd'hui
            </span>
          </div>

          {/* Titre principal */}
          <h2 className={`text-4xl md:text-6xl font-bold mb-8 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Prêt à{' '}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Transformer
            </span>
            <br />
            Votre Apprentissage ?
          </h2>

          {/* Sous-titre */}
          <p className={`text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-12 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Découvrez un monde de connaissances, connectez-vous avec des experts 
            et développez vos compétences avec notre communauté passionnée.
          </p>

          {/* Liste des bénéfices */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className={`flex items-center p-4 rounded-xl ${
                    isDark 
                      ? 'bg-slate-800/50 border border-slate-700' 
                      : 'bg-white/70 border border-gray-200'
                  } backdrop-blur-sm shadow-lg hover:scale-105 transition-transform duration-300`}
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 flex items-center justify-center mr-3 flex-shrink-0`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <span className={`text-sm font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {benefit.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={handleStartReading}
              className={`group inline-flex items-center px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                isDark 
                  ? 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white' 
                  : 'bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white'
              } shadow-lg hover:shadow-2xl`}
            >
              Commencer à Lire
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button
              onClick={handleJoinCommunity}
              className={`group inline-flex items-center px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                isDark 
                  ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-600' 
                  : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-300'
              } shadow-lg hover:shadow-xl`}
            >
              <Users className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Rejoindre la Communauté
            </button>
          </div>

          {/* Statistiques sociales */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                50,000+
              </div>
              <div className="text-sm">Lecteurs actifs</div>
            </div>
            
            <div className={`w-px h-12 ${isDark ? 'bg-slate-700' : 'bg-gray-300'}`} />
            
            <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                500+
              </div>
              <div className="text-sm">Articles publiés</div>
            </div>
            
            <div className={`w-px h-12 ${isDark ? 'bg-slate-700' : 'bg-gray-300'}`} />
            
            <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                4.9/5
              </div>
              <div className="text-sm">Note moyenne</div>
            </div>
            
            <div className={`w-px h-12 ${isDark ? 'bg-slate-700' : 'bg-gray-300'}`} />
            
            <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                15+
              </div>
              <div className="text-sm">Experts auteurs</div>
            </div>
          </div>

          {/* Message de confiance */}
          <div className={`mt-12 text-center ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            <p className="text-sm">
              ✨ Gratuit pour commencer • 🔒 Aucune carte de crédit requise • 📱 Disponible partout
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default CallToActionSection;
