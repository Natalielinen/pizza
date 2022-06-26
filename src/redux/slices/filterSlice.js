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

    },
})

// Action creators are generated for each case reducer function
export const {setActiveCategoryIndex, setActiveSortType, setSearchValue} = filterSlice.actions

export default filterSlice.reducer