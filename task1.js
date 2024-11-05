const people = [
  { name: "John", age: 30, gender: "male" },
  { name: "Jane", age: 25, gender: "female" },
  { name: "Mike", age: 40, gender: "male" },
  { name: "Emily", age: 35, gender: "female" },
];

const getMaleNames = (people) =>
people.filter(({ gender }) => gender === "male").map(({ name }) => name);

console.log(getMaleNames(people));
