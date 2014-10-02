'use strict';

/**
 * @ngdoc service
 * @name scaredycatApp.deck
 * @description
 * # deck
 * Factory in the scaredycatApp.
 */
angular.module('scaredycatApp')
  .factory('deck', function() {
    // Service logic
    // ...

    var cards = [],
      bird1count = 3,
      bird2count = 3,
      bird3count = 3,
      bird4count = 3,
      bird5count = 3,
      bird6count = 3;

    function addBirds(birdname, count) {
      for (var i = 0; i < count; i++) {
        cards.push(birdname);
      }
    }

    cards.push('scarecrow1', 'scarecrow2', 'scarecrow3', 'scarecrow4', 'scarecrow5', 'scarecrow6');
    cards.push('cat1', 'cat2', 'cat3', 'cat4');

    addBirds('bird1', bird1count);
    addBirds('bird2', bird2count);
    addBirds('bird3', bird3count);
    addBirds('bird4', bird4count);
    addBirds('bird5', bird5count);
    addBirds('bird6', bird6count);

    cards = _.shuffle(cards);

    console.log(cards);

    // Public API here
    return {
      getNextCard: function() {
        return cards.pop();
      },
      addCards: function(usersCards) {
        console.log('innan tillägg: ' + cards);
        cards = cards.concat(usersCards);
        console.log('innan shuffle: ' + cards);
        cards = _.shuffle(cards);
        console.log('efter shuffle: ' + cards);
      }
    };
  });