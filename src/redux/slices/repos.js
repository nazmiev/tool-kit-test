import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const accessToken = import.meta.env.VITE_TOKEN;

export const fetchRepos = createAsyncThunk('posts/fetchRepos', async () => {
    const query = `
    query MyQuery {
        repositoryOwner(login: "nazmiev") {
          avatarUrl
          repositories(last: 30) {
            totalCount
            edges {
              node {
                name
                updatedAt
                url
                stargazers {
                  totalCount
                }
                id
              }
            }
          }
        }
      }`;
  
    return await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
        Authorization: `bearer ${accessToken}`,
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
    }).then((res) => res.json());

    // const { data } = await queryFetcher(query);
    //   const { data } = await axios.get('/posts');
    // return data;
});

const initialState = {
    repos: {
        items: [],
        status: 'loading',
    },
}

const reposSlice = createSlice({
    name: 'repos',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchRepos.pending]: (state) => {
            state.repos.items = [];
            state.repos.status = 'loading';
        },
        [fetchRepos.fulfilled]: (state, action) => {
            state.repos.items = action.payload;
            state.repos.status = 'loaded';
        },
        [fetchRepos.rejected]: (state) => {
            state.repos.items = [];
            state.repos.status = 'error';
        },
    },
});

export const reposReducer = reposSlice.reducer;