import domUpdates from './domUpdates';

class Guests {
  constructor(guestData) {
    this.guestData = guestData;
    this.name = '';
    this.id = 0;
}

  searchGuest(input) {
    let findName = this.guestData.find(name => {
      input === guestData.name.toLowerCase()
    })
    console.log(findName)
  }
}

export default Guests;