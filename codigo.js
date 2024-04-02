
let anioNacimiento = parseInt(prompt("Hola\nA continuacion realizaremos algunas preguntas..\nEn qué año naciste?"));
const edadActual = 2022 - anioNacimiento;
let nombre = prompt("¿Cual es tu nombre?");
let apellido = prompt("¿Y tu apellido?");

if (edadActual >= 18) {
    mensaje = (`Hola ${nombre} ${apellido}, debido a que tienes ${edadActual}, te doy la bienvenida a..`)
    document.getElementById("Nombre").innerHTML = mensaje;
} else {
    alert("Espero que un mayor te ayude a supervisar tu compra.");
}


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


document.addEventListener('DOMContentLoaded', function() {
    
    let consulta;
    let mensaje;
    
    for (let intento = 0; intento < 2; intento++) {
        consulta = prompt("Hola\n¿Qué te pareció la página?\nBuena\nMala")

    if (consulta === "buena" || consulta === "Buena") {
        mensaje = "Y tambien me alegro mucho que te haya gustado mi pagina."
        document.getElementById("Agradezco").innerHTML = mensaje;
        break;
    } else {
        let segundoMensaje = "Mejorare.."
        document.getElementById("Agradezco").innerHTML = segundoMensaje;
        break;
    }

}
});



