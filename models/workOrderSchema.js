module.exports = (function workOrderSchema(){
	var mongoose = require('../db').mongoose;

	var schema = {
		date:{type: Date, default: Date.now},
		job_name: {type: String, required: true},
		address: {
			street:{type: String, required: true},
			unit:{type: String},
			city:{type: String, required: true},
			state:{type: String, required: true},
			zipcode:{type: String, required: true}
		},
		phone:{type: String, required: true},
		client:{type: String, required: true},
		contact:[{
			name:{type: String, required: true},
			phone:{type: String}			
		}],
		data:
			[{
				name:{type: String},
				value:{type: Array}
			}],
		notes:{type: Array},
		remarks:{type: String}
	};

	var collectionName = 'wordkorder';
	var workOrderSchema = mongoose.Schema(schema);
	var WorkOrder = mongoose.model(collectionName, workOrderSchema);

	return Company;
})();