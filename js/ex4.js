var myApp = angular.module('fapp', []);

myApp.controller('ctrl4', function($scope) {
	$scope.lights = "images/red.jpg";
	$scope.red = function() {
		$scope.lights = "images/red.jpg";
	};
	$scope.yellow = function() {
		$scope.lights = "images/yellow.jpg";
	};
	$scope.green = function() {
		$scope.lights = "images/green.jpg";
	};
});


myApp.controller('ctrlA', function($scope) {
	$scope.x = function() {
		$scope.lights = "images/red.jpg";
	};
	$scope.y = function() {
		$scope.lights = "images/yellow.jpg";
	};
	$scope.z = function() {
		$scope.lights = "images/green.jpg";
	};
});