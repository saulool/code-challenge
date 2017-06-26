import '/client/src/less/vote.less';

import UIRouter from 'angular-ui-router';
import Routes from '/client/src/modules/vote/routes';
import VoteController from '/client/src/modules/vote/controller/VoteController';
import ResultsController from '/client/src/modules/vote/controller/ResultsController';
import VoteService from '/client/src/modules/vote/service/VoteService';
import RestaurantService from '/client/src/modules/vote/service/RestaurantService';

const Vote = angular.module('app.vote', [UIRouter]).
				config(Routes).
				controller('VoteController', VoteController).
				controller('ResultsController', ResultsController).
				service('VoteService', VoteService).
				service('RestaurantService', RestaurantService);

export default Vote.name;