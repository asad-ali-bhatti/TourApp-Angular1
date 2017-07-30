'use strict';

describe('Controller: ToursCtrl', function () {

  // load the controller's module
  beforeEach(module('tourAppApp'));

  var ToursCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ToursCtrl = $controller('ToursCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ToursCtrl.awesomeThings.length).toBe(3);
  });
});
