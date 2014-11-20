var myApp = angular.module('fapp', []);

myApp.controller('ctrl5', function($scope){
	$scope.colors = ["yellow","green","blue","black","pink","red"];
	
	$scope.del = function(a){
	$scope.colors.splice(a,1);
	};
	
	$scope.add = function (){
		$scope.colors.push($scope.color5);
	};
});

