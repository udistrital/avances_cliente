'use strict';

describe('Controller: AgregarSolicitudAvanceCtrl', function () {

  // load the controller's module
  beforeEach(module('nixApp'));

  var AgregarSolicitudAvanceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AgregarSolicitudAvanceCtrl = $controller('AgregarSolicitudAvanceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AgregarSolicitudAvanceCtrl.awesomeThings.length).toBe(3);
  });
});
