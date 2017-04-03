'use strict';

describe('Controller: CancelarSolicitudAvanceCtrl', function () {

  // load the controller's module
  beforeEach(module('nixApp'));

  var CancelarSolicitudAvanceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CancelarSolicitudAvanceCtrl = $controller('CancelarSolicitudAvanceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CancelarSolicitudAvanceCtrl.awesomeThings.length).toBe(3);
  });
});
