
class Hotel {
  constructor() {
    this.guests = [];
    this.services = [];
    this.rooms = [];
    this.occupancy = '';
    this.sales = '';
  }

  getGuests(data) {
    this.guests = data;
    console.log('newlog', this.guests)
  }
}

export default Hotel;