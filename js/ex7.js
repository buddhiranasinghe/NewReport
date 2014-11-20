var myApp = angular.module('fapp', []);

myApp.controller('ctrl7', function($scope){

$scope.milk = [ {"name" : "Swiss", "price" : 4.99, "qty" : 10, "soldout" : true},
  {"name" : "AltaDena", "price" : 4.00, "qty" : 15, "soldout" : false},
  {"name" : "Nesquick", "price" : 3.99, "qty" : 5, "soldout" : true},
  {"name" : "EnergyMilk", "price" : 5.25, "qty" : 8, "soldout" : false},
  {"name" : "ABC", "price" : 7.99, "qty" : 7, "soldout" : true},
];
});


myApp.filter('reverse',function (){
	return function(item) {
		item = item.split('').reverse().join('');
		return (item);
		};
});