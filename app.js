let listaAmigos = [];

// Asigna texto a un elemento del DOM
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

//Agregar amigo a la lista
function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value;

    if (nombre.length === 0) {
        asignarTextoElemento('#resultado', '<li>Por favor, escribe un nombre.</li>');
        return;
    }

    //Verificar nombr en la lista
    let repetido = false;
    for (let i = 0; i < listaAmigos.length; i++) {
        if (listaAmigos[i] === nombre) {
            repetido = true;
        }
    }
    if (repetido) {
        asignarTextoElemento('#resultado', '<li>Ese nombre ya está en la lista.</li>');
        input.value = '';
        return;
    }

    listaAmigos.push(nombre);
    mostrarLista();
    asignarTextoElemento('#resultado', '');
    input.value = '';
}

//Muestra lista de amigos
function mostrarLista() {
    let ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';
    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = listaAmigos[i];
        ul.appendChild(li);
    }
}

//Sortea un amigo secreto aleatorio
function sortearAmigo() {
    let ul = document.getElementById('resultado');
    ul.innerHTML = '';
    if (listaAmigos.length < 2) {
        asignarTextoElemento('#resultado', '<li>Agrega al menos dos amigos para sortear.</li>');
        return;
    }
    let indice = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[indice];
    let li = document.createElement('li');
    li.textContent = 'El amigo secreto es: ' + amigoSecreto;
    ul.appendChild(li);
}