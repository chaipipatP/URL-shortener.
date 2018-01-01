var express = require('express');
var router = express.Router();
var b59 = require('../models/b59EncodeDecode');
var Shorten = require('../models/Shorten');

router.get('/', function(req, res, next) {
	res.render('index', {  });
});


router.get('/:code', function(req, res, next) {
	var code = req.params.code;
	Shorten.findOne({'CustomURL': code}, function(err, data){
		if(data){
			res.redirect("http://"+data.FullUrl);
		}else{
			Urldecode =  b59.decode(code);
			console.log(Urldecode);
			Shorten.findOne({'_id': Urldecode}, function(err, data){
				if(data){
					res.redirect("http://"+data.FullUrl);
				}else{
					res.redirect("/");
				}
			});
		}
	});
});
module.exports = router;
