
// Swal.fire("SweetAlert2 is working!"); agregar mas alertas con sweel alert

/* AGRAGAR LOS ENLACES DE LAS PAGINAS DEL LA BARRA DE NAVEGACION
PONER LA BARRA DE NAVEGACION EL POSITIO FIXED PARA QUE SIGA LA PANTALLA
HACER LO RESPONSIVE 
AGREGAR TITULOS Y SUB TITULOS DE LA PAGINA
AGREGAR EL FFUTER */
// BOTON PARA HACER EL CAMBIO DE IMG    

/* VERIFICACION SI TENEMOS UN USUARIO EN LINEA */
let usuarioEnLoSt = JSON.parse(localStorage.getItem("usuario"))

/* DESESTRUCTURACION VARIABLES USUARIO */
usuarioEnLoSt ? { nombre, apellido, correo, contraseña } = usuarioEnLoSt : {nombre,apellido,correo,contraseña} = undefined
/* EVENTO ABRIR REGISTRO DE USUARIO */
let registroDeUsuario = document.getElementById("registroDeUsuario").addEventListener("click", () => abrirRegistro())

let ingresoDeUsuario = document.getElementById("inicioSesionUsuario").addEventListener("click", () => abrirIngreso())

/* EVENTO CERRAR REGISTRO DE USUARIO */
let cierreRegistroUsuario = document.getElementById("cerrarRegistroUsuario").addEventListener("click", () => cerrarRegistro())

/* EVENTO CERRAR INGRESO USUARIO */
let cierreIngresoUsuario = document.getElementById("cerrarIngresoUsuario").addEventListener("click", () => cerrarIngreso())

/* CONSTRUCTOR DE USURIO */
class registroUsuario {
    constructor(nombre, apellido, correo, contraseña) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.contraseña = contraseña
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


/* BOTON DE CRACION DE USUARIO */
let btnRegistrase = document.getElementById("btnRegistrase").addEventListener("click", () => validacionRegistro())

let textErroregistro = document.getElementById("errorDeregistro")


/* VALIDACION DE DATOS CREACION DE USUARIO */
function validacionRegistro() {
    if (valRegNomUsu()&& valApellUsu() && valCorreUsu() && valcontrUsu()) {
        creacionUsuario()
    } else {
        textErroregistro.innerText = "Error de ingreso vuelva a intentar"
    }
}

/* VALIDACION DATOS INGRESASDO NOMBRE USUARIO */
function valRegNomUsu() {
    if (regNomUsu || false) {
        return true
    } else{
        return false
    }
}
/* VALIDACION DATOS INGRESASDO APELLIDO USUARIO */
function valApellUsu(){
    if(regApellUsu || false){
        return true
    } else{
        return false
    }
}

/* VALIDACION DATOS INGRESASDO CORREO USUARIO */
function valCorreUsu(){
    if(regCorreUsu|| false){
        return true
    } else{
        return false
    }
}
/* VALIDACION DATOS INGRESASDO CONTRASEÑA USUARIO */
function valcontrUsu(){
    if(regcontrUsu|| false){
        return true
    } else{
        return false
    }
}

/* FUNCION DE CRACION DEL USUARIO */
function creacionUsuario() {
    usuarioEnLoSt = new registroUsuario(regNomUsu, regApellUsu, regCorreUsu, regcontrUsu)
    localStorage.setItem("usuario", JSON.stringify(usuarioEnLoSt))
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
let textErroingreso = document.getElementById("errorDeIngreso")


function ingresoUsuario() {
    validacionDatos() ? cambioDePerfil() : errorlogin()

}
function errorlogin(){
    textErroingreso.innerText = "Error en la contraseña o usuario"
}

function validacionDatos() {
    if (validacionContraseña() && validacionCorreo()) {
        return true
    } else {
        return false
    }
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
/* CREADOR DE PRODUCTOS */
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
let cerrarCarr = document.getElementById("cerrarCarrito").addEventListener("click", () => cerrarCarrito())
let abrirCarr = document.getElementById("carritoCompras").addEventListener("click", () => abrirCarrito())

function cerrarCarrito() {
    let ventanaCarrito = document.getElementById("contenedorCarrito")
    ventanaCarrito.style.display = "none"
}
function abrirCarrito() {
    ventanaCarrito = document.getElementById("contenedorCarrito")
    ventanaCarrito.style.display = "flex"
}

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
for (let i = 0; i < productos.length; i++) {
    let btn = document.getElementById(`btn${productos[i].id}`);
    btn.addEventListener("click", () => agregarAlCarrito({ ...productos[i] }));
}


/* FUNCION AGREGAR EL PRODUCTO AL CARRITO */
function agregarAlCarrito(valor) {
    carrito.push(valor)
    carritoEnLoSt = carrito
    localStorage.setItem("carrito", JSON.stringify(carritoEnLoSt))
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
    productoMasCaro()
}
/* AGREGAR SOLO EL PRECIO DE LOS PRODUCTOS A UNA VARIABLE */
let preciodelcarrito
function sumarCarrito() {
    preciodelcarrito = []
    for (x of carrito) {
        preciodelcarrito.push(x.precio)
    }
    /* SUMAR TODOS LOS PRECIOS DE LOS PRODUCTOS */
    let total = preciodelcarrito.reduce((acc, num) => acc + num)
    let precioFinal = document.getElementById("totalCarrito")
    /* CAMBIO DEL TEXTO CON EL DOM */
    precioFinal.innerText = total
}

/* PRODUCTO MAS CARO CON EM METODO SPREND */
function productoMasCaro() {
    /* BUSCAR EL MAYOR */
    let masCaro = Math.max(...preciodelcarrito)
    /* CAMBIO DEL TEXTO CON EL DOM */
    let mayorValor = document.getElementById("mayorValor")
    mayorValor.innerText = masCaro
}
