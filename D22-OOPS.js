class Father {
  age;
  constructor(age) {
    this.age = age;
    console.log("Father's age is ", this.age);
  }

  property() {
    console.log("Father has 25 bigha jamin wo bhi NH ke bagal me ...");
  }
  work() {
    console.log("Father is a doctor");
  }
}

class Son extends Father {
  constructor(age) {
    // calling parent class constructor using super
    super(age + 25);
    this.age = age;
    console.log("Son's age is ", this.age);
  }

  //   overiding parent class's inherited method
  work() {
    console.log("Son is a engineer");
  }
}

let beta = new Son(25);
beta.property();
