function workorderController() {
	var Workorder = require('../models/workorderSchema');
	
	// Creating New Workorder
	this.createWorkorder = function (req, res, next) {
		var json = JSON.parse(req.body)
		Workorder.create(json, function(err, result) {
			if (err) {
				console.log(err);
				return res.send({'error':err});	
			}
			else {
				return res.send({'result':result,'status':'successfully saved'});
			}
		});
	};

  // Return all companies
  this.getWorkorders = function (req, res, next) {

  	Workorder.find({}, function(err, result) {
  		if (err) {
  			console.log(err);
  			return res.send({'error':err}); 
  		}
  		else {
  			return res.send({'Companies ':result});
  		}
  	});
  };

  // Fetching Details of Workorder
  this.getWorkorder = function (req, res, next) {

  	Workorder.findOne({
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

  //Delete 
  this.removeWorkorder = function (req, res, next) {

  	Workorder.remove({
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

module.exports = new workorderController();