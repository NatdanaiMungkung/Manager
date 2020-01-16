import {EMAIL_CHANGED,PASSWORD_CHANGED,LOGIN_SUCCESS,LOGIN_FAIL,
    LOGIN} from './types'
import firebase from 'firebase'
import {Actions} from 'react-native-router-flux'
export const emailChanged=(text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged=(text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const loginUser=(user,password) => {
    return (dispatch) => {
        dispatch({type: LOGIN})
        firebase.auth().signInWithEmailAndPassword(user,password)
        .then(user => login_success(dispatch,user))
        .catch((err) => {
            firebase.auth().createUserWithEmailAndPassword(user,password)
                .then(user => login_success(dispatch,user))
                .catch(err => {
                    login_fail(dispatch);
                })
        })
    }
}

const login_success = (dispatch,user) => {
     dispatch({type: LOGIN_SUCCESS, payload: user})
     Actions.main();
}

const login_fail = (dispatch) => {
     dispatch({type: LOGIN_FAIL})
}