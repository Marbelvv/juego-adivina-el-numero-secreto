// let parrafo = document.querySelector("p");
// parrafo.innerHTML = "Indica un número del 1 al 10:";
//ANTES - PRIMERA OPCIÓN

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSecretos = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  //al poner value al final trae el valor, sin eso trae el objeto

  //el triple igual es para decir que es igual en valor e igual en tipo de dato
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `¡Ganaste! Acertaste el número secreto en: ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      } `
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //si el usuario no acerto
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El número secreto es menor");
    } else {
      asignarTextoElemento("p", "El número secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.getElementById("valorUsuario").value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  //si ya sorteamos todos los numeros
  if (listaNumerosSecretos.length === numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");
  } else {
    //si el numero generado esta incluido en la lista
    if (listaNumerosSecretos.includes(numeroGenerado)) {
      //include recorre todo el arreglo para saber si algo ya existe
      return generarNumeroSecreto  ();
    } else {
      listaNumerosSecretos.push(numeroGenerado); //push agrega al final de la lista
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", 'Juego "Adivina el número secreto"');
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}:`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  //limpiar caja
  limpiarCaja();
  //indicar mensaje de intervalo de numeros, generar numero secreto e inicializar el contador de intentos
  condicionesIniciales();
  //deshabilitar el boton de nuevo
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

condicionesIniciales();

// 'Juego "Adivina el número secreto"'
