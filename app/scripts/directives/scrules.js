'use strict';

/**
 * @ngdoc directive
 * @name scaredycatApp.directive:scRules
 * @description
 * # scRules
 */
angular.module('scaredycatApp')
	.directive('scRules', function () {
		return {
			template: '<h2>Rules</h2>' +
				'<h3>Object</h3>' +
				'<p>To collect the most birds before the scarecrow is pieced together.</p>' +
				'<h4>To play</h4>' +
				'<ul>' +
				'<li>Shuffle the cards and place them face downwards in a pile.</li>' +
				'<li> The youngest player begins by taking a card from the top of the pile.</li>' +
				'<li>If the player has taken a bird card, they place it in front of them.</li>' +
				'<li>If the card shows part of the scarecrow, the player places it face upwards in the centre of the table. N.B. As the game progresses and other scarecrow cards are turned over, they should be placed together to form a picture of the scarecrow.</li>' +
				'<li>If it is a cat card, the player must return all their bird cards, together with the cat card, to the pile. The pile is then re-shuffled and play continues.</li>' +
				'<li>The game continues until the picture of the scarecrow is complete. Players then count the number of birds on their cards.</li>' +
				'</ul>' +
				'<h4>The winner</h4>' +
				'<p>The winner is the player with the most birds at the end of the game. </p>',
			restrict: 'E'
		};
	});