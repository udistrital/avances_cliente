'use strict';

describe('Service: avancesService', function () {

  // load the service's module
  beforeEach(module('nixApp'));

  // instantiate service
  var avancesService;
  beforeEach(inject(function (_avancesService_) {
    avancesService = _avancesService_;
  }));

  it('should do something', function () {
    expect(!!avancesService).toBe(true);
  });

});
