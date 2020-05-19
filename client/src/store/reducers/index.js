import { combineReducers } from "redux";
import participantReducer from "./participantReducers";
import adminsReducer from "./adminsReducers";
import usersReducer from "./usersReducers";

export const rootReducer = combineReducers({
    participantData: participantReducer,
    admins: adminsReducer,
    newUser: usersReducer
})