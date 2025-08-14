import React, { useEffect } from 'react';
import { Clock, User, Search, Filter } from 'lucide-react';
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { setSelectedCategory, setSearchQuery, GetPosts, selectAllPosts, selectSelectedCategory, selectSearchQuery, selectFilteredPosts } from '../store/slices/blogSlice';

/**
 * Page du blog
 * Affiche tous les articles avec filtres et recherche
 */
const BlogPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectAllPosts);
  const selectedCategory = useAppSelector(selectSelectedCategory);
  const searchQuery = useAppSelector(selectSearchQuery);
  const filteredPosts = useAppSelector(selectFilteredPosts);
  const { isDark } = useAppSelector(state => state.ui);

  // Charger les posts au montage du composant
  useEffect(() => {
    dispatch(GetPosts());
  }, [dispatch]);

  // Génère la liste des catégories disponibles
  const categories = ['Tous', ...Array.from(new Set(posts.map(post => post.category)))];

  // Les posts filtrés sont maintenant gérés par le sélecteur Redux

  /**
   * Gère le changement de catégorie sélectionnée
   */
  const handleCategoryChange = (category: string) => {
    dispatch(setSelectedCategory(category));
  };

  /**
   * Gère le changement de la requête de recherche
   */
  const handleSearchChange = (query: string) => {
    dispatch(setSearchQuery(query));
  };

  return (
    <div className={`pt-16 min-h-screen ${
      isDark ? 'bg-slate-900' : 'bg-white'
    }`}>
      {/* Header */}
      <section className={`py-16 ${
        isDark ? 'bg-slate-800/50' : 'bg-slate-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className={`text-4xl lg:text-6xl font-black ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Notre{' '}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className={`text-xl max-w-2xl mx-auto ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Explorez nos articles, découvrez de nouvelles idées et laissez-vous inspirer 
              par nos contenus créatifs et innovants.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`} />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className={`w-full pl-12 pr-4 py-3 rounded-2xl transition-all duration-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none ${
                  isDark
                    ? 'bg-slate-800 border border-slate-700 text-white placeholder-slate-400'
                    : 'bg-white border border-slate-300 text-slate-900 placeholder-slate-500 shadow-sm'
                }`}
              />
            </div>

            {/* Categories */}
            <div className="flex items-center space-x-1 overflow-x-auto pb-2 lg:pb-0">
              <Filter className={`w-5 h-5 mr-2 flex-shrink-0 ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`} />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25'
                      : isDark
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid - Mosaic Layout */}
      <section className="py-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-auto">
            {filteredPosts.map((post, index) => {
              // Create different sizes for mosaic effect
              const isLarge = index % 7 === 0;
              const isTall = index % 5 === 0 && index % 7 !== 0;
              const isWide = index % 6 === 0 && index % 7 !== 0;

              return (
                <article
                  key={post.id}
                  className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-105 cursor-pointer ${
                    isLarge ? 'md:col-span-2 md:row-span-2' :
                    isTall ? 'row-span-2' :
                    isWide ? 'md:col-span-2' : ''
                  } ${
                    isDark 
                      ? 'bg-slate-800 shadow-xl shadow-black/25' 
                      : 'bg-white shadow-xl shadow-slate-200/50'
                  }`}
                  style={{
                    transform: `rotate(${Math.sin(index) * 2}deg)`,
                  }}
                >
                  {/* Dynamic gradient overlay */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
                    index % 4 === 0 
                      ? 'bg-gradient-to-br from-violet-500 to-purple-600'
                      : index % 4 === 1
                      ? 'bg-gradient-to-br from-emerald-500 to-teal-600'
                      : index % 4 === 2
                      ? 'bg-gradient-to-br from-orange-500 to-red-500'
                      : 'bg-gradient-to-br from-blue-500 to-indigo-600'
                  }`} />

                  <div className={`aspect-w-16 ${isLarge || isTall ? 'aspect-h-12' : 'aspect-h-10'}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                        isLarge ? 'h-64' : isTall ? 'h-56' : 'h-48'
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 lg:p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        index % 4 === 0
                          ? isDark ? 'bg-violet-900/30 text-violet-300' : 'bg-violet-100 text-violet-700'
                          : index % 4 === 1
                          ? isDark ? 'bg-emerald-900/30 text-emerald-300' : 'bg-emerald-100 text-emerald-700'
                          : index % 4 === 2
                          ? isDark ? 'bg-orange-900/30 text-orange-300' : 'bg-orange-100 text-orange-700'
                          : isDark ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {post.category}
                      </span>
                      <div className={`flex items-center space-x-1 text-xs ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}min</span>
                      </div>
                    </div>

                    <h2 className={`font-bold leading-tight transition-colors group-hover:text-emerald-500 ${
                      isLarge ? 'text-xl lg:text-2xl' : 'text-lg'
                    } ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {post.title}
                    </h2>

                    <p className={`text-sm leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {isLarge ? post?.excerpt : `${post?.excerpt?.slice(0, 80)}...`}
                    </p>

                    <div className={`flex items-center justify-between pt-2 text-xs ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <span>{post.date}</span>
                    </div>
                  </div>

                  {/* Hover effect border */}
                  <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-emerald-500/50 transition-colors duration-300`} />
                </article>
              );
            })}
          </div>

          {/* No results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <h3 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Aucun article trouvé
              </h3>
              <p className={`text-lg ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Essayez de modifier vos critères de recherche
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;