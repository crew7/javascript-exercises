const ftoc = function(farenheitInput) {  
  let celsius = ((farenheitInput - 32) * 5/9)
  celsius = celsius.toFixed(1);
  celsius = parseFloat(celsius);
  return celsius;
};

const ctof = function(celsiusInput) {
  let farenheit = ((celsiusInput * 9/5) + 32)
  farenheit = farenheit.toFixed(1);
  farenheit = parseFloat(farenheit);
  return farenheit;
};

console.log(ftoc(48));
console.log(ctof(96));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
