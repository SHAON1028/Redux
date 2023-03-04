const { act } = require("react-dom/test-utils")
const { actionTypes } = require("./actionTypes")

const initialState ={
    value:0
}

const counterReducer = (state=initialState,action)=>{
    switch(action.type) {
        case actionTypes.INCREMENT:
            return{
                ...state,
                value: state.value + action.payload
            }
        case actionTypes.DECREMENT:
            return{
                ...state,
                value:state.value - action.payload
            }
        default:{
            return state
        }
    }
}

export default counterReducer