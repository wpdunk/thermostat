'use strict';

describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("start temp is 20", function() {
    expect(thermostat.temperature).toEqual(20);
  });

});
