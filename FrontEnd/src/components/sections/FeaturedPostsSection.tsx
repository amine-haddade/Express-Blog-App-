import React, { useEffect } from 'react';
import { Clock, User, ChevronRight, TrendingUp } from 'lucide-react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { setCurrentPage } from '../../store/slices/uiSlice';
import { GetPosts, selectAllPosts } from '../../store/slices/blogSlice';

/**
 * Section des articles en vedette
 * Affiche les articles les plus populaires avec un design créatif
 */
const FeaturedPostsSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectAllPosts);
  const { isDark } = useAppSelector(state => state.ui);

  // Charger les posts au montage du composant
  useEffect(() => {
    dispatch(GetPosts());
  }, [dispatch]);

  // Sélectionne les 3 premiers articles comme articles vedettes
  const featuredPosts = posts.slice(0, 3);

  /**
   * Gère la navigation vers la page blog
   */
  const handleViewAllPosts = () => {
    dispatch(setCurrentPage('blog'));
  };

  return (
    <section className={`py-20 ${
      isDark ? 'bg-slate-800/50' : 'bg-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
            <TrendingUp className="w-4 h-4 text-emerald-500" />
            <span className={`text-sm font-medium ${
              isDark ? 'text-emerald-300' : 'text-emerald-700'
            }`}>
              Tendances • Articles Populaires
            </span>
          </div>

          <h2 className={`text-4xl lg:text-5xl font-black ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Articles{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Vedettes
            </span>
          </h2>
          
          <p className={`text-xl max-w-2xl mx-auto ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Découvrez nos contenus les plus appréciés par la communauté, 
            sélectionnés pour leur qualité et leur impact.
          </p>
        </div>

        {/* Grille d'articles avec layout créatif */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredPosts.map((post, index) => (
            <div
              key={post.id}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-105 cursor-pointer ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              } ${
                isDark 
                  ? 'bg-slate-800 shadow-xl shadow-black/25' 
                  : 'bg-white shadow-xl shadow-slate-200/50'
              }`}
              style={{
                transform: `rotate(${index % 2 === 0 ? '1deg' : '-1deg'})`,
              }}
            >
              {/* Overlay de couleur dynamique */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
                index % 3 === 0 
                  ? 'bg-gradient-to-br from-violet-500 to-purple-600'
                  : index % 3 === 1
                  ? 'bg-gradient-to-br from-emerald-500 to-teal-600'
                  : 'bg-gradient-to-br from-orange-500 to-red-500'
              }`} />

              {/* Image avec effet de zoom */}
              <div className={`aspect-w-16 ${index === 0 ? 'aspect-h-12' : 'aspect-h-10'}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    index === 0 ? 'h-64' : 'h-48'
                  }`}
                />
                
                {/* Badge de position */}
                <div className="absolute top-4 left-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                    index === 0 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' :
                    index === 1 ? 'bg-gradient-to-r from-gray-400 to-gray-600' :
                    'bg-gradient-to-r from-orange-400 to-red-500'
                  }`}>
                    #{index + 1} Populaire
                  </div>
                </div>
              </div>
              
              {/* Contenu de la carte */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    index % 3 === 0
                      ? isDark ? 'bg-violet-900/30 text-violet-300' : 'bg-violet-100 text-violet-700'
                      : index % 3 === 1
                      ? isDark ? 'bg-emerald-900/30 text-emerald-300' : 'bg-emerald-100 text-emerald-700'
                      : isDark ? 'bg-orange-900/30 text-orange-300' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {post.category}
                  </span>
                  <div className={`flex items-center space-x-1 text-sm ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime} min</span>
                  </div>
                </div>
                
                <h3 className={`font-bold leading-tight transition-colors group-hover:text-emerald-500 ${
                  index === 0 ? 'text-xl lg:text-2xl' : 'text-lg'
                } ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {post.title}
                </h3>
                
                <p className={`text-sm leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {index === 0 ? post.excerpt : `${post.excerpt.slice(0, 100)}...`}
                </p>
                
                <div className={`flex items-center justify-between pt-2 text-sm ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <span>{post.date}</span>
                </div>
              </div>

              {/* Effet de bordure au survol */}
              <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-emerald-500/50 transition-colors duration-300`} />
            </div>
          ))}
        </div>

        {/* CTA vers tous les articles */}
        <div className="text-center">
          <button
            onClick={handleViewAllPosts}
            className={`group inline-flex items-center space-x-2 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 ${
              isDark
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25'
                : 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25'
            }`}
          >
            <span>Voir Tous les Articles</span>
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPostsSection;