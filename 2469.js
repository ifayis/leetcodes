var convertTemperature = function(celsius) {
    let Kelvin = celsius + 273.15
    let Fahrenheit = celsius * 1.80 + 32.00
      return [Kelvin, Fahrenheit]
};

document.writeln(convertTemperature(36.50))