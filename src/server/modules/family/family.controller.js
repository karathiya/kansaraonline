var Family = require('./family.schema');
var Member = require('../member/member.schema');

module.exports = {
	// create: create,
	// get: get,
	// getAll: getAll,
	// addQuestion: addQuestion,
	getFamilies: getFamilies,
	getFamily: getFamily,
	createFamily: createFamily
};

/////////////////////

// function create(req, res) {
// 	Test.create(req.body, function(err, question) {
// 		if (err) {
// 			res.json(500, err);
// 		}
// 		res.json(question);
// 	});
// }

// function addQuestion(req, res) {
// 	Test.findOne({_id: req.body.testId}, function(err, test) {
// 		if (err) {
// 			res.json(500, err);
// 		}

// 		if ((test.questions).indexOf(req.body.questionId) <= -1) {
// 			test.questions.push(req.body.questionId);
// 			test.save();
// 		}

// 		Question.findOne({_id: req.body.questionId}, function(err, result) {
// 			if (err) {
// 				res.json(500, err);
// 			}
// 			res.json(result);
// 		});
// 	});
// }

// function deleteQuestion(req, res) {
// 	Test.findOne({_id: req.query.testId}, function(err, test) {
// 		if (err) {
// 			res.json(500, err);
// 		}
// 		console.log(req.query.testId);
// 		console.log(test);
// 		test.questions.splice(test.questions.indexOf(req.query.questionId), 1);
// 		test.save();

// 		Question.findOne({_id: req.query.questionId}, function(err, result) {
// 			if (err) {
// 				res.json(500, err);
// 			}
// 			res.json(result);
// 		});
// 	});
// }

// function getQuestions(req, res) {
// 	Test.findOne({_id: req.query.testId})
// 		.populate('questions')
// 		.exec(function(err, test) {
// 			if (err) {
// 				res.json(500, err);
// 			}
// 			res.json(test.questions);
// 		});
// }

function getFamily(req, res) {
	Family.findOne({_id: req.params.id}, function(err, family) {
		if (err) {
			res.json(500, err);
		}
		res.json(family);
	});
}

function getFamilies(req, res) {
	Family.find({}, function(err, family) {
		if (err) {
			res.json(500, err);
			console.log("***********Error")
		}
		res.json(family);
		
	});
}
function createFamily(req, res) {
	console.log('called family create');
	//req.body.activateToken = randtoken.generate(16);

	Family.findOne({email: req.body.email}, function(err, family) {
		if (err) {
			res.json(500, err);
		}

		if (family) {
			res.json(400, {
				code: 'FAMILY_WITH_EMAIL_ALREADY_REGISTERED',
				message: 'This email is already registered with a family. Please try login.'
			});
		} 
		else {
			Family.create(req.body, function(err, family) {
				if (err) {
					res.json(500, err);
				}
				res.json(family);
			});
		}
	});
}
