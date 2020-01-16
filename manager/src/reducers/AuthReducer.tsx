import {EMAIL_CHANGED,PASSWORD_CHANGED,LOGIN_SUCCESS,LOGIN_FAIL,
    LOGIN} from '../components/actions/types'
const INIT_STATE = {email: "",password: "",error:"",loading:false}
export default (state = INIT_STATE,action) => {
    //console.log(action)
    switch(action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload}
        case PASSWORD_CHANGED:
            return {...state, password: action.payload}
        case LOGIN_SUCCESS:
            return {...state,...INIT_STATE, user: action.payload}
        case LOGIN_FAIL:
            return {...state, error: "Authentication failed",loading:false};
        case LOGIN:
            return {...state, loading: true, error: ""}
        default: 
            return state;
    }
}