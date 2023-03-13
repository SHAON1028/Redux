import { DELETE_BOOKING } from "./actions"
import { actionTypes } from "./actionTypes"

const nextBookingId = (bookings)=>{
    const maxId = bookings.reduce((maxId,booking)=>{Math.max(booking.id,maxId)},-1)

    return maxId+1
}
// const initialState = {
//     bookings:[]
// }
const initialState ={
    bookings:[]
}

export const bookingReducer=(state= initialState,action)=>{
       
    switch(action.type){
        case actionTypes.ADD_BOOKING:
            
            return{
                ...state,
                bookings:[...state.bookings,{id:nextBookingId(state),...action.payload,}]
            }
        case DELETE_BOOKING:
            
            return{
                ...state,
               
            }

        default:return state
    }
}