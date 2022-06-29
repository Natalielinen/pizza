import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    activeCategoryIndex: 0,
    sort: {
        name: 'популярности', property: 'rating'
    },
    searchValue: ''
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setActiveCategoryIndex: (state, action) => {
            state.activeCategoryIndex = action.payload
        },
        setActiveSortType: (state, action) => {
            state.sort = action.payload
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        },
        setFilters: (state, action) => {
            state.activeCategoryIndex = Number(action.payload.activeCategoryIndex)
            state.sort = action.payload.sort
        }
    },
})

// Action creators are generated for each case reducer function
export const {setActiveCategoryIndex, setActiveSortType, setSearchValue, setFilters} = filterSlice.actions

export default filterSlice.reducer