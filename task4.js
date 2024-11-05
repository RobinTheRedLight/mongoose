const cars = [
  { make: "Toyota", model: "Camry", year: 2010 },
  { make: "Honda", model: "Accord", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2008 }
];

const sortCarsByYear = cars => [...cars].sort((a, b) => a.year - b.year);

console.log(sortCarsByYear(cars));
