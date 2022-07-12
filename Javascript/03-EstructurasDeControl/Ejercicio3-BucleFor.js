// Factorial-forEste archivo debe calcular el factorial de 10 utilizando un solo bucle for
var fact = 10
for (let i = 1; i <= 10; i++) {
    fact = fact * i
}

console.log(fact)


// Factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while
let factorial = 1
let j = 10
while (j > 1) {
    factorial = factorial * j;
    j--;
}

console.log(factorial)


// Factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, 
// una bifurcación if y una sentencia break

let factB = 10
let k = 1
while (true) {
    factB = factB * k;
    k++;
    if (k === 10) {
        break;
    }
}

console.log(factB)
