import domUpdates from "./domUpdates";
import Guests from './Guests';
import Rooms from './Rooms';
import Bookings from './Bookings';
import Services from './Services';

class Hotel {
  constructor() {
    this.guests = [];
    this.services = [];
    this.rooms = [];
    this.bookings = [];
    this.occupancy = '';
    this.sales = 0;
    this.date = '';
    // this.currentTab = '';
  }

  getGuests(data) {
    this.guests = data;
    console.log('user log', this.guests);
    let newGuests = new Guests(this.guests);
  }

  getRooms(data) {
    this.rooms = data;
    console.log('rooms log', this.rooms);
    let newRooms = new Rooms(this.rooms);
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
    }
    domUpdates.showDate(displayDate);
  }

  findDate(dd, mm, yyyy) {
    this.date = `${dd}/${mm}/${yyyy}`;
    this.displayHomeData();
  }

  displayHomeData() {
    console.log('test')
    this.findRoomsAvailable();
    this.findOccupancy();
    this.findDailySales();
  }

  findRoomsAvailable() {
    let booked = this.bookings.filter(res => {
      return res.date === this.date;
    })
    domUpdates.showRooms(this.bookings.length - booked.length);
  }

  findOccupancy() {
    let booked = this.bookings.filter(res => {
      return res.date === this.date;
    })
    domUpdates.showOccupancy((booked.length / this.bookings.length) *100);
  }

  findDailySales() {
    let sold = this.services.filter(sale => {
      if (sale.date === this.date) {
        return this.sales += sale.totalCost;
      };
    domUpdates.showSales(this.sales);
  })
}


}

export default Hotel;