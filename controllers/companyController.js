function companyController() {
	var Company = require('../models/companySchema');
	
	// Creating New Company
	this.createCompany = function (req, res, next) {
		var json = JSON.parse(req.body)
		Company.create(json, function(err, result) {
			if (err) {
				console.log(err);
				return res.send({'error':err});	
			}
			else {
				return res.send({'result':result,'status':'successfully saved'});
			}
		});
	};

  // Fetching Details of Company
  this.getCompanies = function (req, res, next) {

  	Company.find({}, function(err, result) {
  		if (err) {
  			console.log(err);
  			return res.send({'error':err}); 
  		}
  		else {
  			return res.send({'Companies ':result});
  		}
  	});
  };

  // Fetching Details of Company
  this.getCompany = function (req, res, next) {

  	Company.findOne({
		_id: req.params.id
	}, function(err, result) {
  		if (err) {
  			console.log(err);
  			return res.send({'error':err}); 
  		}
  		else {
  			return res.send({'Companies ':result});
  		}
  	});
  };

  return this;
};

module.exports = new companyController();