import {AppDispatch} from 'store';
import {useDispatch as _useDispatch} from 'react-redux';

export const useDispatch = () => _useDispatch<AppDispatch>();
