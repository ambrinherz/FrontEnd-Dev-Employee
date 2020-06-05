'use strict';

angular.module('tutorialSearchService', []).service('TutorialSearchService', function($http) {

	this.getAllemployees = function(id,name, callback) {
		// employeeid=$scope.id;

		// let url = config.urls.employees + '/' +id;
		// console.log(url);

		if(id>0){
			$http.get(config.urls.employees+ '/' +id).then(
			function success(response) {
				callback.onSuccess(response.data);
			},

			function error(response) {
				callback.onError(response);
			}
		);

		}

		else {

			$http.get(config.urls.employees+ '/?name=' +name).then(
			function success(response) {
				callback.onSuccess(response.data);
			},

			function error(response) {
				callback.onError(response);
			}
		);
		
		}

	}

	this.addEmployee = function (employee, callback) {

		$http.post(config.urls.employees, employee).then(
			function success(response) {
				console.log(response);
			},

			function error(response) {
				console.log(response);
			}
		);

	}

	this.updateEmployee = function(employee, callback) {
	
		let url = config.urls.employees + '/' +employee.id;
		console.log(url);
		
		$http.put(url, employee).then(
			function success(response) {
				// callback.onSuccess(response.data);
				console.log(response);
			},

			function error(response) {
				callback.onError(response);
			}
		);

	}

	this.deleteEmployee = function(id, callback) {
	
		let url = config.urls.employees + '/' + id;
		console.log(url);
		
		$http.delete(url).then(
			function success(response) {
				// callback.onSuccess(response.data);
				console.log(response);
			},

			function error(response) {
				callback.onError(response);
			}
		);

	}


});