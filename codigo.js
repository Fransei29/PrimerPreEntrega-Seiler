// --- Registro de bienvenida e inicio de preguntas al cliente ---
let anioNacimiento = parseInt(prompt("Hola\nA continuacion realizaremos algunas preguntas..\nEn qué año naciste?"));
const edadActual = 2022 - anioNacimiento;
let nombre = prompt("¿Cual es tu nombre?");
let apellido = prompt("¿Y tu apellido?");

if (edadActual >= 18) {
    mensaje = (`¡Hola ${nombre} ${apellido}!<br> Sabiendo qué tienes ${edadActual} años, te doy la bienvenida a mi WebShop!`)
    document.getElementById("Nombre").innerHTML = mensaje;
} else {
    alert("Espero que un mayor te ayude a supervisar tu compra.");
}

// --- Funcion de elección de articulo ---
function elegirArticulo() {

    let accesorio = (prompt("¿Qué artículo te gustaría comprar?\n1- Zapatilla\n2- Ojota\n3- Pantalón\n4- Remera\n5- Campera"));

    if (accesorio === "1"){
       let precio = 50;
       alert(`Querido/a ${nombre} estas zapatillas te costaran $${precio}`);
} else if (accesorio === "2"){
       let precio = 20;
       alert(`Querido/a ${nombre} estas ojotas te costaran $${precio}`);
} else if (accesorio === "3"){
      let precio = 30;
      alert(`Querido/a ${nombre} este pantalon te costará $${precio}`);
} else if (accesorio === "4"){
     let precio = 30;
     alert(`Querido/a ${nombre} esta remera te costará $${precio}`);
} else if (accesorio === "5"){
     let precio = 40;
     alert(`Querido/a ${nombre} esta campera te costará $${precio}`);
}else {
     alert("No entiendo que queres comprar..");
}
}

let resultadoEleccion = elegirArticulo();

// --- Una vez que la pagina haya cargado, preguntaremos que le parecio la pagina al usuario --- 
document.addEventListener('DOMContentLoaded', function() {
    
    let consulta;
    let mensaje;
    
    for (let intento = 0; intento < 2; intento++) {
        consulta = prompt("Hola\n¿Qué te pareció la página?\nBuena\nMala")

    if (consulta === "buena" || consulta === "Buena") {
        mensaje = "También me alegra saber que te ha gustado mi pagina!"
        document.getElementById("Agradezco").innerHTML = mensaje;
        break;
    } else {
        let segundoMensaje = "Entiendo qué no estes conforme con mi página. Mejoraré.."
        document.getElementById("Agradezco").innerHTML = segundoMensaje;
        break;
    }

}
});

// --- Creacion de una clase Producto ---
class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.productos = 0; 
    }
    cantidadVentas() {
        this.productos = parseInt(prompt("¿Cuántos artículos quieres comprar?"));
        return this.productos;
    }
    comprar() {    
        if (this.productos > this.stock) {
            alert("No hay suficiente stock disponible para realizar la compra.");
            return; // Salir de la función si no hay suficiente stock
        } else {
            this.stock -= this.productos; // Restar la cantidad comprada del stock del producto
            return this.stock;
        }
    }
}
// --- Creacion de productos que utilizaremos con la clase creada anteriormente ---
const producto1 = new Producto("Zapatillas", 50, 20);
const producto2 = new Producto("Ojota", 20, 20);
const producto3 = new Producto("Pantalon", 30, 20);
const producto4 = new Producto("Remera", 30, 20);
const producto5 = new Producto("Campera", 40, 20);
const producto6 = new Producto("Lentes", 40, 20);

// --- Escritura de resultado en el html ---
document.getElementById("Aqui").innerHTML = (`
    Usted ha ordenado comprar ${producto1.cantidadVentas()} artículos <br>
    Por lo tanto, nos quedan ${producto1.comprar()} en stock`);

// --- Uso de la función comprar en el producto 1 ---
producto1.comprar();


// --- Array de productos ---
const productos = [
    new Producto("Zapatillas", 50, 20),
    new Producto("Ojotas", 20, 20),
    new Producto("Pantalón", 30, 20),
    new Producto("Remera", 30, 20),
    new Producto("Campera", 40, 20),
    new Producto("Lentes", 40, 20)
];

//--- Teniendo en cuenta el array que creamos anteriormente y el precio deseado por el cliente, mostraremos a qué productos puede acceder. ---
const precioDeseado = parseInt(prompt("Ingresa el monto qué deseas gastar y te mostraré los productos que se ajusten a ello.\n($20 hasta $50)"));

// --- Utilizamos el metodo de filtrado para arrays ---
const productosFiltradosPorPrecio = productos.filter(producto => producto.precio >= precioDeseado);

// --- Mostramos los productos filtrados en la consola ---
console.log("Productos con precio igual o superior al precio deseado:", productosFiltradosPorPrecio);

// --- Mostrar los productos filtrados en el elemento HTML ---
document.getElementById("Alla").innerHTML = ""; 

// --- Atraves de un bucle (forEach) recorremos un array de productos los cuales estan filtrados por el precio e insertamos el resultado en el html de una forma dinamica. ---
productosFiltradosPorPrecio.forEach(producto => {
    document.getElementById("Alla").innerHTML += `
        Podrá comprar : ${producto.nombre}, ya qué cuestan $${producto.precio}<br>`;
});


// --- Creacion de calculadora completa ---
// Creamos una clase con los metodos que va a tener esta calculadora y lo que retornará
class Calculadora{
    constructor(){}
    
    sumar(num1,num2){
    return parseInt(num1) + parseInt(num2);
}
    restar(num1,num2){
    return parseInt(num1) - parseInt(num2);
}
    dividir(num1,num2){
    return parseInt(num1) / parseInt(num2);
}
    multiplicar(num1,num2){
    return parseInt(num1) * parseInt(num2);
}
}

// Creamos una instancia de la calculadora
const calculadora = new Calculadora();

// Interactuamos con el usuario para que nos de los numero y nos indique que operacion realizar
let operacion = prompt("¿Qué operacion desea realizar?\n1: suma\n2: resta\n3: división\n4: multiplicación");

if (operacion == 1) {
    let numero1 = prompt("primer numero para sumar");
    let numero2 = prompt("segundo numero para sumar");
    resultado = calculadora.sumar (numero1,numero2);
    alert (`tu resultado es ${resultado}`);
}
else if (operacion == 2) {
    let numero1 = prompt("primer numero para restar");
    let numero2 = prompt("segundo numero para restar");
    resultado = calculadora.restar (numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 3) {
    let numero1 = prompt("primer numero para multiplicar");
    let numero2 = prompt("segundo numero para multiplicar");
    resultado = calculadora.multiplicar (numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 4) {
    let numero1 = prompt("primer numero para dividir");
    let numero2 = prompt("segundo numero para dividir");
    resultado = calculadora.dividir (numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else {
    alert("no se ha encontrado");
}



//                --- >>> CREACION DEMO DE CARRITO DE COMPRAS OFICIAL <<< --- 


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

// --- Agregar eventos de clic a los botones "Agregar al carrito"
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