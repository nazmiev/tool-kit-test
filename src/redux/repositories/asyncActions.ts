import { createAsyncThunk } from "@reduxjs/toolkit";
import { Repository} from "./types";

const accessToken = import.meta.env.VITE_TOKEN;

export const fetchRepos = createAsyncThunk<Repository[]> ('posts/fetchRepos', async () => {
    const queryRepos = `{
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
        body: JSON.stringify({ query: queryRepos }),
    }).then((res) => res.json());
});