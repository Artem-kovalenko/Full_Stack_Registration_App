import * as type from "../types";

export const saveData = (dataObj) => {
    return {
        type: type.SAVE_DATA,
        payload: {
            dataObj
        }
    }
}

export const participantRegister = (participantInfo) => {
    return {
        type: type.PARTICIPANT_REGISTER,
        payload: {
            participantInfo
        }
    }
}