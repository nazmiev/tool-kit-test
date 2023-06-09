import { createSlice } from "@reduxjs/toolkit";
import { RepoSliceState, Status } from "./types";
import { fetchRepos } from "./asyncActions";

const initialState: RepoSliceState = {
    repos: [],
    status: Status.LOADING,
}

const reposSlice = createSlice({
    name: 'repos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRepos.pending, (state) => {
            state.status = Status.LOADING;
            state.repos = [];
        });
        builder.addCase(fetchRepos.fulfilled, (state, action) => {
            state.repos = action.payload;
            state.status = Status.LOADED;
        });
        builder.addCase(fetchRepos.rejected, (state) => {
            state.status = Status.REJECTED;
            state.repos = [];
        })
    }
});

export const reposReducer = reposSlice.reducer;