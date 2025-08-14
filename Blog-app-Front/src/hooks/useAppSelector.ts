import { useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState } from '../store';

/**
 * Hook personnalisé pour utiliser le selector Redux avec typage TypeScript
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;