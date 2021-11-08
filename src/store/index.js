import { createStore } from 'redux';
import { Reducers } from '../reducers';

// Criação da store e seus reducers
export const Store = createStore(Reducers)