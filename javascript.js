/* CONSTRUCTOR DE USURIO */
class registroUsuario {
    constructor(nombre, apellido, correo, contraseña) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.contraseña = contraseña
    }
}
let usuarioEnLoSt ;
let usuarioEnSeSt ;
// usuarioEnLoSt = JSON.parse(localStorage.getItem("usuario"))  
// usuarioEnLoSt? ingresoDePerfil() : false
/* SECCION DE EVENTOS DE VENTANA REGISTRO E INGRESO */

/* ABRIR REGISTRO DE USUARIO */
let registroDeUsuario = document.getElementById("registroDeUsuario").addEventListener("click", () => abrirRegistro())

/* FUNCION DE ABRIR LA VENTADA DE REGISTRO */
function abrirRegistro() {
    let ventanaReg = document.getElementById("registro")
    ventanaReg.style.display = "flex"
    cerrarIngreso()
}

/* CERRAR REGISTRO DE USUARIO */
let cierreRegistroUsuario = document.getElementById("cerrarRegistroUsuario").addEventListener("click", () => cerrarRegistro())

/* FUNCION DE CERRRAR LA VENTA DE REGISTRO */
function cerrarRegistro() {
    let ventanaReg = document.getElementById("registro")
    ventanaReg.style.display = "none"
    textErroregistro.innerText = ""

}

/* ABRIR INGRESO DE USUARIO */
let ingresoDeUsuario = document.getElementById("inicioSesionUsuario").addEventListener("click", () => abrirIngreso())

/* FUNCION ABRIR VENTA DE INGRESO */
function abrirIngreso() {
    let ventanaing = document.getElementById("ventanaIngreso")
    ventanaing.style.display = "flex"
    cerrarRegistro()
}

/* EVENTO CERRAR INGRESO USUARIO */
let cierreIngresoUsuario = document.getElementById("cerrarIngresoUsuario").addEventListener("click", () => cerrarIngreso())

/* fUNCION CERRAR VENTANE DE INGRESO */
function cerrarIngreso() {
    let ventanaing = document.getElementById("ventanaIngreso")
    ventanaing.style.display = "none"
    textErroingreso.innerText = ""
    
}
/* FINAL SECCION DE EVENTOS DE VENTANA REGISTRO E INGRESO */


/* VARIABLES PARA EL REGISTRO USUARIO */
let regNomUsu = document.getElementById("registroNombreUsuario").addEventListener("change", (event) => { regNomUsu = event.target.value })
let regApellUsu = document.getElementById("registroApellidoUsuario").addEventListener("change", (event) => { regApellUsu = event.target.value })
let regCorreUsu = document.getElementById("registroCorreoUsuario").addEventListener("change", (event) => { regCorreUsu = event.target.value })
let regcontrUsu = document.getElementById("registroContraseñaUsuario").addEventListener("change", (event) => { regcontrUsu = event.target.value })


/* BOTON DE CRACION DE USUARIO */
let btnRegistrase = document.getElementById("btnRegistrase").addEventListener("click", () => validacionRegistro())
let textErroregistro = document.getElementById("errorDeregistro")

/* VALIDACION DE DATOS CREACION DE USUARIO */
function validacionRegistro() {
    
    if (valRegNomUsu() && valApellUsu() && valCorreUsu() && valcontrUsu()) {
        creacionUsuario()
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "El Usuario fue creado con extio ya puede iniciar sesion",
            showConfirmButton: false,
            timer: 2500
        });
    } else {
        textErroregistro.innerText = "Error de ingreso vuelva a intentar"
    }
    
}

/* VALIDACION DATOS INGRESASDO NOMBRE USUARIO */
function valRegNomUsu() {
    if (regNomUsu || false) {
        return true
    } else {
        return false
    }
}
/* VALIDACION DATOS INGRESASDO APELLIDO USUARIO */
function valApellUsu() {
    if (regApellUsu || false) {
        return true
    } else {
        return false
    }
}

/* VALIDACION DATOS INGRESASDO CORREO USUARIO */
function valCorreUsu() {
    if (regCorreUsu || false) {
        return true
    } else {
        return false
    }
}
/* VALIDACION DATOS INGRESASDO CONTRASEÑA USUARIO */
function valcontrUsu() {
    if (regcontrUsu || false) {
        return true
    } else {
        return false
    }
}

/* FUNCION DE CRACION DEL USUARIO */
function creacionUsuario() {
    usuarioEnLoSt = new registroUsuario(regNomUsu, regApellUsu, regCorreUsu, regcontrUsu)
    localStorage.setItem("usuario", JSON.stringify(usuarioEnLoSt))
    cerrarRegistro()
    abrirIngreso()
}

/* FINAL LOGICA REGISTRO USUARIO ******************* */


/* LOGICA INGRESO USUARIO ************************* */


/*DATOS INGRESADO DEL USUARIO  */
let ingCorrUsu = document.getElementById("ingresoCorreoUsuario").addEventListener("change", (event) => ingCorrUsu = event.target.value)
let contrUsu = document.getElementById("ingresoContraseñaUsuario").addEventListener("change", (event) => contrUsu = event.target.value)


/* BOTON DE INGRESO USUARIO */
let btnIngreso = document.getElementById("btnIngreso").addEventListener("click", () => ingresoUsuario())


/* FUNCION DE INGRESOS DEL USUARIO*/
let textErroingreso = document.getElementById("errorDeIngreso")


function ingresoUsuario() {
    usuarioEnLoSt = JSON.parse(localStorage.getItem("usuario"))
    usuarioEnLoSt? { nombre, apellido, correo, contraseña } = usuarioEnLoSt: textErroingreso.innerText = "No tenemos tus datos. Debes registrarte"
    validacionDatos() ? ingresoDePerfil() : errorlogin()
    
    
    if(usuarioEnLoSt == false){
        sessionStorage.setItem("usuario-sesion",JSON.stringify(usuarioEnLoSt))
        usuarioEnSeSt = JSON.parse(sessionStorage.getItem("usuario-sesion"))
        
    } 
    
}
function errorlogin() {
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
/* QUE DE EN QUE CUANDO CIERRE O CAMBIO EL USARIO DESDE ESO CAMBIE EL DISPLAY DE INICIO Y REGITRO DE SESIO  */
/* TAREAS 
BAJAR LA VENTANA DE REGISTRO Y DE INGRESO POR EL FIXED DEL HEADER
CUANDO SE ABRA EL REGISTRO SE CIERRE EL INGRESO Y LO MISMO AL CONTRARIO 
AGREGAR UNA ALERTA CON TOASTY PARA INDICAR CUANDO SE AGREGO UN NUEVO PRODUCTO AL CARRITO 
APLICAR UN FILTRO PARA LOS PRODUCTOS POR PRECIO 
AGREGAR LA OPCION DE CERRAR SESION EN LA FOTO DE PERFIL
PENSAR EL FOOTER PARA COMPLETAR LA VISTA DE LA PAGINA
CAMBIAR LOS LOGOS DE USUARIO Y CARRITO POR EL DE BOOSTRAP
SACAR LOS PRODUCTOS DEL JS Y GUARDARLOS EN UN JSON
COMENTAR Y SEPARAR LAS PORCIONES DE CODIGO PARA QUE SEA MAS ENTENDIBLE EN HTML CSS Y JS
AGREGAR EL FORMATO PARA QUE ACEPTE SOLAMENTE CON EL .COM EN EL INPUT DE CORREO

 */

/* CAMBIO DE PERFIL DEL USUARIO  */
let sesionIngreoRegistro = document.getElementById("inicio_registo_Sesion")
let perfil = document.getElementById("usuarioIngresado")
function ingresoDePerfil() {
    usuarioEnSeSt ? { nombre, apellido, correo, contraseña } = usuarioEnSeSt : false
    sesionIngreoRegistro.style.display ="none"
    cerrarSesion.style.display = "block"
    
    
    
    perfil.innerHTML = `<p class="perfil_iniciado">${nombre} ${apellido}</p>`
    cerrarIngreso()
}
let cerrarSesion = document.getElementById("cerrarSesion")
cerrarSesion.addEventListener("click", ()=>{cerrarlaSesion()} )
function cerrarlaSesion(){
    sessionStorage.clear()
    sesionIngreoRegistro.style.display ="block"
    cerrarSesion.style.display = "none"
    perfil.innerHTML = ""

    

}

/* FINAL LOCICA INGRESO USUARIO */

/* CERRAR SESION DEL USUARIO */
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
