/**
- Una variable que contenga tu altura en centímetros (entero)

- Una variable que contenga tu altura en metros (número de coma flotante)

- Una variable que contenga tu peso en kilogramos (número de coma flotante)

- Una variable que contenga tu altura en metros redondeada hacia arriba

- Una variable que contenga tu peso en kilogramos redondeado hacia abajo

- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
 */

let alturaEnCent = 165

let alturaEnMetros = 1.65

let pesoEnKg = 65.5

let alturaFloatArriba = Math.ceil(alturaEnMetros)

let alturaFloatAbajo = Math.floor(alturaEnMetros)

let igualdad = Number.MAX_VALUE + 1 === Number.MAX_VALUE

console.log(igualdad)
