import { createSlice } from "@reduxjs/toolkit";

const initialState = {   
    process: 'waiting',
    data: [],
    totalQuantity: null,    
};

const CatalogListSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        shopItems: (state, action) => {
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
            state.totalQuantity = state.data.reduce((previousValue, currentValue) => previousValue + currentValue.quantity, 0);
                        
        },
        shopUpdate: state => {
            state.process = 'loaded';
        }
    }
});

const {actions, reducer} = CatalogListSlice;

export default reducer;
export const {
    shopItems,
    shopUpdate,
    process,    
    data,
    totalQuantity    
} = actions;