'use strict';

describe('Controller: AgregarTiposAvanceCtrl', function () {

  // load the controller's module
  beforeEach(module('nixApp'));

  var AgregarTiposAvanceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AgregarTiposAvanceCtrl = $controller('AgregarTiposAvanceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AgregarTiposAvanceCtrl.awesomeThings.length).toBe(3);
  });
});
