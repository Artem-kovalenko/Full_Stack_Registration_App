import * as type from "../types";

const initialState = {
    newUser: {}
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case type.SAVE_USER_INFO: {
            return {
                ...state.newUser,
                "newUser": action.payload.userInfoPayload
            }
        }

        default:
            return state

    }
}

export default usersReducer;