class User {
	constructor(id = 0, name) {
		this.id = id;
		this.name = name;
		this.lastVote = null;
	}
}

module.exports = User;