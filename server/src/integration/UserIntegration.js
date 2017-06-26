import User from '../../compiled/model/User';

module.exports = {
	getUser
}

function getUser(){
	return new User(0, 'John');
}