'use strict';

describe('Controller: ListarCertificarAvanceCtrl', function () {

  // load the controller's module
  beforeEach(module('nixApp'));

  var ListarCertificarAvanceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListarCertificarAvanceCtrl = $controller('ListarCertificarAvanceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListarCertificarAvanceCtrl.awesomeThings.length).toBe(3);
  });
});
