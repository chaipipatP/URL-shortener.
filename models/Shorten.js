var mongoose = require('mongoose');
var config = require('../config.json');

mongoose.connect(config.mongo_host);
var schemaShorten = mongoose.Schema({
	_id: {type: Number},
	FullUrl: { type: String, default: "-" },
	CustomURL: { type: String, default: "-" }
});

var CounterSchema = mongoose.Schema({
	_id: {type: String, required: true},
	seq: { type: Number, default: 0 }
});

var counter = mongoose.model('counter', CounterSchema);
var Shorten = mongoose.model('Shorten', schemaShorten);

counter.create({  _id:"1"}, function (err, data) {
	
})

schemaShorten.pre('save', function(next){
	var doc = this;
	counter.findByIdAndUpdate({_id: '1'}, {$inc: {seq: 1} }, function(error, counter) {
		if (error)
			return next(error);
		doc._id = counter.seq;
		next();

	});
});



var Shorten = mongoose.model('Shorten', schemaShorten);

module.exports = Shorten;