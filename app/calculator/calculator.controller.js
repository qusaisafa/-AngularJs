'use strict';

angular.module('myApp.calculator', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/calculator', {
    templateUrl: 'calculator/calculator.html',
    controller: 'calculatorCtrl'
  });
}])

.controller('calculatorCtrl',function ($scope) {
  $scope.output=0;
  $scope.onClickAdd = function (num1,num2) {
    $scope.output= parseFloat(num1)+parseFloat(num2);
  }
});