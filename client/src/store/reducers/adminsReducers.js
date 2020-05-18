import * as type from "../types";

const initialState = {
    admins: {}
}

const adminsReducer = (state = initialState, action) => {
    switch (action.type) {

        case type.GET_ADMINS: {
            return {
                    ...state.admins,
                    "admins": action.payload.dataArray
                }
            }


        default:
            return state

    }
}

export default adminsReducer;