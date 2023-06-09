export type Repository = {
    name: string;
    stargazers: object;
    updatedAt: Date;
    url: string;
}

export enum Status {
    LOADING = 'loading',
    LOADED = 'loaded',
    REJECTED = 'rejected',
}

export interface RepoSliceState {
    repos: any;
    status: Status;
}