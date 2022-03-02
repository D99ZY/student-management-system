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
