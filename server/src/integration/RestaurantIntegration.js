import Restaurant from '../../compiled/model/Restaurant';

module.exports = {
	getRestaurants
}

function getRestaurants(){
	let restaurants = [];

	restaurants.push(
		new Restaurant(1, 'Restaurant 1', 1),
		new Restaurant(2, 'Restaurant 2', 3),
		new Restaurant(3, 'Restaurant 3'),
		new Restaurant(4, 'Restaurant 4'),
		new Restaurant(5, 'Restaurant 5'),
		new Restaurant(6, 'Restaurant 6'),
		new Restaurant(7, 'Restaurant 7'),
		new Restaurant(8, 'Restaurant 8'),
		new Restaurant(9, 'Restaurant 9', 10),
		new Restaurant(10, 'Restaurant 10')
	);

	return restaurants; 
}