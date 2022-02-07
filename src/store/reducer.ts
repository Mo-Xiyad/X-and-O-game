import { Action } from "./actions";

const initialState = {
    nickName: '',
    socket: null
}

export const rootReducer = (state = initialState, action: Action) =>{
    switch(action.type){
        case "SET_NICKNAME":
            return {
                ...state,
                nickName: action.payload
            }
        // case "SET_SOCKET":
        //     // const socket = oi.
        //     const socket = "Y_SOCKET_PLACEHOLDER"
        //     return {
        //       ...state,
        //       socket: socket,
        //     };
        default:
            return state
    }
}