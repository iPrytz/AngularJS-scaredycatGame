'use strict';

/**
 * @ngdoc directive
 * @name scaredycatApp.directive:scDeck
 * @description
 * # scDeck
 */
angular.module('scaredycatApp')
	.directive('scDeck', function() {
		return {

			template: '<sc-card card-type=card></sc-card><div class="clearfix"></div>',
			restrict: 'E'

		};
	});