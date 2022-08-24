// VARIABLES

var a; //Declarar una variable
var b = 'b' // Declaramos y Asignamos
b = 'bb'; // Reasignación
var a = 'aa' // Redeclaración


// Global Scope

var fruit = 'Apple';

function bestFruit () {
    console.log(fruit);
}

bestFruit();

function countries () {
    country = 'España';
    console.log(country);
}

countries();
console.log(country)