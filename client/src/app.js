import UIRouter from 'angular-ui-router';
import '/client/src/less/master.less';

import Vote from '/client/src/modules/vote';
import Home from '/client/src/modules/home';

angular.
module('app', [Vote, Home, UIRouter]);