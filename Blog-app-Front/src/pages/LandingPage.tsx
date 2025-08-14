import React from 'react';
import { useAppSelector } from "../hooks/useAppSelector";
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import FeaturedPostsSection from '../components/sections/FeaturedPostsSection';
import CategoriesSection from '../components/sections/CategoriesSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import StatsSection from '../components/sections/StatsSection';
import AuthorsSection from '../components/sections/AuthorsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CallToActionSection from '../components/sections/CallToActionSection';
import NewsletterSection from '../components/sections/NewsletterSection';
import FooterSection from '../components/sections/FooterSection';

/**
 * Page d'accueil principale
 * Compose toutes les sections du landing page avec les nouvelles sections ajoutées
 * Sections incluses: Hero, About, Featured Posts, Categories, Features, Stats, Authors, Testimonials, CTA, Newsletter, Footer
 */
const LandingPage: React.FC = () => {
  const { isDark } = useAppSelector(state => state.ui);

  return (
    <div className={`transition-colors duration-500 ${
      isDark ? 'bg-slate-900' : 'bg-white'
    }`}>
      {/* Section Hero principale */}
      <HeroSection />
      
      {/* Section À Propos */}
      <AboutSection />
      
      {/* Section des articles vedettes */}
      <FeaturedPostsSection />
      
      {/* Section des catégories */}
      <CategoriesSection />
      
      {/* Section des fonctionnalités */}
      <FeaturesSection />
      
      {/* Section des statistiques */}
      <StatsSection />
      
      {/* Section des auteurs */}
      <AuthorsSection />
      
      {/* Section des témoignages */}
      <TestimonialsSection />
      
      {/* Section Call-to-Action */}
      <CallToActionSection />
      
      {/* Section newsletter */}
      <NewsletterSection />
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default LandingPage;