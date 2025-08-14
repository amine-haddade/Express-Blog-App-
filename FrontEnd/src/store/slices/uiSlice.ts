import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * Interface pour l'état de l'interface utilisateur
 */
interface UIState {
  currentPage: 'landing' | 'blog' | 'admin' | 'singlePost' | 'insights';
  isDark: boolean;
  sidebarOpen: boolean;
  modalOpen: boolean;
  selectedPostId: number | null;
  notifications: Array<{
    id: string;
    message: string;
    type: 'success' | 'error' | 'info';
  }>;
}

/**
 * État initial du slice UI
 */
const initialState: UIState = {
  currentPage: 'landing',
  isDark: false,
  sidebarOpen: false,
  modalOpen: false,
  selectedPostId: null,
  notifications: [],
};

/**
 * Slice Redux pour la gestion de l'interface utilisateur
 */
const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    // Action pour changer de page
    setCurrentPage: (state, action: PayloadAction<'landing' | 'blog' | 'admin' | 'singlePost' | 'insights'>) => {
      state.currentPage = action.payload;
    },

    // Action pour naviguer vers un post spécifique
    navigateToPost: (state, action: PayloadAction<number>) => {
      state.currentPage = 'singlePost';
      state.selectedPostId = action.payload;
    },

    // Action pour basculer le mode sombre
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
    },

    // Action pour définir le thème
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.isDark = action.payload;
    },

    // Action pour basculer la sidebar
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },

    // Action pour ouvrir/fermer la modal
    setModalOpen: (state, action: PayloadAction<boolean>) => {
      state.modalOpen = action.payload;
    },

    // Action pour ajouter une notification
    addNotification: (state, action: PayloadAction<{
      message: string;
      type: 'success' | 'error' | 'info';
    }>) => {
      const notification = {
        id: Date.now().toString(),
        ...action.payload,
      };
      state.notifications.push(notification);
    },

    // Action pour supprimer une notification
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(
        notification => notification.id !== action.payload
      );
    },

    // Action pour vider toutes les notifications
    clearNotifications: (state) => {
      state.notifications = [];
    },
  },
});

export const {
  setCurrentPage,
  navigateToPost,
  toggleTheme,
  setTheme,
  toggleSidebar,
  setModalOpen,
  addNotification,
  removeNotification,
  clearNotifications,
} = uiSlice.actions;

export default uiSlice.reducer;