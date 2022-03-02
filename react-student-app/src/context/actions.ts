import { Options, Student, Action } from './types';

// Actions
export const updateOptions = (options: Options): Action => ({
    type: 'UPDATE_OPTIONS',
    payload: options,
});

export const updateStudent = (student: Student): Action => ({
    type: 'UPDATE_STUDENT',
    payload: student,
});
