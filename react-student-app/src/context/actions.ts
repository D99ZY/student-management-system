import { Options, Student, StudentRating, Action } from './types';

// Actions
export const updateOptions = (options: Options): Action => ({
    type: 'UPDATE_OPTIONS',
    payload: options,
});

export const updateStudent = (student: Student): Action => ({
    type: 'UPDATE_STUDENT',
    payload: student,
});

export const updateStudentRatingList = (list: StudentRating[]): Action => ({
    type: 'UPDATE_STUDENT_RATING_LIST',
    payload: list,
});
