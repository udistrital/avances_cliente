'use strict';

describe('Controller: CertificarGiroAvanceCtrl', function () {

  // load the controller's module
  beforeEach(module('nixApp'));

  var CertificarGiroAvanceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CertificarGiroAvanceCtrl = $controller('CertificarGiroAvanceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CertificarGiroAvanceCtrl.awesomeThings.length).toBe(3);
  });
});
