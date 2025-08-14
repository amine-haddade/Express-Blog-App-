import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Sparkles } from 'lucide-react';
import {  useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector  } from '../../hooks/useAppSelector';
import { addNotification } from '../../store/slices/uiSlice';

/**
 * Section Newsletter
 * Permet aux utilisateurs de s'abonner à la newsletter
 */
const NewsletterSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isDark } = useAppSelector(state => state.ui);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Gère la soumission du formulaire d'abonnement
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;

    setIsLoading(true);
    
    // Simulation d'un appel API
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      dispatch(addNotification({
        message: 'Merci pour votre abonnement ! Vous recevrez bientôt nos dernières actualités.',
        type: 'success'
      }));
      setEmail('');
    }, 1500);
  };

  return (
    <section className={`py-20 relative overflow-hidden ${
      isDark ? 'bg-slate-900' : 'bg-white'
    }`}>
      {/* Formes d'arrière-plan */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-20 ${
          isDark ? 'bg-violet-500' : 'bg-violet-300'
        }`} />
        <div className={`absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 ${
          isDark ? 'bg-orange-500' : 'bg-orange-300'
        }`} />
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-2xl opacity-10 ${
          isDark ? 'bg-emerald-500' : 'bg-emerald-300'
        }`} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-3xl p-8 lg:p-12 ${
          isDark 
            ? 'bg-slate-800/80 backdrop-blur-lg border border-slate-700/50' 
            : 'bg-white/80 backdrop-blur-lg border border-slate-200/50 shadow-2xl'
        }`}>
          {/* En-tête */}
          <div className="text-center space-y-6 mb-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-orange-500/10 border border-violet-500/20">
              <Sparkles className="w-4 h-4 text-violet-500 animate-pulse" />
              <span className={`text-sm font-medium ${
                isDark ? 'text-violet-300' : 'text-violet-700'
              }`}>
                Newsletter Exclusive
              </span>
            </div>

            <h2 className={`text-3xl lg:text-4xl font-black ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Restez{' '}
              <span className="bg-gradient-to-r from-violet-500 to-orange-500 bg-clip-text text-transparent">
                Inspiré
              </span>
            </h2>
            
            <p className={`text-lg max-w-2xl mx-auto ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Recevez chaque semaine nos meilleurs articles, conseils exclusifs et 
              tendances directement dans votre boîte mail. Rejoignez plus de 25,000 créateurs !
            </p>
          </div>

          {/* Avantages */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: '📚',
                title: 'Contenu Exclusif',
                description: 'Articles premium réservés aux abonnés'
              },
              {
                icon: '🎯',
                title: 'Conseils Personnalisés',
                description: 'Tips adaptés à votre domaine d\'expertise'
              },
              {
                icon: '🚀',
                title: 'Accès Anticipé',
                description: 'Découvrez nos nouveautés en avant-première'
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className={`text-center p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  isDark ? 'bg-slate-700/50' : 'bg-slate-50'
                }`}
              >
                <div className="text-2xl mb-2">{benefit.icon}</div>
                <h3 className={`font-bold mb-1 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {benefit.title}
                </h3>
                <p className={`text-sm ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Formulaire d'abonnement */}
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="relative flex-1">
                  <Mail className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`} />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    className={`w-full pl-12 pr-4 py-4 rounded-2xl border transition-all duration-300 focus:ring-2 focus:ring-violet-500 focus:outline-none ${
                      isDark
                        ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400'
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                    }`}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-2xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 hover:scale-105 flex items-center justify-center space-x-2 ${
                    isLoading ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>S'abonner</span>
                    </>
                  )}
                </button>
              </div>
              
              <p className={`text-xs text-center max-w-md mx-auto ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                En vous abonnant, vous acceptez de recevoir nos emails. 
                Vous pouvez vous désabonner à tout moment.
              </p>
            </form>
          ) : (
            // Message de confirmation
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-xl font-bold ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Merci pour votre abonnement !
              </h3>
              <p className={`${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Vous recevrez bientôt notre prochaine newsletter avec du contenu exclusif.
              </p>
            </div>
          )}

          {/* Statistiques sociales */}
          <div className="mt-8 pt-8 border-t border-slate-200/20">
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="text-center">
                <div className={`font-bold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  25K+
                </div>
                <div className={`${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  Abonnés
                </div>
              </div>
              <div className="text-center">
                <div className={`font-bold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  98%
                </div>
                <div className={`${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  Satisfaction
                </div>
              </div>
              <div className="text-center">
                <div className={`font-bold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  Hebdo
                </div>
                <div className={`${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  Fréquence
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;