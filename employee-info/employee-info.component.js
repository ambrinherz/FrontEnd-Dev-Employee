'use strict';

angular.module('employeeInfo').component('employeeInfo', {
	
	 templateUrl: 'tutorial/employee-info/employee-info.html',

	 controller: function EmployeeInfoController($scope,TutorialSearchService) {

	 	this.$onInit = function() {
			
		}

	 	$scope.test = 'Employee Search Results';
	

	 	$scope.buttonPressed = function(id,name){
	 		console.log("button is Pressed");
	 		
	 			TutorialSearchService.getAllemployees(id,name,createGetAllemployeesCallback());
	 


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