import domUpdates from "./domUpdates";

class Hotel {
  constructor() {
    this.guests = [];
    this.services = [];
    this.rooms = [];
    this.bookings = [];
    this.occupancy = '';
    this.sales = '';
    this.date = '';
  }

  getGuests(data) {
    this.guests = data;
    console.log('user log', this.guests);
  }

  getRooms(data) {
    this.rooms = data;
    console.log('rooms log', this.rooms);
  }

  getBookings(data) {
    this.bookings = data;
    console.log('booking log', this.bookings);
  }

  getServices(data) {
    this.services = data;
    console.log('orders log', this.services);
  }

  displayDate(dd, mm, yyyy) {
    let displayDate;
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (dd) {
      displayDate = `${months[mm -1]} ${dd}, ${yyyy}`
      this.date = `${dd}/${mm}/${yyyy}`
    } else {
      let today = new Date();
      displayDate = months[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();
      let day = today.getDate().toString();
      let month = today.getMonth().toString();
      this.date = day.padStart(2,0) + '/' + month.padStart(2,0) + '/' + today.getFullYear();
      console.log('this.date', this.date)
    }
    domUpdates.showDate(displayDate);
  }

  findDate(dd, mm, yyyy) {
    this.date = `${dd}/${mm}/${yyyy}`;
    this.displayHomeData();
  }

  displayHomeData() {
    this.findRoomsAvailable();

  }

  findRoomsAvailable() {
    let booked = this.bookings.filter(res => {
      return res.date === this.date;
    })
    domUpdates.showRooms(this.bookings.length - booked.length);
  }

  findOccupancy() {
    // divide rooms booked for current date by total rooms
    // fire domUpdates method for #occupancy
  }

  findDailySales() {
    // check current date
    // sum all orders for current date
    // fire domUpdates method for #salesToday
  }





}

export default Hotel;