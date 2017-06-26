route.$inject = ['$stateProvider', '$urlMatcherFactoryProvider'];

export default function route($stateProvider, $urlMatcherFactoryProvider) {
  $urlMatcherFactoryProvider.strictMode(false);

  $stateProvider
    .state('home', {
        cache: false,
        url: '/',
        controller:'HomeController',
        controllerAs:'homeCtrl',
        template: require('./views/home.html')
    });
}