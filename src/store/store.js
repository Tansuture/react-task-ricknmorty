import {configureStore} from '@reduxjs/toolkit'
import { shopReducer } from './shopReducer'
import {charactersReducer} from './rickMortyReducer'
import { combineReducers } from 'redux'
import { loadBasket } from './localStorage'


let rootReducer = combineReducers({
    shopReducer,
    charactersReducer
})
export const store = configureStore({reducer:rootReducer,preloadedState:loadBasket()})
