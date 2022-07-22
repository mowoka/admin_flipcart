import AuthReducers from "./auth.reducers";
import UserReducers from './user.reducer';

import { combineReducers } from "redux";



const rootReducer = combineReducers({
    auth: AuthReducers,
    user: UserReducers
});



export default rootReducer;