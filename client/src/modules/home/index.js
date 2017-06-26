import '/client/src/less/home.less';

import UIRouter from 'angular-ui-router';
import Routes from '/client/src/modules/home/routes';
import HomeController from '/client/src/modules/home/controller/HomeController';

const Home = angular.module('app.home', [UIRouter]).
				config(Routes).
				controller('HomeController', HomeController);

export default Home.name;