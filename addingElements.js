// const means you can't reasign ex: numbers = []
// however you can modify the content; you can add and remove elements
const numbers = [3, 4];

// add elements to the end
numbers.push(5, 6);

console.log(numbers);

// to the beginning
numbers.unshift(1,2);

console.log(numbers);

// the middle
numbers.splice(2, 0, 'a','b')

console.log(numbers);

