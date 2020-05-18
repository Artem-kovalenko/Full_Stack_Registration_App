import * as type from "../types";

export const getAdmins = (dataArray) => {
    return {
        type: type.GET_ADMINS,
        payload: {
            dataArray
        }
    }
}