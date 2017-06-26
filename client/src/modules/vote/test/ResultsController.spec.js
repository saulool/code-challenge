import timemachine from 'timemachine';

describe('ResultsController', () => {
    let resultsController, scope, RestaurantService, controller;

    beforeEach(() => {
      angular.mock.module('app.vote');

      inject(($rootScope, $controller, _RestaurantService_) => {
        scope = $rootScope.$new();
        controller = $controller;
        
        RestaurantService = _RestaurantService_;

        resultsController = controller('ResultsController', {
          $scope: scope
        });

      });
    });

    describe('Testing getAllRestaurants on load', () => {
        it('Checking if RestaurantService.getAllRestaurants is beeing called on page load', () => {
          
          spyOn(RestaurantService, 'getAllRestaurants').and.callFake(() => {
            return {
              then: (callback) => {
                return callback({data: [{id: '1', name: 'Restaurant 1', votes: 3}]});
              }
            };
          });

          const newResultsController = controller('ResultsController', {
            $scope: scope
          });

          expect(RestaurantService.getAllRestaurants).toHaveBeenCalled();
        });

        it('Checking if variable restaurants is populated with the return of RestaurantService.getAllRestaurants', () => {
          
          spyOn(RestaurantService, 'getAllRestaurants').and.callFake(() => {
            return {
              then: (callback) => {
                return callback({data: [{id: '1', name: 'Restaurant 1', votes: 3}]});
              }
            };
          });

          const newResultsController = controller('ResultsController', {
            $scope: scope
          });

          expect(newResultsController.restaurants).toEqual([{id: '1', name: 'Restaurant 1', votes: 3}]);
        });
    });

    describe('Testing getChosenRestaurants on load', () => {
        it('Checking if RestaurantService.getChosenRestaurants is beeing called on page load', () => {
          
          spyOn(RestaurantService, 'getChosenRestaurants').and.callFake(() => {
            return {
              then: (callback) => {
                return callback({data: [{id: '1', name: 'Restaurant 1', votes: 3, dateChoosed: '06/22/2017'}]});
              }
            };
          });

          const newResultsController = controller('ResultsController', {
            $scope: scope
          });

          expect(RestaurantService.getChosenRestaurants).toHaveBeenCalled();
        });

        it('Checking if variable chosenRestaurant is populated with the last element with same date of today that is returned by RestaurantService.getChosenRestaurants', () => {
          
          spyOn(RestaurantService, 'getChosenRestaurants').and.callFake(() => {
            return {
              then: (callback) => {
                return callback({data: [{id: '1', name: 'Restaurant 1', votes: 3, dateChoosed: '06/24/2017'}, {id: '2', name: 'Restaurant 2', votes: 7, dateChoosed: '06/25/2017'}]});
              }
            };
          });

          timemachine.config({
            dateString: 'June 25, 2017 12:00:59'
          });

          const newResultsController = controller('ResultsController', {
            $scope: scope
          });

          expect(newResultsController.chosenRestaurant).toEqual({id: '2', name: 'Restaurant 2', votes: 7, dateChoosed: '06/25/2017'});
          timemachine.reset();
        });

        it('Checking if variable chosenRestaurant is NOT populated with the last element with different date of today that is returned by RestaurantService.getChosenRestaurants', () => {
          
          spyOn(RestaurantService, 'getChosenRestaurants').and.callFake(() => {
            return {
              then: (callback) => {
                return callback({data: [{id: '1', name: 'Restaurant 1', votes: 3, dateChoosed: '06/24/2017'}, {id: '2', name: 'Restaurant 2', votes: 7, dateChoosed: '06/25/2017'}]});
              }
            };
          });

          timemachine.config({
            dateString: 'June 25, 2018 12:00:59'
          });

          const newResultsController = controller('ResultsController', {
            $scope: scope
          });

          expect(newResultsController.chosenRestaurant).toEqual(null);
          timemachine.reset();
        });
    });
});