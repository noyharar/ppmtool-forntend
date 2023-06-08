import axios from 'axios'
import {
    GET_ERRORS
} from "./types";


export const createNewUser = (user, history) => async dispatch => {
    try{
        await axios.post("api/users/register", user);
        history.push("/login")
    }catch (err){
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
};

export const login = (user, history) => async dispatch => {
    try{
        await axios.post("api/users/login", user);
        history.push("/dashboard")
    }catch (err){
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
};