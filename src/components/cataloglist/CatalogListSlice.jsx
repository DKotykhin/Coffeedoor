import { createSlice } from "@reduxjs/toolkit";

const initialState = {    
    data: [],
    totalQuantity: null,    
};

const CatalogListSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        shopAddItems: (state, action) => {
            const itemIndex = state.data.findIndex(orderItem => orderItem.name === action.payload.name);
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
        shopRemoveItems: (state, action) => {
            const newRemoveOrder = state.data.filter(item => item.name !== action.payload);            
            state.data = newRemoveOrder;
        }
    }
});

const {actions, reducer} = CatalogListSlice;

export default reducer;
export const {
    shopAddItems,
    shopRemoveItems,       
    data,
    totalQuantity    
} = actions;