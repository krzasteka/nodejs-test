module.exports = (function eloteroSchema(){
	var mongoose = require('../db').mongoose;

	var schema = {
	    name: {type: String},
		loc: {
			type: [Number],
			index: '2d'
		}
	};

	var collectionName = 'elotero';
	var eloteroSchema = mongoose.Schema(schema);
	var Elotero = mongoose.model(collectionName, eloteroSchema);

	return Elotero;
})();