import restaurantService from '../../compiled/services/RestaurantService';
import userService from '../../compiled/services/UserService';
import exceptionHandler from '../../compiled/exceptions/exceptionHandler';
import moment from 'moment';
import {DATEFORMAT} from '../constants/constants';

module.exports = {
	saveVote
}

function saveVote(userId, restaurantId){
	let user = userService.getUser(userId);

	if(!userService.canUserVote(user, moment())) return exceptionHandler.createExceptionObject('You can\'t vote anymore', 404);

	if(!restaurantService.findRestaurant(restaurantId)) return exceptionHandler.createExceptionObject('Restaurant not found', 404);

	restaurantService.addVote(restaurantId);
	userService.setLastVote(user, moment().format(DATEFORMAT));

	return true;
}