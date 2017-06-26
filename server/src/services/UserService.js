import userIntegration from '../../compiled/integration/UserIntegration';
import moment from 'moment';

module.exports = {
	getUser,
	setLastVote,
	canUserVote
}

let user = userIntegration.getUser();

function getUser(id){	
	return user;
}

function setLastVote(user, date){
	user.lastVote = date;
}

function canUserVote(user, time){
	return haventPassedNoon(time) && (!user.lastVote || haventUserVotedToday(user.lastVote));
}

function haventUserVotedToday(lastVote){
	let today = moment();

	return lastVote && today.diff(moment(lastVote, 'MM/DD/YYYY'), 'days') > 0;
}

function haventPassedNoon(time){
	const noonTime = moment('12:00:00', 'HH:mm:ss');

	return noonTime.diff(time) > 0;
}