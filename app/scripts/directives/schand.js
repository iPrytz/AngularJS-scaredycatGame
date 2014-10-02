'use strict';

/**
 * @ngdoc directive
 * @name scaredycatApp.directive:scHand
 * @description
 * # scHand
 */
angular.module('scaredycatApp')
	.directive('scHand', function() {
		return {
			scope: {
				cards: '=',
				playerName: '='
			},
			template: '<div><h2>{{playerName}}\'s hand</h2>' +
				'<div ng-repeat="card in cards track by $index">' +
				'<sc-card card-type=card></sc-card>' +
				'</div></div><div class="clearfix"></div>',
			restrict: 'E',

		};
	});