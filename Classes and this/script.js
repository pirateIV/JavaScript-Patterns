// // Create an Human class, i.e an object factory
// class Human {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   // Instances create from Human constructor have a fullName method
//   fullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// // create a developer class
// class Developer extends Human {
//   constructor(firstName, lastName, type){
//     super(firstName, lastName)
//     this.type  =  type;
//   }

//   fullNameandLanguage() {
//     return `${super.fullName()} and develops ${this.type}`
//   }
//   // add static helper function to  Developer
//   static isJSDev(cody) {
//     return cody.language.toLowerCase() === 'javascript'
//   }
// }

// // create an instance of Developer
// let cody = new Developer('Cody', 'Lindsley', 'JavaScript')
// console.log(cody.fullNameandLanguage())
// console.log(Developer.isJSDev())

// console.log(Developer.isJSDev())

// const Rectangle = (height, width) => {
//   this.height = height;
//   this.width = width;

//   get area() {

//   }
// }

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;

//   }
//   // Getter
//   get area() {
//     return this.calcArea();
//   }
//   calcArea() {
//     return (this.height * this.width)
//   }
//   *getSides() {
//     yield this.height
//     yield this.width
//     yield this.height
//     yield this.width
//   }
// }

// const square = new Rectangle(10, 10)
// console.log(square.area)
// console.log([...square.getSides()])

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   static displayName = 'Point'
//   static distance(a, b) {
//     const dx = a.x - b.x;
//     const dy = a.y - b.y

//     return Math.hypot(dx, dy)
//   }
// }

// const p1 = new Point(5, 5)
// const p2 = new Point(10, 4)

// console.log(Point.displayName)
// console.log(Point.distance(p1, p2))

class TrigonometryCalculator {
  static sin(deg) {
    return Math.sin(radians(deg));
  }
  static cos(deg) {
    return Math.cos(radians(deg))
  }
  static tan(deg) {
    return Math.tan(radians(deg))
  }

}
function radians(degrees) {
  return (degrees * Math.PI) / 180;
}


// Usage: 
const angle = 30
console.log(`Sine(${angle}deg): ${TrigonometryCalculator.sin(angle)}`)
console.log(`Cos(${angle}deg) : ${TrigonometryCalculator.cos(angle)}`)
console.log(`Tan(${angle}deg) : ${TrigonometryCalculator.tan(angle)}`)


class Shape {
  constructor(color) {
    this.color = color;
  }

  area() {
    throw new Error("Area method not implemented")
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color)
    this.radius = radius;
  }
  area() {
    return 2 * Math.PI ** 2
  }
  circumference() {
    return 2 * Math.PI * this.radius
  }
}