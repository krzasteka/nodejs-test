module.exports = (function companySchema(){
	var mongoose = require('../db').mongoose;

	var schema = {
		name: {type: String, required: true},
		email:{type: String},
		address: {
			street:{type: String, required: true},
			unit:{type: String},
			city:{type: String, required: true},
			state:{type: String, required: true},
			zipcode:{type: String, required: true}
		},
		phone:{type: String, required: true}, 
		fax:{type: String},
		contact:[{
			name:{type: String, required: true},
			phone:{type: String}			
		}]
	};

	var collectionName = 'company';
	var companySchema = mongoose.Schema(schema);
	var Company = mongoose.model(collectionName, companySchema);

	return Company;
})();