import { SET_USER } from "../actions/userActions";
import { userState } from "../initialValues/userState";

const initState ={
    userState:userState
}



export function  userReducer(state=initState, {type,payload}) {
    switch (type) {
        case SET_USER:
          
                    return{
                        ...state,
                        userState: payload
                    }
          
            
           
    
        default: 
        return state;
            
    }
}