var routes = {};
require('fs').readdirSync('./routes/').forEach(function(file) {
 	if (~file.indexOf('js')) 
 		routes[file.replace('.js','')] = require(__dirname + '/' +  file);
});

module.exports = routes;