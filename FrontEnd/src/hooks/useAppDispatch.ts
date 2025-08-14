import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store';

/**
 * Hook personnalisé pour utiliser le dispatch Redux avec typage TypeScript
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();