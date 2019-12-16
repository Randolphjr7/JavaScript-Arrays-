const numbers = [1, -1, 2, 3];


const filtered = numbers.filter(num => num >= 0)

console.log(filtered);


const items = filtered.map(num => `<li>${num}</li>`)
console.log(items);


const html = '<ul>' + items.join('') + '</ul>';
console.log(html);


const items2 = filtered.map(n => {
/*   const obj = { value: n};
  return obj; */
  // return { value: n }
})


// for arrow functions return objects but the object in curly braces ()
const items3 = filtered.map(n =>  ({ value: n }) )
console.log(items3);


const numbers2 = [3,0,1,4,5,1,-2,6,-1,3,-6];

// chaining functions
const items4 = numbers2
  .filter(n => n >= 0)
  .map(n => ({ value: n }))
  .filter(obj => obj.value > 1)
  .map(obj => obj.value);

console.log(`items4 is: ${items4}`);

