import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { GlobalState, Context } from './types';
// import student_data from '../student_records.json';

// Initial state
const initialState: GlobalState = {
    options: {
        search: '',
        filter: 0,
        sort: 0,
    },
    student: {
        displayStudent: false,
        sourceID: '1',
        firstName: 'Mark',
        lastName: 'Hope',
        gender: 'M',
        yearCode: '7',
        dob: '04/01/2000 00:00:00',
        ethnicityCode: 'WBRI',
        addressLine1: '67 Christchurch Avenue',
        addressLine2: '',
        townCity: 'Teddington',
        postcode: 'TW11 9AB',
        contacts: [
            {
                name: 'Mr Hope',
                relationship: 'Father'
            },
            {
                name: 'Mrs Hope',
                relationship: 'Mother'
            }
        ]
    },
    studentRatingList: [
        { sourceID: '1', starRating: 5 },
    ]
};

// Create context
export const GlobalContext = createContext<Context>({
    state: initialState,
    dispatch: () => undefined,
});

// Provider component
export const GlobalProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};
