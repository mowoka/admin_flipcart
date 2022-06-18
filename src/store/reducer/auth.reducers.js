import { authConstants } from "../actions/constants"

const initState = {
    token: null,
    user:{
        firstname:'',
        lastname:'',
        email:'',
        picture:'',
    },
    authenticate: false,
    authenticating: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
    
    console.log(action)
    // eslint-disable-next-line default-case
    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true,
            }
            break;
        case authConstants.LOGIN_SUCCESS:
            state ={
                ...state,
                user: action.payload.data,
                token: action.payload.token,
                authenticate: true,
                authenticating: false,
            }
            break;
    }
    
    return state;
}   
