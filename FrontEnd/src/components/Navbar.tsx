import React from 'react';
import { Home, BookOpen, Settings, Moon, Sun, FileText, Feather, BarChart3 } from 'lucide-react';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { setCurrentPage, toggleTheme } from '../store/slices/uiSlice';

/**
 * Composant de navigation principal
 * Gère la navigation entre les pages et le changement de thème
 */
const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentPage, isDark } = useAppSelector(state => state.ui);

  /**
   * Gère la navigation vers une page
   */
  const handleNavigation = (page: 'landing' | 'blog' | 'admin' | 'insights' ) => {
    dispatch(setCurrentPage(page));
  };

  /**
   * Gère le changement de thème
   */
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isDark 
        ? 'bg-slate-900/80 backdrop-blur-lg border-slate-700/50' 
        : 'bg-white/80 backdrop-blur-lg border-slate-200/50'
    } border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}

          <button   onClick={() => handleNavigation('landing')}   className=''>
          <div className="flex items-center space-x-3">
            <div className={`relative cursor-pointer w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-400 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              <FileText className="w-5 h-5 text-white relative z-10" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                <Feather className="w-2 h-2 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-black tracking-tight leading-none ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                BlogHub
              </span>
              <span className={`text-xs font-medium tracking-wide ${
                isDark ? 'text-emerald-400' : 'text-emerald-600'
              }`}>
                PROFESSIONAL
              </span>
            </div>
          </div>
          </button>

          {/* Navigation */}
          <div className="flex items-center space-x-8">
            <button
              onClick={() => handleNavigation('landing')}
              className={`px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 ${
                currentPage === 'landing'
                  ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/25'
                  : isDark
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:block font-medium">Accueil</span>
            </button>

            <button
              onClick={() => handleNavigation('blog')}
              className={`px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 ${
                currentPage === 'blog'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25'
                  : isDark
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:block font-medium">Blog</span>
            </button>

            <button
              onClick={() => handleNavigation('admin')}
              className={`px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 ${
                currentPage === 'admin'
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25'
                  : isDark
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:block font-medium">Admin</span>
            </button>

            <button
              onClick={() => handleNavigation('insights')}
              className={`px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 ${
                currentPage === 'insights'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg shadow-blue-500/25'
                  : isDark
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:block font-medium">Insights</span>
            </button>

            <button
              onClick={handleToggleTheme}
              className={`ml-2 p-2 rounded-full transition-all duration-300 ${
                isDark
                  ? 'text-yellow-400 hover:bg-slate-800 hover:text-yellow-300'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;