import { Options, Action } from './types';

// Actions
export const updateViewBar = (options: Options): Action => ({
    type: 'UPDATE_OPTIONS',
    payload: options,
});
