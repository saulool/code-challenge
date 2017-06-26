import voteService from '../services/VoteService';
import restaurantService from '../services/RestaurantService';

module.exports = (app) => {
  app.post('/api/vote/:restaurantId/',(req, res) => {
    let result = voteService.saveVote(0, req.params.restaurantId);

    res.send(result);
  });
}