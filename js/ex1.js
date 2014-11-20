/*$(document).ready(function(){
	$('button').click(function(){
		alert ('hello');
	});
});*/


function FirstCtrl($scope) {
	$scope.data = {message: "Hello"};
};


var myApp = angular.module('fapp', []);

myApp.controller('first', function($scope) {
	$scope.hey = function() {
		$scope.hey = 'hello';
		/*alert('Hello');*/
	};
});


/*angular.module('fapp',[]).controller('ctrl1',function(){});
angular.module('fapp',[]).filter('filtername',function(){});
angular.module('fapp',[]).directive('dirl',function(){});
*/

/*var myApp - angular.module('fapp',[]);*/


