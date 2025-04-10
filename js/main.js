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


let txtRFC = document.getElementById("txtRFC");
let txtTelefono = document.getElementById("txtTelefono");
let txtCURP = document.getElementById("txtCURP");

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

//btnMostrar.addEventListener("click", handleEvent);

btnMostrar.addEventListener("click", function (event){
    event.preventDefault();//no hagas lo que haces por defecto
    //console.log(" botón btnModificar presionado");
    let element = document.createElement("li");
    element.innerText = "Another item"; //<li>Another item </li>
    element.classList.add("list-group-item");

    let element2 = element.cloneNode(true);
    //before: Inserta el elemento antes de la lista
    // listas.item(0).before(element);
    //prepend: Inserta el elemento al principio de la lista
    // listas.item(0).prepend(element2);
    //append: Inserta el elemento al final de la lista
    // listas.item(0).append(element);
    //after: Inserta el elemento después de la lista
    // listas.item(0).after(element2);

    //afterbegin: Inserta el elemento al principio de la lista
    // listas.item(1).insertAdjacentElement("afterbegin", element);
    //beforeend: Inserta el elemento al final de la lista
    // listas.item(1).insertAdjacentElement("beforeend", element2);

    listas.item(1).insertAdjacentHTML("beforebegin", 
        ` <li class="list-group-item">Before Begin item</li>`);
    
    listas.item(1).insertAdjacentHTML("afterend", 
        ` <li class="list-group-item">After End item</li>`);
    
    
    listas.item(1).insertAdjacentHTML("afterbegin", 
        ` <li class="list-group-item">After Begin item</li>`);
        
    listas.item(1).insertAdjacentHTML("beforeend", 
        ` <li class="list-group-item">Before End item</li>`);
});
//Se ejecuta cuando termina de cargar todos los elementos de la página
window.addEventListener("load",function(event){ //carga lo que tiene la página referenciada con el main
    console.log("Se terminó de cargar la página");
});//load

function txtToUpper(event){
    event.preventDefault();

    //event.target.value =event.target.value.toUpperCase();
    event.target.value = event.target.value.trim().toUpperCase();
    //event.target.value = event.target.value.replace().toUpperCase();
   // event.target.value =event.target.value.trim().toUpperCase();
}//txtToUpper

txtRFC.addEventListener("blur", txtToUpper); //txtRFC
txtCURP.addEventListener("blur",txtToUpper); //txtCURP


//blur -->cuando se sale del campo del RFC
//txtRFC.addEventListener("blur", function(event){
    //event.preventDefault();
    //txtRFC.value = txtRFC.value.toUpperCase();//valor de lectura y escritura -- Valor que tiene lo convierta en Mayúsculas
//});//txtRFC

// txtCURP.addEventListener("blur", function(event){
//     event.preventDefault();
//     txtCURP.value = txtCURP.value.toUpperCase();
// });//txtCURP

txtTelefono.addEventListener("blur", function(event){
    event.preventDefault();

    txtTelefono.value = txtTelefono.value.trim().slice(0,10);
})//txtTelefono
