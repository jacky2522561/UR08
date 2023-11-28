import { configureStore } from "@reduxjs/toolkit";
import {
    changeCar,
    changeCost,
    formReducer
} from './slices/formSlice';
import {
    searchCarName,
    addCar,
    removeCar,
    carReducer
} from './slices/carSlice';

const store = configureStore({
    reducer:{
        form:formReducer,
        cars:carReducer
    }
});

export {store,changeCar,changeCost,searchCarName,addCar,removeCar};