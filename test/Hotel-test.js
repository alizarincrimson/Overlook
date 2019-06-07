import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Hotel from '../src/Hotel';
import Guests from '../src/Guests';
import Rooms from '../src/Rooms';
import Bookings from '../src/Bookings';
import Services from '../src/Services';
import domUpdates from '../src/domUpdates';
import testUserData from './testUserData';
import testRoomsData from './testRoomsData';
import testBookingData from './testBookingData';
import testServiceData from './testServiceData';


chai.spy.on(domUpdates, 'showDate', () => true);

describe('Hotel', function() {

  let hotel;
  beforeEach(function() {
    hotel = new Hotel(testUserData);
  });

  it('should be a function', function() {
    expect(Hotel).to.be.a('function');
  });

  it('should make an instance of Hotel', function() {
    expect(hotel).to.be.an.instanceOf(Hotel);
  });

  it('should make a new Guests obj', function() {
    let guests = new Guests;
    hotel.getGuests(testUserData);
    expect(guests).to.be.an.instanceOf(Guests);
  });

  it('should make a new Rooms obj', function() {
    let rooms = new Rooms;
    hotel.getRooms(testRoomsData);
    expect(rooms).to.be.an.instanceOf(Rooms);
  });

  it('should make a new Bookings obj', function() {

  });

  it('should make a new Services obj', function() {

  });

  it('should calculate and display current date', function() {
    let date = new Date();
    hotel.displayDate();
    expect(date).to.be.an.instanceOf(Date);
    expect(domUpdates.showDate).to.have.been.called(1);
  });

  it('should search for a date', function() {

  });

  it('should display the current data on main page', function() {

  });


});