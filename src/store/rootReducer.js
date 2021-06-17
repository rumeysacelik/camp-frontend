//tüm stateleri topladığımız yer

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import { userReducer } from "./reducers/userReducer";


const rootReducer = combineReducers({
    cart : cartReducer,
    userJSON: userReducer,
})

export default rootReducer;