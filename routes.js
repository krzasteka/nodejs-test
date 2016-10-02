module.exports = function(app){
	
	var company = require('./controllers/companyController');
	app.get('/', function(req, res, next){
		return res.send("WELCOME TO REST API");
	});

	app.get('/getCompanies', company.getCompanies);
	app.post('/createCompany', company.createCompany);
};