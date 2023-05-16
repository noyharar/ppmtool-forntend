import axios from 'axios'
import {
    GET_ERRORS, GET_PROJECT,
    GET_PROJECTS,
    DELETE_PROJECT
} from "./types";


export const createProject = (project, history) => async dispatch => {
    try{
        await axios.post("/api/project", project);
        history.push("/dashboard")
    }catch (err){
        dispatch({
            type: GET_ERRORS,
        payload: err.response.data
        })
    }
};

export const getAllProjects = () => async dispatch => {
    try{
        const res = await axios.get("/api/project/all");
        dispatch({
            type: GET_PROJECTS,
            payload: res.data
        })
    }catch (err){
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
};

export const getProjectById = (id, history) => async dispatch => {
    try{
        const res = await axios.get(`/api/project/${id}`);
        // history.push("/dashboard")
        dispatch({
            type: GET_PROJECT,
            payload: res.data
        })
    }catch (err){
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
};

export const deleteProject = (id) => async dispatch => {
    try{
       await axios.delete(`/api/project/${id}`);
        dispatch({
            type: DELETE_PROJECT,
            payload: id
        })
    }catch (err){
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
};