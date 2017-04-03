'use strict';

describe('Controller: ListarRequisitosAvanceCtrl', function () {

  // load the controller's module
  beforeEach(module('nixApp'));

  var ListarRequisitosAvanceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListarRequisitosAvanceCtrl = $controller('ListarRequisitosAvanceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListarRequisitosAvanceCtrl.awesomeThings.length).toBe(3);
  });
});
