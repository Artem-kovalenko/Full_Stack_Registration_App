import * as type from "../types";

export const getAdmins = (dataArray) => {
    return {
        type: type.GET_ADMINS,
        payload: {
            dataArray
        }
    }
}

export const setCurrentAdmin = (currentAdmin) => {
    return {
        type: type.SET_CURRENT_ADMIN,
        payload:{
            currentAdmin
        }
    }
}

