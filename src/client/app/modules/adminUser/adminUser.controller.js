(function() {
	'use strict';

	angular
		.module('admin.user')
		.controller('AdminUserController', AdminUserController);

	/* @ngInject */
	function AdminUserController(logger, $http, $state, session) {
		var vm = this;
		vm.title = 'AdminQuestionController';
		vm.user = JSON.parse(session.get('user'));
		vm.addTest = addTest;
		vm.createTestForCandidate = createTestForCandidate;
		vm.showTestReport = showTestReport;
		vm.deleteTest = deleteTest;
		vm.getFamilyDetails = getFamilyDetails;

		$http.get('/api/families')
			.then(function(data) {
				vm.families = data.data;
			});
		// $http.get('/api/familyMembers/' + vm.families._id)
		// 	.then(function(data) {
		// 		vm.familyMembers = data.data;
		// 	});

		$http.get('/api/test')
			.then(function(data) {
				vm.tests = data.data;
			});

		$http.get('/api/user/' + vm.user._id + '/tests')
			.then(function(data) {
				vm.userTests = data.data;
			});

		///////////////

		function addTest() {
			$state.go('adminTest', {
				testName: vm.test.name,
				userId: vm.user._id
			});
		}

		function deleteTest(testId) {
			$http.delete('api/userTest/' + testId + '/delete')
				.then(function() {
					_.remove(vm.userTests, function(n) {
						return n._id === testId;
					});
				})
		}
		function getFamilyDetails(familyId){
			console.log("inside*************")
			$http.get('/api/familyMembers/'+familyId)
		 	.then(function(data) {
				 vm.familyMembers = data.data;
				 console.log("************"+vm.familyMembers);
		 	});
		};

		function createTestForCandidate() {
			var request = {
				name: vm.testName,
				testId: vm.candidate.test,
				email: vm.candidate.email,
				firstName: vm.candidate.firstName,
				lastName: vm.candidate.lastName,
				creator: vm.user._id,
				type: vm.candidate.testType
			};

			if (vm.candidate.testType === 'smart') {
				request.primaryTags = _.map(vm.candidate.primarySmartTags, function(tag) {
					return tag.text;
				});
			}

			$http.post('/api/userTest', request)
				.then(createTestSuccess)
				.catch(createTestFailure);

			function createTestSuccess(test) {
				var data = test.data;
				$http.post('/api/user/test', {
						userId: vm.user._id,
						testId: data._id
					})
					.then(function() {
						vm.userTests.unshift(data);
						logger.info('User test created successfully');
					});
			}

			function createTestFailure(err) {
				console.log(err);
			}
		}

		function showTestReport(testId) {
			$state.go('adminTestReport', {
				id: testId
			});
		}
	}

})();
