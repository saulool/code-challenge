ResultsService.$inject = ['$http'];

export default function ResultsService($http){
  const resultsSvc = this;

  resultsSvc.getAllRestaurants = () => {
    return $http({
      method: 'GET',
      url: '/api/restaurants'
    });
  };

  resultsSvc.getChosenRestaurants = () => {
    return $http({
      method: 'GET',
      url: '/api/restaurants/chosen'
    });
  };
}