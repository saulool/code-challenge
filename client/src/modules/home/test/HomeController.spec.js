describe('HomeController', () => {
    let homeController, scope, controller, $interval;

    beforeEach(() => {
      angular.mock.module('app.home');

      inject(($rootScope, $controller, _$interval_) => {
        scope = $rootScope.$new();
        controller = $controller;

        $interval = _$interval_;

        homeController = controller('HomeController', {
          $scope: scope
        });

      });
    });

    describe('Testing startCountdown', () => {
        it('Checking if startCountdown call applyCountdown if noon have not passed yet...', () => {
          var $intervalSpy = jasmine.createSpy('$interval', $interval);
          const newHomeController = controller('HomeController', {
            $scope: scope
          });

          newHomeController.haveNoonPassed = false;
          newHomeController.hoursLeft = false;

          newHomeController.startCountdown();

          expect(newHomeController.hoursLeft).not.toEqual(false);

        });

        it('Checking if startCountdown call interval if noon have not passed yet...', () => {
          var $intervalSpy = jasmine.createSpy('$interval', $interval);
          const newHomeController = controller('HomeController', {
            $scope: scope,
            $interval: $intervalSpy
          });

          newHomeController.haveNoonPassed = false;
          newHomeController.hoursLeft = false;

          newHomeController.startCountdown();

          expect($intervalSpy).toHaveBeenCalled();

        });

        it('Checking if startCountdown dont call applyCountdown if noon have passed...', () => {
          homeController.haveNoonPassed = true;
          homeController.hoursLeft = false;

          homeController.startCountdown();

          expect(homeController.hoursLeft).toEqual(false);
        });
    });
});