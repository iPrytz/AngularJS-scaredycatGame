'use strict';

describe('Directive: scDeck', function () {

  // load the directive's module
  beforeEach(module('scaredycatApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sc-deck></sc-deck>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the scDeck directive');
  }));
});
