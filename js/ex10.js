var myApp = angular.module('fapp', []);
myApp.controller('ctrl', function($scope) {
 
 $scope.images = [ 'images/car1.jpg', 'images/car2.jpg', 'images/car3.jpg',
	       		'images/car4.jpg', 'images/car5.jpg', 'images/cat2.jpg'];
	
 $scope.pic=0;
 
 $scope.prev = function (){
	  $scope.pic=pic-1;
	  //if (pic < 0) {pic = 5;}
 };
 
$scope.next = function (){
  $scope.pic=pic+1;
  //if (pic > 5) {pic = 0;}
};

});




