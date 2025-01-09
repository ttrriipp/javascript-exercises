const convertToCelsius = function(temp) {
 celsiusTemp = (temp - 32) * 5 /9;

  if (celsiusTemp % 1 == 0) {
    return celsiusTemp;
  } else {
    celsiusTemp = Number(celsiusTemp.toFixed(1));
    return celsiusTemp;
  }
};
const convertToFahrenheit = function(temp) {
  fahrenheitTemp = (temp * (9/5) + 32);

  if (fahrenheitTemp % 1 == 0) {
    return fahrenheitTemp;
  } else {
    fahrenheitTemp = Number(fahrenheitTemp.toFixed(1));
    return fahrenheitTemp;
  } 

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
