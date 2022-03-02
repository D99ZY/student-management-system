import { GlobalState, Action } from "./types";

const AppReducer = (state: GlobalState, action: Action): GlobalState => {
    switch(action.type) {
        case 'UPDATE_OPTIONS':
            return {
                ...state,
                options: action.payload,
            };
        default:
            return state;
    }
};

export default AppReducer;
