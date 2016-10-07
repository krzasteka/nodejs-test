function eloteroController() {
	var Elotero = require('../models/eloteroSchema');
	
	// Creating New Elotero
	this.createElotero = function (req, res, next) {
		var json = JSON.parse(req.body)
		Elotero.create(json, function(err, result) {
			if (err) {
				console.log(err);
				return res.send({'error':err});	
			}
			else {
				return res.send({'result':result,'status':'successfully saved elotero'});
			}
		});
	};

  // Return all eloteros within a distance
  this.getEloteros = function (req, res, next) {
    var limit = req.query.limit || 10;

    // get the max distance or set it to 8 kilometers
    var maxDistance = req.query.distance || 8;

    // we need to convert the distance to radians
    // the raduis of Earth is approximately 6371 kilometers
    maxDistance /= 6371;

    // get coordinates [ <longitude> , <latitude> ]
    var coords = [];
    coords[0] = req.query.longitude;
    coords[1] = req.query.latitude;

  	// find a location
    Elotero.find({
      loc: {
        $near: coords,
        $maxDistance: maxDistance
      }
    }).limit(limit).exec(function(err, eloteros) {
      if (err) {
        return res.json(500, err);
      }

      res.json(200, eloteros);
    });

  };

  // Fetching Details of an elotero
  this.getElotero = function (req, res, next) {

  	Elotero.findOne({
		  _id: req.params.id
	   }, function(err, result) {
  		if (err) {
  			console.log(err);
  			return res.send({'error':err}); 
  		}
  		else {
  			return res.send({'Elotero: ':result});
  		}
  	});
  };

  //Delete 
  this.removeElotero = function (req, res, next) {

  	Elotero.remove({
		_id: req.params.id
	}, function(err, result) {
  		if (err) {
  			console.log(err);
  			return res.send({'error':err}); 
  		}
  		else {
  			return res.send({'Removed Elotero ':result});
  		}
  	});
  };  
  return this;
};

module.exports = new eloteroController();