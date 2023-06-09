export type Repository = {
    name: string;
    stargazers: object;
    updatedAt: Date;
    url: string;
    node?: any;
    data?: any;
}

export enum Status {
    LOADING = 'loading',
    LOADED = 'loaded',
    REJECTED = 'rejected',
}

export interface RepoSliceState {
    repos: Repository[];
    status: Status;
}

// export type SearchRepoParams = {
//     sortBy: string, 
//     category: string, 
//     search: string, 
//     currentPage: string
// }