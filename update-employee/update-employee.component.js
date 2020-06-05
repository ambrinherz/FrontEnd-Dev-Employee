'use strict';

angular.module('updateEmployee').component('updateEmployee', {
	
	 templateUrl: 'tutorial/update-employee/update-employee.html',

	 controller: function updateEmployeeController($scope,TutorialSearchService) {

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

	 		TutorialSearchService.updateEmployee(employee, createGetAllemployeesCallback());

	 	}

	 	function createGetAllemployeesCallback() {
			return {
				onSuccess: function(employee) {
					$scope.employee = employee;
				
				},

				onError: function(response) {
					$scope.hasError = true;
					$scope.errorMessage = 'Error getting employee information. Perhaps the service is down';
				}
			};
		}
	 }


});