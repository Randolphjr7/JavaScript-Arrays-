const numbers  = [1,2,3,4];

console.log(numbers.includes(3));
console.log(includesSelfMade(3, numbers));
console.log(includesMosh(5, numbers));


// my way 
function includesSelfMade(element, array) {
  let target = element;
  for (let i = 0; i <= array.length; i++)
    if(array[i] === target) return true;
  return false;
}

// mosh way
function includesMosh(targetElement, array) {
  for (let element of array)
    if(element === targetElement)
      return true;
  return false;    
}