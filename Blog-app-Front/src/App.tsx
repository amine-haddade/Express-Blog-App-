import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import LandingPage from './pages/LandingPage';
import BlogPage from './pages/BlogPage';
import AdminDashboard from './pages/AdminDashboard';
import Navbar from './components/Navbar';
import { useAppSelector } from './hooks/useAppSelector';

/**
 * Composant principal de l'application
 * Gère la navigation entre les pages
 */
const AppContent: React.FC = () => {
  const { currentPage, isDark } = useAppSelector(state => state.ui);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark ? 'bg-slate-900' : 'bg-white'
    }`}>
      {/* Barre de navigation */}
      <Navbar />
      
      {/* Contenu principal */}
      <main>
        {currentPage === 'landing' && (
          <LandingPage />
        )}
        {currentPage === 'blog' && (
          <BlogPage />
        )}
        {currentPage === 'admin' && (
          <AdminDashboard />
        )}
       
      </main>
    </div>
  );
};

/**
 * Composant racine avec le Provider Redux
 */
function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;