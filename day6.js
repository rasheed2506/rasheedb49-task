class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  // Method to display the person's information
  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Address: ${this.address}`);
  }

  // Method to update the person's address
  updateAddress(newAddress) {
    this.address = newAddress;
  }
}

// Create a new person object
const person1 = new Person("John Doe", 30, "123 Main St, City");

// Display the person's information
person1.displayInfo();

// Update the address
person1.updateAddress("456 Elm St, Town");

// Display the updated information
person1.displayInfo();


class UberPriceCalculator {
  constructor(baseFare, costPerMile, costPerMinute, bookingFee) {
    this.baseFare = baseFare;
    this.costPerMile = costPerMile;
    this.costPerMinute = costPerMinute;
    this.bookingFee = bookingFee;
  }

  calculatePrice(distance, time) {
    const fare = this.baseFare + (distance * this.costPerMile) + (time * this.costPerMinute);
    return fare + this.bookingFee;
  }
}

const calculator = new UberPriceCalculator(2.5, 1.5, 0.3, 1.0);

const distanceInMiles = 5; // Replace with the actual distance in miles.
const timeInMinutes = 15; // Replace with the actual time in minutes.

const totalPrice = calculator.calculatePrice(distanceInMiles, timeInMinutes);
console.log(`The estimated Uber price is $${totalPrice.toFixed(2)}`);

