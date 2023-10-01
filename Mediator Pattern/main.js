// Let's explore another example of the Mediator Pattern in JavaScript, 
// using a simplified airline reservation system

class FlightMediator {
  constructor() {
    this.passengers = []
  }

  addPassenger(passenger) {
    this.passengers.push(passenger)
    passenger.setMediator(this)
  }
  bookSeat(passenger, seatNumber) {
    console.log(`${passenger.getName()} books seat ${seatNumber}`)
    // Logic to book the seat
  }
  requestSeat(passenger) {
    // Simulate a request for a seat
    console.log(`${passenger.getName()} require a seat`)
    return Math.floor(Math.random() * 100)
  }
}

class Passenger {
  constructor(name) {
    this.name = name;
    this.mediator = null;
  }

  setMediator(mediator) {
    this.mediator = mediator
  }
  getName() {
    return this.name
  }
  requestBooking() {
    const seatNumber = this.mediator.requestSeat(this)
    this.mediator.bookSeat(this, seatNumber)
  }
}

// usage 
const flightMediator = new FlightMediator()

const passenger1 = new Passenger("Alice")
const passenger2 = new Passenger("Bob")
const passenger3 = new Passenger("Chris")

flightMediator.addPassenger(passenger1)
flightMediator.addPassenger(passenger2)
flightMediator.addPassenger(passenger3)


passenger1.requestBooking()
passenger2.requestBooking()
passenger3.requestBooking()