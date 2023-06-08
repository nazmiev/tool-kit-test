import { configureStore } from "@reduxjs/toolkit";
import { reposReducer } from "./slices/repos";

const store = configureStore({
    reducer: {
        repos: reposReducer,
    },
})

export default store;