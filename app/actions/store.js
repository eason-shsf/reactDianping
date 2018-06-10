import * as actionTypes from '../constants/store'

export function update(data) {
    return {
        type: actionTypes.STORE_UPDATE,
        data
    }
};

export function add(data) {
    return {
        type: actionTypes.STORE_ADD,
        data
    }
};

export function removeRM(data) {
    return {
        type: actionTypes.STORE_RM,
        data
    }
};