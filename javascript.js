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
usuarioEnLoSt ? { nombre, apellido, correo, contraseña } = usuarioEnLoSt : console.log("no tenemos usuario")

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

const productos =[
        {
            "nombre": "Comsola EXBOX SERIES S ",
            "precio": 750,
            "img": "https://images.start.com.ar/RRS-00002.jpg"
        },
        {
            "nombre": "AURICULAR SONY PS5",
            "precio": 200,
            "img": "https://images.start.com.ar/3006433.jpg"
        },
        {
            "nombre": "NOTEBOOK GAMER ASUS",
            "precio": 2500,
            "img": "https://images.start.com.ar/G513RM-HQ084W-365.jpg"
        },
        {
            "nombre": "JOYSTICK MICROSOFT XBOX",
            "precio": 130,
            "img": "https://images.start.com.ar/QAS-00007.jpg"
        },
        {
            "nombre": "CONSOLA SONY PLAYSTATION 4TB",
            "precio": 1200,
            "img": "https://images.start.com.ar/1000037231.jpg"
        },
        {
            "nombre": "MOUSE GAMER",
            "precio": 75,
            "img": "https://images.start.com.ar/910-006366.jpg"
        },
        {
            "nombre": "TECLADO GAMER G715",
            "precio": 190,
            "img": "https://images.start.com.ar/920-010453.jpg"
        },
        {
            "nombre": "MONITOR SAMSUNG 24",
            "precio": 270,
            "img": "https://images.start.com.ar/LF24T350FHLCZB.jpg"
        },
        {
            "nombre": "TACLADO GAMER TRUST GTX 833",
            "precio": 25,
            "img": "https://images.start.com.ar/24067.jpg"
        },
        {
            "nombre": "TECLADO MICROSOFT BLUETOOTH ",
            "precio": 84,
            "img": "https://images.start.com.ar/21Y-00061.jpg"
        },
        {
            "nombre": "TECLADO Y MOUSE TRUST GAMER ",
            "precio": 52,
            "img": "https://images.start.com.ar/22460.jpg"
        },
        {
            "nombre": "DISCO INTERNO SSD BX500-240GB ",
            "precio": 35,
            "img": "https://images.start.com.ar/CRU-CT240BX500SSD1.jpg"
        }
    ]







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