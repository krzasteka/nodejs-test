function companyController() {
	var Company = require('../models/companySchema');
	
	// Creating New Company
	this.createCompany = function (req, res, next) {
		var name = req.params.name;
		var email = req.params.email || null;
		var address = req.params.address;
		var phone = req.params.phone;
		var fax = req.params.fax || null; 
		var contact = req.params.contact;
		
		Company.create({name:name,email:email,address:address,phone:phone,fax:fax,contact:contact}, function(err, result) {
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

  	Companies.find({}, function(err, result) {
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