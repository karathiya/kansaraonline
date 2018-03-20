/* jshint -W106,-W033 */
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
var Member = require('./member.schema');
var _ = require('lodash');
var fs = require('fs');
var mongoXlsx = require('mongo-xlsx');

module.exports = {
	create: create,
	getAll: getAll,
	get: get,
	getByFamily: getByFamily
};

/////////////////////

function create(req, res) {
	Member.create(req.body, function(err, member) {
		if (err) {
			res.json(500, err);
		}
		res.json(member);
	});
}

function getAll(req, res) {
	Member.find({}, function(err, result) {
		if (err) {
			res.json(500, err);
		}
		res.json(result);
	});
}

function get(req, res) {
	Member.findOne({_id: req.query.id}, function(err, result) {
		if (err) {
			res.json(500, err);
		}
		res.json(result);
	});
}

function getByFamily(req, res) {
	Member.find({familyId: req.params.familyId}, function(err, result) {
		if (err) {
			res.json(500, err);
		}
		res.json(result);
	});
}

