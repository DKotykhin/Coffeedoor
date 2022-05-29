import { createSlice } from "@reduxjs/toolkit";

const initialState = {    
    basketdata: [],        
};

const basketdataListSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        basketAddItems: (state, action) => {
            const itemIndex = state.basketdata.findIndex(item => item.name === action.payload.name);
            const newItem = {
                ...action.payload,
                quantity: 1
            }            
            if (itemIndex < 0) {
                state.basketdata = [...state.basketdata, newItem]                
            } else {
                const newOrder = state.basketdata.map((item, index) => {
                    if (index === itemIndex) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    } else {
                        return item;
                    }
                })
                state.basketdata = newOrder;
            }           
        },

        basketAddFromItemPage: (state, action) => {
            const itemIndex = state.basketdata.findIndex(item => item.name === action.payload.name);                      
            if (itemIndex < 0) {
                state.basketdata = [...state.basketdata, action.payload]                
            } else {
                const newOrder = state.basketdata.map((item, index) => {
                    if (index === itemIndex) {
                        return {
                            ...item,
                            quantity: item.quantity + action.payload.quantity
                        }
                    } else {
                        return item;
                    }
                })
                state.basketdata = newOrder;
            }                                    
        },

        basketRemoveItems: (state, action) => {
            const newOrder = state.basketdata.filter(item => item.name !== action.payload);            
            state.basketdata = newOrder;            
        },

        basketRemoveQuantity: (state, action) => {
            const newOrder = state.basketdata.map((item) => {
                if (item.name === action.payload) {                    
                    return {
                        ...item,
                        quantity: item.quantity > 0 ? item.quantity - 1 : 0
                    }
                } else {
                    return item;
                }
            })
            state.basketdata = newOrder;            
        },

        basketAddQuantity: (state, action) => {
            const newOrder = state.basketdata.map((item) => {
                if (item.name === action.payload) {                    
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                } else {
                    return item;
                }
            })
            state.basketdata = newOrder;            
        },
        
        basketAllRemove: (state) => {
            state.basketdata = [] 
        }
    }
});

const {actions, reducer} = basketdataListSlice;

export default reducer;
export const {
    basketAddItems,
    basketRemoveItems,
    basketAddQuantity,
    basketRemoveQuantity,
    basketAllRemove,
    basketAddFromItemPage       
} = actions;