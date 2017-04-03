'use strict';

describe('Controller: VerificarSolicitudAvanceCtrl', function () {

  // load the controller's module
  beforeEach(module('nixApp'));

  var VerificarSolicitudAvanceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VerificarSolicitudAvanceCtrl = $controller('VerificarSolicitudAvanceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VerificarSolicitudAvanceCtrl.awesomeThings.length).toBe(3);
  });
});
