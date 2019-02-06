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

  it("can decrease the temp", function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it("does not decrease temp below 10", function() {
    for (var i = 1; i <= 11; i++) {
    thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has power saving mode on by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  // describe("Thermostat", function() {
  //   beforeEach(function() {
  //     thermostat.powerSave();
  //   });
  //
  //   it("does not increase temp above 25", function() {
  //     for (var i = 1; i <= 6; i++) {
  //     thermostat.up();
  //     }
  //     expect(thermostat.getCurrentTemperature()).toEqual(25);
  //   });
  //
  // });



});
