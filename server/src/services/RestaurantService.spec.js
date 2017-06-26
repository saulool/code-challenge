import restaurantService from './RestaurantService';
import timemachine from 'timemachine';

describe("Testing RestaurantService", () => {
  it("Testing getRestaurants", () => {
    let restaurants = restaurantService.getRestaurants();

    expect(restaurants).toEqual([{ id: 1, name: 'Restaurant 1', votes: 1 }, { id: 2, name: 'Restaurant 2', votes: 3 }, { id: 3, name: 'Restaurant 3', votes: 0 }, { id: 4, name: 'Restaurant 4', votes: 0 }, { id: 5, name: 'Restaurant 5', votes: 0 }, { id: 6, name: 'Restaurant 6', votes: 0 }, { id: 7, name: 'Restaurant 7', votes: 0 }, { id: 8, name: 'Restaurant 8', votes: 0 }, { id: 9, name: 'Restaurant 9', votes: 10 }, { id: 10, name: 'Restaurant 10', votes: 0 } ]);
  });

  it("Testing addVote", () => {
    let restaurants = restaurantService.getRestaurants();

    restaurantService.addVote(1);

    expect(restaurants).toEqual([{ id: 1, name: 'Restaurant 1', votes: 2 }, { id: 2, name: 'Restaurant 2', votes: 3 }, { id: 3, name: 'Restaurant 3', votes: 0 }, { id: 4, name: 'Restaurant 4', votes: 0 }, { id: 5, name: 'Restaurant 5', votes: 0 }, { id: 6, name: 'Restaurant 6', votes: 0 }, { id: 7, name: 'Restaurant 7', votes: 0 }, { id: 8, name: 'Restaurant 8', votes: 0 }, { id: 9, name: 'Restaurant 9', votes: 10 }, { id: 10, name: 'Restaurant 10', votes: 0 } ]);
  });

  it("Testing findRestaurant", () => {
    let restaurant = restaurantService.findRestaurant(2);

    expect(restaurant).toEqual({ id: 2, name: 'Restaurant 2', votes: 3 });
  });

  it("Testing chooseRestaurant", () => {
    timemachine.config({
      dateString: 'June 25, 2017 12:00:59'
    });

    restaurantService.chooseRestaurant();

    let restaurants = restaurantService.getRestaurants();
    let restaurantsChosen = restaurantService.getChosenRestaurants();

    expect(restaurantsChosen).toEqual([{ id: 9, name: 'Restaurant 9', votes: 10, dateChoosed: '06/25/2017' }]);
    expect(restaurants).toEqual([{ id: 1, name: 'Restaurant 1', votes: 2 }, { id: 2, name: 'Restaurant 2', votes: 3 }, { id: 3, name: 'Restaurant 3', votes: 0 }, { id: 4, name: 'Restaurant 4', votes: 0 }, { id: 5, name: 'Restaurant 5', votes: 0 }, { id: 6, name: 'Restaurant 6', votes: 0 }, { id: 7, name: 'Restaurant 7', votes: 0 }, { id: 8, name: 'Restaurant 8', votes: 0 }, { id: 10, name: 'Restaurant 10', votes: 0 } ]);
    timemachine.reset();
  });

  it("Testing clearVotes", () => {
    restaurantService.clearVotes();

    let restaurants = restaurantService.getRestaurants();

    expect(restaurants).toEqual([{ id: 1, name: 'Restaurant 1', votes: 0 }, { id: 2, name: 'Restaurant 2', votes: 0 }, { id: 3, name: 'Restaurant 3', votes: 0 }, { id: 4, name: 'Restaurant 4', votes: 0 }, { id: 5, name: 'Restaurant 5', votes: 0 }, { id: 6, name: 'Restaurant 6', votes: 0 }, { id: 7, name: 'Restaurant 7', votes: 0 }, { id: 8, name: 'Restaurant 8', votes: 0 }, { id: 10, name: 'Restaurant 10', votes: 0 } ]);
  });

  it("Testing clearChosenRestaurants", () => {
    restaurantService.clearChosenRestaurants();

    let chosenRestaurants = restaurantService.getChosenRestaurants();
    let restaurants = restaurantService.getRestaurants();

    expect(restaurants).toEqual([{ id: 1, name: 'Restaurant 1', votes: 1 }, { id: 2, name: 'Restaurant 2', votes: 3 }, { id: 3, name: 'Restaurant 3', votes: 0 }, { id: 4, name: 'Restaurant 4', votes: 0 }, { id: 5, name: 'Restaurant 5', votes: 0 }, { id: 6, name: 'Restaurant 6', votes: 0 }, { id: 7, name: 'Restaurant 7', votes: 0 }, { id: 8, name: 'Restaurant 8', votes: 0 }, { id: 9, name: 'Restaurant 9', votes: 10 }, { id: 10, name: 'Restaurant 10', votes: 0 } ]);
    expect(chosenRestaurants).toEqual([]);
  });
});