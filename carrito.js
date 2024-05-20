//              --- >>> CREACION CARRITO DE COMPRAS <<< --- 
// Definición de la CLASE Producto
class Producto {
    constructor(id, nombre, precio, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

//  --- FUNCIONES ---
// Agrega productos al carrito o incrementa su cantidad
function agregarAlCarrito(producto) {
    const productoExistente = cart.find(p => p.id === producto.id);
    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        cart.push({ id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: 1 });
    }
    actualizarLocalStorage();
    updateCart();
}

// Renderiza los productos en el HTML
function agregarProductosAlHTML() {
    const contenedorProductos = document.getElementById('productos-container');
    productos.forEach((producto, index) => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('ali', `Art${index + 1}`);
        divProducto.innerHTML = `
            <img src="./img/${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button class="buttonplace" id="addToCart${producto.id}">Agregar al carrito</button>
        `;
        contenedorProductos.appendChild(divProducto);
    });
}

// Agrega eventos a los botones de agregar al carrito
function agregarEventosDeCarrito() {
    productos.forEach((producto) => {
        const boton = document.getElementById(`addToCart${producto.id}`);
        boton.addEventListener('click', () => agregarAlCarrito(producto));
    });
}

// Actualiza el carrito en el DOM
function updateCart() {
    const cartElement = document.getElementById('cartItems');
    cartElement.innerHTML = '';
    let totalPrice = 0;
    cart.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.nombre} - Precio: $${product.precio * product.cantidad} - Cantidad: ${product.cantidad}`;
        cartElement.appendChild(listItem);
        totalPrice += product.precio * product.cantidad;
    });
    const totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.textContent = `Total: $${totalPrice}`;
}

// Guarda el carrito en localStorage
function actualizarLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(cart));
}

// Carga el carrito desde localStorage
function cargarCarritoDeLocalStorage() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        cart = JSON.parse(carritoGuardado);
        updateCart();
    }
}

// Obtiene los productos desde un archivo JSON
async function obtenerProductos() {
    try {
        const response = await fetch("../productos.json");
        const productosJSON = await response.json();
        return productosJSON.map(p => new Producto(p.id, p.nombre, p.precio, p.imagen));
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        return [];
    }
}

// Inicialización del programa
let productos = [];
let cart = [];

// Inicialización del DOM y programa
document.addEventListener('DOMContentLoaded', async function() {
    productos = await obtenerProductos();
    cargarCarritoDeLocalStorage();
    agregarProductosAlHTML(productos);
    agregarEventosDeCarrito(productos);
    document.getElementById('comprar-btn').addEventListener('click', function() {
        Swal.fire({
            title: 'Felicitaciones!',
            text: 'El producto está en camino',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        console.log('Usted ha comprado: ', JSON.stringify(cart, null, 2)); // Formatear la salida para mejor legibilidad
        cart = [];
        actualizarLocalStorage();
        updateCart();
    });
});