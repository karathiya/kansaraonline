'use strict';

var family = require('./family.controller');

module.exports = function(router) {
	router.get('/families', family.getFamilies);
	router.get('/family/:id', family.getFamily);
	router.post('/family',family.createFamily);
	// router.delete('/test/question', test.deleteQuestion);
	// router.get('/test/questions', test.getQuestions);
	// router.get('/test/:id', test.get);
	// router.get('/test', test.getAll);
};
