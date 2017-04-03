'use strict';

describe('Controller: CertificarNecesidadAvanceCtrl', function () {

  // load the controller's module
  beforeEach(module('nixApp'));

  var CertificarNecesidadAvanceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CertificarNecesidadAvanceCtrl = $controller('CertificarNecesidadAvanceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CertificarNecesidadAvanceCtrl.awesomeThings.length).toBe(3);
  });
});
