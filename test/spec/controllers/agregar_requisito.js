'use strict';

describe('Controller: AgregarRequisitoCtrl', function () {

  // load the controller's module
  beforeEach(module('nixApp'));

  var AgregarRequisitoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AgregarRequisitoCtrl = $controller('AgregarRequisitoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AgregarRequisitoCtrl.awesomeThings.length).toBe(3);
  });
});
