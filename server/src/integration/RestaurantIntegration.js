import Restaurant from '../../compiled/model/Restaurant';

module.exports = {
	getRestaurants
}

function getRestaurants(){
	let restaurants = [];

	restaurants.push(
		new Restaurant(1, 'Supremum', 'http://cdn1.buuteeq.com/upload/15686/d-13.jpg.694x520_default.jpg', 1),
		new Restaurant(2, 'Garcias', 'http://cdn-image.foodandwine.com/sites/default/files/styles/550x550/public/original-201408-HD-worlds-best-restaurant-views-kauai-grill.jpg?itok=yPfLjk6W', 3),
		new Restaurant(3, 'Trattoria Porto', 'https://secure.parksandresorts.wdpromedia.com/resize/mwImage/1/640/360/75/wdpromedia.disney.go.com/media/wdpro-assets/gallery/dining/animal-kingdom/tusker-house-restaurant/tusker-house-restaurant-gallery13.jpg?30122013114349', 0),
		new Restaurant(4, 'Solare', 'https://img.washingtonpost.com/wp-apps/imrs.php?src=https://img.washingtonpost.com/news/food/wp-content/uploads/sites/6/2017/03/caruso-s-mooresville-jpg-1490819704.jpg&w=480', 0),
		new Restaurant(5, 'Thêmis', 'https://file.videopolis.com/D/9dc9f4ba-0b2d-4cbb-979f-fee7be8a4198/8485.11521.brussels.the-hotel-brussels.amenity.restaurant-AD3WAP2L-13000-853x480.jpeg', 0),
		new Restaurant(6, 'Mandarinier', 'http://www.tate.org.uk/sites/default/files/styles/width-720/public/tm2famfr08.jpg?itok=PNtGXn3n', 0),
		new Restaurant(7, 'Mainau', 'https://media-cdn.tripadvisor.com/media/photo-s/02/42/82/29/la-villa-restaurant.jpg', 0),
		new Restaurant(8, 'Chola Guapa', 'https://media-cdn.tripadvisor.com/media/photo-s/06/c6/e4/7e/the-clink-restaurant.jpg', 0),
		new Restaurant(9, 'Piatto Grill', 'http://assets.bonappetit.com/photos/572bb7e6b3452a277d3ec1a0/master/w_625,c_limit/the-dabney-dc-restaurant.jpg', 10),
		new Restaurant(10, 'Pueblo', 'https://media-cdn.tripadvisor.com/media/photo-s/03/c4/95/72/carne-y-vino-restaurant.jpg', 0)
	);

	return restaurants; 
}