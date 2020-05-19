import * as type from "../types";

export const saveUserInfo = (userInfoPayload) => {
    return {
        type: type.SAVE_USER_INFO,
        payload: {
            userInfoPayload
        }
    }
}