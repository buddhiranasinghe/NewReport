var myApp = angular.module('fapp', []);

myApp.controller('ctrl', function($scope){

$scope.products = [ {"name" : "swiss", "price" : 4.99, "qty" : 10, "soldout" : true},
  {"name" : "altadena", "price" : 4.00, "qty" : 15, "soldout" : false},
  {"name" : "nesquick", "price" : 3.99, "qty" : 5, "soldout" : true},
  {"name" : "energyMilk", "price" : 5.25, "qty" : 8, "soldout" : false},
  {"name" : "aBC", "price" : 7.99, "qty" : 7, "soldout" : true},
];
});


myApp.filter('capitalize', function() {
	 return function(input) {
	  var tempArray = input.split(' ');
	  for (var i = 0; i < tempArray.length; i++) {//fast enumeration
		  tempArray[i] = tempArray[i].charAt(0).toUpperCase()+tempArray[i].substr(1);
	  }
		  return tempArray.join(' ');
	};
});


/*<div ng-controller="ctrl">
<ul style = "list-style:none;">
		<li ng-repeat="item in milk">
		{{item.name|capital}} -
		{{item.price|currency}} -
		{{item.qty}}
		</li>
</ul>
</div>




myApp.filter('capital', function() {
 return function(input) {
  var output = [];
  output.push(input[0].toUpperCase());
  for ( var i = 1; i <= input.length; i++) {
   output.push(input[i]);
  }
  return (output.join(""));
 };
});*/