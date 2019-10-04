import {
    ADMIN_RESET_PASSWORD_CHECK_TOKEN_REQUEST,
    ADMIN_SET_PASSWORD_REQUEST
} from './constants';

export const fetchCheckToken = token => ({
    type: ADMIN_RESET_PASSWORD_CHECK_TOKEN_REQUEST,
    payload: token
});

export const setPassword = (password, token) => ({
    type: ADMIN_SET_PASSWORD_REQUEST,
    payload: {password, token}
});
