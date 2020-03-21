let zoo = [];
class Animals {
	constructor(name, isAddedToArray) {
		this.name = name;
		this.addToArrayImmediately = function () {
			(isAddedToArray === true && typeof this.name === "string") ? zoo.push(this.name) : zoo;
			return zoo;
		};
		this.watchObject = new WatchAnimals();
		this.addToArrayImmediately();
	}
	addToArray() {
		if (typeof this.name === "string") {
			this.watchObject.watchCreate(this.name);
			return zoo.push(this.name);
		}
		return zoo;
	}
	deleteFromArray() {
		let removeIndex = zoo.indexOf(this.name);
		if (removeIndex !== -1) {
			this.watchObject.watchDelete(this.name);
			zoo.splice(removeIndex, 1);
		}
		return zoo;
	}

}
class WatchAnimals {
	constructor() {
		this.showObject = new Show();
	}

	watchCreate(name) {
		this.showObject.showCreate(name);
	}
	watchDelete(name) {
		this.showObject.showDelete(name)
	}
}
class Show {
	showCreate(name) {
		console.log(name + " has been added to array");
	}
	showDelete(name) {
		console.log(name + " has been removed from array");
	}
}
let lion = new Animals("Lion", true);
let cat = new Animals("Cat", true);
let dog = new Animals("Dog");
let eagle = new Animals("Eagle", true);
let crocodile = new Animals("Crocodile");
//Testing
console.log(zoo);
dog.addToArray();
console.log(zoo);
cat.deleteFromArray();
console.log(zoo);
eagle.deleteFromArray();
crocodile.addToArray();
console.log(zoo);
