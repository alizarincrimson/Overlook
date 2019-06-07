import $ from 'jquery';
import './css/base.scss';
import domUpdates from './domUpdates';
import Hotel from './Hotel';
import Guests from './Guests';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/axe.svg'

let hotel;
$(document).ready(() => {
  hotel = new Hotel();
  hotel.displayDate();
  $('.content').hide();
  getUsers();
  getBooks();
  getRooms();
  getOrders();
})

function getUsers(endpoint) {
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/users/users')
    .then(response => response.json())
    .then(result => hotel.getGuests(result.users))
    .catch(err => console.log('oops, users'));
}

function getBooks(endpoint) {
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/bookings/bookings')
    .then(response => response.json())
    .then(result => hotel.getBookings(result.bookings))
    .catch(err => console.log('oops, bookings'));
}

function getRooms(endpoint) {
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/rooms/rooms')
    .then(response => response.json())
    .then(result => hotel.getRooms(result.rooms))
    .catch(err => console.log('oops, rooms'));
}

function getOrders(endpoint) {
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/room-services/roomServices')
    .then(response => response.json())
    .then(result => hotel.getServices(result.roomServices))
    .catch(err => console.log('oops, orders'));
}

$('.enter-site-btn').on('click', function() {
  $('#homeContent').show()
  $('.popup').hide();
  $('#guestsContent').hide();
  $('#roomsContent').hide();
  $('#servicesContent').hide();
  hotel.displayHomeData();
})

//// this was for input type="date" ////
// $('#searchDate').on('click', function() {
//   var date = new Date($('#searchDate').val());
//   console.log(date)
// });

$('.search-date-btn').on('click', function() {
  let day = $('#searchDay').val();
  let month = $('#searchMonth').val();
  let year = $('#searchYear').val();
  hotel.findDate(day, month, year);
  hotel.displayDate(day, month, year);
})

$('.search-guest-btn').on('click', function() {
  let nameInput = $('#searchGuest').val().toLowerCase();
  console.log(nameInput)
  guests.searchGuest(nameInput);
})

$('.homeTab').on('click', function() {
  $('#homeContent').show();
  $('#guestsContent').hide();
  $('#roomsContent').hide();
  $('#bookingsContent').hide();
})

$('.guestsTab').on('click', function () {
  $('#homeContent').hide();
  $('#guestsContent').show();
  $('#roomsContent').hide();
  $('#bookingsContent').hide();
})

$('.roomsTab').on('click', function () {
  $('#homeContent').hide();
  $('#guestsContent').hide();
  $('#roomsContent').show();
  $('#bookingsContent').hide();
})

$('.bookingsTab').on('click', function () {
  $('#homeContent').hide();
  $('#guestsContent').hide();
  $('#roomsContent').hide();
  $('#bookingsContent').show();
})