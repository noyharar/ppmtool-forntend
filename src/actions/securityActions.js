import axios from 'axios'
import {
    GET_ERRORS,
    SET_CURRENT_USER
} from "./types";
import setJWTToken from "../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";

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
        console.log(user);
        const res = await axios.post("api/users/login", user);
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        setJWTToken(token);
        const decode = jwt_decode(token);

        dispatch({
            type: SET_CURRENT_USER,
            payload: decode
        })
    }catch (err){
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
};

export const logout = () => async dispatch => {
    localStorage.removeItem("jwtToken");
    setJWTToken(false)
    dispatch({
        type: SET_CURRENT_USER,
        payload: {}
    })

};