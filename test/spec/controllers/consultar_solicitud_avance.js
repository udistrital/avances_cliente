'use strict';

describe('Controller: ConsultarSolicitudAvanceCtrl', function () {

  // load the controller's module
  beforeEach(module('nixApp'));

  var ConsultarSolicitudAvanceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConsultarSolicitudAvanceCtrl = $controller('ConsultarSolicitudAvanceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ConsultarSolicitudAvanceCtrl.awesomeThings.length).toBe(3);
  });
});
