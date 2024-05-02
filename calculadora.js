// En este codigo, podrás encontrar la creación de una calculadora completa.
// Esta se encontrará comentada (y lista para ser usada) para la optimización visual y funcional de la pagina.


// --- Creacion de calculadora completa ---
// Creamos una clase con los metodos que va a tener esta calculadora y lo que retornará
// class Calculadora{
//     constructor(){}
    
//     sumar(num1,num2){
//     return parseInt(num1) + parseInt(num2);
// }
//     restar(num1,num2){
//     return parseInt(num1) - parseInt(num2);
// }
//     dividir(num1,num2){
//     return parseInt(num1) / parseInt(num2);
// }
//     multiplicar(num1,num2){
//     return parseInt(num1) * parseInt(num2);
// }
// }

// // Creamos una instancia de la calculadora
// const calculadora = new Calculadora();

// // Interactuamos con el usuario para que nos de los numero y nos indique que operacion realizar
// let operacion = prompt("¿Qué operacion desea realizar?\n1: suma\n2: resta\n3: división\n4: multiplicación");

// if (operacion == 1) {
//     let numero1 = prompt("primer numero para sumar");
//     let numero2 = prompt("segundo numero para sumar");
//     resultado = calculadora.sumar (numero1,numero2);
//     alert (`tu resultado es ${resultado}`);
// }
// else if (operacion == 2) {
//     let numero1 = prompt("primer numero para restar");
//     let numero2 = prompt("segundo numero para restar");
//     resultado = calculadora.restar (numero1,numero2);
//     alert(`tu resultado es ${resultado}`);
// }
// else if (operacion == 3) {
//     let numero1 = prompt("primer numero para multiplicar");
//     let numero2 = prompt("segundo numero para multiplicar");
//     resultado = calculadora.multiplicar (numero1,numero2);
//     alert(`tu resultado es ${resultado}`);
// }
// else if (operacion == 4) {
//     let numero1 = prompt("primer numero para dividir");
//     let numero2 = prompt("segundo numero para dividir");
//     resultado = calculadora.dividir (numero1,numero2);
//     alert(`tu resultado es ${resultado}`);
// }
// else {
//     alert("no se ha encontrado");
// }
