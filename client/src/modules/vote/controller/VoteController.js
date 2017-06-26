VoteController.$inject = ['RestaurantService', 'VoteService'];

export default function VoteController(RestaurantService, VoteService) {
  const voteVm = this;

  voteVm.restaurants = [];
  voteVm.message = null;

  voteVm.vote = vote;
  voteVm.removeMessage = removeMessage;

  getAllRestaurants();

  function getAllRestaurants(){
  	RestaurantService.getAllRestaurants().then(processRestaurantsReponse);
  }

  function vote(restaurantId){
    VoteService.vote(restaurantId).then(processVoteResponse);
  }

  function processRestaurantsReponse(response){
    voteVm.restaurants = response.data;
  }

  function processVoteResponse(response){
    if(response.data.error){
      voteVm.message = {
        error: true,
        message: response.data.message
      }
    }else{
      voteVm.message = {
        error: false,
        message: 'Vote successfully accounted'
      }
    }
  }

  function removeMessage(){
    voteVm.message = null;
  }
}