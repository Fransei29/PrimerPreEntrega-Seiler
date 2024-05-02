//                --- >>> CREACION CARRITO DE COMPRAS <<< --- 

// --- Definimos una variable para almacenar los productos en el carrito
let cart = [];

// --- Funcion de agregar un producto al carrito 
function addToCart(productId, productName, productPrice) {
    // ---Objeto representando el producto a agregar
    const product = {
        id: productId,
        name: productName,
        price: productPrice
    };

    //---Agregar el producto al carrito
    cart.push(product);

    //---Actualizar visualización del carrito
    updateCart();
}

// Función para actualizar la visualización del carrito
function updateCart() {
    // Obtenemos el elemento del carrito en el HTML
    const cartElement = document.getElementById('cartItems');
    // Limpiamos el contenido actual del carrito
    cartElement.innerHTML = '';

    // ---Calcular el total de la compra
    let totalPrice = 0;

    //---Iterar sobre productos en el carrito
    cart.forEach(product => {
        // -Creamos un elemento de lista para mostrar el producto en el carrito
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - Precio: $${product.price}`;
        // -Agregamos el elemento al carrito
        cartElement.appendChild(listItem);
        // -Sumamos el precio del producto al total
        totalPrice += product.price;
    });

    //---Actualizar el total de la compra en el HTML
    const totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.textContent = `Total: $${totalPrice}`;
}

// --- Agregar eventos de click a los botones "Agregar al carrito"
document.getElementById('addToCart1').addEventListener('click', function() {
    addToCart(1, 'Zapatilla', 50);
});
document.getElementById('addToCart2').addEventListener('click', function() {
    addToCart(2, 'Ojota', 20);
});
document.getElementById('addToCart3').addEventListener('click', function() {
    addToCart(3, 'Pantalon', 30);
});
document.getElementById('addToCart4').addEventListener('click', function() {
    addToCart(4, 'Remera', 30);
});
document.getElementById('addToCart5').addEventListener('click', function() {
    addToCart(5, 'Campera', 50);
});
document.getElementById('addToCart6').addEventListener('click', function() {
    addToCart(6, 'Lentes', 40);
});

// Agregar evento de clic al botón "Comprar"
document.getElementById('comprar-btn').addEventListener('click', function() {
    console.log('Usted ha comprado: ', cart);
    alert('¡Compra realizada! Revisa la consola para ver los detalles.');
});