
function myFilter(array, callback) {
  const newarr = [];
  for (let i = 0; i < array.length; i++) {
  if (callback(array[i])) {
      newarr.push(array[i]);
    }
  }

  return newarr;
}

function myMap(array, callback) {
  const newarr = [];
  for (let i = 0; i < array.length; i++) {
    newarr.push(callback(array[i]));
  }

  return newarr;
}

console.log("-----------------------------------");
const cararr4 = myFilter(cars, (car) => car.price < 5000);
console.log(cararr4);
const myMappedarr = myMap(
  arr,
  (s) => s.substring(0, 1).toUpperCase() + s.substring(1)
);
console.log(myMappedarr);

console.log("-----------------------------------");
