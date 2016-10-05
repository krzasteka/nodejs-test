module.exports = function(app){
	
	var company = require('./controllers/companyController');
	var workorder = require('./controllers/workorderController');
	app.get('/', function(req, res, next){
		return res.send("WELCOME TO REST API");
	});

	app.post('/createCompany', company.createCompany);
	app.get('/getCompanies', company.getCompanies);
	app.get('/getCompany/:id', company.getCompany);
	app.get('/removeCompany/:id', company.removeCompany);

	app.post('/createWorkorder', workorder.createWorkorder);
	app.get('/getWorkorders', workorder.getWorkorders);
	app.get('/getWorkorder/:id', workorder.getWorkorder);
	app.get('/removeWorkorder/:id', workorder.removeWorkorder);
};