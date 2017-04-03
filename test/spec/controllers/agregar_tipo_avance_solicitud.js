'use strict';

describe('Controller: AgregarTipoAvanceSolicitudCtrl', function () {

  // load the controller's module
  beforeEach(module('nixApp'));

  var AgregarTipoAvanceSolicitudCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AgregarTipoAvanceSolicitudCtrl = $controller('AgregarTipoAvanceSolicitudCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AgregarTipoAvanceSolicitudCtrl.awesomeThings.length).toBe(3);
  });
});
