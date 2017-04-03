'use strict';

describe('Controller: ListarSolicitudAvanceCtrl', function () {

  // load the controller's module
  beforeEach(module('nixApp'));

  var ListarSolicitudAvanceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListarSolicitudAvanceCtrl = $controller('ListarSolicitudAvanceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListarSolicitudAvanceCtrl.awesomeThings.length).toBe(3);
  });
});
