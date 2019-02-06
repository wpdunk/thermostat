'use strict';

describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("start temp is 20", function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it("can increase the temp", function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });


});
