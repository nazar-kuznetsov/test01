import {
    ADMIN_RESET_PASSWORD_CHECK_TOKEN_REQUEST,
    ADMIN_RESET_PASSWORD_CHECK_TOKEN_SUCCESS,
    ADMIN_RESET_PASSWORD_CHECK_TOKEN_ERROR,
    ADMIN_SET_PASSWORD_SUCCESS
} from './constants';

const initialState = {
    loading: false,
    tokenIsValidate: false,
    passwordUpdate: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADMIN_RESET_PASSWORD_CHECK_TOKEN_REQUEST:
            return {
                ...state,
                loading: true
            };
        case ADMIN_RESET_PASSWORD_CHECK_TOKEN_SUCCESS:
            return {
                ...state,
                loading: false,
                tokenIsValidate: true
            };
        case ADMIN_RESET_PASSWORD_CHECK_TOKEN_ERROR:
            return {
                ...state,
                loading: false,
                tokenIsValidate: false
            };
        case ADMIN_SET_PASSWORD_SUCCESS:
            return {
                ...state,
                passwordUpdate: true
            };
        default: return state;
    }
};

