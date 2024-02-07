/* 
Registro usuario
login Usuario
array con objetos de los productos
rendirizacion de producto en html segun la API
Boton de agregar al carrtio
mostrar carrito de compra
    nombre > precio 

    total a pagar
boton de comprar carrito
    itilizar un procesador de pago con la api de mercado pago 
filtro de productos


footer contacto con formulario 
*/
/* variables */
/* 
cauchos
carburador
radiador
bujia
mortor
bolante
caja de cambios
puerta 
faros
 */







/* VERIFICACION SI TENEMOS UN USUARIO EN LINEA */
let usuario
let usuarioEnLoSt = JSON.parse(localStorage.getItem("usuario"))
usuarioEnLoSt ? console.log(usuarioEnLoSt) : console.log("no tenemos usuario")

/* EVENTO ABRIR REGISTRO DE USUARIO */
let registroDeUsuario = document.getElementById("registroDeUsuario").addEventListener("click", () => abrirRegistro())

let ingresoDeUsuario = document.getElementById("inicioSesionUsuario").addEventListener("click", () => abrirIngreso())

/* EVENTO CERRAR REGISTRO DE USUARIO */
let cierreRegistroUsuario = document.getElementById("cerrarRegistroUsuario").addEventListener("click", () => cerrarRegistro())

let cierreIngresoUsuario = document.getElementById("cerrarIngresoUsuario").addEventListener("click", () => cerrarIngreso())


class registroUsuario {
    constructor(nombre, apellido, correo, contraseña, termYCond) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.contraseña = contraseña
        this.termYcond = termYCond
    }
}
class registroP {
    constructor(apellido) {
        this.apellido = apellido
    }
}
/* LOGICA DE REGISTRO USUARIO********************** */
/* EVENTO DE ABRIR LA VENTADA DE REGISTRO */
function abrirRegistro() {
    let ventanaReg = document.getElementById("registro")
    ventanaReg.style.display = "flex"
}

/* EVENTO DE CERRRAR LA VENTA DE REGISTRO */
function cerrarRegistro() {
    let ventanaReg = document.getElementById("registro")
    ventanaReg.style.display = "none"
}
let regNomUsu = document.getElementById("registroNombreUsuario").addEventListener("change", (event) => { regNomUsu = event.target.value })
let regApellUsu = document.getElementById("registroApellidoUsuario").addEventListener("change", (event) => { regApellUsu = event.target.value })
let regCorreUsu = document.getElementById("registroCorreoUsuario").addEventListener("change", (event) => { regCorreUsu = event.target.value })
let regcontrUsu = document.getElementById("registroContraseñaUsuario").addEventListener("change", (event) => { regcontrUsu = event.target.value })
let terYConUsu = document.getElementById("terminosYCondiciones").addEventListener("change", (event) => { teryconUsu = event.target.value })


/* BOTON DE CRACION DE USUARIO */
let btnRegistrase = document.getElementById("btnRegistrase").addEventListener("click", () => creacionUsuario())
/* FUNCION DE CRACION DEL USUARIO */
function creacionUsuario() {
    usuarioEnLoSt = new registroUsuario(regNomUsu, regApellUsu, regCorreUsu, regcontrUsu, terYConUsu)
    localStorage.setItem("usuario", JSON.stringify(usuarioEnLoSt))
    // console.log(usuario)
    cerrarRegistro()


}


/* FINAL LOGICA REGISTRO USUARIO ******************* */

/* LOGICA INGRESO USUARIO ************************* */
function cerrarIngreso() {
    let ventanaing = document.getElementById("ventanaIngreso")
    ventanaing.style.display = "none"
}
function abrirIngreso() {
    let ventanaing = document.getElementById("ventanaIngreso")
    ventanaing.style.display = "flex"
}
/*DATOS INGRESADO DEL USUARIO  */
let ingCorrUsu = document.getElementById("ingresoCorreoUsuario").addEventListener("change", (event) => ingCorrUsu = event.target.value)
let contrUsu = document.getElementById("ingresoContraseñaUsuario").addEventListener("change", (event) => contrUsu = event.target.value)

/* DATOS DEL LOCAL STORAGE DEL USUARIO */
/* DESESTRUCTURACINO */
const { nombre, apellido, correo, contraseña } = usuarioEnLoSt

/* BOTON DE INGRESO USUARIO */
let btnIngreso = document.getElementById("btnIngreso").addEventListener("click", () => ingresoUsuario())

/* FUNCION DE INGRESOS DEL USUARIO*/
function ingresoUsuario() {
    validacionDatos() ? cambioDePerfil() : console.log("no ingresaste")


}
function validacionDatos() {
    if (validacionContraseña() && validacionCorreo()) {
        return true
    } else {
        return false
    }
    // validacionContraseña() 
}
function validacionCorreo() {
    if (ingCorrUsu == correo) {
        return true
    } else {
        return false
    }
}
function validacionContraseña() {
    if (contrUsu === contraseña) {
        return true
    } else {
        return false
    }
}

/* CAMBIO DE PERFIL DEL USUARIO  */
function cambioDePerfil() {
    let perfil = document.getElementById("inicio_registo_Sesion")
    perfil.innerHTML = `<p class="perfil_iniciado">${nombre} ${apellido}</p>`
    cerrarIngreso()
}
/* FINAL LOCICA INGRESO USUARIO */

/* continuar con el addventlistener para captar lo que escriben en el formulario  */
// console.log(regNomUsu.innerText)
// console.log(regApellUsu.innerText)
// console.log(regCorreUsu.innerText)
// // console.log(regcontrUsu.innerText)
// console.log(teryconUsu.innerText)


/* <!-- continuar con el formulario para ingresar el nuevo usuario capturar los datos en un objeto para pasarlo a json y enviarlo al sesionstorage o local storage y asi cuando inicie sesion verifique el correo y contraseña del usuario--> */



/* PRODUCTOS */

class nuevoProducto {
    constructor(nombre, precio, img) {
        this.nombre = nombre;
        this.precio = precio;
        this.img = img
    }
}

const productos = []

productos.push(
    new nuevoProducto("Comsola EXBOX SERIES S ", 750, "https://images.start.com.ar/RRS-00002.jpg"),
    new nuevoProducto("AURICULAR SONY PS5", 200, "https://images.start.com.ar/3006433.jpg"),
    new nuevoProducto("NOTEBOOK GAMER ASUS", 2500, "https://images.start.com.ar/G513RM-HQ084W-365.jpg"),
    new nuevoProducto("JOYSTICK MICROSOFT XBOX", 130, "https://images.start.com.ar/QAS-00007.jpg"),
    new nuevoProducto("CONSOLA SONY PLAYSTATION 4TB", 1200, "https://images.start.com.ar/1000037231.jpg"),
    new nuevoProducto("MOUSE GAMER", 75, "https://images.start.com.ar/910-006366.jpg"),
    new nuevoProducto("TECLADO GAMER G715", 190, "https://images.start.com.ar/920-010453.jpg"),
    new nuevoProducto("MONITOR SAMSUNG 24", 270, "https://images.start.com.ar/LF24T350FHLCZB.jpg"),
    new nuevoProducto("TACLADO GAMER TRUST GTX 833", 25, "https://images.start.com.ar/24067.jpg"),
    new nuevoProducto("TECLADO MICROSOFT BLUETOOTH ",84,"https://images.start.com.ar/21Y-00061.jpg"),
    new nuevoProducto("TECLADO Y MOUSE TRUST GAMER ",52,"https://images.start.com.ar/22460.jpg"),
    new nuevoProducto("DISCO INTERNO SSD BX500-240GB ",35,"https://images.start.com.ar/CRU-CT240BX500SSD1.jpg"),

)


/* CREACION DE LOS PRODUCTOS EN LA WEB */
let padreCajaProductos = document.getElementById("cajaProductos")
for (const x of productos) {
    let div = document.createElement("div")
    div.innerHTML = `
    <div class="producto">
    <img src="${x.img}" alt="producto">
    <p class="nombre_producto">${x.nombre}</p>
    <p class="precio" id="precio">$${x.precio}</p>
    <div class="caja_boton">
    <button type="button" id="botonAgregarProducto">Agregar producto</button>
    </div>
    </div>
    `
    padreCajaProductos.append(div)
}