(function(){
	'use strict';

	angular.module('myApp')
	.controller = ("myCal", myCal);

	function myCal($scope, myCal){
	$scope.sum= myCal.addValues(parseInt($scope.n1), parseInt($scope.n2));
}
})();