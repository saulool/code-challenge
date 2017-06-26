VoteService.$inject = ['$http'];

export default function VoteService($http){
  const voteSvc = this;

  voteSvc.vote = (restaurantId) => {
    return $http({
      method: 'POST',
      url: '/api/vote/' + restaurantId,
    });
  };
}