'use strict';

/**
 * @ngdoc directive
 * @name scaredycatApp.directive:scCpuHand
 * @description
 * # scCpuHand
 */
angular.module('scaredycatApp')
	.directive('scCpuHand', function() {
		return {
			scope: {
				cpuCards: '='
			},
			template: '<div ng-repeat="card in cpuCards"><sc-card card-type=card></sc-card></div>',
			restrict: 'E',


		};
	});