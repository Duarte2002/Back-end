function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName ;
    this.age = age;
};
Person.prototype.greet = function () {
    console.log("hello " + this.firstName + " " + this.lastName + " " + this.age);
}
Person.prototype.age = null;

var Jonh = new Person("John","Doe",15);
Jonh.greet();

var antonio = new Person("Antonio","jose",20);
antonio.greet();

console.log(Jonh.__proto__);
console.log(antonio.__proto__);
console.log(Jonh.__proto__ == antonio.__proto__);
