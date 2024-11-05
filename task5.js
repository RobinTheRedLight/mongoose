const persons = [
  { name: "Alice", age: 28 },
  { name: "Bob", age: 34 },
  { name: "Charlie", age: 25 }
];

const modifyAgeByName = (persons, targetName, newAge) => {
  const person = persons.find(({ name }) => name === targetName);
  if (person) person.age = newAge;
  return persons;
};

console.log(modifyAgeByName(persons, "Bob", 40));

