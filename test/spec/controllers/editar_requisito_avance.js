'use strict';

describe('Controller: EditarRequisitoAvanceCtrl', function () {

  // load the controller's module
  beforeEach(module('nixApp'));

  var EditarRequisitoAvanceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditarRequisitoAvanceCtrl = $controller('EditarRequisitoAvanceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditarRequisitoAvanceCtrl.awesomeThings.length).toBe(3);
  });
});
