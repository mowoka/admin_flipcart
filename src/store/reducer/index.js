import AuthReducers from "./auth.reducers";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    auth: AuthReducers
});



export default rootReducer;