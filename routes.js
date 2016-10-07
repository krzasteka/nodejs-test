module.exports = function(app){
	
	var elotero = require('./controllers/eloteroController');

	app.get('/', function(req, res, next){
		return res.send("Yo soy eloteros!");
	});

	app.post('/createElotero', elotero.createElotero);
	app.get('/getEloteros', elotero.getEloteros);
	app.get('/getElotero/:id', elotero.getElotero);
	app.get('/removeElotero/:id', elotero.removeElotero);

};