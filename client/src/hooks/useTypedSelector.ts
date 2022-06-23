import {TypedUseSelectorHook, useSelector as _useSelector} from 'react-redux';
import {RootState} from 'store/rootReducer';

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;