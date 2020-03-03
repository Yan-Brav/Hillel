class Cat {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + " makes sound");
    }
}

class Lion extends Cat {
    speak() {
        // super.speak();
        console.log(this.name + " is growling");
    }
}
let lion = new Lion("Leo");
lion.speak();
class User {
    constructor (name){
        this.name = name;
    }

    sayHi() {
        console.log((`Привет, ${this.name}!`));
    }
}

let person = new User("Yan");
person.name = "Ian";
person.age = 57;
person.sayHi();
console.log(person.age);
