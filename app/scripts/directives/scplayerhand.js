'use strict';

/**
 * @ngdoc directive
 * @name scaredycatApp.directive:scPlayerHand
 * @description
 * # scPlayerHand
 */
angular.module('scaredycatApp')
	.directive('scPlayerHand', function() {
		return {
			scope: {
				playerCards: '='
			},
			template: '<div ng-repeat="card in playerCards"><sc-card card-type=card></sc-card></div>',
			restrict: 'E',

		};
	});