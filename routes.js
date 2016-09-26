module.exports = function(app){

	var student = require('./controllers/studentController');
	app.get('/', function(req, res, next){
		return res.send("WELCOME TO REST API");
	});

	app.get('/getStudent', student.getStudent);
	app.post('/createStudent', student.createStudent);
};