'use strict';

var member = require('./member.controller');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});

module.exports = function(router) {
	router.post('/member', member.create);
	router.get('/members', member.getAll);
	router.get('/familyMembers/:familyId',member.getByFamily);
	// router.get('/question/next', question.getNext);
	// router.get('/questions', question.getAll);
	// router.get('/search/question', question.getSerchResult);
	// router.get('/question/:id/answer/:answerId', question.getResult);
	// router.post('/question/file', upload.single('file'), question.postFile);
};
