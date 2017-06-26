route.$inject = ['$stateProvider', '$urlMatcherFactoryProvider'];

export default function route($stateProvider, $urlMatcherFactoryProvider) {
  $urlMatcherFactoryProvider.strictMode(false);

  $stateProvider
    .state('vote', {
        cache: false,
        url: '/vote',
        controller:'VoteController',
        controllerAs:'voteCtrl',
        template: require('./views/vote.html')
    })
    .state('results', {
        cache: false,
        url: '/results',
        controller:'ResultsController',
        controllerAs:'resultsCtrl',
        template: require('./views/results.html')
    });
}