var myApp = angular.module('fapp', []);

myApp.controller('ctrl', function($scope){

	$scope.persons = [ {"First_Name" : "John", "Last_Name" : "Wonka", "Zip Code" : 91004, "Age" : 34},
	                {"First_Name" : "Kevin", "Last_Name" : "James", "Zip Code" : 91004, "Age" : 23},
	                {"First_Name" : "Mike", "Last_Name" : "Jerome", "Zip Code" : 91004, "Age" : 56},
	];
	});




