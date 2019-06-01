import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Hotel from '../src/Hotel';
import domUpdates from '../src/domUpdates';

chai.spy.on(domUpdates, 'showDate', () => true);

describe('Hotel', function () {

  let hotel;
  beforeEach(function () {
    hotel = new Hotel();
  });

  it('should be a function', function () {
    expect(Hotel).to.be.a('function');
  });

  it('should make an instance of Hotel', function () {
    expect(hotel).to.be.an.instanceOf(Hotel);
  });



});