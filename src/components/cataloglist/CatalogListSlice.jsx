import { createSlice } from "@reduxjs/toolkit";

const initialState = {    
    data: [],
    totalQuantity: null,    
};

const CatalogListSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        basketAddItems: (state, action) => {
            const itemIndex = state.data.findIndex(item => item.name === action.payload.name);
            const newItem = {
                ...action.payload,
                quantity: 1
            }            
            if (itemIndex < 0) {
                state.data = [...state.data, newItem]                
            } else {
                const newOrder = state.data.map((item, index) => {
                    if (index === itemIndex) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    } else {
                        return item;
                    }
                })
                state.data = newOrder;
            }            
            //state.totalQuantity = state.data.length
            state.totalQuantity = state.data.reduce((sum, currentValue) => sum + currentValue.quantity, 0);                        
        },

        basketRemoveItems: (state, action) => {
            const newOrder = state.data.filter(item => item.name !== action.payload);            
            state.data = newOrder;
            state.totalQuantity = state.data.reduce((sum, currentValue) => sum + currentValue.quantity, 0);
        },

        basketRemoveQuantity: (state, action) => {
            const newOrder = state.data.map((item) => {
                if (item.name === action.payload) {                    
                    return {
                        ...item,
                        quantity: item.quantity > 0 ? item.quantity - 1 : 0
                    }
                } else {
                    return item;
                }
            })
            state.data = newOrder;
            state.totalQuantity = state.data.reduce((sum, currentValue) => sum + currentValue.quantity, 0);
        },

        basketAddQuantity: (state, action) => {
            const newOrder = state.data.map((item) => {
                if (item.name === action.payload) {                    
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                } else {
                    return item;
                }
            })
            state.data = newOrder;
            state.totalQuantity = state.data.reduce((sum, currentValue) => sum + currentValue.quantity, 0);
        },        
    }
});

const {actions, reducer} = CatalogListSlice;

export default reducer;
export const {
    basketAddItems,
    basketRemoveItems,
    basketAddQuantity,
    basketRemoveQuantity,       
    data,
    totalQuantity    
} = actions;