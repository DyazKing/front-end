import { createStore } from 'redux';
import storeReducer from '../reducer/index.js'

const initialState = [
]

export const store = createStore(storeReducer, initialState)