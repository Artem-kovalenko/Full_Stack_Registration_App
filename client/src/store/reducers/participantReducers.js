import * as type from "../types";


const initialState = {
    data: {}
};

const participantReducer = (state = initialState, action) => {

    switch (action.type) {
        case  type.SAVE_DATA: {
            return {
                ...state,
                data: action.payload.dataObj
            }
        }
        case type.PARTICIPANT_REGISTER: {
            return {
                ...state,
                data: action.payload.participantInfo
            }
        }
        default:
            return state;
    }

}

export default participantReducer