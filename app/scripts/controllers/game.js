'use strict';

/**
 * @ngdoc function
 * @name scaredycatApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the scaredycatApp
 */
angular.module('scaredycatApp')
	.controller('GameCtrl', function($scope, $timeout, userInfo, deck) {
		$scope.username = 'Isak'; //userInfo.getUsername();
		$scope.card = 'back';
		$scope.playerHand = [];
		$scope.cpuHand = [];
		$scope.cpuName = "Mr. Computer"
		$scope.scarecrowCards = [];

		var usersTurn = true;


		$scope.takeCard = function() {

			var playRound = function(hand) {
				if (usersTurn || hand === $scope.cpuHand) {



					$scope.card = deck.getNextCard();
					$timeout(function() {

						//console.log('playerHand:' + $scope.playerHand);
						//console.log('cpuHand' + $scope.cpuHand);

						if ($scope.card.indexOf('cat') > -1) {
							hand.push($scope.card);
							console.log('kort att skicka tillbaka: ' + hand);

							deck.addCards(hand);
							hand.length = 0;
							//console.log('playerHand:' + $scope.playerHand);
							//console.log('cpuHand' + $scope.cpuHand);

						} else if ($scope.card.indexOf('scarecrow') > -1) {
							$scope.scarecrowCards.push($scope.card);
							if ($scope.scarecrowCards.length === 6) {
								console.log('game end');
							}
						} else {
							hand.push($scope.card);
						}
						$scope.card = 'back';
					}, 1000);
				}

			};

			/*
			$.when(playRound($scope.playerHand)).done(function() {
				playRound($scope.cpuHand);
			});
*/

			playRound($scope.playerHand);
			usersTurn = false;
			$timeout(function() {
				playRound($scope.cpuHand);
			}, 1500, function() {
				usersTurn = true;
			});


		};
	});