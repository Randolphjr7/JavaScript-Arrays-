const numbers = [1,2,3,4,1,1,3,4];

const output = except(numbers, [1,4])

console.log(output);


// my way
function except(array, excluded) {
  let result = [];
  for (let number of array)
    if(!excluded.includes(number))
        result.push(number);
  return result;      
}
