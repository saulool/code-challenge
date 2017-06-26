require('babel-polyfill');

const express = require('express');
const app = express();
const Config = require('./config');
const conf = new Config();
const bodyParser = require('body-parser');
const schedulerService = require('./server/compiled/services/SchedulerService');

global.__base = __dirname + '/';

schedulerService.registerJobs();

app.use(function(req, res, next) {
  	res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, Authorization, Content-Type");
	next();
});

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

require(global.__base + 'server/compiled/routes/restaurant-routes')(app);
require(global.__base + 'server/compiled/routes/user-routes')(app);
require(global.__base + 'server/compiled/routes/vote-routes')(app);

app.use(express.static('.'));
app.use(express.static('/client/compiled'));

app.listen(conf.port, function () {
  console.log('Application started on port '+ conf.port);
});
