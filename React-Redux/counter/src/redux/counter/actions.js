import { actionTypes } from "./actionTypes"

export const INCREMENT = (value)=>{
    return{
        type:actionTypes.INCREMENT,
        payload:value
    }
}
export const DECREMENT = (value)=>{
    return{
        type:actionTypes.DECREMENT,
        payload:value
    }
}