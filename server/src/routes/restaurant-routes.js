import restaurantService from '../../compiled/services/RestaurantService';

module.exports = (app) => {
  app.get('/api/restaurants/', (req, res) => {
    let result = restaurantService.getRestaurants();

    res.send(result);
  });

  app.get('/api/restaurants/chosen', (req, res) => {
    let result = restaurantService.getChosenRestaurants(req);

    res.send(result);
  });
}