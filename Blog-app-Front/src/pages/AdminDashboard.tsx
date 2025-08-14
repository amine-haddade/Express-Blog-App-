import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Save, X, Eye, Calendar, User as UserIcon } from 'lucide-react';
import { BlogPost } from '../types';
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { addNotification } from '../store/slices/uiSlice';
import { AddPost, DeletePost, UpdatePost, GetPosts, selectAllPosts} from '../store/slices/blogSlice';

/**
 * Interface pour le formulaire d'article
 */

interface PostForm {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  image: string;
  readTime: number;
}

/**
 * Dashboard administrateur
 * Permet de gérer les articles (CRUD)
 */
const AdminDashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectAllPosts);
  // const loading = useAppSelector(selectLoading);
  // const loadingUpdate = useAppSelector(selectLoadingUpdate);
  // const error = useAppSelector(selectError);
  const { isDark } = useAppSelector(state => state.ui);
  
  // Charger les posts au montage du composant
  useEffect(() => {
    console.log('🚀 AdminDashboard: Chargement des posts...');
    dispatch(GetPosts());
  }, [dispatch]);

  // Log pour voir les posts dans le composant
  useEffect(() => {
    console.log('📋 AdminDashboard: Posts reçus:', posts.length, 'posts');
    console.log('📋 Posts détails:', posts);
  }, [posts]);
  
  const [activeTab, setActiveTab] = useState<'list' | 'create' | 'edit'>('list');
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState<PostForm>({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    category: '',
    image: '',
    readTime: 5
  });
  const [previewMode, setPreviewMode] = useState(false);

  /**
   * Remet à zéro le formulaire
   */
  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      author: '',
      category: '',
      image: '',
      readTime: 5
    });
    setEditingPost(null);
    setPreviewMode(false);
  };

  /**
   * Prépare l'édition d'un article
   */
  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      author: post.author,
      category: post.category,
      image: post.image,
      readTime: post.readTime
    });
    setActiveTab('edit');
  };

  /**
   * Gère la soumission du formulaire
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingPost) {
        await dispatch(UpdatePost({
          id: editingPost.id,
          data: {
            title: formData.title,
            content: formData.content
          }
        })).unwrap();
        dispatch(addNotification({
          message: 'Article mis à jour avec succès !',
          type: 'success'
        }));
      } else {
        await dispatch(AddPost({
          title: formData.title,
          content: formData.content
        })).unwrap();
        dispatch(addNotification({
          message: 'Article créé avec succès !',
          type: 'success'
        }));
      }
      
      resetForm();
      setActiveTab('list');
    } catch (error) {
      dispatch(addNotification({
        message: 'Erreur lors de la sauvegarde de l\'article',
        type: 'error'
      }));
    }
  };

  /**
   * Gère la suppression d'un article
   */
  const handleDelete = async (id: number) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      try {
        await dispatch(DeletePost(id)).unwrap();
        dispatch(addNotification({
          message: 'Article supprimé avec succès !',
          type: 'success'
        }));
      } catch (error) {
        dispatch(addNotification({
          message: 'Erreur lors de la suppression de l\'article',
          type: 'error'
        }));
      }
    }
  };

  // Liste des catégories disponibles
  const categories = ['Design', 'Tech', 'Créativité', 'Business', 'Lifestyle'];

  return (
    <div className={`pt-16 min-h-screen ${
      isDark ? 'bg-slate-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className={`text-4xl font-black mb-2 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Dashboard{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Admin
            </span>
          </h1>
          <p className={`text-lg ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Gérez vos articles et créez du contenu exceptionnel
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="flex space-x-1">
            <button
              onClick={() => {
                setActiveTab('list');
                resetForm();
              }}
              className={`px-6 py-3 rounded-t-2xl font-semibold transition-all duration-300 ${
                activeTab === 'list'
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                  : isDark
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white'
              }`}
            >
              Articles ({posts.length})
            </button>
            <button
              onClick={() => {
                setActiveTab('create');
                resetForm();
              }}
              className={`px-6 py-3 rounded-t-2xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'create'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                  : isDark
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white'
              }`}
            >
              <Plus className="w-4 h-4" />
              <span>Créer</span>
            </button>
            {editingPost && (
              <button
                onClick={() => setActiveTab('edit')}
                className={`px-6 py-3 rounded-t-2xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'edit'
                    ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg'
                    : isDark
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                }`}
              >
                <Edit className="w-4 h-4" />
                <span>Éditer</span>
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className={`rounded-2xl shadow-xl ${
          isDark ? 'bg-slate-800' : 'bg-white'
        }`}>
          {activeTab === 'list' && (
            <div className="p-6">
              <div className="space-y-4">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className={`group p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                      isDark
                        ? 'border-slate-700 hover:border-slate-600 hover:bg-slate-700/50'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center space-x-3">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-16 h-16 object-cover rounded-xl"
                          />
                          <div>
                            <h3 className={`text-xl font-bold ${
                              isDark ? 'text-white' : 'text-slate-900'
                            }`}>
                              {post.title}
                            </h3>
                            <div className={`flex items-center space-x-4 text-sm ${
                              isDark ? 'text-slate-400' : 'text-slate-500'
                            }`}>
                              <span className="flex items-center space-x-1">
                                <UserIcon className="w-4 h-4" />
                                <span>{post.author}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{post.date}</span>
                              </span>
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                isDark ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-700'
                              }`}>
                                {post.category}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className={`text-sm leading-relaxed ${
                          isDark ? 'text-slate-300' : 'text-slate-600'
                        }`}>
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <button
                          onClick={() => handleEdit(post)}
                          className="p-2 rounded-xl text-blue-500 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                         title="Éditer l'article"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="p-2 rounded-xl text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                         title="Supprimer l'article"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {posts.length === 0 && (
                  <div className="text-center py-16">
                    <h3 className={`text-2xl font-bold mb-4 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      Aucun article
                    </h3>
                    <p className={`text-lg mb-6 ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      Commencez par créer votre premier article
                    </p>
                    <button
                      onClick={() => setActiveTab('create')}
                      className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Créer un article
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {(activeTab === 'create' || activeTab === 'edit') && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-2xl font-bold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {editingPost ? 'Éditer l\'article' : 'Créer un nouvel article'}
                </h2>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => setPreviewMode(!previewMode)}
                    className={`p-2 rounded-xl transition-colors duration-200 ${
                      previewMode
                        ? 'bg-violet-500 text-white'
                        : isDark
                        ? 'text-slate-400 hover:text-white hover:bg-slate-700'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      resetForm();
                      setActiveTab('list');
                    }}
                    className={`p-2 rounded-xl transition-colors duration-200 ${
                      isDark
                        ? 'text-slate-400 hover:text-white hover:bg-slate-700'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Form */}
                <div className={`${previewMode ? 'hidden lg:block' : ''}`}>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Titre
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border transition-colors focus:ring-2 focus:ring-orange-500 focus:outline-none ${
                          isDark
                            ? 'bg-slate-700 border-slate-600 text-white'
                            : 'bg-white border-slate-300 text-slate-900'
                        }`}
                        placeholder="Titre de votre article"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}>
                          Auteur
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.author}
                          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl border transition-colors focus:ring-2 focus:ring-orange-500 focus:outline-none ${
                            isDark
                              ? 'bg-slate-700 border-slate-600 text-white'
                              : 'bg-white border-slate-300 text-slate-900'
                          }`}
                          placeholder="Nom de l'auteur"
                        />
                      </div>

                      <div>
                        <label className={`block text-sm font-medium mb-2 ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}>
                          Catégorie
                        </label>
                        <select
                          required
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl border transition-colors focus:ring-2 focus:ring-orange-500 focus:outline-none ${
                            isDark
                              ? 'bg-slate-700 border-slate-600 text-white'
                              : 'bg-white border-slate-300 text-slate-900'
                          }`}
                        >
                          <option value="">Choisir une catégorie</option>
                          {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Image URL
                      </label>
                      <input
                        type="url"
                        required
                        value={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border transition-colors focus:ring-2 focus:ring-orange-500 focus:outline-none ${
                          isDark
                            ? 'bg-slate-700 border-slate-600 text-white'
                            : 'bg-white border-slate-300 text-slate-900'
                        }`}
                        placeholder="https://exemple.com/image.jpg"
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Temps de lecture (minutes)
                      </label>
                      <input
                        type="number"
                        required
                        min="1"
                        max="60"
                        value={formData.readTime}
                        onChange={(e) => setFormData({ ...formData, readTime: parseInt(e.target.value) })}
                        className={`w-full px-4 py-3 rounded-xl border transition-colors focus:ring-2 focus:ring-orange-500 focus:outline-none ${
                          isDark
                            ? 'bg-slate-700 border-slate-600 text-white'
                            : 'bg-white border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Extrait
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={formData.excerpt}
                        onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border transition-colors focus:ring-2 focus:ring-orange-500 focus:outline-none resize-none ${
                          isDark
                            ? 'bg-slate-700 border-slate-600 text-white'
                            : 'bg-white border-slate-300 text-slate-900'
                        }`}
                        placeholder="Un bref aperçu de votre article..."
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Contenu
                      </label>
                      <textarea
                        required
                        rows={10}
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border transition-colors focus:ring-2 focus:ring-orange-500 focus:outline-none resize-none ${
                          isDark
                            ? 'bg-slate-700 border-slate-600 text-white'
                            : 'bg-white border-slate-300 text-slate-900'
                        }`}
                        placeholder="Écrivez le contenu complet de votre article..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      <Save className="w-5 h-5" />
                      <span>{editingPost ? 'Mettre à jour' : 'Publier'}</span>
                    </button>
                  </form>
                </div>

                {/* Preview */}
                <div className={`${previewMode ? 'block' : 'hidden lg:block'}`}>
                  <h3 className={`text-lg font-semibold mb-4 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Aperçu
                  </h3>
                  
                  <div className={`rounded-2xl overflow-hidden border ${
                    isDark ? 'border-slate-700' : 'border-slate-200'
                  }`}>
                    {formData.image && (
                      <img
                        src={formData.image}
                        alt="Preview"
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6 space-y-4">
                      <div className="flex items-center space-x-3">
                        {formData.category && (
                          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                            {formData.category}
                          </span>
                        )}
                        {formData.readTime && (
                          <span className={`text-sm ${
                            isDark ? 'text-slate-400' : 'text-slate-500'
                          }`}>
                            {formData.readTime} min de lecture
                          </span>
                        )}
                      </div>
                      
                      <h2 className={`text-xl font-bold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        {formData.title || 'Titre de votre article'}
                      </h2>
                      
                      <p className={`text-sm leading-relaxed ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        {formData.excerpt || 'L\'extrait de votre article apparaîtra ici...'}
                      </p>
                      
                      <div className={`pt-4 border-t text-sm ${
                        isDark ? 'border-slate-700 text-slate-400' : 'border-slate-200 text-slate-500'
                      }`}>
                        {formData.author && (
                          <span>Par {formData.author}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;