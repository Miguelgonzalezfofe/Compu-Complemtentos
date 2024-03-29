/* TAREAS 
AGREGAR EL FORMATO PARA QUE ACEPTE SOLAMENTE CON EL .COM EN EL INPUT DE CORREO
VALIDADR LOS DATOS DE INGRESO QUE CUMPLA LOS REQUISITOS MUNIMOS 

QUE SEA OBLIGATORIO AGREGAR LOS DATOS DE LA TARJETA PARA HACER EL PAGO
centrar el carrito de compras 


tareas de dani

agregar una funcion que al dar click en le producto se muestre las caracteristicas del productos con mas detalle
lograr hacer que se elimine mas de un producto al carrito y no solo el ultimo
hacer el proyecto responsive

*/

/* CONSTRUCTOR DE USURIO */
class registroUsuario {
    /* VARIABLES PARA EL OBJETO USUARIO */
    constructor(nombre, apellido, correo, contraseña) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.contraseña = contraseña
    }
}

/* VARIABLE PARA ALOJAR EL CARRITO EN EL LOCALSTORAGE */
let usuarioEnLoSt;

/* SECCION DE EVENTOS DE VENTANA REGISTRO E INGRESO */

/* ABRIR REGISTRO DE USUARIO */
let registroDeUsuario = document.getElementById("registroDeUsuario").addEventListener("click", () => abrirRegistro())

/* FUNCION DE ABRIR LA VENTADA DE REGISTRO */
let ventanaReg = document.getElementById("registro")
function abrirRegistro() {
    ventanaReg.style.display = "flex"
    cerrarVentaPago()
    cerrarIngreso()
    cerrarVentaPago()
}
/* FINAL DEL CODIGO PARA ABRIR LA VENTANA DE REGISTRO */


/* FUNCION DE CERRAR LA VENTADA DE REGISTRO */
/* CERRAR REGISTRO DE USUARIO */
let cierreRegistroUsuario = document.getElementById("cerrarRegistroUsuario").addEventListener("click", () => cerrarRegistro())
/* FUNCION DE CERRRAR LA VENTA DE REGISTRO */
function cerrarRegistro() {
    let ventanaReg = document.getElementById("registro")
    ventanaReg.style.display = "none"
    textErroregistro.innerText = ""
}
/*  FINAL DE CODIGO FUNCION DE ABRIR LA VENTADA DE REGISTRO */

/* ABRIR INGRESO DE USUARIO */
let ingresoDeUsuario = document.getElementById("inicioSesionUsuario").addEventListener("click", () => abrirIngreso())
/* FUNCION ABRIR VENTA DE INGRESO */
function abrirIngreso() {
    let ventanaing = document.getElementById("ventanaIngreso")
    ventanaing.style.display = "flex"
    cerrarRegistro()
    cerrarVentaPago()
    cerrarVentaPago()

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
}
/* FINAL LOGICA REGISTRO USUARIO */


/* LOGICA INGRESO USUARIO */

/*DATOS INGRESADO DEL USUARIO  */
let ingCorrUsu = document.getElementById("ingresoCorreoUsuario").addEventListener("change", (event) => ingCorrUsu = event.target.value)
let contrUsu = document.getElementById("ingresoContraseñaUsuario").addEventListener("change", (event) => contrUsu = event.target.value)

/* BOTON DE INGRESO USUARIO */
let btnIngreso = document.getElementById("btnIngreso").addEventListener("click", () => ingresoUsuario())

/* FUNCION DE INGRESOS DEL USUARIO*/
let textErroingreso = document.getElementById("errorDeIngreso")

/* FUNCION PARA INGESAR EL USUARIO A SU CUENTA */
function ingresoUsuario() {
    usuarioEnLoSt = JSON.parse(localStorage.getItem("usuario"))
    usuarioEnLoSt ? usbUser() : textErroingreso.innerText = "No tenemos tus datos. Debes registrarte"
}
/* FUNCION PARA DESTRUCTURAR LAS VARIABLES */
function usbUser() {
    usuarioEnLoSt ? { nombre, apellido, correo, contraseña } = usuarioEnLoSt : false
    validacionDatos() ? ingresoDePerfil() : errorlogin()
}
/* FUNCION PARA INDICAR UN ERROR EN EL INGRESO */
function errorlogin() {
    textErroingreso.innerText = "Error en la contraseña o usuario"
}

/* FUNCION PARA VALIDAR LOS DATOS EN EL INGRESO DE USAURIO */
function validacionDatos() {
    if (validacionContraseña() && validacionCorreo()) {
        return true
    } else {
        return false
    }
}
/* VALIDACION DE CORREO */
function validacionCorreo() {
    if (ingCorrUsu == correo) {
        return true
    } else {
        return false
    }
}
/* VALIDACION DE CONTRASEÑA */
function validacionContraseña() {
    if (contrUsu === contraseña) {
        return true
    } else {
        return false
    }
}


/* CAMBIO DE PERFIL DEL USUARIO  */
let sesionIngreoRegistro = document.getElementById("inicio_registo_Sesion")

/* VARIABLE PARA EL USO DEL DOM CON EL NOMBRE DE USUARIO */
let perfil = document.getElementById("usuarioIngresado")

let carritoEnLoSt
/* INICIO DEL ESTADO DEL USUARIO */
let estadoUsuario = false

/* FUNCION PARA INGRESAR A LA CUENTA DE USUARIO */
function ingresoDePerfil() {
    eliminarcatg()
    usuarioEnLoSt ? { nombre, apellido, correo, contraseña } = usuarioEnLoSt : false

    sesionIngreoRegistro.style.display = "none"

    cerrarSesion.style.display = "block"

    estadoUsuario = true
    carritoEnLoSt = JSON.parse(localStorage.getItem("carrito"))

    carritoEnLoSt ? creacionNuevoCarrito() : carritoEnLoSt = []

    perfil.innerHTML = `<p class="perfil_iniciado">${nombre} ${apellido}</p>`

    cerrarIngreso()

    avisoInicio()

}
/* FUNCION PARA CREAR EL CARRITO INTERACTIVO*/
function creacionNuevoCarrito() {
    estadoUsuario ? varCarro = carritoEnLoSt : varCarro = carrito
    if(varCarro[0]){
        for (const x of varCarro) {
            divElement = document.createElement("div")
            divElement.className = "spd"
            divElement.innerHTML = `
                                    <div id="contenedor_img_carrito"><img id="img_pro_carr" src="${x.img}"
                                            alt="producto_carrito"> </div>
                                    <div class="info">
                                        <h6 class="nombre_pro_carr">${x.nombre}</h6>
                                        <p class="precio_art_carr">$${x.precio.toLocaleString()}</p>
                                    </div>
                                    `
            PantallaCarrito.append(divElement)
            
        }
        btndelet.style.display = "block"
    
        preciodelcarrito = []
        for (x of varCarro) {
            preciodelcarrito.push(x.precio)
        }
        /* SUMAR TODOS LOS PRECIOS DE LOS PRODUCTOS */
        preciodelcarrito ? total = preciodelcarrito.reduce((acc, num) => acc + num) : total = 0
        precioFinal.innerText = total.toLocaleString()
        if(estadoUsuario){
            localStorage.setItem("carrito",JSON.stringify(varCarro))
        } 
    } 
    
}
/* FUNCION PARA ELIMINAR TODOS LOS PRODUCTOS AGREGADOS AL CARRITO  */
function eliminarcatg() {
    let catalogoDivs = document.querySelectorAll('.spd');
    catalogoDivs.forEach(div => {
        div.remove();
    });
}
/* VARIABLE DEL DOM PARA CERRAR LA SESION DEL USUARIO */
let cerrarSesion = document.getElementById("cerrarSesion")
cerrarSesion.addEventListener("click", () => { cerrarlaSesion() })

/* FUNCION PARA CERRAR LA SESION DEL USUARIO */
function cerrarlaSesion() {
    sesionIngreoRegistro.style.display = "block"
    cerrarSesion.style.display = "none"
    btndelet.style.display = "none"
    perfil.innerHTML = ""
    eliminarcatg()
    totalCarrito.innerText = 0
    estadoUsuario = false
    avisoCerrar()




}
/* FINAL LOCICA INGRESO USUARIO */

/* CREADOR DE PRODUCTOS */
class nuevoProducto {
    constructor(id, nombre, precio, img) {
        this.id = id,
        this.nombre = nombre;
        this.precio = precio;
        this.img = img
    }
}

/* VARIABLE DEL DOM X PARA CERRAR EL CARRITO */
let cerrarCarr = document.getElementById("cerrarCarrito").addEventListener("click", () => cerrarCarrito())

/* VARIABLE DEL DOM PARA ARBIR EL CARRITO */
let abrirCarr = document.getElementById("carritoCompras").addEventListener("click", () => abrirCarrito())

/* VARIABLE DEL DOM VENTANA DEL CARRO DE COMPRAS */
let ventanaCarrito = document.getElementById("contenedorCarrito")
/* FUNCIONPARA CERRAR EL CARRITO */
function cerrarCarrito() {
    ventanaCarrito.style.display = "none"
}
/* FUNCION PARA ABRIR EL CARRITO */
function abrirCarrito() {
    ventanaCarrito = document.getElementById("contenedorCarrito")
    ventanaCarrito.style.display = "flex"
    cerrarVentaPago()
}

/* SECCION PARA EL FILTRADO DE LOS PRODUCTOS */

/* VARIABLE DEL NODO INPUT DEL FILTRADO */
let entraFiltro = document.getElementById("productoFiltro").addEventListener("change", (event) => { entraFiltro = (event.target.value) })
/* FUNCION PARA HACER EL FILTRADO DE PRODUCTOS */
function filtrarCatalogo() {
    filtrado = new Promise((resolve) => {
        resolve(
            fetch("js/productos.json")
                .then((responde) => responde.json())
                .then((data) => {
                    produFiltra = data.producto
                    productos = produFiltra.filter((x) => x.nombre.includes(entraFiltro.toLowerCase()))
                    eliminarDivs()
                    productos.forEach(producto => {
                        div = document.createElement("div")
                        div.className = "producto"
                        div.innerHTML = `
                    <img src="${producto.img}" alt="producto">
                    <p class="nombre_producto">${producto.nombre}</p>
                    <p class="precio" id="precio">$${producto.precio.toLocaleString()}</p>
                    <div class="caja_boton">
                    <button type="button" class="botonAgregarProducto" id="btn${producto.id}">Agregar producto</button>
                    </div>
                    `
                        padreCajaProductos.appendChild(div)
                    })
                })

        )
    })
    setTimeout(() => {
        btnProductos()
    }, 300)
}

/* VARIBLE NODO DEL FORMULARIO DE FILTRADO */
let formFiltr = document.getElementById("form_filtr")
/* EVENTO PARA FILTAR EL CATALOGO */
formFiltr.addEventListener("submit", (event) => {
    event.preventDefault()
    filtrarCatalogo()
})

/* CREACION DE LOS PRODUCTOS EN LA WEB */
let padreCajaProductos = document.getElementById("cajaProductos") //contenedor donde iran los div productos
let div2; //variable para eliminar los productos al aplicar el filtro
/* FUNCION PARA CRAR EL CATALOGO DE INICIO */
let div
let productos
/* FUNCION PARA HACER HACER EL CARRO DE COMRAS POR PRIMERA VEZ */
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
                            div = document.createElement("div")
                            div.className = "producto"
                            /* HTML PARA EL DIV */
                            div.innerHTML = `
                        <img src="${producto.img}" alt="producto">
                        <p class="nombre_producto">${producto.nombre}</p>
                        <p class="precio" id="precio">$${producto.precio.toLocaleString()}</p>
                        <div class="caja_boton">
                        <button type="button" class="botonAgregarProducto" id="btn${producto.id}">Agregar producto</button>
                        </div>
                        `
                            padreCajaProductos.appendChild(div)

                            div2 = div
                        });
                    })
                    
            )
        })
    }, 1200)
    setTimeout(() => {
        btnProductos()
    }, 1500)
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

/* EVENTO DE BOTONES AGREGAR PRODUCTOS */
function btnProductos() {
    for (let i = 0; i < productos.length; i++) {
        let btn = document.getElementById(`btn${productos[i].id}`);
        btn.addEventListener("click", () => agregarAlCarrito({ ...productos[i] }));
    }
}


carritoEnLoSt
/* VARIABLE PARA GUARDAR LOS PDOCUTOS*/
let carrito = []

/* FUNCION AGREGAR EL PRODUCTO AL CARRITO */
function agregarAlCarrito(valor) {
    if (estadoUsuario) {
        carritoEnLoSt.push(valor)
        localStorage.setItem("carrito", JSON.stringify(carritoEnLoSt))

    } else {
        carrito.push(valor)
    }
    mostarCarrtio()
}

/* FUNCION PARA MOSTRAR EL CARRITO DE COMPRAS EN PANTALLA */
function mostarCarrtio() {
    carritoEnHtml()

}

let PantallaCarrito = document.getElementById("carrito")
let divElement

/* FUNCION DE AGREGAR LOS PORDUCTOS AL HTML */
function carritoEnHtml() {
    divElement = document.createElement("div")
    divElement.className = "spd"

    estadoUsuario ? varCarro = carritoEnLoSt : varCarro = carrito
    for (x of varCarro) {
        divElement.innerHTML = `
                                <div id="contenedor_img_carrito"><img id="img_pro_carr" src="${x.img}"
                                        alt="producto_carrito"> </div>
                                <div class="info">
                                    <h6 class="nombre_pro_carr">${x.nombre}</h6>
                                    <p class="precio_art_carr">$${x.precio.toLocaleString()}</p>
                                </div>
                                `
        PantallaCarrito.append(divElement)

    }
    btndelet.style.display = "block"
    sumarCarrito()
}

/* EVENTO DE BOTONES ELIMINAR DEL CARRITO */
let btndelet = document.getElementById("delet")
btndelet.addEventListener("click",()=> deletProducto())

/* FUNCION PARA ELIMINAR UN PRODUCTO DEL CARRTIO */
function deletProducto(){
    /*  */
    estadoUsuario ? varCarro = carritoEnLoSt : varCarro = carrito
    if(varCarro.length < 2){
        localStorage.removeItem("carrito")
        precioFinal.innerText = ""
        pagarCarrito.innerText = ""
        btndelet.style.display = "none"
        
    }
    varCarro.pop()
    eliminarcatg()
    creacionNuevoCarrito()
    carritoVentanaPago()
    avisoDeletCarrito()



}

/* AGREGAR SOLO EL PRECIO DE LOS PRODUCTOS A UNA VARIABLE */
let preciodelcarrito
let total
let precioFinal = document.getElementById("totalCarrito")

/* FUNCION PARA SUMAR LOS PRODUCTOS DEL CARRITO */
function sumarCarrito() {
    preciodelcarrito = []
    for (x of varCarro) {
        preciodelcarrito.push(x.precio)
    }
    /* SUMAR TODOS LOS PRECIOS DE LOS PRODUCTOS */
    total = preciodelcarrito.reduce((acc, num) => acc + num)
    /* CAMBIO DEL TEXTO CON EL DOM */
    precioFinal.innerText = total.toLocaleString()

    avisoCarrito()
}

/* PRODUCTO MAS CARO CON EM METODO SPREND */
function productoMasCaro() {
    /* BUSCAR EL MAYOR */
    let masCaro = Math.max(...preciodelcarrito)
    /* CAMBIO DEL TEXTO CON EL DOM */
    let mayorValor = document.getElementById("mayorValor")
    mayorValor.innerText = masCaro.toLocaleString()
}

/* SECCION DE AVISOS DE TOASTIFY */
function avisoCarrito() {
    Toastify({
        text: "Se agregó un producto al carrito",
        duration: 3000,
        gravity: "top",
        position: "left",
        avatar: "img/logo/carrito.png",
        style: {
            background: "linear-gradient(to right, #04b09b, rgba(159, 37, 159))",

        }
    }).showToast();
}
function avisoDeletCarrito() {
    Toastify({
        text: "Se elimino un producto al carrito",
        duration: 3000,
        gravity: "top",
        position: "left",
        avatar: "img/logo/carrito.png",
        style: {
            background: "linear-gradient(to right, #04b09b, rgba(159, 37, 159))",

        }
    }).showToast();
}

function avisoInicio() {
    Toastify({
        text: "Ingresaste son exito",
        duration: 3500,
        gravity: "top",
        position: "left",
        avatar: "img/logo/usuarioSinRegistro.png",
        style: {
            background: "linear-gradient(to right, #04b09b, rgba(159, 37, 159))",
        }
    }).showToast();
}
function avisoCerrar() {
    Toastify({
        text: "Sesion cerrada",
        duration: 3500,
        gravity: "top",
        position: "left",
        avatar: "img/logo/usuarioSinRegistro.png",
        style: {
            background: "linear-gradient(to right, #04b09b, rgba(159, 37, 159))",
        }
    }).showToast();
}
function avisoCarroVacio() {
    Toastify({
        text: "El carrito esta vacio",
        duration: 3500,
        gravity: "top",
        position: "left",
        avatar: "img/logo/carrito.png",
        style: {
            background: "linear-gradient(to right, #04b09b, rgba(159, 37, 159))",
        }
    }).showToast();
}

/* FUNCION AVISO DE PAGO COMPLETADO */
function pagoRealiazo(){
    estadoUsuario ? varCarro = carritoEnLoSt : varCarro = carrito
    if(estadoUsuario){
        localStorage.removeItem("carrito")
    } else{
        varCarro , carritoEnLoSt , carrito = []
    }
    btndelet.style.display = "none"
    totalCarrito.innerText = ""
    eliminarcatg()




    Swal.fire({
        title: "Pago realizado con exito!",
        icon: "success"
    });
}


/* FINAL SECCION DE AVISOS DE TOASTTIFY */

/* EVENTO ABRIR VENTANA DE PAGO */
let ventanaDePago = document.getElementById("ventanaDePago")
let pagarCarrito = document.getElementById("pagarCarrito")

let pagar = document.getElementById("pagar")
pagar.addEventListener("click",()=> pagarCarroDeCompras())

function pagarCarroDeCompras(){
    estadoUsuario ? varCarro = carritoEnLoSt : varCarro = carrito

    if(varCarro[0]){
        cerrarCarrito()
        dolarapi()
        carritoVentanaPago()
        ventanaDePago.style.display = "flex"
        pagarCarrito.innerText = total.toLocaleString()
        cerrarIngreso()
        cerrarRegistro()

    } else{
        avisoCarroVacio()
    }
    
}

/* CERRAR VENTA DE PAGO */
let cerrar_v_P = document.getElementById("cerrar_v_P")
cerrar_v_P.addEventListener("click",()=> cerrarVentaPago())

/* FUNCION PARA CERRAR LA VENTANA DE PAGO */
function cerrarVentaPago(){
    ventanaDePago.style.display ="none"
    
}

/* creacion del catalago en la venta de pago  */
let ventanaPagoProductos = document.getElementById("pagoCatalogo")
let divElementVentanaPago

/* FUNCION DE AGREGAR LOS PORDUCTOS AL HTML */
function carritoVentanaPago() {
    estadoUsuario ? varCarro = carritoEnLoSt : varCarro = carrito
    divElementVentanaPago? divElementVentanaPago.remove(): false
    if(varCarro[0]){
        for (const x of varCarro) {
            divElementVentanaPago = document.createElement("div")
            divElementVentanaPago.className = "spd"
            divElementVentanaPago.innerHTML = `
                                    <div id="contenedor_img_carrito"><img id="img_pro_carr" src="${x.img}"
                                            alt="producto_carrito"> </div>
                                    <div class="info">
                                        <h6 class="nombre_pro_carr">${x.nombre}</h6>
                                        <p class="precio_art_carr">$${x.precio.toLocaleString()}</p>
                                    </div>
                                    `
            ventanaPagoProductos.append(divElementVentanaPago)
            
        }
        btndelet.style.display = "block"
    

        pagarCarrito.innerText = total.toLocaleString()
        
    } 
    
}

/* SECCION DE MONEDAS DE PAGO */
let dolar = document.getElementById("dolar")
let pesos = document.getElementById("pesos")

/* FUNCTINO PARA TRAER LOS DATOS DE LA API DEL DOLAR */
function dolarapi(){
    setTimeout(()=>{
        new Promise((resolve)=>{
    
            resolve(
                fetch("https://dolarapi.com/v1/dolares")
                .then((response) => response.json())
                .then((data) => {
                    coticazion = data[1].venta
                    enDolar()
                    enPesos()
    
    /* QUEDE EN AGREGAR AHORA EL PRECIO DEL CARRO EN PESOS Y QUE PUEDA ELEGIR QUE TIPO DE MONEDA QUIERE PAGAR EL USUARIO */
    })
            )   
            
        })
    })
}

let pagoEnDolar

/* FUNCION PARA HACER LA CONVERDION DE PESO A DOLARES */
function enDolar(){
    coticazion = total / coticazion
    pagoEnDolar = coticazion 
    dolar.innerText = pagoEnDolar.toFixed(2)
}
/* FUNCION PARA HACER LA CONVERSIO DE DOLARES A PESOS */
let pagoEnPesos
function enPesos(){
    coticazion = total
    pagoEnPesos = coticazion
    pesos.innerText = pagoEnPesos.toLocaleString()
}
/* VARIABLE DEL DOM PARA INGRESAR EL PRECIO DE DOLAR */
let pagoDolar = document.getElementById("pagoDolar")
pagoDolar.addEventListener("click",()=> {
    pagarCarrito.innerText = pagoEnDolar.toFixed(2)
})

/* VARIABLE DEL DOM PARA INGRESAR EL PRECIO DEL PESE */
let pagoPesos = document.getElementById("pagoPesos")
pagoPesos.addEventListener("click",()=> {
    pagarCarrito.innerText = pagoEnPesos.toLocaleString()
})

/* FUNCTIONES DE VERIFICACION DE PAGO */
let pagoFinal = document.getElementById("pagar_Carrito")
pagoFinal.addEventListener("click",()=>buyCarrito())
function buyCarrito(){
    cerrarVentaPago()
    pagoRealiazo()
}



/* posible codigo 

para validar el texto y que contenga solo letras 
function validarTexto(input) {
    // Expresión regular para verificar si el valor contiene solo letras
    let regex = /^[a-zA-Z]+$/;

    if (!regex.test(input.value)) {
        // Mostrar un mensaje de error si el valor no contiene solo letras
        alert("Por favor, ingresa solo texto.");
        // Limpiar el campo de entrada
        input.value = "";
    }
}

<input type="text" id="nombreUsuario" onchange="validarTexto(this)">

function validarNumeros(input) {
    // Expresión regular para verificar si el valor contiene solo números
    let regex = /^[0-9]+$/;

    if (!regex.test(input.value)) {
        // Mostrar un mensaje de error si el valor no contiene solo números
        alert("Por favor, ingresa solo números.");
        // Limpiar el campo de entrada
        input.value = "";
    }
}
<input type="text" id="numeroUsuario" onchange="validarNumeros(this)">


function validarEmail(input) {
    // Expresión regular para verificar si el valor contiene un "@" 
    let regex = /@/;

    if (!regex.test(input.value)) {
        // Mostrar un mensaje de error si el valor no contiene un "@"
        alert("Por favor, ingresa un correo electrónico válido.");
        // Limpiar el campo de entrada
        input.value = "";
    }
}

<input type="text" id="correoUsuario" onchange="validarEmail(this)">






*/