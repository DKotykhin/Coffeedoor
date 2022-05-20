import { createSlice } from "@reduxjs/toolkit";

const initialState = {   
    process: 'waiting',
    data: {}    
};

const CatalogListSlice = createSlice({
    name: 'shopitems',
    initialState,
    reducers: {
        shopitems: (state, action) => {
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
    shopitems,
    shopUpdate,
    process,    
    data,    
} = actions;