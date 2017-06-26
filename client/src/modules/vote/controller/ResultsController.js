import moment from 'moment';

ResultsController.$inject = ['RestaurantService'];

export default function ResultsController(RestaurantService) {
  const resultsVm = this;
  resultsVm.restaurants = [];
  resultsVm.chosenRestaurant = null;

  getAllRestaurants();
  getChosenRestaurant();

  function getAllRestaurants(){
  	RestaurantService.getAllRestaurants().then((response) => {
  		resultsVm.restaurants = response.data;
  	});
  }

  function getChosenRestaurant(){
  	RestaurantService.getChosenRestaurants().then((response) => {
  		let chosenRestaurant = response.data[response.data.length-1];

  		if(chosenRestaurant && chosenRestaurant.dateChoosed == moment().format('MM/DD/YYYY')) resultsVm.chosenRestaurant = chosenRestaurant;
  	});
  }
}