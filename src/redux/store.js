import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './slices/cardSlice'
import inputReducer from './slices/inputSlice'

export const store = configureStore({
    reducer: {
        cards: cardReducer,
        input: inputReducer
    },
})
