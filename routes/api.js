var express = require('express');
var router = express.Router();
var b59 = require('../models/b59EncodeDecode');
var Shorten = require('../models/Shorten');


router.post('/submit', function(req, res){
	var FullUrl = req.body.FullUrl;
	var IsCustomUrl=Number(req.body.IsCustomUrl);
	var CustomURL=req.body.CustomURL;
	var ReturnURL = '';
	var error = '';
	var deta_findOne={};
	var deta_create={};
	if(IsCustomUrl){
		deta_findOne={CustomURL:CustomURL};
	}else{
		deta_findOne={FullUrl:FullUrl};
	}

	Shorten.findOne(deta_findOne, function (err,find_data){

		if (find_data){
			if(IsCustomUrl){
				error =  "The custom alias you've chosen is not available.";
			}else{
				ReturnURL =  b59.encode(find_data._id);
			}
			console.log(ReturnURL);
			res.send({'FullUrl': ReturnURL,'error':error});
		}else{
			if(CustomURL){
				deta_create={  FullUrl:FullUrl,CustomURL:CustomURL};
			}else{
				deta_create={  FullUrl:FullUrl};
			}
			Shorten.create(deta_create, function (err,create_data) {
				if(IsCustomUrl){
					ReturnURL =  CustomURL;
				}else{
					ReturnURL =  b59.encode(create_data._id);
				}
				console.log(ReturnURL);
				res.send({'FullUrl': ReturnURL,'error':''});
			})
		}
	})


});

module.exports = router;
