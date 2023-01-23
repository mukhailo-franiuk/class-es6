// Task 01
class Worker {
    constructor(firstName, secondName, rate, days) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return this.rate * this.days;
    }
}
let worker = new Worker('Ivan', 'Ivanov', 10, 31);
console.log(worker.firstName);
console.log(worker.secondName);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());

class Worker01 extends Worker {
    constructor(firstName, secondName, rate, days) {
        super(firstName, secondName, rate, days);
    }
}
let worker01 = new Worker01('Petro', 'Petriv', 12, 30);

class Worker02 extends Worker {
    constructor(firstName, secondName, rate, days) {
        super(firstName, secondName, rate, days);
    }
}
let worker02 = new Worker01('Pavlo', 'Pavliv', 21, 30);

console.log(`| ------------------ Task 01 ------------------- |`)

console.log(worker01.getSalary() + worker02.getSalary());

// Task 02 

console.log(`| ------------------ Task 02 ------------------- |`)

class MyString {
    reverse(string) {
        let arr = string.split('');
        arr.reverse();
        let str = '';
        for (let i = 0; i < arr.length; i++) {
            str += arr[i];
        }

        return console.log(str);
    }
    ucFirst(string) {
        let str = string;
        return console.log(str.charAt(0).toUpperCase() + str.slice(1))
    }
    ucWords(string){
        let str = string;
    let arr = str.split(' ');
    let sub = "";
    for (let i = 0; i < arr.length; i++) {
            sub+= arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + ' ';
        }

        return console.log(sub);
    }
}
let str = new MyString();
str.reverse('solomon');
str.ucFirst('solomon');
str.ucWords('you code very good');

// Task 03

class CoffeeMake {
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    on(){
        console.log('coffee make is on');
    }
    off(){
        console.log('coffee make is off');
    }
}

class HornCoffeeMaker extends CoffeeMake{
    constructor(name,price){
        super(name,price);
    }
    getInfo(){
        return console.log(`Name : ${this.name}, Price : ${this.price}`);
    }
}
let hornCoffeeMaker = new HornCoffeeMaker('KRUPS Opio XP320530',Math.floor(4299/36.74));

class DripCoffeeMaker extends CoffeeMake {
    constructor(name,price){
        super(name,price);
    }
    getInfo(){
        return console.log(`Name : ${this.name}, Price : ${this.price}`);
    }
}
let dripCoffeeMaker = new DripCoffeeMaker('PHILIPS Daily Collection HD7459/20',Math.floor(1799/36.74));

class CoffeeMachine extends CoffeeMake {
    constructor(name,price){
        super(name,price);
    }
    getInfo(){
        return console.log(`Name : ${this.name}, Price : ${this.price}`);
    }
}
let coffeeMachine = new CoffeeMachine('KRUPS Essential EA816570',Math.floor(13499/36.74))


console.log(`| ------------------ Task 03 ------------------- |`)
hornCoffeeMaker.getInfo();
dripCoffeeMaker.getInfo();
coffeeMachine.getInfo();