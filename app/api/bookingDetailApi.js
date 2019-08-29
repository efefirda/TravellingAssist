import apiClient from './apiClient';
import {
  TOUR_TRANSACTIONS_SUMMARY_DETAIL_URL,
  ACCOMMODATION_DETAIL_URL,
  EXCURISON_DETAIL_URL,
  RESTAURANT_DETAIL_URL,
  TRANSPORTATION_DETAIL_URL,
} from './apiUrl';

const getBookingDetailApi = (id, lastName) => {
  return apiClient.get(TOUR_TRANSACTIONS_SUMMARY_DETAIL_URL(id, lastName));
};

const getAccommodationDetailApi = data => {
  return apiClient.get(ACCOMMODATION_DETAIL_URL, data);
};

const getExcursionDetailApi = (id, lastName) => {
  return apiClient.get(EXCURISON_DETAIL_URL(id, lastName));
};

const getRestaurantDetailApi = (id, lastName) => {
  return apiClient.get(RESTAURANT_DETAIL_URL(id, lastName));
};

const getTransportationDetailApi = (id, lastName) => {
  return apiClient.get(TRANSPORTATION_DETAIL_URL(id, lastName));
};

export {
  getBookingDetailApi,
  getAccommodationDetailApi,
  getExcursionDetailApi,
  getRestaurantDetailApi,
  getTransportationDetailApi,
};
