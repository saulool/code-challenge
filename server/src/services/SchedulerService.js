import schedule from 'node-schedule';
import restaurantService from '../../compiled/services/RestaurantService';

module.exports = {
	registerJobs
}

function registerJobs(){
	schedule.scheduleJob('59 23 * * *', () => {
		restaurantService.clearVotes();
	});

	schedule.scheduleJob('0 12 * * *', () => {
		restaurantService.chooseRestaurant();
	});

	schedule.scheduleJob('59 23 * * 0', () => {
		restaurantService.clearChosenRestaurants();
	});
}