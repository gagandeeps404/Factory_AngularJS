(function(){
	'use strict';

	angular.module('myApp')
	.controller ("myCal",['$scope' , 'calculator', myCal]);

	function myCal($scope,calculator){


	$scope.addValues= function(){
	$scope.result= calculator.addValues(parseInt($scope.n1),parseInt($scope.n2));
		}
	$scope.subtractValues = function(){
		
		$scope.result= calculator.subtractValues(parseInt($scope.n1), parseInt($scope.n2));
		}

	$scope.multiply = function(){
		$scope.result= calculator.multiplyValues(parseInt($scope.n1), parseInt($scope.n2));

	}

	$scope.divide = function(){
		$scope.result = calculator.divideValues(parseInt($scope.n1), parseInt($scope.n2));
	}
}
})();