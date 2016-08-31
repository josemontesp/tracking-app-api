const correoschile = require('correos-chile');
const chileexpress = require('chileexpress');
module.exports = function(codigo){

	return correoschile([codigo]).then(r=>{
		r = r[0];
		if (r != 'El numero de seguimiento no existe'){
			r['servicio'] = 'correoschile';
			return r;
		}else{
			console.log('se consulto a chileexpress');
			return chileexpress([codigo]);
		}
	}).then(r=>{
		if (r.servicio)
			return r;
		r = r[0];
		if (r != -1){
			console.log('se obtuvo respuesta de chileexpress');
			console.log(r);
			return r;
		}
		return false;
	})

	
}