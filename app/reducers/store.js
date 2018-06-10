import * as actionTypes from '../constants/store'

const initialState = []

export default function userinfo (state = initialState, action) {
    switch (action.type) {
        case actionTypes.STORE_UPDATE: 
            return action.data
        case actionTypes.STORE_ADD:
            return state.concat(action.data)
        case actionTypes.STORE_RM:
            return state.filter(function(item) {
                item != action.data
            })
        default:
            return state
    }
}