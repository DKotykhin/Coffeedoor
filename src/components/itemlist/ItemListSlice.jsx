import { createSlice } from "@reduxjs/toolkit";

const initialState = {    
    itemdata: {},       
};

const ItemListSlice = createSlice({
    name: 'itempage',
    initialState,
    reducers: {
        itemAddItems: (state, action) => {                        
            const newItem = {
                ...action.payload,
                quantity: 1
            }           
            state.itemdata = newItem            
        },        

        itemRemoveQuantity: (state) => {
            const newItem = {               
                ...state.itemdata,
                quantity: state.itemdata.quantity > 1 ? state.itemdata.quantity - 1 : 1
            }            
            state.itemdata = newItem;           
        },

        itemAddQuantity: (state) => {
            const newItem = {               
                ...state.itemdata,
                quantity: state.itemdata.quantity + 1
            }            
            state.itemdata = newItem;            
        },        
    }
});

const {actions, reducer} = ItemListSlice;

export default reducer;
export const {
    itemAddItems,    
    itemAddQuantity,
    itemRemoveQuantity,           
} = actions;