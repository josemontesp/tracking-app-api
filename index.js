var express = require('express'),
// mongoose = require('mongoose'),
routes = require('./routes'),//configura los callbacks de las rutas de la api
// models = require('./models');//define los modelos de la base de datos
// mongoose.Promise = require('bluebird'),
colors = require('colors');


//Connecting to the db
// mongoose.connect('mongodb://josemontesp:qwertyuiop@ds011963.mlab.com:11963/pepperoni', e => {
//     (e) ? console.log('error de login base de datos: %s', e): console.log('Base de datos online');
// });


//EXPRESS
var app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(function(req, res, next) {
	console.log('requested '.green, req.path.bold.green, ' with params:'.green, JSON.stringify(req.query).green);
    next();
});

//trackea un codigo
app.post('/track', routes.track);



//Server init
var port = Number(process.env.PORT || 3000);
var server = app.listen(port, function () {
    var port = server.address().port;
  console.log('Tracking app listening on port ' + port);
});



