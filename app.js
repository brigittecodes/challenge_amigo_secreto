// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let inputAmigo  = document.getElementById('amigo'); //Capturar valor amigo
let listaAmigos = []; // almacenar nombres de amigos
let ulistaAmigos = document.getElementById('listaAmigos');
let ulResultado = document.getElementById('resultado');


function agregarAmigo(){
     //validar que no esté vacío, sino mostrar un alert para que llene el campo
    if(amigo == ""){
        alert("Por favor, inserte un nombre.");
    }
    //actualizar el array de amigos
    listaAmigos.push(inputAmigo.value);
    ulistaAmigos.innerHTML +=`<li>${inputAmigo.value}</li>`;
    return ;       

}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo(){
    let random = Math.floor(Math.random()*listaAmigos.length);
    let amigoSecreto = listaAmigos[random];
    ulResultado.textContent = `El amigo secreto es: ${amigoSecreto}`;

}