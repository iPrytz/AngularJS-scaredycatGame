'use strict';

describe('Directive: scScareCrowHand', function () {

  // load the directive's module
  beforeEach(module('scaredycatApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sc-scare-crow-hand></sc-scare-crow-hand>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the scScareCrowHand directive');
  }));
});
