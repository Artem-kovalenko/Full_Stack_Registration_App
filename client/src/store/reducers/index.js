import { combineReducers } from "redux";
import participantReducer from "./participantReducers";
import adminsReducer from "./adminsReducers"

export const rootReducer = combineReducers({
    participantData: participantReducer,
    admins: adminsReducer
})