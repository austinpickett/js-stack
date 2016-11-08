export default class Dog {
	constructor(name) {
		this.name = name;
	}

	bark() {
		return `Woof! I am ${this.name}`;
	}
}
