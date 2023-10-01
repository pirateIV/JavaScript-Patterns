// Under Behavioural Design Pattern

/**  The observer pattern is used for event handling and delegation. A Subject maintains
 *a collection of observers then notifies the observers when an event occurs.If you've *  *ever used addEventListener then you've
 *utilized the Observer pattern.

*/

function Subject() {
  this.observers = []; // observers listening to the subject

  this.registerObserver = function (observer) {
    // Add an observer if it not already being tracked
    if (this.observers.indexOf(observer) === -1) {
      this.observers.push(observer);
    }
  };
  
  this.unregisterObserver = function(observer) {
    // Removes a previously reistered observer
    var index = this.observers.indexOf(observer)
    if(index > -1) {
      this.observers.splice(index, 1)
    }
  }

  this.notifyObserver = function(message) {
    // Send message to all observers
    this.observers.forEach(observer => {
      observer.notify(message)
    })
  }
}

function Employee (){

  this.name = name;
  this.notify = function(meetingTime) {
    console.log(this.name + ': There is a meeting at ' + meetingTime)
  }
}

const bob = new Employee()
const jane = new Employee()
const meeetingAlerts = new Subject()

meeetingAlerts.registerObserver(bob)
meeetingAlerts.registerObserver(jane)

meeetingAlerts.notifyObserver('4pm')