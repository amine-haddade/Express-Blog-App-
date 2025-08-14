import React from 'react';
import { Star, MessageCircle, BookOpen, Award, Twitter, Linkedin, Github } from 'lucide-react';
import { useAppSelector } from '../../hooks/useAppSelector';

/**
 * Section des Auteurs
 * Présente les auteurs les plus populaires du blog
 */
const AuthorsSection: React.FC = () => {
  const { isDark } = useAppSelector(state => state.ui);

  const authors = [
    {
      id: 1,
      name: 'Sarah Martinez',
      role: 'Expert en Développement Web',
      avatar: '👩‍💻',
      bio: 'Passionnée par React et les technologies modernes, Sarah partage ses connaissances depuis 5 ans.',
      stats: {
        articles: 45,
        likes: 12500,
        comments: 2800,
      },
      specialties: ['React', 'TypeScript', 'Node.js'],
      social: {
        twitter: '@sarahdev',
        linkedin: 'sarah-martinez',
        github: 'sarah-codes',
      },
      gradient: 'from-blue-500 to-indigo-600',
      bgColor: isDark ? 'bg-blue-900/20' : 'bg-blue-50',
    },
    {
      id: 2,
      name: 'Alex Chen',
      role: 'Designer UI/UX',
      avatar: '🎨',
      bio: 'Créateur d\'expériences utilisateur exceptionnelles, Alex transforme les idées en designs magnifiques.',
      stats: {
        articles: 38,
        likes: 15200,
        comments: 3100,
      },
      specialties: ['Figma', 'Design System', 'UX Research'],
      social: {
        twitter: '@alexdesigns',
        linkedin: 'alex-chen-ux',
        github: 'alex-ui',
      },
      gradient: 'from-pink-500 to-rose-600',
      bgColor: isDark ? 'bg-pink-900/20' : 'bg-pink-50',
    },
    {
      id: 3,
      name: 'Marcus Johnson',
      role: 'Entrepreneur & Business Coach',
      avatar: '💼',
      bio: 'Fondateur de 3 startups réussies, Marcus guide les entrepreneurs vers le succès.',
      stats: {
        articles: 52,
        likes: 18900,
        comments: 4200,
      },
      specialties: ['Startup', 'Marketing', 'Leadership'],
      social: {
        twitter: '@marcusbiz',
        linkedin: 'marcus-johnson-ceo',
        github: 'marcus-tech',
      },
      gradient: 'from-emerald-500 to-teal-600',
      bgColor: isDark ? 'bg-emerald-900/20' : 'bg-emerald-50',
    },
    {
      id: 4,
      name: 'Emma Wilson',
      role: 'Spécialiste Productivité',
      avatar: '⚡',
      bio: 'Coach en productivité, Emma aide les professionnels à optimiser leur temps et leur énergie.',
      stats: {
        articles: 41,
        likes: 11800,
        comments: 2600,
      },
      specialties: ['GTD', 'Time Management', 'Wellness'],
      social: {
        twitter: '@emmaproductivity',
        linkedin: 'emma-wilson-coach',
        github: 'emma-tools',
      },
      gradient: 'from-purple-500 to-violet-600',
      bgColor: isDark ? 'bg-purple-900/20' : 'bg-purple-50',
    },
  ];

  return (
    <section className={`py-20 relative overflow-hidden ${
      isDark ? 'bg-slate-800' : 'bg-gray-50'
    }`}>
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-16 left-16 w-56 h-56 rounded-full blur-3xl opacity-10 ${
          isDark ? 'bg-blue-500' : 'bg-blue-300'
        }`} />
        <div className={`absolute bottom-16 right-16 w-40 h-40 rounded-full blur-2xl opacity-15 ${
          isDark ? 'bg-pink-500' : 'bg-pink-300'
        }`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 mb-6">
            <Award className="w-8 h-8 text-white" />
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Nos{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Auteurs Experts
            </span>
          </h2>
          
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Découvrez les esprits brillants derrière nos articles. Chaque auteur apporte 
            son expertise unique pour enrichir votre expérience d'apprentissage.
          </p>
        </div>

        {/* Grille des auteurs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {authors.map((author) => (
            <div
              key={author.id}
              className={`group relative p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                author.bgColor
              } ${isDark ? 'border border-slate-700' : 'border border-gray-200'} backdrop-blur-sm`}
            >
              {/* Avatar et badge */}
              <div className="relative mb-6">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${author.gradient} flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {author.avatar}
                </div>
                
                {/* Badge expert */}
                <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r ${author.gradient} flex items-center justify-center`}>
                  <Star className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Informations auteur */}
              <div className="text-center mb-6">
                <h3 className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {author.name}
                </h3>
                
                <p className={`text-sm font-medium mb-3 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {author.role}
                </p>
                
                <p className={`text-sm leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {author.bio}
                </p>
              </div>

              {/* Statistiques */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${
                    isDark ? 'bg-slate-700' : 'bg-white'
                  } mx-auto mb-2`}>
                    <BookOpen className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className={`text-lg font-bold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {author.stats.articles}
                  </div>
                  <div className={`text-xs ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Articles
                  </div>
                </div>
                
                <div className="text-center">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${
                    isDark ? 'bg-slate-700' : 'bg-white'
                  } mx-auto mb-2`}>
                    <Star className="w-4 h-4 text-yellow-500" />
                  </div>
                  <div className={`text-lg font-bold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {(author.stats.likes / 1000).toFixed(1)}k
                  </div>
                  <div className={`text-xs ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Likes
                  </div>
                </div>
                
                <div className="text-center">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${
                    isDark ? 'bg-slate-700' : 'bg-white'
                  } mx-auto mb-2`}>
                    <MessageCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className={`text-lg font-bold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {(author.stats.comments / 1000).toFixed(1)}k
                  </div>
                  <div className={`text-xs ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Commentaires
                  </div>
                </div>
              </div>

              {/* Spécialités */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 justify-center">
                  {author.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDark 
                          ? 'bg-slate-700 text-gray-300' 
                          : 'bg-white text-gray-600'
                      } shadow-sm`}
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="flex justify-center space-x-3">
                <button className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                  isDark 
                    ? 'bg-slate-700 hover:bg-blue-600 text-gray-400 hover:text-white' 
                    : 'bg-white hover:bg-blue-500 text-gray-600 hover:text-white'
                } shadow-sm`}>
                  <Twitter className="w-4 h-4" />
                </button>
                
                <button className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                  isDark 
                    ? 'bg-slate-700 hover:bg-blue-700 text-gray-400 hover:text-white' 
                    : 'bg-white hover:bg-blue-600 text-gray-600 hover:text-white'
                } shadow-sm`}>
                  <Linkedin className="w-4 h-4" />
                </button>
                
                <button className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                  isDark 
                    ? 'bg-slate-700 hover:bg-gray-800 text-gray-400 hover:text-white' 
                    : 'bg-white hover:bg-gray-800 text-gray-600 hover:text-white'
                } shadow-sm`}>
                  <Github className="w-4 h-4" />
                </button>
              </div>

              {/* Effet de survol */}
              {/* <div className={`absolute -z-10 inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${author.gradient} opacity-5`} /> */}
            </div>
          ))}
        </div>

        {/* Call-to-action */}
        <div className="text-center mt-16">
          <button className={`group inline-flex items-center px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
            isDark 
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white' 
              : 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white'
          } shadow-lg hover:shadow-2xl`}>
            Rejoindre Notre Équipe d'Auteurs
            <Award className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AuthorsSection;
