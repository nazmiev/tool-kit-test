import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { reposReducer } from "./repositories/repos";

export const store = configureStore({
    reducer: {
        repos: reposReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()