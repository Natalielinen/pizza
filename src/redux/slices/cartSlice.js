import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalPrice: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const findItem = state.items.find(item => item.id === action.payload.id);
            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                });
            }

            state.totalPrice += action.payload.price;
        },
        removeItemFromCart: (state, action) => {
            state.items.filter(item => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});

export const {addItemToCart, removeItemFromCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;