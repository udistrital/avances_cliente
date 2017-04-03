'use strict';

describe('Service: vigencia', function () {

  // load the service's module
  beforeEach(module('nixApp'));

  // instantiate service
  var vigencia;
  beforeEach(inject(function (_vigencia_) {
    vigencia = _vigencia_;
  }));

  it('should do something', function () {
    expect(!!vigencia).toBe(true);
  });

});
