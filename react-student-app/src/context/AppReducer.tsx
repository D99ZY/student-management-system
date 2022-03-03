import { GlobalState, Action } from "./types";

const AppReducer = (state: GlobalState, action: Action): GlobalState => {
    switch(action.type) {
        case 'UPDATE_OPTIONS':
            return {
                ...state,
                options: action.payload,
            };
        case 'UPDATE_STUDENT':
            return {
                ...state,
                student: action.payload,
        };
        case 'UPDATE_STUDENT_RATING_LIST':
            return {
                ...state,
                studentRatingList: action.payload,
        };
        default:
            return state;
    }
};

export default AppReducer;
