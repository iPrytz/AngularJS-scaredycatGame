'use strict';

/**
 * @ngdoc directive
 * @name scaredycatApp.directive:scCard
 * @description
 * # scCard
 */
angular.module('scaredycatApp')
	.directive('scCard', function () {
		return {
			scope: {
				cardType: '='
			},
		template: '<div ng-class="cardType" class="card"></div>',
			restrict: 'E'
		};
	});