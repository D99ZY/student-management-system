import { Dispatch } from 'react';

// Types
export type Options = {
    search: string;
    filter: number;
    sort: number;
};

export type Contact = {
    name: string;
    relationship: string;
};

export type Student = {
    displayStudent: boolean;
    sourceID: string;
    firstName: string;
    lastName: string;
    gender: string;
    yearCode: string;
    dob: string;
    ethnicityCode: string;
    addressLine1: string;
    addressLine2: string;
    townCity: string;
    postcode: string;
    contacts: Contact[];
};

export type GlobalState = {
    options: Options;
    student: Student;
};

export type Action = 
    | { type: 'UPDATE_OPTIONS'; payload: Options; }
    | { type: 'UPDATE_STUDENT'; payload: Student; };

export type Context = {
    state: GlobalState;
    dispatch: Dispatch<Action>;
};
