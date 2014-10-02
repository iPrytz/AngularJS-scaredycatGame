'use strict';

describe('Directive: scHand', function () {

  // load the directive's module
  beforeEach(module('scaredycatApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sc-hand></sc-hand>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the scHand directive');
  }));
});
