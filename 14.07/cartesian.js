"use strict"; // along other things it prevents window to be set on this by default
// We can have it or not have it, in this scenario, it does not affect the result

let array1 = [1, 2];
let array2 = [3, 4];
let array3 = [5, 6, 7];
let array4 = [8, 9, 10];

/**
 * Creates a new array that is the combination of the parameter elements
 */
function combine(a, b) {
  var result = [];
  for (let i in a) {
    for (let j in b) {
      result.push([].concat(a[i], b[j]));
    }
  }
  return result;
}

function cartesian(/*variable arguments*/) {
  console.log("this", this);
  // We transform the arguments to an Array for convenience
  let parameters = Array.from(arguments);
  const a = parameters.shift(); // we retrieve the first argument while also removing it from the parameters
  const b = parameters.shift(); // we retrieve the second argument while also removing it from the parameters
  if (!b) {
    // as we combine arrays 2 at a time, when we only have 1 array the recursion can end
    return a;
  } else {
    const firstTwoCombined = combine(a, b); // we combine the first 2 arguments
    parameters.unshift(firstTwoCombined); // we create the new parameters that should contain 1 element less then the current arguments
    return cartesian.apply(this, parameters); // we call cartesian with the new arguments
  }
}

function cartesianEs6(a, b, ...rest) {
  if (!b) {
    // as we combine arrays 2 at a time, when we only have 1 array the recursion can end
    return a;
  } else {
    const firstTwoCombined = combine(a, b); // we combine the first 2 arguments
    return cartesianEs6(firstTwoCombined, ...rest); // we call cartesian with the new arguments
  }
}

function cartesianEs6Small(a, b, ...rest) {
  if (b) {
    const firstTwoCombined = combine(a, b); // we combine the first 2 arguments
    return cartesianEs6(firstTwoCombined, ...rest); // we call cartesian with the new arguments
  }
  return a;
}
console.log(cartesian(array1, array2, array3, array4));
