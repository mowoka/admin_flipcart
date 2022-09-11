import AuthReducers from "./auth.reducers";
import UserReducers from './user.reducer';
import productReducers from './product.reducer';
import categoryReducers from './category.reducer';
import orderReducers from './orders.reducer';

import { combineReducers } from "redux";



const rootReducer = combineReducers({
    auth: AuthReducers,
    user: UserReducers,
    product: productReducers,
    category: categoryReducers,
    order: orderReducers,
});



export default rootReducer;