var myApp = angular.module('fapp', []);

myApp.controller('ctrl2', function($scope) {
	$scope.convert = function() {
		if ($scope.x == "200px") {
			$scope.x = "0px";
		} else {
			$scope.x = "200px";
		}
	};
});


