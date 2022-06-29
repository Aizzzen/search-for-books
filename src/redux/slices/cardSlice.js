import {createSlice} from "@reduxjs/toolkit";

export const cardSlice = createSlice({
    name: 'card',
    initialState: {
        loading: false,
        cards: [],
        totalBooks: 0,
        startIndex: 1
    },
    reducers: {
        handleCards(state, action) {
            state.cards = action.payload
        },
        totalValue(state, action) {
            state.totalBooks = action.payload
        },
        changeStatus(state, action) {
            state.loading = action.payload
        },
        changeIndex(state, action) {
            state.startIndex = action.payload
        }
    }
})

export const {handleCards, totalValue, changeStatus, changeIndex} = cardSlice.actions

export default cardSlice.reducer
