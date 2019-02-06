'use strict';

function Thermostat() {
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.MINIMUM_TEMPERATURE = 10;

  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;

  this.powerSavingMode = true;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.isMaxTemp()) {
    return;
  }
  this.temperature +=1;
};

Thermostat.prototype.down = function() {
  if (this.isMinTemp()) {
    return;
  }
  this.temperature -= 1;
}

Thermostat.prototype.isMinTemp = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
}

Thermostat.prototype.isMaxTemp = function() {
  if (this.isPowerSavingModeOn()) {
    return this.temperature === this.MAX_LIMIT_PSM_ON;
  }
  return this.temperature === this.MAX_LIMIT_PSM_OFF;
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true;
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
};
