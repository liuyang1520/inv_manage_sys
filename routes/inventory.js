var express = require('express');
var router = express.Router();
var db = require("../db/connection");

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('tableList', { title: 'List '});
});

router.get('/tables/:tableName', function(req, res, next) {
	db.models[req.params['tableName']].findAll({raw: true})
	.then(
		function(results) {
			res.render('tableList', { title: req.params['tableName'], content: results});
		});
});

router.get('/tables/:tableName/:id(\\d+)', function(req, res, next) {
	db.models[req.params['tableName']].findAll({raw: true})
	.then(
		function(results) {
			res.render('tableList', { title: req.params['tableName'], content: results});
		});
});

router.get('/tables/:tableName/insert/', function(req, res, next) {
	db.models[req.params['tableName']].findAll({raw: true})
	.then(
		function(results) {
			res.render('tableList', { title: req.params['tableName'], content: results});
		});
});

module.exports = router;