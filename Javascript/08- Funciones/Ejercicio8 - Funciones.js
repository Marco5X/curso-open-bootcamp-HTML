/**
 * Crea un archivo JS que contenga las siguientes líneas

- Una función sin parámetros que devuelva siempre "true"
- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
- Una función generadora de índices pares automáticos
 */

function devuelveTrue() {
    return true
}
console.log(devuelveTrue)

async function promesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}


function* indices () {
    let i = 0
    while (true) {
        yield i = i + 2       
    }
}
const index = indices()

console.log(index.next())
console.log(index.next())
console.log(index.next().value)
