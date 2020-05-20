import * as type from "../types";

const initialState = {
    adminsChild: {},
    currentAdmin:{}
}

const adminsReducer = (state = initialState, action) => {
    switch (action.type) {

        case type.GET_ADMINS: {
            return {
                    ...state,
                adminsChild:action.payload.dataArray
                }
            }

        case type.SET_CURRENT_ADMIN: {

            return {
                ...state,
                currentAdmin: action.payload.currentAdmin
            }
        }

        default:
            return state

    }
}

export default adminsReducer;