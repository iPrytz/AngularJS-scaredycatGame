'use strict';

/**
 * @ngdoc function
 * @name scaredycatApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the scaredycatApp
 */
angular.module('scaredycatApp')
  .controller('ResultsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
