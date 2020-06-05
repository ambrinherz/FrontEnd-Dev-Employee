'use strict';

angular.module('tutorial').component('tutorial', {
	 templateUrl: 'tutorial/tutorial.html',

	 controller: function TutorialController($scope,TutorialSearchService) {

	 	this.$onInit = function() {
			
		}

	 	$scope.test = 'Employee Records:';
	

	 	$scope.buttonPressed = function(id){
	 		console.log("button is Pressed");
	 			TutorialSearchService.getAllemployees(id,createGetAllemployeesCallback());

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





	