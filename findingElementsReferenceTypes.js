const courses = [
  { id: 1, name: 'a'},
  { id: 2, name: 'b'}
];


// includes will not help since the objs will have two different references; 
// two different locations in memory
// console.log(courses.includes({ id: 1, name: 'a'}));


const found = courses.find(function(course) { 
 return course.name === 'a'
});

console.log(found);

const found2 = courses.find(course => course.name === 'b');

console.log(found2);

const found3 = courses.find(course => course.name === 'c');

console.log(found3);

const found4 = courses.findIndex(course => course.name === 'b');

console.log(`found4 is located as index: ${found4}`);
