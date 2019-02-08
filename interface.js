$(document).ready(function() {

  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.temperature);

  $('#temp-up').on('click', function() { // event listener
    thermostat.up(); // update model
    updateTemperature();
  })

  $('#temp-down').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
    thermostat.down();
    updateTemperature();
  })

  $('#temp-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#psm-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('ON')
    updateTemperature();
  })

  $('#psm-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('OFF')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }

  // $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  //   $('#current-temperature').text(data.main.temp);
  // })

  displayWeather('london');

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    displayWeather(city)
    $(document.body).attr('class', city);
  })

  // displayWeather('London');
  //
  // $('#select-city').submit(function(event) {
  //   event.preventDefault();
  //   var city = $('#current-city').val();
  //   displayWeather(city);
  // })

  function displayWeather(city) {
     var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
     var token = '&appid=' + '';
     var units = '&units=metric';
     $.get(url + token + units, function(data) {
       $('#current-temperature').text(data.main.temp);
     })
  }

})
