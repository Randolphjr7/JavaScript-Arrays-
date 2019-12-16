const numbers  = arrayFromRange(-10,-4);
const numbers1 = arrayFromRange1(-10,-4);


console.log(numbers);
console.log(numbers1);

// my way
function arrayFromRange(min, max) {
  let array = [];
  let num   = min;
  while(num <= max){
    array.push(num);
    num++;
  }
  return array;
}

// mosh way 
function arrayFromRange1(min, max) {
  const output = [];
  for (let i = min; i <= max; i++)
    output.push(i);
  return output;
}


