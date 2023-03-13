import { type } from "@testing-library/user-event/dist/type";
import { actionTypes } from "./actionTypes";

export const ADD_BOOKING = (bookingData) => {
  console.log('first',bookingData)
  return {
    type: actionTypes.ADD_BOOKING,
    payload: bookingData,
  };
};
export const DELETE_BOOKING = (bookingId) => {
  return {
    type: actionTypes.DELETE_BOOKING,
    payload: bookingId,
  };
};
