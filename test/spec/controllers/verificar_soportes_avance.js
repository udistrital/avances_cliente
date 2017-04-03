'use strict';

describe('Controller: VerificarSoportesAvanceCtrl', function () {

  // load the controller's module
  beforeEach(module('nixApp'));

  var VerificarSoportesAvanceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VerificarSoportesAvanceCtrl = $controller('VerificarSoportesAvanceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VerificarSoportesAvanceCtrl.awesomeThings.length).toBe(3);
  });
});
