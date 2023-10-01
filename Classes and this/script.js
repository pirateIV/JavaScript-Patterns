class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;

    sayHello: () => {
      
    }
  }
}

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }
}