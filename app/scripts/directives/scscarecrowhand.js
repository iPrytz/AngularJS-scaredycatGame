'use strict';

/**
 * @ngdoc directive
 * @name scaredycatApp.directive:scScarecrowHand
 * @description
 * # scScarecrowHand
 */
angular.module('scaredycatApp')
	.directive('scScarecrowHand', function() {
		return {
			template: '<div class="scarecrow-hand">' +
				'<div class="scarecrow-card"><sc-card card-type="\'scarecrow1\'" ng-show="showScarecrow(\'scarecrow1\')"></sc-card></div>' +
				'<div class="scarecrow-card"><sc-card card-type="\'scarecrow2\'" ng-show="showScarecrow(\'scarecrow2\')"></div>' +
				'<div class="scarecrow-card"><sc-card card-type="\'scarecrow3\'" ng-show="showScarecrow(\'scarecrow3\')"></div>' +
				'<div class="scarecrow-card"><sc-card card-type="\'scarecrow4\'" ng-show="showScarecrow(\'scarecrow4\')"></div>' +
				'<div class="scarecrow-card"><sc-card card-type="\'scarecrow5\'" ng-show="showScarecrow(\'scarecrow5\')"></div>' +
				'<div class="scarecrow-card"><sc-card card-type="\'scarecrow6\'" ng-show="showScarecrow(\'scarecrow6\')"></div>' +
				'</div>',
			restrict: 'E',
			controller: function($scope) {
				$scope.showScarecrow = function(scarecrow) {
					return $scope.scarecrowCards.indexOf(scarecrow) > -1;
				};
			}
		};
	});