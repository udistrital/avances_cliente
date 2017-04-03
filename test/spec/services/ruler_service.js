'use strict';

describe('Service: rulerService', function () {

  // load the service's module
  beforeEach(module('nixApp'));

  // instantiate service
  var rulerService;
  beforeEach(inject(function (_rulerService_) {
    rulerService = _rulerService_;
  }));

  it('should do something', function () {
    expect(!!rulerService).toBe(true);
  });

});
