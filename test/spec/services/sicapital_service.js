'use strict';

describe('Service: sicapitalService', function () {

  // load the service's module
  beforeEach(module('nixApp'));

  // instantiate service
  var sicapitalService;
  beforeEach(inject(function (_sicapitalService_) {
    sicapitalService = _sicapitalService_;
  }));

  it('should do something', function () {
    expect(!!sicapitalService).toBe(true);
  });

});
