import {createSlice} from "@reduxjs/toolkit";

export const inputSlice = createSlice({
    name: 'input',
    initialState: {
        category: {value: 'all'},
        sortingBy: {value: 'relevance'},
        query: ''
    },
    reducers: {
        changeCategory(state, action) {
            state.category.value = action.payload.value
        },
        changeSorting(state, action) {
            state.sortingBy.value = action.payload.value
        },
        queryValue(state, action) {
            state.query = action.payload
        }
    }
})

export const {changeCategory, changeSorting, queryValue} = inputSlice.actions

export default inputSlice.reducer
