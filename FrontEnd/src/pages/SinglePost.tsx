import React from 'react';
import { ArrowLeft, Clock, User, Calendar, Tag, Share2, Heart, Bookmark } from 'lucide-react';
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { setCurrentPage } from '../store/slices/uiSlice';
import { selectAllPosts } from '../store/slices/blogSlice';

/**
 * Page de détail d'un article
 * Affiche le contenu complet d'un post avec le même design que le site
 */
const SinglePost: React.FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectAllPosts);
  const { selectedPostId, isDark } = useAppSelector(state => state.ui);

  // Trouver le post sélectionné
  const post = posts.find(p => p.id === selectedPostId);

  // Si le post n'existe pas, rediriger vers la page blog
  if (!post) {
    dispatch(setCurrentPage('blog'));
    return null;
  }

  /**
   * Retour à la page blog
   */
  const handleBackToBlog = () => {
    dispatch(setCurrentPage('blog'));
  };

  return (
    <div className={`pt-16 min-h-screen ${
      isDark ? 'bg-slate-900' : 'bg-white'
    }`}>
      {/* Bouton retour flottant sur le hero */}

      {/* Image hero */}
      <div className="relative h-96 lg:h-[520px] overflow-hidden">
        <button
          aria-label="Retour aux articles"
          onClick={handleBackToBlog}
          className={`group absolute top-6 left-6 z-20 inline-flex items-center justify-center w-11 h-11 rounded-full ring-1 transition-all duration-300 hover:scale-105 active:scale-95 ${
            isDark
              ? 'bg-slate-900/70 ring-white/10 hover:bg-slate-800/80 text-white'
              : 'bg-white/80 ring-slate-200 hover:bg-white text-slate-900'
          } backdrop-blur-md`}
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Titre superposé */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500 text-white shadow shadow-emerald-500/30">
                {post.category}
              </span>
              <div className="flex items-center space-x-1 text-white/80 text-sm">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min de lecture</span>
              </div>
            </div>
            <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              {post.title}
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-4">
        {/* Card container qui chevauche le hero */}
        <div className={`-mt-4 sm:-mt-6 mb-10 rounded-3xl shadow-2xl overflow-hidden ${
          isDark ? 'bg-slate-900/70 ring-1 ring-white/10' : 'bg-white/90 ring-1 ring-slate-200'
        } backdrop-blur-md`}
        >
          <div className="p-6 sm:p-10">
        {/* Métadonnées de l'article */}
        <div className={`flex flex-wrap items-center justify-between gap-4 pb-6 sm:pb-8 mb-6 sm:mb-8 border-b ${
          isDark ? 'border-slate-800' : 'border-slate-200'
        }`}>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <User className={`w-5 h-5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
              <span className={`font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                {post.author}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className={`w-5 h-5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
              <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {post.date}
              </span>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg transition-colors duration-300 ${
              isDark 
                ? 'text-slate-300 hover:text-white hover:bg-slate-800' 
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}>
              <Heart className="w-5 h-5" />
              <span className="text-sm">J'aime</span>
            </button>
            <button className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg transition-colors duration-300 ${
              isDark 
                ? 'text-slate-300 hover:text-white hover:bg-slate-800' 
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}>
              <Bookmark className="w-5 h-5" />
              <span className="text-sm">Sauvegarder</span>
            </button>
            <button className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg transition-colors duration-300 ${
              isDark 
                ? 'text-slate-300 hover:text-white hover:bg-slate-800' 
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}>
              <Share2 className="w-5 h-5" />
              <span className="text-sm">Partager</span>
            </button>
          </div>
        </div>

        {/* Contenu de l'article */}
        <div className={`prose prose-lg max-w-none ${
          isDark 
            ? 'prose-invert prose-headings:text-white  text-white prose-p:text-slate-300 prose-strong:text-white prose-a:text-emerald-400' 
            : 'prose-slate prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-emerald-600'
        }`}>
          {/* Le contenu est formaté en paragraphes */}
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center space-x-2 mb-4">
            <Tag className={`w-5 h-5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
            <span className={`font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Tags
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[post.category, 'Article', 'Blog'].map((tag, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-sm transition-colors duration-300 shadow-sm ${
                  isDark 
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 ring-1 ring-white/10' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 ring-1 ring-slate-200'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
          </div>
        </div>
      </article>

      {/* Section auteur */}
      <section className={`mt-16 py-12 ${
        isDark ? 'bg-slate-800/50' : 'bg-slate-50'
      }`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`p-8 rounded-2xl ${
            isDark ? 'bg-slate-800' : 'bg-white'
          } shadow-lg`}>
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  À propos de {post.author}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Passionné(e) par l'écriture et expert(e) dans le domaine de {post.category.toLowerCase()}, 
                  {post.author} partage régulièrement ses connaissances et expériences à travers des articles 
                  détaillés et inspirants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePost;
