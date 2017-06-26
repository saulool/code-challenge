import restaurantService from './RestaurantService';
import timemachine from 'timemachine';

describe("Testing RestaurantService", () => {
  it("Testing getRestaurants", () => {
    let restaurants = restaurantService.getRestaurants();

    expect(restaurants).toEqual([ { id : 1, name : 'Supremum', votes : 1, image : 'http://cdn1.buuteeq.com/upload/15686/d-13.jpg.694x520_default.jpg' }, { id : 2, name : 'Garcias', votes : 3, image : 'http://cdn-image.foodandwine.com/sites/default/files/styles/550x550/public/original-201408-HD-worlds-best-restaurant-views-kauai-grill.jpg?itok=yPfLjk6W' }, { id : 3, name : 'Trattoria Porto', votes : 0, image : 'https://secure.parksandresorts.wdpromedia.com/resize/mwImage/1/640/360/75/wdpromedia.disney.go.com/media/wdpro-assets/gallery/dining/animal-kingdom/tusker-house-restaurant/tusker-house-restaurant-gallery13.jpg?30122013114349' }, { id : 4, name : 'Solare', votes : 0, image : 'https://img.washingtonpost.com/wp-apps/imrs.php?src=https://img.washingtonpost.com/news/food/wp-content/uploads/sites/6/2017/03/caruso-s-mooresville-jpg-1490819704.jpg&w=480' }, { id : 5, name : 'Thêmis', votes : 0, image : 'https://file.videopolis.com/D/9dc9f4ba-0b2d-4cbb-979f-fee7be8a4198/8485.11521.brussels.the-hotel-brussels.amenity.restaurant-AD3WAP2L-13000-853x480.jpeg' }, { id : 6, name : 'Mandarinier', votes : 0, image : 'http://www.tate.org.uk/sites/default/files/styles/width-720/public/tm2famfr08.jpg?itok=PNtGXn3n' }, { id : 7, name : 'Mainau', votes : 0, image : 'https://media-cdn.tripadvisor.com/media/photo-s/02/42/82/29/la-villa-restaurant.jpg' }, { id : 8, name : 'Chola Guapa', votes : 0, image : 'https://media-cdn.tripadvisor.com/media/photo-s/06/c6/e4/7e/the-clink-restaurant.jpg' }, { id : 9, name : 'Piatto Grill', votes : 10, image : 'http://assets.bonappetit.com/photos/572bb7e6b3452a277d3ec1a0/master/w_625,c_limit/the-dabney-dc-restaurant.jpg' }, { id : 10, name : 'Pueblo', votes : 0, image : 'https://media-cdn.tripadvisor.com/media/photo-s/03/c4/95/72/carne-y-vino-restaurant.jpg' } ]);
  });

  it("Testing addVote", () => {
    let restaurants = restaurantService.getRestaurants();

    restaurantService.addVote(1);

    expect(restaurants).toEqual([ { id : 1, name : 'Supremum', votes : 2, image : 'http://cdn1.buuteeq.com/upload/15686/d-13.jpg.694x520_default.jpg' }, { id : 2, name : 'Garcias', votes : 3, image : 'http://cdn-image.foodandwine.com/sites/default/files/styles/550x550/public/original-201408-HD-worlds-best-restaurant-views-kauai-grill.jpg?itok=yPfLjk6W' }, { id : 3, name : 'Trattoria Porto', votes : 0, image : 'https://secure.parksandresorts.wdpromedia.com/resize/mwImage/1/640/360/75/wdpromedia.disney.go.com/media/wdpro-assets/gallery/dining/animal-kingdom/tusker-house-restaurant/tusker-house-restaurant-gallery13.jpg?30122013114349' }, { id : 4, name : 'Solare', votes : 0, image : 'https://img.washingtonpost.com/wp-apps/imrs.php?src=https://img.washingtonpost.com/news/food/wp-content/uploads/sites/6/2017/03/caruso-s-mooresville-jpg-1490819704.jpg&w=480' }, { id : 5, name : 'Thêmis', votes : 0, image : 'https://file.videopolis.com/D/9dc9f4ba-0b2d-4cbb-979f-fee7be8a4198/8485.11521.brussels.the-hotel-brussels.amenity.restaurant-AD3WAP2L-13000-853x480.jpeg' }, { id : 6, name : 'Mandarinier', votes : 0, image : 'http://www.tate.org.uk/sites/default/files/styles/width-720/public/tm2famfr08.jpg?itok=PNtGXn3n' }, { id : 7, name : 'Mainau', votes : 0, image : 'https://media-cdn.tripadvisor.com/media/photo-s/02/42/82/29/la-villa-restaurant.jpg' }, { id : 8, name : 'Chola Guapa', votes : 0, image : 'https://media-cdn.tripadvisor.com/media/photo-s/06/c6/e4/7e/the-clink-restaurant.jpg' }, { id : 9, name : 'Piatto Grill', votes : 10, image : 'http://assets.bonappetit.com/photos/572bb7e6b3452a277d3ec1a0/master/w_625,c_limit/the-dabney-dc-restaurant.jpg' }, { id : 10, name : 'Pueblo', votes : 0, image : 'https://media-cdn.tripadvisor.com/media/photo-s/03/c4/95/72/carne-y-vino-restaurant.jpg' } ]);
  });

  it("Testing findRestaurant", () => {
    let restaurant = restaurantService.findRestaurant(2);

    expect(restaurant).toEqual({ id : 2, name : 'Garcias', votes : 3, image : 'http://cdn-image.foodandwine.com/sites/default/files/styles/550x550/public/original-201408-HD-worlds-best-restaurant-views-kauai-grill.jpg?itok=yPfLjk6W' });
  });

  it("Testing chooseRestaurant", () => {
    timemachine.config({
      dateString: 'June 25, 2017 12:00:59'
    });

    restaurantService.chooseRestaurant();

    let restaurants = restaurantService.getRestaurants();
    let restaurantsChosen = restaurantService.getChosenRestaurants();

    expect(restaurantsChosen).toEqual([ { id : 9, name : 'Piatto Grill', votes : 10, image : 'http://assets.bonappetit.com/photos/572bb7e6b3452a277d3ec1a0/master/w_625,c_limit/the-dabney-dc-restaurant.jpg', dateChoosed : '06/25/2017' } ]);
    expect(restaurants).toEqual([ { id : 1, name : 'Supremum', votes : 2, image : 'http://cdn1.buuteeq.com/upload/15686/d-13.jpg.694x520_default.jpg' }, { id : 2, name : 'Garcias', votes : 3, image : 'http://cdn-image.foodandwine.com/sites/default/files/styles/550x550/public/original-201408-HD-worlds-best-restaurant-views-kauai-grill.jpg?itok=yPfLjk6W' }, { id : 3, name : 'Trattoria Porto', votes : 0, image : 'https://secure.parksandresorts.wdpromedia.com/resize/mwImage/1/640/360/75/wdpromedia.disney.go.com/media/wdpro-assets/gallery/dining/animal-kingdom/tusker-house-restaurant/tusker-house-restaurant-gallery13.jpg?30122013114349' }, { id : 4, name : 'Solare', votes : 0, image : 'https://img.washingtonpost.com/wp-apps/imrs.php?src=https://img.washingtonpost.com/news/food/wp-content/uploads/sites/6/2017/03/caruso-s-mooresville-jpg-1490819704.jpg&w=480' }, { id : 5, name : 'Thêmis', votes : 0, image : 'https://file.videopolis.com/D/9dc9f4ba-0b2d-4cbb-979f-fee7be8a4198/8485.11521.brussels.the-hotel-brussels.amenity.restaurant-AD3WAP2L-13000-853x480.jpeg' }, { id : 6, name : 'Mandarinier', votes : 0, image : 'http://www.tate.org.uk/sites/default/files/styles/width-720/public/tm2famfr08.jpg?itok=PNtGXn3n' }, { id : 7, name : 'Mainau', votes : 0, image : 'https://media-cdn.tripadvisor.com/media/photo-s/02/42/82/29/la-villa-restaurant.jpg' }, { id : 8, name : 'Chola Guapa', votes : 0, image : 'https://media-cdn.tripadvisor.com/media/photo-s/06/c6/e4/7e/the-clink-restaurant.jpg' }, { id : 10, name : 'Pueblo', votes : 0, image : 'https://media-cdn.tripadvisor.com/media/photo-s/03/c4/95/72/carne-y-vino-restaurant.jpg' } ]);
    timemachine.reset();
  });

  it("Testing clearVotes", () => {
    restaurantService.clearVotes();

    let restaurants = restaurantService.getRestaurants();

    expect(restaurants).toEqual([ { id : 1, name : 'Supremum', votes : 0, image : 'http://cdn1.buuteeq.com/upload/15686/d-13.jpg.694x520_default.jpg' }, { id : 2, name : 'Garcias', votes : 0, image : 'http://cdn-image.foodandwine.com/sites/default/files/styles/550x550/public/original-201408-HD-worlds-best-restaurant-views-kauai-grill.jpg?itok=yPfLjk6W' }, { id : 3, name : 'Trattoria Porto', votes : 0, image : 'https://secure.parksandresorts.wdpromedia.com/resize/mwImage/1/640/360/75/wdpromedia.disney.go.com/media/wdpro-assets/gallery/dining/animal-kingdom/tusker-house-restaurant/tusker-house-restaurant-gallery13.jpg?30122013114349' }, { id : 4, name : 'Solare', votes : 0, image : 'https://img.washingtonpost.com/wp-apps/imrs.php?src=https://img.washingtonpost.com/news/food/wp-content/uploads/sites/6/2017/03/caruso-s-mooresville-jpg-1490819704.jpg&w=480' }, { id : 5, name : 'Thêmis', votes : 0, image : 'https://file.videopolis.com/D/9dc9f4ba-0b2d-4cbb-979f-fee7be8a4198/8485.11521.brussels.the-hotel-brussels.amenity.restaurant-AD3WAP2L-13000-853x480.jpeg' }, { id : 6, name : 'Mandarinier', votes : 0, image : 'http://www.tate.org.uk/sites/default/files/styles/width-720/public/tm2famfr08.jpg?itok=PNtGXn3n' }, { id : 7, name : 'Mainau', votes : 0, image : 'https://media-cdn.tripadvisor.com/media/photo-s/02/42/82/29/la-villa-restaurant.jpg' }, { id : 8, name : 'Chola Guapa', votes : 0, image : 'https://media-cdn.tripadvisor.com/media/photo-s/06/c6/e4/7e/the-clink-restaurant.jpg' }, { id : 10, name : 'Pueblo', votes : 0, image : 'https://media-cdn.tripadvisor.com/media/photo-s/03/c4/95/72/carne-y-vino-restaurant.jpg' } ]);
  });

  it("Testing clearChosenRestaurants", () => {
    restaurantService.clearChosenRestaurants();

    let chosenRestaurants = restaurantService.getChosenRestaurants();
    let restaurants = restaurantService.getRestaurants();

    expect(restaurants).toEqual([ { id : 1, name : 'Supremum', votes : 1, image : 'http://cdn1.buuteeq.com/upload/15686/d-13.jpg.694x520_default.jpg' }, { id : 2, name : 'Garcias', votes : 3, image : 'http://cdn-image.foodandwine.com/sites/default/files/styles/550x550/public/original-201408-HD-worlds-best-restaurant-views-kauai-grill.jpg?itok=yPfLjk6W' }, { id : 3, name : 'Trattoria Porto', votes : 0, image : 'https://secure.parksandresorts.wdpromedia.com/resize/mwImage/1/640/360/75/wdpromedia.disney.go.com/media/wdpro-assets/gallery/dining/animal-kingdom/tusker-house-restaurant/tusker-house-restaurant-gallery13.jpg?30122013114349' }, { id : 4, name : 'Solare', votes : 0, image : 'https://img.washingtonpost.com/wp-apps/imrs.php?src=https://img.washingtonpost.com/news/food/wp-content/uploads/sites/6/2017/03/caruso-s-mooresville-jpg-1490819704.jpg&w=480' }, { id : 5, name : 'Thêmis', votes : 0, image : 'https://file.videopolis.com/D/9dc9f4ba-0b2d-4cbb-979f-fee7be8a4198/8485.11521.brussels.the-hotel-brussels.amenity.restaurant-AD3WAP2L-13000-853x480.jpeg' }, { id : 6, name : 'Mandarinier', votes : 0, image : 'http://www.tate.org.uk/sites/default/files/styles/width-720/public/tm2famfr08.jpg?itok=PNtGXn3n' }, { id : 7, name : 'Mainau', votes : 0, image : 'https://media-cdn.tripadvisor.com/media/photo-s/02/42/82/29/la-villa-restaurant.jpg' }, { id : 8, name : 'Chola Guapa', votes : 0, image : 'https://media-cdn.tripadvisor.com/media/photo-s/06/c6/e4/7e/the-clink-restaurant.jpg' }, { id : 9, name : 'Piatto Grill', votes : 10, image : 'http://assets.bonappetit.com/photos/572bb7e6b3452a277d3ec1a0/master/w_625,c_limit/the-dabney-dc-restaurant.jpg' }, { id : 10, name : 'Pueblo', votes : 0, image : 'https://media-cdn.tripadvisor.com/media/photo-s/03/c4/95/72/carne-y-vino-restaurant.jpg' } ]);
    expect(chosenRestaurants).toEqual([]);
  });
});