//images icon in facilities and location accomodation
import disabillity_access from '../../../assets/icons/disabillity_access.png';
import transfer from '../../../assets/icons/transfer.png';
import ballroom from '../../../assets/icons/ballroom.png';
import bar from '../../../assets/icons/bar.png';
import beachclub from '../../../assets/icons/beachclub.png';
import fitness_center from '../../../assets/icons/fitness_center.png';
import dining_in_villa from '../../../assets/icons/dining_in_villa.png';
import jacuzzi from '../../../assets/icons/jacuzzi.png';
import kids_club from '../../../assets/icons/kids_club.png';
import lounge from '../../../assets/icons/lounge.png';
import meeting_room from '../../../assets/icons/meeting_room.png';
import night_life from '../../../assets/icons/night_life.png';
import playground from '../../../assets/icons/playground.png';
import private_beach from '../../../assets/icons/private_beach.png';
import parking from '../../../assets/icons/parking.png';
import swimmingpool from '../../../assets/icons/swimmingpool.png';
import restaurant_black from '../../../assets/icons/restaurant_black.png';
import tennis_court from '../../../assets/icons/tennis_court.png';
import water_park from '../../../assets/icons/water_park.png';
import wi_fi from '../../../assets/icons/wi_fi.png';
import beach_front from '../../../assets/icons/beach_front.png';
import city_center from '../../../assets/icons/city_center.png';
import cliff from '../../../assets/icons/cliff.png';
import jungle from '../../../assets/icons/jungle.png';
import mountain from '../../../assets/icons/mountain.png';
import near_beach from '../../../assets/icons/near_beach.png';
import paddy_field from '../../../assets/icons/paddy_field.png';
import river from '../../../assets/icons/river.png';
import tropical_garden from '../../../assets/icons/tropical_garden.png';
import vilage from '../../../assets/icons/vilage.png';

//function check facilities name return icon suitable with name facilities
export const facilitiesAccommodation = data => {
  if (data == 'DISABILITYACCESS') {
    return disabillity_access;
  } else if (data == 'AIRPORTTRANSFER' || data == 'SHUTTLE') {
    return transfer;
  } else if (data == 'BALLROOM') {
    return ballroom;
  } else if (data == 'BAR') {
    return bar;
  } else if (data == 'BEACHCLUB') {
    return beachclub;
  } else if (data == 'FITNESSCENTRE' || data == 'GYM') {
    return fitness_center;
  } else if (data == 'INVILLADINING') {
    return dining_in_villa;
  } else if (data == 'JACUZZI' || data == 'SAUNA' || data == 'SPA') {
    return jacuzzi;
  } else if (data == 'KIDSCLUB') {
    return kids_club;
  } else if (data == 'LOUNGE') {
    return lounge;
  } else if (data == 'MEETINGROOMS') {
    return meeting_room;
  } else if (data == 'NIGHTLIFE') {
    return night_life;
  } else if (data == 'PLAYGROUND') {
    return playground;
  } else if (data == 'PRIVATEBEACH') {
    return private_beach;
  } else if (data == 'PRIVATEPARKINGAREA' || data == 'PUBLICPARKINGAREA') {
    return parking;
  } else if (data == 'PRIVATEPOOL' || data == 'SWIMMINGPOOL') {
    return swimmingpool;
  } else if (data == 'RESTAURANT') {
    return restaurant_black;
  } else if (data == 'TENNISCOURT') {
    return tennis_court;
  } else if (data == 'WATERPARK') {
    return water_park;
  } else if (data == 'WIFI') {
    return wi_fi;
  }
};

//function check location name return icon suitable with name location
export const locationAccommodation = data => {
  if (data == 'BEACHFRONT') {
    return beach_front;
  } else if (data == 'CITYCENTER') {
    return city_center;
  } else if (data == 'CLIFF') {
    return cliff;
  } else if (data == 'JUNGLE') {
    return jungle;
  } else if (data == 'NEARMOUNTAIN') {
    return mountain;
  } else if (data == 'NEARBEACH') {
    return near_beach;
  } else if (data == 'PADDYFIELD') {
    return paddy_field;
  } else if (data == 'RIVER') {
    return river;
  } else if (data == 'TROPICALGARDEN') {
    return tropical_garden;
  } else if (data == 'VILLAGE') {
    return vilage;
  }
};
