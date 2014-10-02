'use strict';

/**
 * @ngdoc directive
 * @name scaredycatApp.directive:scUserInput
 * @description
 * # scUserInput
 */
angular.module('scaredycatApp')
	.directive('scUserInput', function () {
		return {
			template: '<div>' +
				'<input name="username" ng-model="userinput" placeholder="username" class="form-control"/>' +
				'<button class="btn-lg btn-default" ng-click="start(userinput)">Start</button>' +
				'</div>',
			scope: {
				username: '='
			},
			restrict: 'E',
			controller: function ($scope) {
				$scope.start = function (user) {
					$scope.username = user;
				};
			}
		};
	});