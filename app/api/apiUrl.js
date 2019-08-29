const TOUR_TRANSACTIONS_URL = '/TourTransactions';
const TOUR_TRANSACTIONS_SUMMARY_DETAIL_URL = (id, lastName) =>
  `${TOUR_TRANSACTIONS_URL}/TransactionSummaryDetail?id=${id}&lastName=${lastName}`;

const ACCOMMODATION_DETAIL_URL = '/AccommodationItems/ItemDetail';
const EXCURISON_DETAIL_URL = '/AttractionObjects/ItemDetail';

const RESTAURANT_DETAIL_URL = '/RestaurantItems/ItemDetail';

const TRANSPORTATION_DETAIL_URL = '/TransportationUnits/ItemDetail';

export {
  TOUR_TRANSACTIONS_SUMMARY_DETAIL_URL,
  ACCOMMODATION_DETAIL_URL,
  EXCURISON_DETAIL_URL,
  RESTAURANT_DETAIL_URL,
  TRANSPORTATION_DETAIL_URL,
};
