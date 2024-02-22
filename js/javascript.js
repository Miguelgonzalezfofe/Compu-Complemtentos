/* TAREAS 
investigar en cuanto sale el precio del hosttinger para alojar mis proyectos
cambiar los colores del texto de  la presentacion
agregar fotos de perfiles para seleccionar al registrarse
APLICAR UN FILTRO PARA LOS PRODUCTOS POR PRECIO (inicio de trabajo)
PENSAR EL FOOTER PARA COMPLETAR LA VISTA DE LA PAGINA
    NOMBRE DEL SITIO WEB / CONTACTO /METODOS DE PAGO
posicionar el numero del carrito 
AGREGAR UNA TRASITION AL CARRITO DE COMPRAS
COMENZAR A INCORMPAR BOOSTRAP
ADAPTAR A DISTINTOS DISPOSITIVOS 
*guardar los datos del carrito en el localstorage y que al inicia sesion se cargen los datos del carrito*
incorparar la api de dolar
agregar el boton de compra {que lleve a un html aparte para realizar el pago del carrito}
simular el pago realizado y el pago con error
COMENTAR Y SEPARAR LAS PORCIONES DE CODIGO PARA QUE SEA MAS ENTENDIBLE EN HTML CSS Y JS
AGREGAR EL FORMATO PARA QUE ACEPTE SOLAMENTE CON EL .COM EN EL INPUT DE CORREO
darle mas espacio al logo del inicio
AGREGAR MAS PRODUCTOS
EDITAR LA CARTAS Y LOS BOTONES 
 */

/* CONSTRUCTOR DE USURIO */
class registroUsuario {
    constructor(nombre, apellido, correo, contraseña) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.contraseña = contraseña
    }
}
let usuarioEnLoSt;
let usuarioEnSeSt;
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
    usuarioEnLoSt ? { nombre, apellido, correo, contraseña } = usuarioEnLoSt : textErroingreso.innerText = "No tenemos tus datos. Debes registrarte"
    validacionDatos() ? ingresoDePerfil() : errorlogin()


    if (usuarioEnLoSt == false) {
        sessionStorage.setItem("usuario-sesion", JSON.stringify(usuarioEnLoSt))
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


/* CAMBIO DE PERFIL DEL USUARIO  */
let sesionIngreoRegistro = document.getElementById("inicio_registo_Sesion")
let perfil = document.getElementById("usuarioIngresado")
function ingresoDePerfil() {
    usuarioEnSeSt ? { nombre, apellido, correo, contraseña } = usuarioEnSeSt : false
    sesionIngreoRegistro.style.display = "none"
    cerrarSesion.style.display = "block"



    perfil.innerHTML = `<p class="perfil_iniciado">${nombre} ${apellido}</p>`
    cerrarIngreso()
}
let cerrarSesion = document.getElementById("cerrarSesion")
cerrarSesion.addEventListener("click", () => { cerrarlaSesion() })
function cerrarlaSesion() {
    sessionStorage.clear()
    sesionIngreoRegistro.style.display = "block"
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

/* SECCION PARA EL FILTRADO DE LOS PRODUCTOS */

/* VARIABLE DEL NODO INPUT DEL FILTRADO */
let entraFiltro = document.getElementById("productoFiltro").addEventListener("change", (event)=>{ entraFiltro = (event.target.value)})

function filtrarCatalogo(){
        filtrado = new Promise((resolve) => {
        resolve(
            fetch("js/productos.json")
            .then((responde) => responde.json())
            .then((data) => {
                let pa = document.getElementsByClassName("producto")
                
                    produFiltra = data.producto
                    const resultado = produFiltra.filter((x) => x.nombre.includes(entraFiltro.toLowerCase()))
                    console.log(resultado)
                    eliminarDivs()
                    resultado.forEach(producto => {
                        div = document.createElement("div")
                        div.className = "producto"
                        div.innerHTML = `
                    <img src="${producto.img}" alt="producto">
                    <p class="nombre_producto">${producto.nombre}</p>
                    <p class="precio" id="precio">$${producto.precio}</p>
                    <div class="caja_boton">
                    <button type="button" class="botonAgregarProducto" id="btn${producto.id}">Agregar producto</button>
                    </div>
                    `
                        padreCajaProductos.appendChild(div)
                    })
                })

        )
    })
    }
/* FUNCION DE FILTRADO */
// function filtrarProducto(valor) {}

/* VARIBLE NODO DEL FORMULARIO DE FILTRADO */
let formFiltr = document.getElementById("form_filtr")
formFiltr.addEventListener("submit",(event)=> {
    event.preventDefault()
    filtrarCatalogo()

})

/* CREACION DE LOS PRODUCTOS EN LA WEB */
let padreCajaProductos = document.getElementById("cajaProductos") //contenedor donde iran los div productos
let div2; //variable para eliminar los productos al aplicar el filtro
/* FUNCION PARA CRAR EL CATALOGO DE INICIO */
function buscarCatalogo() {
    setTimeout(() => {
        creacionCatalogo = new Promise((resolve) => {
            resolve(
                fetch("js/productos.json")
                    .then(response => response.json())
                    .then(data => {
                        productos = data.producto
                        productos.forEach(producto => {
                            /* CREACION DEL NODO PARA LOS PRODUCTOS */
                            let div = document.createElement("div")
                            div.className = "producto"
                            /* HTML PARA EL DIV */
                            div.innerHTML = `
                        <img src="${producto.img}" alt="producto">
                        <p class="nombre_producto">${producto.nombre}</p>
                        <p class="precio" id="precio">$${producto.precio}</p>
                        <div class="caja_boton">
                        <button type="button" class="botonAgregarProducto" id="btn${producto.id}">Agregar producto</button>
                        </div>
                        `
                            padreCajaProductos.appendChild(div)

                            div2 = div
                        });
                    })
                    .catch(error => {
                        console.error("algo salio mal")
                    })
            )
        })



    }, 1200)
}
buscarCatalogo()

    /* FUNCION PARA ELIMINAR LOS PRODUCTOS */
    function eliminarDivs() {
        let productosDivs = document.querySelectorAll('.producto');
        productosDivs.forEach(div => {
            div.remove();
        });
    }

/* SECCION PARA MOSTRAR EL CARRITO DE COMPRAS */

/* variable carrito donde se guardan */
let carrito = []

/* CARRITO EN EL LOCAL STORAGE */
let carritoEnLoSt = JSON.parse(localStorage.getItem("carrito"))


/* EVENTO DE BOTONES AGREGAR PRODUCTOS */
setTimeout(() => {
    for (let i = 0; i < productos.length; i++) {
        let btn = document.getElementById(`btn${productos[i].id}`);
        btn.addEventListener("click", () => agregarAlCarrito({ ...productos[i] }));
    }
}, 1500)

/* CANTIDAD DE ARTICULOS */

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
    let divElement = document.createElement("div")
    divElement.className = "spd"
    for (x of carrito) {
        divElement.innerHTML = `
                        
                            <div id="contenedor_img_carrito"><img id="img_pro_carr" src="${x.img}"
                                    alt="producto_carrito"> </div>
                            <div class="info">
                                <h6 class="nombre_pro_carr">${x.nombre}</h6>
                                <p class="precio_art_carr">$${x.precio}</p>
                            </div>

                        
        `
        PantallaCarrito.append(divElement)
    }
    sumarCarrito()
    productoMasCaro()
}
/* AGREGAR SOLO EL PRECIO DE LOS PRODUCTOS A UNA VARIABLE */
let catidadCarrito = document.getElementById("catidadCarrito")
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
    catidadCarrito.style.display = "block"
    catidadCarrito.innerText = carrito.length
    avisoCarrito()
}

/* PRODUCTO MAS CARO CON EM METODO SPREND */
function productoMasCaro() {
    /* BUSCAR EL MAYOR */
    let masCaro = Math.max(...preciodelcarrito)
    /* CAMBIO DEL TEXTO CON EL DOM */
    let mayorValor = document.getElementById("mayorValor")
    mayorValor.innerText = masCaro
}


/* SECCION DE AVISOS DE TOASTIFY */
function avisoCarrito() {
    Toastify({
        text: "Se agrego un producto al carrito",
        duration: 3000,
        gravity: "top",
        position: "left",
        avatar: "img/logo/carrito.png",
        style: {
            background: "linear-gradient(to right, #04b09b, rgba(159, 37, 159))",
        }
    }).showToast();
}

/* FINAL SECCION DE AVISOS DE TOASTTIFY */

