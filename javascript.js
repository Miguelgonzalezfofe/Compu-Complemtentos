/* 
Registro usuario*
login Usuario*
array con objetos de los productos*
rendirizacion de producto en html segun la API*
carrito
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
/* DESESTRUCTURACION VARIABLES USUARIO */
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
/* EVENTO CERRAR VENTANE DE INGRESO */
function cerrarIngreso() {
    let ventanaing = document.getElementById("ventanaIngreso")
    ventanaing.style.display = "none"
}
/* EVENTO ABRIR VENTA DE INGRESO */
function abrirIngreso() {
    let ventanaing = document.getElementById("ventanaIngreso")
    ventanaing.style.display = "flex"
}
/*DATOS INGRESADO DEL USUARIO  */
let ingCorrUsu = document.getElementById("ingresoCorreoUsuario").addEventListener("change", (event) => ingCorrUsu = event.target.value)
let contrUsu = document.getElementById("ingresoContraseñaUsuario").addEventListener("change", (event) => contrUsu = event.target.value)


/* BOTON DE INGRESO USUARIO */
let btnIngreso = document.getElementById("btnIngreso").addEventListener("click", () => ingresoUsuario())

/* FUNCION DE INGRESOS DEL USUARIO*/
function ingresoUsuario() {
    validacionDatos() ? cambioDePerfil() : console.log("no ingresaste")

/* falta agregar una confirmacion de correo  */
}
console.log(usuarioEnLoSt)
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


/* PRODUCTOS */

class nuevoProducto {
    constructor(id, nombre, precio, img) {
        this.id = id,
            this.nombre = nombre;
        this.precio = precio;
        this.img = img
    }
}

const productos = [
    {
        "id": 1,
        "nombre": "Comsola EXBOX SERIES S ",
        "precio": 750,
        "img": "https://images.start.com.ar/RRS-00002.jpg"
    },
    {
        "id": 2,
        "nombre": "AURICULAR SONY PS5",
        "precio": 200,
        "img": "https://images.start.com.ar/3006433.jpg"
    },
    {
        "id": 3,
        "nombre": "NOTEBOOK GAMER ASUS",
        "precio": 2500,
        "img": "https://images.start.com.ar/G513RM-HQ084W-365.jpg"
    },
    {
        "id": 4,
        "nombre": "JOYSTICK MICROSOFT XBOX",
        "precio": 130,
        "img": "https://images.start.com.ar/QAS-00007.jpg"
    },
    {
        "id": 5,
        "nombre": "CONSOLA SONY PLAYSTATION 4TB",
        "precio": 1200,
        "img": "https://images.start.com.ar/1000037231.jpg"
    },
    {
        "id": 6,
        "nombre": "MOUSE GAMER",
        "precio": 75,
        "img": "https://images.start.com.ar/910-006366.jpg"
    },
    {
        "id": 7,
        "nombre": "TECLADO GAMER G715",
        "precio": 190,
        "img": "https://images.start.com.ar/920-010453.jpg"
    },
    {
        "id": 8,
        "nombre": "MONITOR SAMSUNG 24",
        "precio": 270,
        "img": "https://images.start.com.ar/LF24T350FHLCZB.jpg"
    },
    {
        "id": 9,
        "nombre": "TACLADO GAMER TRUST GTX 833",
        "precio": 25,
        "img": "https://images.start.com.ar/24067.jpg"
    },
    {
        "id": 10,
        "nombre": "TECLADO MICROSOFT BLUETOOTH ",
        "precio": 84,
        "img": "https://images.start.com.ar/21Y-00061.jpg"
    },
    {
        "id": 11,
        "nombre": "TECLADO Y MOUSE TRUST GAMER ",
        "precio": 52,
        "img": "https://images.start.com.ar/22460.jpg"
    },
    {
        "id": 12,
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
    <button type="button" class="botonAgregarProducto" id="btn${x.id}">Agregar producto</button>
    </div>
    </div>
    `
    padreCajaProductos.append(div)
}
/* SECCION PARA MOSTRAR EL CARRITO DE COMPRAS */
/* variable carrito donde se guardan */
let carrito = []
/* CARRITO EN EL LOCAL STORAGE */
let carritoEnLoSt = JSON.parse(localStorage.getItem("carrito"))

/* EVENTO DE BOTONES AGREGAR PRODUCTOS */
let btn1 = document.getElementById("btn1").addEventListener("click", () => agregarAlCarrito(productos[0]))
let btn2 = document.getElementById("btn2").addEventListener("click", () => agregarAlCarrito(productos[1]))
let btn3 = document.getElementById("btn3").addEventListener("click", () => agregarAlCarrito(productos[2]))
let btn4 = document.getElementById("btn4").addEventListener("click", () => agregarAlCarrito(productos[3]))
let btn5 = document.getElementById("btn5").addEventListener("click", () => agregarAlCarrito(productos[4]))
let btn6 = document.getElementById("btn6").addEventListener("click", () => agregarAlCarrito(productos[5]))
let btn7 = document.getElementById("btn7").addEventListener("click", () => agregarAlCarrito(productos[6]))
let btn8 = document.getElementById("btn8").addEventListener("click", () => agregarAlCarrito(productos[7]))
let btn9 = document.getElementById("btn9").addEventListener("click", () => agregarAlCarrito(productos[8]))
let btn10 = document.getElementById("btn10").addEventListener("click", () => agregarAlCarrito(productos[9]))
let btn11 = document.getElementById("btn11").addEventListener("click", () => agregarAlCarrito(productos[10]))
let btn12 = document.getElementById("btn12").addEventListener("click", () => agregarAlCarrito(productos[11]))



/* FUNCION AGREGAR EL PRODUCTO AL CARRITO */
function agregarAlCarrito(valor) {
    carrito.push(valor)
    mostarCarrtio()
}
/* FUNCION PARA MOSTRAR EL CARRITO DE COMPRAS EN PANTALLA */
function mostarCarrtio() {
    carritoEnHtml()
}

let PantallaCarrito = document.getElementById("carrito")
/* FUNCION DE AGREGAR LOS PORDUCTOS AL HTML */
function carritoEnHtml() {
    let ul = document.createElement("li")
    for (x of carrito) {
        ul.innerHTML = ` 
        ${x.nombre} $${x.precio}
        `
        PantallaCarrito.append(ul)
    }
    sumarCarrito()
}
let preciodelcarrito = []
function sumarCarrito (){
    preciodelcarrito = []
    for(x of carrito){
    preciodelcarrito.push(x.precio)
}
let total = preciodelcarrito.reduce((acc,num)=> acc+num)
let precioFinal = document.getElementById("totalCarrito")
precioFinal.innerText= total
console.log(preciodelcarrito)
console.log(total)
}



