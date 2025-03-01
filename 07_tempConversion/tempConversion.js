const convertToCelsius = function(degrees) {

  let convertedDegressC = (degrees - 32)*(5/9);

  let roundConvertedDegreesC = Number(convertedDegressC.toFixed(1));

  return roundConvertedDegreesC;

};

const convertToFahrenheit = function(degrees) {

  let convertedDegressF = degrees * (9/5) + 32;

  let roundConvertedDegreesF = Number(convertedDegressF.toFixed(1));

  return roundConvertedDegreesF;


};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
