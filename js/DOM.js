// NOTE  creación de constantes
const carrito = []
const URL = "https://636e50f3b567eed48ad9c768.mockapi.io/Cursos"
const container = document.querySelector("div.container")

// NOTE creación de array de cursos vacío para evitar error
let cursos = []

// NOTE primero asigno evento 'click' iterando en los botones de las tarjetas
const activarBotones = () => {
    const botones = document.querySelectorAll(".button.button-outline.button-add")
    botones.forEach(boton => boton.addEventListener("click", (e) => agregarCarrito(e)))
}

// NOTE armado de tarjetas en pantalla recorriendo el array Cursos y activación de evento en botones, utilizando ASYNC y AWAIT
const getCursos = async () => {
    let armadoHTML = ""
    let activarBtns = true
    try {
        const response = await fetch(URL)
        cursos = await response.json()
        cursos.forEach(curso => armadoHTML += retornoCard(curso))
    } catch (error) {
        armadoHTML = retornoError()
        activarBtns = false
    } finally {
        container.innerHTML = armadoHTML
        activarBtns && activarBotones()
    }
}

// NOTE agrego sistema de notificación con Toastify
const toast = (mensaje) => {
    Toastify({
        text: mensaje,
        duration: 3300,
        close: true,
        gravity: "top",
        position: "right",
        style: {
            background: "linear-gradient(to right, #0062e6 #33aeff)",
        }
    }).showToast();
}

// NOTE agregar cursos al carrito de compras
const agregarCarrito = (e) => {
    let resultado = cursos.find(curso => curso.nombre === e.target.id) // así captamos el ID de nuestro producto
    if (resultado !== undefined) {
        carrito.push(resultado)
        guardarCarrito()
        toast(`'${e.target.id}' se agregó a tu carrito`)
    }
}

// NOTE guardado de carrito en localstorage
const guardarCarrito = () => {
    carrito.length > 0 && localStorage.setItem("carrito", JSON.stringify(carrito))
}

// NOTE recuperar de carrito guardado en localstorage, si existiese
const recuperarCarrito = () => {
    const carritoRecuperado = JSON.parse(localStorage.getItem("carrito")) || []
    carritoRecuperado.forEach(curso => carrito.push(curso))
    carrito.length === 0 && console.warn("Sin carrito previamente guardado.")
}
recuperarCarrito()

// NOTE cargo los cursos en el index
getCursos() 