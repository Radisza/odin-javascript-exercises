function round(number) {
  if (Number.isSafeInteger(number)) {
    return Number.parseInt(number); 
  }
  return Number.parseFloat(number.toFixed(1));
}

const convertToCelsius = function(temperature) {
  return round((temperature - 32) / 1.8);
};

const convertToFahrenheit = function(temperature) {
  return round((temperature * 1.8) + 32);

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
