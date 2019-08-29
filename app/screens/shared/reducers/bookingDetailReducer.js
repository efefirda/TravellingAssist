import * as types from '../actions/actionTypes';

const initialState = {
  loading: false,
  bookingDetail: [],
  accommodationDetail: [],
  errors: {},
};

const bookingDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    // --------------------------------------------------------------------------------------------
    // Get Booking Detail
    // --------------------------------------------------------------------------------------------
    case types.GET_BOOKING_DETAIL: {
      return { ...state };
    }
    case types.GET_BOOKING_DETAIL_PENDING:
      return { ...state, loading: true };
    case types.GET_BOOKING_DETAIL_FULFILLED:
      return {
        ...state,
        bookingDetail: action.payload.data,
        errors: {},
        loading: false,
      };
    case types.GET_BOOKING_DETAIL_REJECTED:
      return {
        ...state,
        bookingDetail: {},
        errors: action.payload.response.data,
        loading: false,
      };

    // --------------------------------------------------------------------------------------------
    // Get Accommodation Detail
    // --------------------------------------------------------------------------------------------
    case types.GET_ACCOMMODATION_DETAIL: {
      return { ...state };
    }
    case types.GET_ACCOMMODATION_DETAIL_PENDING:
      return { ...state, loading: true };
    case types.GET_ACCOMMODATION_DETAIL_FULLFILLED:
      return {
        ...state,
        accommodationDetail: action.payload.data,
        errors: {},
        loading: false,
      };
    case types.GET_ACCOMMODATION_DETAIL_REJECTED:
      return {
        ...state,
        accommodationDetail: {},
        errors: action.payload.response.data,
        loading: false,
      };
  }
  return state;
};

export default bookingDetailReducer;
