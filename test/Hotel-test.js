import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Hotel from '../src/Hotel';
import Guests from '../src/Guests';
import domUpdates from '../src/domUpdates';
import testUserData from './testUserData';

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

  it('should ')

});