// declaration
function add(n1, n2) {
    return n1 + n2;
  }
  
  // expression
  const sub = function (n1, n2) {
    return n1 - n2;
  };
  
  function mult(n1, n2) {
    return n1 * n2;
  }
  
  const cb = function (n1, n2, callback) {
    
    return (
      "Result from the two numbers with " + callback.name + ": " + n1 + " and " + n2 + " is " + callback(n1, n2)
    );
  };

  

  
console.log(add(1, 2)); // What will this print?
// will print '3'

console.log(add); // What will it print and what does add represent?
// will print the function?

console.log(add(1, 2, 3)); // What will it print
// will print 3? just ignore the third argument?

console.log(add(1)); // What will it print
// fail? or just prints 1

console.log(cb(3, 3, add)); // What will it print
//prints 6

console.log(cb(4, 3, sub)); // What will it print
// prints 1

//console.log(cb(3,3,add())); // What will it print (and what was the problem)
// callback med function parametre vil nok fejle den for nu er det ikke en reference men et kald?

console.log(cb(3, "hh", add)); // What will it print
//3hh?





console.log(cb(5, 5, mult));




console.log(cb(4,5, (n1,n2) => n1/n2))
