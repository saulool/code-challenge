class Restaurant {
	constructor(id, name, votes = 0) {
		this.id = id;
		this.name = name;
		this.votes = votes;
	}
}

module.exports = Restaurant;