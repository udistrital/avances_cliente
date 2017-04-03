'use strict';

describe('Controller: CertificarApruebaAvanceCtrl', function () {

  // load the controller's module
  beforeEach(module('nixApp'));

  var CertificarApruebaAvanceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CertificarApruebaAvanceCtrl = $controller('CertificarApruebaAvanceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CertificarApruebaAvanceCtrl.awesomeThings.length).toBe(3);
  });
});
