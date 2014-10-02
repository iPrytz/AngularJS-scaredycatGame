'use strict';

describe('Directive: scUserInput', function () {

  // load the directive's module
  beforeEach(module('scaredycatApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sc-user-input></sc-user-input>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the scUserInput directive');
  }));
});
