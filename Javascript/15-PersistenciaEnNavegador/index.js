/** 
- Almacena el objeto anterior en la SessionStorage
- Almacena el objeto anterior en la LocalStorage
- Crea una cookie que caduque en 2 minutos con los datos del objeto anterior
- Observa en Google Chrome cómo se almacenan los datos en la SessionStorage, LocalStorage y las cookies
- Cierra el navegador, comenta las líneas que almacenan SessionStorage, LocalStorage y CookieStorage y vuelve a abrirlo
- Observa cómo la SessionStorage está vacía
- Observa cómo la LocalStorage sigue manteniendo el objeto que has almacenado antes de cerrar el navegador
- Observa cómo la cookie sigue manteniendo el objeto que has almacenado antes, aunque ya está caducado */
const names = "Marcos";

const lastName = "Cruz";

const fullName = { 
    names,
    lastName
}

sessionStorage.setItem("nombreCompleto", JSON.stringify(fullName))

localStorage.setItem("nombreCompleto", JSON.stringify(fullName))


const now = new Date()
document.cookie = `datos=${JSON.stringify(fullName)};expires=${new Date(now.getTime() + 2 * 60000)}`
