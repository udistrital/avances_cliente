'use strict';

describe('Controller: ListarTiposAvanceCtrl', function () {

  // load the controller's module
  beforeEach(module('nixApp'));

  var ListarTiposAvanceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListarTiposAvanceCtrl = $controller('ListarTiposAvanceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListarTiposAvanceCtrl.awesomeThings.length).toBe(3);
  });
});
