'use strict';

/**
 * @ngdoc function
 * @name scaredycatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scaredycatApp
 */
angular.module('scaredycatApp')
	.controller('MainCtrl', function($scope, $location, userInfo) {
		$scope.user = '';
		$scope.$watch('user', function(newValue) {
			if (newValue !== '' && newValue !== undefined) {
				userInfo.setUsername(newValue);
				$location.path('/game');
			}
		});
	});