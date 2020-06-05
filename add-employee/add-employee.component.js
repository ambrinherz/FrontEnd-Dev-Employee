'use strict';

angular.module('addEmployee').component('addEmployee', {
	
	 templateUrl: 'tutorial/add-employee/add-employee.html',

	 controller: function addEmployeeController($scope,TutorialSearchService) {

	 	this.$onInit = function() {
			
		}

	
	 	$scope.buttonPressed = function(id, name, dob, salaryId){
	 		console.log("button is Pressed");
	 		let employee = {
	 			id: id,
	 			name: name,
	 			dob: dob,
	 			salaryId: salaryId
	 		};

	 		TutorialSearchService.addEmployee(employee, createGetAllemployeesCallback());

	 	}

	 	function createGetAllemployeesCallback() {
			return {
				onSuccess: function(response) {
					$scope.response = response.data;
				},

				onError: function(response) {
					$scope.hasError = true;
					$scope.errorMessage = 'Error getting employee information. Perhaps the service is down';
				}
			};
		}
	 }


});