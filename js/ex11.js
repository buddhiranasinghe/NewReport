var myApp = angular.module("fapp", []);
myApp.controller("ctrl", function ($scope,$http){
	$scope.planets = [];
	$http.get("WebContent/js/planets.json").success(function (resp){
		console.log(resp);
		$scope.planets = resp.planets;
	});
});