import restaurantIntegration from '../../compiled/integration/RestaurantIntegration';
import moment from 'moment';

module.exports = {
	getRestaurants,
	addVote,
	findRestaurant,
	chooseRestaurant,
	clearVotes,
	clearChosenRestaurants,
	getChosenRestaurants
}

let restaurants = restaurantIntegration.getRestaurants();
let restaurantsChosen = [];

function getRestaurants(){
	return restaurants;
}

function addVote(restaurantId){
	let restaurant = findRestaurant(restaurantId);

	restaurant.votes++;
}

function findRestaurant(restaurantId){
	return restaurants.find(restaurant => restaurant.id == restaurantId);
}

function chooseRestaurant(){
	let restaurantToChoose = findRestaurantMostVoted();

	restaurantToChoose = {
		...restaurantToChoose,
		dateChoosed: moment().format('MM/DD/YYYY')
	}

	restaurantsChosen.push(restaurantToChoose);
	removeChosenRestaurantFromRestaurants(restaurantToChoose);
}

function findRestaurantMostVoted(){
	return restaurants.reduce((prevRestaurant, currentRestaurant) => prevRestaurant.votes > currentRestaurant.votes ? prevRestaurant : currentRestaurant);
}

function removeChosenRestaurantFromRestaurants(restaurantToRemove){
	let index = restaurants.findIndex(restaurant => restaurant.id == restaurantToRemove.id);

	restaurants.splice(index, 1);
}

function clearVotes(){
	restaurants.map((restaurant) => {
		restaurant.votes = 0;
		return restaurant;
	});
}

function getChosenRestaurants(){
	return restaurantsChosen;
}

function clearChosenRestaurants(){
	restaurantsChosen = [];
	restoreRestaurants();
}

function restoreRestaurants(){
	restaurants = restaurantIntegration.getRestaurants();
}


//--------------------------------
//import RestaurantIntegration from '../../compiled/integration/RestaurantIntegration';
/*let RestaurntService = (RestaurantIntegration) => {
	return {
		function getRestaurants(){
			return RestaurantIntegration.getRestaurants();
		}
	}
}*/

//-------------------------------

/*
let mockRestaurantIntegration = () => {
	return {
		getRestaurants: () => {
			return [];
		}
	}
}

let result = new RestaurntService(mockRestaurantIntegration);*/