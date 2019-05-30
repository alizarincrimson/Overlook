// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
// import domUpdates from './domUpdates';
import Hotel from './Hotel';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

let hotel;

$(document).ready(() => {
  console.log('hi');
  hotel = new Hotel();
  getUsers();
})

function getUsers() {
  console.log('dammit mark')
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/users/users')
    .then(response => response.json())
    .then(result => hotel.getGuests(result.users));
}

