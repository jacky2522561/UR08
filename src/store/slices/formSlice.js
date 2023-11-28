import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
    name:'form',
    initialState:{
        name : '',
        cost: 0
    },
    reducers:{
        changeCar:(state,action)=>{
            state.name = action.payload;
        },
        changeCost:(state,action)=>{
            state.cost = action.payload;
        }
    }
});

export const {changeCar,changeCost} = formSlice.actions;
export const formReducer = formSlice.reducer;