import { authConstants } from "../actions/constants"

const initState = {
    name: 'mokaz',
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
    
    console.log(action);
    // eslint-disable-next-line default-case
    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                ...action.payload
            }
            break;
    }
    
    return state;
}   
