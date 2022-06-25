import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    activeCategoryIndex: 0,
    sortType: {name: 'популярности', sort: 'rating'}
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setActiveCategoryIndex: (state, action) => {
            state.activeCategoryIndex = action.payload
        },
        setActiveSortType: (state, action) => {
            state.sortType = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const {setActiveCategoryIndex, setActiveSortType} = filterSlice.actions

export default filterSlice.reducer