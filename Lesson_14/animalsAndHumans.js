'use strict';
let creaturesArray = [];
function Human(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}
function Animal() {
    Human.apply(this, arguments);
}
let add = function () {
    (this instanceof Human)
        ? creaturesArray.unshift(this)
        : creaturesArray.push(this);
    console.log(CreatureView.showName(this.name) + ' has been successful added');
    CreatureView.showArray();
};
let deleted = function () {
    let index = creaturesArray.indexOf(this);
    index >= 0
        ? creaturesArray.splice(index, 1)
        : creaturesArray;
    console.log(CreatureView.showName(this.name) + ' has been successful deleted');
    CreatureView.showArray();
};
Human.prototype.add = add;
Human.prototype.delete = deleted;

Animal.prototype.add = add;
Animal.prototype.delete = deleted;
class CreatureController {
    handleCreatureAdd(creature) {
        creature.add(creature);
    }
    handleCreatureDelete(creature) {
        creature.delete(creature);
    }
}
class CreatureView {
   static showName(name) {
       return name;
   }
   static showArray() {
       console.log(creaturesArray);
   }
}
//Testing
let cat = new Animal('Cat', 5, 'male');
let ivan = new Human('Ivan', 20, 'male');
let helen = new Human('Helen', 57, 'female');
let dog = new Animal('Dog', 3, 'female');
let elephant = new Animal('Elephant', 100, 'female');
let controller = new CreatureController();
controller.handleCreatureAdd(ivan);
controller.handleCreatureAdd(helen);
controller.handleCreatureAdd(dog);
controller.handleCreatureAdd(cat);
controller.handleCreatureDelete(ivan);
controller.handleCreatureDelete(dog);
controller.handleCreatureAdd(ivan);
controller.handleCreatureAdd(elephant);

