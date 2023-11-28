import {createSlice,nanoid} from '@reduxjs/toolkit';

const carSlice = createSlice({
    name:'car',
    initialState:{
        searchName:'',
        data:[]
    },
    reducers:{
        searchCarName:(state,action)=>{
            state.searchName=action.payload;
        },
        addCar:(state,action)=>{
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            })
        },
        removeCar:(state,action)=>{
            const updated = state.data.filter((car)=>{
                return car.id !== action.payload
            });
            state.data = updated;
        }
    }
});

export const {searchCarName,addCar,removeCar} = carSlice.actions;
export const carReducer = carSlice.reducer;
