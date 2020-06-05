'use strict';

angular.module('deleteEmployee').component('deleteEmployee', {
	
	 templateUrl: 'tutorial/delete-employee/delete-employee.html',

	 controller: function deleteEmployeeController($scope,TutorialSearchService) {

	 	this.$onInit = function() {
			
		}


	 	$scope.buttonPressed = function(id){
	 		console.log("button is Pressed");
	 			TutorialSearchService.deleteEmployee(id,createGetAllemployeesCallback());

	 	}

	 	function createGetAllemployeesCallback() {
			return {
				onSuccess: function(response) {
					$scope.response = response;
				},

				onError: function(response) {
					$scope.hasError = true;
					$scope.errorMessage = 'Error getting employee information. Perhaps the service is down';
				}
			};
		}
	 }


});