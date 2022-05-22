import { createSlice } from "@reduxjs/toolkit";

const initialState = {   
    process: 'waiting',
    data: {}    
};

const CatalogListSlice = createSlice({
    name: 'busket',
    initialState,
    reducers: {
        shopItems: (state, action) => {
            state.data = action.payload
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
} = actions;