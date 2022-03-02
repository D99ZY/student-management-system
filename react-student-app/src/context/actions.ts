import { Options, Action } from './types';

// Actions
export const updateOptions = (options: Options): Action => ({
    type: 'UPDATE_OPTIONS',
    payload: options,
});
