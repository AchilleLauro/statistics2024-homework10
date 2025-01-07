// Function: PDF of standard normal distribution
function normalPDF(x) {
  return (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * x * x);
}

// Lebesgue integral approximation
function lebesgueIntegral(pdf, range, step) {
  let sum = 0;
  for (let x = range[0]; x <= range[1]; x += step) {
    sum += x * pdf(x) * step;
  }
  return sum;
}

// Riemann integral approximation
function riemannIntegral(pdf, range, step) {
  let sum = 0;
  for (let x = range[0]; x <= range[1]; x += step) {
    sum += pdf(x) * step;
  }
  return sum;
}

// Compute integrals over the range [-3, 3]
const range = [-3, 3];
const step = 0.01;

const lebesgueResult = lebesgueIntegral(normalPDF, range, step);
const riemannResult = riemannIntegral((x) => x * normalPDF(x), range, step);

console.log("Lebesgue Integral (Mean):", lebesgueResult);
console.log("Riemann Integral (Mean):", riemannResult);
