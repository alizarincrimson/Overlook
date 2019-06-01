import $ from 'jquery';

export default {

  showDate(date) {
    $('#currentDate').text(date);
  },

  showRooms(rooms) {
    $('#roomsAvail').text(rooms);
  }


}