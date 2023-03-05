    

const person = {
    name : "mark",
    birthday : "18-01-95",
    hobby : "computer games",
    email : "somemail@example.com"
}

for(prop in person){
    console.log(prop,person[prop])
  }

  
  delete person.hobby;

  person.gender = "male";

  for(prop in person){
    console.log(prop,person[prop])
  }



