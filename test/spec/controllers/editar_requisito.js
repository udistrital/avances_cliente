'use strict';

describe('Controller: EditarRequisitoCtrl', function () {

  // load the controller's module
  beforeEach(module('nixApp'));

  var EditarRequisitoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditarRequisitoCtrl = $controller('EditarRequisitoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditarRequisitoCtrl.awesomeThings.length).toBe(3);
  });
});
