describe('VoteController', () => {
    let voteController, scope, VoteService, RestaurantService, controller;

    beforeEach(() => {
      angular.mock.module('app.vote');

      inject(($rootScope, $controller, _VoteService_, _RestaurantService_) => {
        scope = $rootScope.$new();
        controller = $controller;
        
        VoteService = _VoteService_;
        RestaurantService = _RestaurantService_;

        voteController = controller('VoteController', {
          $scope: scope
        });

      });
    });

    describe('Testing vote', () => {
        it('Checking if vote function call VoteService.vote', () => {
          spyOn(VoteService, 'vote').and.callThrough();

          voteController.vote('123');

          expect(VoteService.vote).toHaveBeenCalledWith('123');
        });

        it('Checking if vote function show success when success came from server', () => {
          spyOn(VoteService, 'vote').and.callFake(() => {
            return {
              then: (callback) => {
                return callback({data: { }});
              }
            };
          });

          voteController.vote('123');

          expect(voteController.message.error).toEqual(false);
          expect(voteController.message.message).toEqual('Vote successfully accounted');
        });

        it('Checking if vote function show error when error came from server', () => {
          spyOn(VoteService, 'vote').and.callFake(() => {
            return {
              then: (callback) => {
                return callback({data: { error: true, message: 'Error test' }});
              }
            };
          });

          voteController.vote('123');

          expect(voteController.message.error).toEqual(true);
          expect(voteController.message.message).toEqual('Error test');
        });
    });

    describe('Testing message removal', () => {
        it('Checking if removeMessage clean message variable', () => {
          voteController.message = 'Error test';

          voteController.removeMessage();

          expect(voteController.message).toEqual(null);
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

          const newVoteController = controller('VoteController', {
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

          const newVoteController = controller('VoteController', {
            $scope: scope
          });

          expect(newVoteController.restaurants).toEqual([{id: '1', name: 'Restaurant 1', votes: 3}]);
        });
    });
});