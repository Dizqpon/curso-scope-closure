var firstName; // Undefined
firstName = 'David';

console.log(firstName);

var lastName = 'Oscar'; // Declarar y asignar
lastName = 'Ana';

console.log(lastName);

var secondName = 'Juan';
var secondName = 'Marcos'; // reasignando y redeclarando

console.log(secondName);

let fruit = 'Apple';
fruit = 'Kiwi';

console.log(fruit);

// let fruit = 'Pera'; // Con let no puedo redeclarar, solo reasignar


const animal = 'Dog';
// animal = 'Cat'; Si declaras una variable con const no puedes redeclarar ni reasignar
console.log(animal);

const vehicles = [];
vehicles.push('Mercedes');
console.log(vehicles);

vehicles.pop();
console.log(vehicles); //Const, aunque no se puede reasignar, si se trata de arrais y metodos se les pueden añadir.
