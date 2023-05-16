import axios from 'axios'
import {
    GET_ERRORS,
    GET_BACKLOG,
    GET_PROJECT_TASK,
    DELETE_PROJECT_TASK, GET_PROJECT
} from "./types";


export const getBacklogById = (id, history) => async dispatch => {
    try{
        const res = await axios.get(`/api/backlog/${id}`);
        // history.push("/dashboard")
        dispatch({
            type: GET_BACKLOG,
            payload: res.data
        })
    }catch (err){
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
};

export const addProjectTask = (backlog_id, project_task, history) => async dispatch => {
    try{
        await axios.post(`/api/backlog/${backlog_id}`, project_task);
        history.push(`/projectBoard/${backlog_id}`)
    }catch (err){
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
};