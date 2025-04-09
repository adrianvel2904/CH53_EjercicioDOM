// const PI = 3.1415962;
// const MAX_VALUE = 50;
// document: Es el punto de inicio para acceder a los elementos del html
//console.log("Estamos accediendo a la etiqueta  h1 con el id encabezado1");
//console.log(document.getElementById("encabezado1")); //getElementById camel case 

//let encabezado1 = document.getElementById("encabezado1");//Hacer una referencia de la etiqueta con el id y se la adigne ala variable
//encabezado1.innerText = "<em>Ejercicio</em> DOM";
//encabezado1.innerHTML = "<em>Ejercicio</em> DOM";
//console.log(encabezado1.innerText); //Es una propiedad de la etiqueta que está almacenado el texto que está dentro de lectura y escritura
//Solo cambia el primero que encuentra
//let encabezado2 = document.getElementById("encabezado2");
//encabezado2.innerText = "DOM Excercise";
//console.log(encabezado2.innerText);

//encabezado1.innerHTML = "Ejercicio DOM";
let btnMostrar = document.getElementById("btnMostrar");

let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.getElementById("encabezado2");
let listas = document.getElementsByTagName("ul");//n etiquetas con este Regresa las dos listas

let elementos = document.getElementsByClassName("list-group-item");

let otroElemento = document.querySelector("ul>li");//primero que encuentra

let otrosElementos = document.querySelectorAll("ul>li"); //todos los elementos


console.log(otrosElementos);

console.log("Otroelemento: ",otroElemento);

console.log(listas.length);//2
//console.log(listas.item[0]);//mucho cuidado porque es un elemento vivo podría estar cambiando
console.log(listas.item(1));

console.log(elementos.item(2));

console.log(elementos.length);//10

let contador=0;

function modifica(){
    //encabezado1.innerText = "<em>Ejercicio</em> DOM";
    //encabezado1.innerHTML += "<em>Ejercicio</em> DOM"; concatena el texto
    encabezado1.innerHTML = "<em>Ejercicio</em> DOM";
    //encabezado2.innerText = "DOM Excercise";
    encabezado2.innerText = ++contador;
}//modifica

// function handleEvent(event){
//     event.preventDefault();//no hagas lo que haces por defecto
    
//     console.log(" botón btnModificar presionado");
// }

btnMostrar.addEventListener("click", handleEvent);
btnMostrar.addEventListener("click", function (event){
    event.preventDefault();//no hagas lo que haces por defecto
    console.log(" botón btnModificar presionado");
});
