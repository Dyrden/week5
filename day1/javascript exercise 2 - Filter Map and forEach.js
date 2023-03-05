const arr = ["lars", "jan", "peter", "bo", "frederik"];

const filteredArr = arr.filter(name => name.length <= 3);

filteredArr.forEach(name => console.log(name))

const mappedArr = arr.map(name => name.substring(0, 1).toUpperCase() + name.substring(1));
console.log(mappedArr);

const makeHTML = function(array) {
  const newarr = array.map( name => "<li>" + name + "</li>")
  const html = "<ul>" + newarr.join("") + "</ul>"
  return html
}

const htmlArr = "<ul><li>" + arr.join("</li><li>") + "</li></ul>";

console.log(htmlArr);
console.log(makeHTML(arr));

const cars = [
  { id: 1, year: 1997, make: "Ford", model: "E350", price: 3000 },
  { id: 2, year: 1999, make: "Chevy", model: "Venture", price: 4900 },
  { id: 3, year: 2000, make: "Chevy", model: "Venture", price: 5000 },
  { id: 4, year: 1996, make: "Jeep", model: "Grand Cherokee", price: 4799 },
  { id: 5, year: 2005, make: "Volvo", model: "V70", price: 44799 },
];

const cararr1 = cars.filter((car) => car.year > 1999);
console.log(cararr1);

const cararr2 = cars.filter((car) => car.make === "Volvo");
console.log(cararr2);

const cararr3 = cars.filter((car) => car.price < 5000);
console.log(cararr3);

const carsSQL = function (cars) {
  return cars.map(
    car =>
      "INSERT INTO cars (id,year,make,model,price) VALUES (" +
      car.id +
      ", " +
      car.year +
      ", '" +
      car.make +
      "', '" +
      car.model +
      "', " +
      car.price +
      ");"
  );
};

console.log(carsSQL(cars));
