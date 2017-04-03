'use strict';

describe('Controller: ListarVerificarAvanceCtrl', function () {

  // load the controller's module
  beforeEach(module('nixApp'));

  var ListarVerificarAvanceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListarVerificarAvanceCtrl = $controller('ListarVerificarAvanceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListarVerificarAvanceCtrl.awesomeThings.length).toBe(3);
  });
});
