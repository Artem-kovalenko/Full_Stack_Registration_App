import { combineReducers } from "redux";
import participantReducer from "./participantReducers";

export const rootReducer = combineReducers({
    participantData: participantReducer,
})