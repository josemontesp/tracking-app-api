var correos = require('./../correos.js');
module.exports = function (req, res) {
	console.log('resolving...')
	if (!req.query.codigo)
		res.status(404).send('Not found');
    correos(req.query.codigo).then(r=>{
    	console.log('finished!');
    	console.log(r);
    	if (r)
    		res.send(r);
    	else
    		res.status(404).send('Not found');
    })
}