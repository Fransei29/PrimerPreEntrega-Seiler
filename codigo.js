// En este codigo, vas a poder observar los recursos aprendidos a lo largo del curso.
// Algunos estarán comentados (también en el script de html por lo visto en "sugerencias") para la optimización visual y funcional de la pagina web.


//     --- Registro de bienvenida e inicio de preguntas al cliente ---
let anioNacimiento = parseInt(prompt("Hola\nA continuacion realizaremos algunas preguntas..\nEn qué año naciste?"));
const edadActual = 2022 - anioNacimiento;
let { nombre, apellido } = {
    nombre: prompt("¿Cual es tu nombre?"),
    apellido: prompt("¿Y tu apellido?")
}


if (edadActual >= 18) {
    mensaje = (`¡Hola ${nombre} ${apellido}!<br> Sabiendo qué tienes ${edadActual} años, te doy la bienvenida a mi WebShop!`)
    document.getElementById("Nombre").innerHTML = mensaje;
} else {
    alert("Espero que un mayor te ayude a supervisar tu compra.");
}

//     --- Una vez que la pagina haya cargado, preguntaremos que le parecio la pagina al usuario --- 
document.addEventListener('DOMContentLoaded', function() {

    let mensaje = "";
    
    for (let intento = 0; intento < 2; intento++) {
        let { consulta } = { consulta: prompt("Hola\n¿Qué te pareció la página?\nBuena\nMala") };

        mensaje = (consulta && (consulta.toLowerCase() === "buena")) 
        ? "También me alegra saber que te ha gustado mi página!"
        : (consulta && (consulta.toLowerCase() === "mala"))
            ? "Entiendo que no estés conforme con mi página. Mejoraré.."
            : "Por favor, introduce 'Buena' o 'Mala'.";
    
    if (mensaje !== "Por favor, introduce 'Buena' o 'Mala'.") break;
}

    document.getElementById("Agradezco").innerHTML = mensaje;
});

// --- Funcion de elección de articulo ---
// function elegirArticulo() {

//     let accesorio = (prompt("¿Qué artículo te gustaría comprar?\n1- Zapatilla\n2- Ojota\n3- Pantalón\n4- Remera\n5- Campera"));

//     if (accesorio === "1"){
//        let precio = 50;
//        alert(`Querido/a ${nombre} estas zapatillas te costaran $${precio}`);
// } else if (accesorio === "2"){
//        let precio = 20;
//        alert(`Querido/a ${nombre} estas ojotas te costaran $${precio}`);
// } else if (accesorio === "3"){
//       let precio = 30;
//       alert(`Querido/a ${nombre} este pantalon te costará $${precio}`);
// } else if (accesorio === "4"){
//      let precio = 30;
//      alert(`Querido/a ${nombre} esta remera te costará $${precio}`);
// } else if (accesorio === "5"){
//      let precio = 40;
//      alert(`Querido/a ${nombre} esta campera te costará $${precio}`);
// }else {
//      alert("No entiendo que queres comprar..");
// }
// }

// let resultadoEleccion = elegirArticulo();


// // --- Creacion de una clase Producto ---
// class Producto {
//     constructor(nombre, precio, stock) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.stock = stock;
//         this.productos = 0; 
//     }
//     cantidadVentas() {
//         this.productos = parseInt(prompt("¿Cuántos artículos quieres comprar?"));
//         return this.productos;
//     }
//     comprar() {    
//         if (this.productos > this.stock) {
//             alert("No hay suficiente stock disponible para realizar la compra.");
//             return; // Salir de la función si no hay suficiente stock
//         } else {
//             this.stock -= this.productos; // Restar la cantidad comprada del stock del producto
//             return this.stock;
//         }
//     }
// }


// // --- Creacion de productos que utilizaremos con la clase creada anteriormente ---
// const producto1 = new Producto("Zapatillas", 50, 20);
// const producto2 = new Producto("Ojota", 20, 20);
// const producto3 = new Producto("Pantalon", 30, 20);
// const producto4 = new Producto("Remera", 30, 20);
// const producto5 = new Producto("Campera", 40, 20);
// const producto6 = new Producto("Lentes", 40, 20);

// // --- Escritura de resultado en el html ---
// document.getElementById("Aqui").innerHTML = (`
//     Usted ha ordenado comprar ${producto1.cantidadVentas()} artículos <br>
//     Por lo tanto, nos quedan ${producto1.comprar()} en stock`);

// // --- Uso de la función comprar en el producto 1 ---
// producto1.comprar();


// // --- Array de productos ---
// const productos = [
//     new Producto("Zapatillas", 50, 20),
//     new Producto("Ojotas", 20, 20),
//     new Producto("Pantalón", 30, 20),
//     new Producto("Remera", 30, 20),
//     new Producto("Campera", 40, 20),
//     new Producto("Lentes", 40, 20)
// ];

// //--- Teniendo en cuenta el array que creamos anteriormente y el precio deseado por el cliente, mostraremos a qué productos puede acceder. ---
// const precioDeseado = parseInt(prompt("Ingresa el monto qué deseas gastar y te mostraré los productos que se ajusten a ello.\n($20 hasta $50)"));

// // --- Utilizamos el metodo de filtrado para arrays ---
// const productosFiltradosPorPrecio = productos.filter(producto => producto.precio >= precioDeseado);

// // --- Mostramos los productos filtrados en la consola ---
// console.log("Productos con precio igual o superior al precio deseado:", productosFiltradosPorPrecio);

// // --- Mostrar los productos filtrados en el elemento HTML ---
// document.getElementById("Alla").innerHTML = ""; 

// // --- Atraves de un bucle (forEach) recorremos un array de productos los cuales estan filtrados por el precio e insertamos el resultado en el html de una forma dinamica. ---
// productosFiltradosPorPrecio.forEach(producto => {
//     document.getElementById("Alla").innerHTML += `
//         Podrá comprar : ${producto.nombre}, ya qué cuestan $${producto.precio}<br>`;
// });


// function renderizarProductos() {}

// function filtrarProductos() {
    
//     const nombreProducto = inputNombreProducto.value;
    
//     const productosFiltrados = productos.filter( (el) => {
//         return el.nombre.toLowerCase().includes(nombreProducto);
// });
    
//     renderizarProductos(productosFiltrados);
// }

// const inputNombreProducto = document.getElementById("nombreProducto");
// inputNombreProducto.addEventListener("input", productosFiltradosPorPrecio);