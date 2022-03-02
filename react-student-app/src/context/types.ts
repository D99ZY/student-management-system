import { Dispatch } from 'react';

// Types
export type Options = {
    search: string;
    filter: number;
    sort: number;
}

export type GlobalState = {
    options: Options;
}

export type Action = {
    type: 'UPDATE_OPTIONS';
    payload: Options;
}

export type Context = {
    state: GlobalState;
    dispatch: Dispatch<Action>;
}
