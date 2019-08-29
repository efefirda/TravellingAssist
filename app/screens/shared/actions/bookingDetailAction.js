import { GET_BOOKING_DETAIL, GET_ACCOMMODATION_DETAIL } from './actionTypes';

import { getBookingDetailApi } from '../../../api/bookingDetailApi';

//get booking detail
const get_booking_detail = (id, lastName) => {
  return dispatch => {
    return dispatch({
      type: GET_BOOKING_DETAIL,
      payload: getBookingDetailApi(id, lastName),
    });
  };
};

//get booking detail
const get_accommodation_detail = data => {
  return dispatch => {
    return dispatch({
      type: GET_ACCOMMODATION_DETAIL,
      payload: getBookingDetailApi(data),
    });
  };
};

export { get_booking_detail, get_accommodation_detail };
