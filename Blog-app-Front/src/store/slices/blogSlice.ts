import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BlogPost } from '../../types';

/**
 * Interface pour l'état du blog
 */
interface BlogState {
  posts: BlogPost[];
  selectedCategory: string;
  searchQuery: string;
  loading: boolean;
  loadingUpdate: boolean;
  loadingSkeleton: boolean;
  error: string | null;
}

/**
 * Interface pour la réponse de l'API backend
 */
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

/**
 * Interface pour les données du post depuis le backend
 */
interface BackendPost {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt?: string;
}

/**
 * Fonction utilitaire pour transformer un post backend en BlogPost frontend
 */
const transformBackendPost = (backendPost: BackendPost): BlogPost => {
  // Génération de données fake pour les champs manquants
  const authors = ['Marie Dubois', 'Alex Chen', 'Sophie Martin', 'Thomas Laurent', 'Emma Rodriguez', 'Dr. Sarah Kim'];
  const categories = ['Design', 'Tech', 'Créativité', 'Business', 'Environnement', 'Psychologie'];
  const images = [
    'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];
  const content = backendPost.content || 'Pas de contenu disponible';
  return {
    id: backendPost.id,
    title: backendPost.title || 'Titre non disponible',
    content: content,
    excerpt: content.substring(0, 150) + '...',
    author: authors[backendPost.id % authors.length],
    date: new Date(backendPost.createdAt).toISOString().split('T')[0],
    category: categories[backendPost.id % categories.length],
    image: images[backendPost.id % images.length],
    readTime: Math.floor(content.length / 200) + 3 // Estimation du temps de lecture
  };
};

// URL de base de l'API - utilise le proxy Vite
const API_BASE_URL = '/api';

// Action pour récupérer tous les posts
export const GetPosts = createAsyncThunk(
  'Blog/GetPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<ApiResponse<BackendPost[]>>(`${API_BASE_URL}/posts`);
      return response.data.data.map(transformBackendPost);
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Erreur lors de la récupération des posts');
    }
  }
);

// Action pour récupérer un post par ID
export const GetPost = createAsyncThunk(
  'Blog/GetPost',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await axios.get<ApiResponse<BackendPost>>(`${API_BASE_URL}/posts/${id}`);
      return transformBackendPost(response.data.data);
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Erreur lors de la récupération du post');
    }
  }
);

// Action pour ajouter un post
export const AddPost = createAsyncThunk(
  'Blog/AddPost',
  async (data: { title: string; content: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post<ApiResponse<BackendPost>>(`${API_BASE_URL}/posts`, data);
      return transformBackendPost(response.data.data);
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Erreur lors de la création du post');
    }
  }
);

// Action pour mettre à jour un post
export const UpdatePost = createAsyncThunk(
  'Blog/UpdatePost',
  async ({ id, data }: { id: number; data: { title?: string; content?: string } }, { rejectWithValue }) => {
    try {
      const response = await axios.put<ApiResponse<BackendPost>>(`${API_BASE_URL}/posts/${id}`, data);
      return transformBackendPost(response.data.data);
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Erreur lors de la mise à jour du post');
    }
  }
);

// Action pour supprimer un post
export const DeletePost = createAsyncThunk(
  'Blog/DeletePost',
  async (id: number, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_BASE_URL}/posts/${id}`);
      return id;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Erreur lors de la suppression du post');
    }
  }
);

/**
 * État initial du slice blog
 */
const initialState: BlogState = {
  posts: [],
  selectedCategory: 'Tous',
  searchQuery: '',
  loading: false,
  loadingUpdate: false,
  loadingSkeleton: false,
  error: null,
};

/**
 * Slice Redux pour la gestion des articles de blog
 */
const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    /**
     * Action pour définir la catégorie sélectionnée
     */
    setSelectedCategory(state, action: PayloadAction<string>) {
      state.selectedCategory = action.payload;
    },

    /**
     * Action pour définir la requête de recherche
     */
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },

    /**
     * Action pour effacer les erreurs
     */
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // GetPosts
    builder
      .addCase(GetPosts.pending, (state) => {
        state.loadingSkeleton = true;
        state.error = null;
      })
      .addCase(GetPosts.fulfilled, (state, action) => {
        state.loadingSkeleton = false;
        state.posts = action.payload;
      })
      .addCase(GetPosts.rejected, (state, action) => {
        state.loadingSkeleton = false;
        state.error = action.payload as string;
      });

    // GetPost
    builder
      .addCase(GetPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetPost.fulfilled, (state, action) => {
        state.loading = false;
        // Mettre à jour le post dans la liste s'il existe
        const index = state.posts.findIndex(post => post.id === action.payload.id);
        if (index !== -1) {
          state.posts[index] = action.payload;
        }
      })
      .addCase(GetPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // AddPost
    builder
      .addCase(AddPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(AddPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.unshift(action.payload);
      })
      .addCase(AddPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // UpdatePost
    builder
      .addCase(UpdatePost.pending, (state) => {
        state.loadingUpdate = true;
        state.error = null;
      })
      .addCase(UpdatePost.fulfilled, (state, action) => {
        state.loadingUpdate = false;
        const index = state.posts.findIndex(post => post.id === action.payload.id);
        if (index !== -1) {
          state.posts[index] = action.payload;
        }
      })
      .addCase(UpdatePost.rejected, (state, action) => {
        state.loadingUpdate = false;
        state.error = action.payload as string;
      });

    // DeletePost
    builder
      .addCase(DeletePost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(DeletePost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = state.posts.filter(post => post.id !== action.payload);
      })
      .addCase(DeletePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {
  setSelectedCategory,
  setSearchQuery,
  clearError,
} = blogSlice.actions;

// Sélecteurs
export const selectAllPosts = (state: { blog: BlogState }) => state.blog.posts;
export const selectSelectedCategory = (state: { blog: BlogState }) => state.blog.selectedCategory;
export const selectSearchQuery = (state: { blog: BlogState }) => state.blog.searchQuery;
export const selectLoading = (state: { blog: BlogState }) => state.blog.loading;
export const selectLoadingUpdate = (state: { blog: BlogState }) => state.blog.loadingUpdate;
export const selectLoadingSkeleton = (state: { blog: BlogState }) => state.blog.loadingSkeleton;
export const selectError = (state: { blog: BlogState }) => state.blog.error;

// Sélecteur pour les posts filtrés
export const selectFilteredPosts = (state: { blog: BlogState }) => {
  const { posts, selectedCategory, searchQuery } = state.blog;
  
  return posts.filter(post => {
    const matchesCategory = selectedCategory === 'Tous' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
};

export default blogSlice.reducer;