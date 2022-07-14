/*
        Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
- Un nuevo Set con los nombres de tu familia
- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
*/

let setFamily = new Set(["Laura", "Adolfo", "Jose", "Marcos"])
console.log(setFamily)

setFamily.add("Marcos") //El set no permite valores duplicados en el array (en este caso)
console.log(setFamily)

setFamily.add("Javascript")
console.log(setFamily)
