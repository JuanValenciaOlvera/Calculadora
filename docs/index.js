var valor1 ;
var valor2 ;
var operacion ;


const mode = document.querySelector("#btn-mode");
const contenedor = document.querySelector("#contenedor");
const botones = document.querySelector("#botones");
const active = document.querySelector("#active");
const pass = document.querySelector("#pass");
const limpiar = document.querySelector("#C");
const suma = document.querySelector("#suma");
const resta = document.querySelector("#resta");
const multiplicacion = document.querySelector("#multiplicacion");
const operador = document.querySelector("#operador");
const igual = document.querySelector("#igual");
const divicion = document.querySelector('#divicion');
const potencia = document.querySelector('#potencia');
const borrar = document.querySelector('#borrar');


// Eventos

document.addEventListener('DOMContentLoaded', () => {
    
    cargar();
    
    limpiar.addEventListener('click', reset);
    botones.addEventListener('click',escribir);
    mode.addEventListener('click', cambiarModo);

    divicion.addEventListener('click',dividir);
    potencia.addEventListener('click',potenciar);
    borrar.addEventListener('click',borra);
    multiplicacion.addEventListener('click',multiplicar);
    suma.addEventListener('click',sumar);
    resta.addEventListener('click',restar);
    igual.addEventListener('click', resolver);
})


function cambiarModo (){
    if ( contenedor.classList.contains('light') ) {
        contenedor.classList.toggle('dark');
        store(contenedor.classList.contains('dark'));
    } else {
        contenedor.classList.toggle('light');
    }

}

function cargar () {
    const darkMode = localStorage.getItem('darkMode');

    if (!darkMode) {
        store('false');
    }else if ( darkMode == 'true') {
        contenedor.classList.toggle('dark');
    }

    const numero = localStorage.getItem('numero');
    const guardado = localStorage.getItem('guardado');
    if ( numero || guardado ) {
        localStorage.removeItem('numero');
        localStorage.removeItem('guardado');
    }
}

function store ( value ) {
    localStorage.setItem('darkMode', value);
}


function escribir (e) {
    const numero = e.target.value;

    if( numero>=0 || numero === '.' ) {
        active.textContent = active.textContent + numero;
    }

}

function reset () {
    active.textContent = '';
    pass.textContent = '';
    operador.textContent = '';
}

function limpiarActive () {
    active.textContent = '';
}


function sumar () {
    valor1 = active.textContent;
    operacion = 'suma';
    pass.textContent = valor1;
    operador.textContent = '+';
    limpiarActive();
}
function restar () {
    valor1 = active.textContent;
    operacion = 'resta';
    operador.textContent = '-';
    pass.textContent = valor1;
    limpiarActive();
}

function multiplicar () {
    valor1 = active.textContent;
    operacion = 'multiplicacion';
    operador.textContent = 'x';
    pass.textContent = valor1;
    limpiarActive();
}

function dividir () {
    valor1 = active.textContent;
    operacion = 'divicion';
    operador.textContent = '/';
    pass.textContent = valor1;
    limpiarActive();
}

function potenciar () {
    valor1 = active.textContent;
    operacion = 'potenciar';
    operador.textContent = '^';
    pass.textContent = valor1;
    limpiarActive();
}

function borra () {
    valor1 = active.textContent;
    cadena2 = valor1.substring(0, valor1.length -1);
    active.textContent = cadena2;
}

function resolver (  ) {
    valor2 = active.textContent;
    let res = 0;
    operador.textContent = '=';
    switch ( operacion ) {
        case 'suma':
            res = parseFloat(valor1) + parseFloat(valor2);
            break;
        case 'resta':
            res = parseFloat(valor1) - parseFloat(valor2);
            break;
        case 'multiplicacion':
            res = parseFloat(valor1) * parseFloat(valor2);
            break;
        case 'divicion':
            res = parseFloat(valor1) / parseFloat(valor2);
            break;
        case 'potenciar':
            res = Math.pow(parseFloat(valor1),parseFloat(valor2));
            break;
    }

    reset();
    active.textContent = res;
}

