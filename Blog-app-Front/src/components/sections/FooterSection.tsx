import React from 'react';
import { PenTool, Mail, Twitter, Linkedin, Github, Heart, ArrowUp } from 'lucide-react';
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { setCurrentPage } from '../../store/slices/uiSlice';

/**
 * Section Footer
 * Contient les liens, informations de contact et navigation
 */
const FooterSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isDark } = useAppSelector(state => state.ui);

  /**
   * Gère la navigation vers une page
   */
  const handleNavigation = (page: 'landing' | 'blog' | 'admin') => {
    dispatch(setCurrentPage(page));
  };

  /**
   * Fait défiler vers le haut de la page
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * Liens de navigation organisés par catégorie
   */
  const footerLinks = {
    navigation: [
      { label: 'Accueil', action: () => handleNavigation('landing') },
      { label: 'Blog', action: () => handleNavigation('blog') },
      { label: 'Admin', action: () => handleNavigation('admin') },
    ],
    categories: [
      { label: 'Design', action: () => {} },
      { label: 'Technologie', action: () => {} },
      { label: 'Créativité', action: () => {} },
      { label: 'Business', action: () => {} },
    ],
    company: [
      { label: 'À Propos', action: () => {} },
      { label: 'Contact', action: () => {} },
      { label: 'Carrières', action: () => {} },
      { label: 'Partenaires', action: () => {} },
    ],
    legal: [
      { label: 'Confidentialité', action: () => {} },
      { label: 'Conditions', action: () => {} },
      { label: 'Cookies', action: () => {} },
      { label: 'Mentions Légales', action: () => {} },
    ],
  };

  /**
   * Liens des réseaux sociaux
   */
  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:text-blue-400' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-600' },
    { icon: Github, label: 'GitHub', href: '#', color: 'hover:text-gray-400' },
    { icon: Mail, label: 'Email', href: 'mailto:contact@blogart.com', color: 'hover:text-emerald-500' },
  ];

  return (
    <footer className={`relative ${
      isDark ? 'bg-slate-900' : 'bg-slate-900'
    } text-white`}>
      {/* Formes décoratives */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Section principale du footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Branding et description */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-orange-500 flex items-center justify-center transform rotate-12">
                  <PenTool className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-black tracking-tight">BlogArt</span>
              </div>
              
              <p className="text-slate-300 leading-relaxed max-w-md">
                Créer l'art du contenu digital avec des histoires qui inspirent, 
                des idées qui transforment et des perspectives qui ouvrent de nouveaux horizons créatifs.
              </p>

              {/* Réseaux sociaux */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className={`p-3 rounded-xl bg-slate-800 transition-all duration-300 hover:scale-110 ${social.color}`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>

              {/* Newsletter mini */}
              <div className="space-y-3">
                <h4 className="font-bold text-white">Newsletter</h4>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-violet-500 focus:outline-none"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl hover:shadow-lg transition-all duration-300">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Liens de navigation */}
            <div className="space-y-6">
              <h4 className="font-bold text-white">Navigation</h4>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={link.action}
                      className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Catégories */}
            <div className="space-y-6">
              <h4 className="font-bold text-white">Catégories</h4>
              <ul className="space-y-3">
                {footerLinks.categories.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={link.action}
                      className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Informations légales */}
            <div className="space-y-6">
              <h4 className="font-bold text-white">Légal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={link.action}
                      className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Barre de copyright */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-slate-400">
                <span>© 2024 BlogArt. Fait avec</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>par l'équipe BlogArt</span>
              </div>

              <div className="flex items-center space-x-6">
                <span className="text-slate-400 text-sm">
                  Version 2.0.1
                </span>
                
                {/* Bouton retour en haut */}
                <button
                  onClick={scrollToTop}
                  className="p-2 bg-slate-800 rounded-xl hover:bg-slate-700 transition-all duration-300 hover:scale-110 group"
                  aria-label="Retour en haut"
                >
                  <ArrowUp className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;