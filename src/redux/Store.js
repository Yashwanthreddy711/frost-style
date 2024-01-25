import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./Slices/Cartslice";

const Store = configureStore({
    reducer:{
        cart:Cartslice,
    }
});

export default Store;