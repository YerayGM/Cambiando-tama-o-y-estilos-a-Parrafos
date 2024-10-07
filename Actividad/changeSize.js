let tamano = 1;
let tamanoOriginal = 1;

function modificarTexto(tipo, valor, parrafo) {
    const elemento = document.getElementById(parrafo);
    if (!elemento) {
        alert('No existe el párrafo con ese id');
        return;
    }
    switch (tipo) {
        case 'size':
            cambiarTamaño(valor, [elemento]);
            break;
        case 'color':
            cambiarColor(valor, [elemento]);
            break;
        case 'font':
            cambiarFuente(valor, [elemento]);
            break;
        case 'fondo':
            cambiarFondo(valor, [elemento]);
            break;
    }
}

function marcarParrafo(elemento, marcar) {
    elemento.classList.remove('marcadoParrafo');
    if (marcar) {
        elemento.classList.add('marcadoParrafo');
    } else {
        elemento.classList.remove('marcadoParrafo');
    }
}

function cambiarEstilo(tipo, valor) {
    const idParrafo = document.getElementById('parrafo').value;
    if (idParrafo) {
        modificarTexto(tipo, valor, idParrafo);
    } else {
        const parrafos = document.querySelectorAll('.parrafo');
        switch (tipo) {
            case 'size':
                cambiarTamaño(valor, parrafos);
                break;
            case 'color':
                cambiarColor(valor, parrafos);
                break;
            case 'font':
                cambiarFuente(valor, parrafos);
                break;
            case 'fondo':
                cambiarFondo(valor, parrafos);
                break;
        }
    }
}

// Función para marcar el párrafo según el ID escrito
function marcarParrafoPorID() {
    const idParrafo = document.getElementById('parrafo').value;
    const parrafos = document.querySelectorAll('.parrafo');

    // Limpiar el marcado de todos los párrafos
    parrafos.forEach(parrafo => {
        marcarParrafo(parrafo, false);
    });

    // Marcar el párrafo si existe
    const elemento = document.getElementById(idParrafo);
    if (elemento) {
        marcarParrafo(elemento, true);
    }
}

// Añadir el evento input al campo de texto
document.getElementById('parrafo').addEventListener('input', marcarParrafoPorID);

function cambiarTamaño(accion, elementos) {
    elementos.forEach(elemento => {
        elemento.classList.remove('size-large', 'size-small');
        if (accion === 'aumentar') {
            elemento.classList.add('size-large');
        } else if (accion === 'reducir') {
            elemento.classList.add('size-small');
        } else if (accion === 'original') {
            elemento.classList.remove('size-large', 'size-small');
        }
    });
}

function cambiarColor(color, elementos) {
    elementos.forEach(elemento => {
        elemento.classList.remove('color-red', 'color-blue');
        if (color === 'red') {
            elemento.classList.add('color-red');
        } else if (color === 'blue') {
            elemento.classList.add('color-blue');
        } else if (color === 'remove') {
            elemento.classList.remove('color-red', 'color-blue');
        }
    });
}

function cambiarFuente(fuente, elementos) {
    elementos.forEach(elemento => {
        elemento.classList.remove('font-verdana', 'font-courier');
        if (fuente === 'verdana') {
            elemento.classList.add('font-verdana');
        } else if (fuente === 'courier') {
            elemento.classList.add('font-courier');
        } else if (fuente === 'remove') {
            elemento.classList.remove('font-verdana', 'font-courier');
        }
    });
}

function cambiarFondo(fondo, elementos) {
    elementos.forEach(elemento => {
        elemento.classList.remove('fondo-verde', 'fondo-azul');
        if (fondo === 'verde') {
            elemento.classList.add('fondo-verde');
        } else if (fondo === 'azul') {
            elemento.classList.add('fondo-azul');
        } else if (fondo === 'remove') {
            elemento.classList.remove('fondo-verde', 'fondo-azul');
        }
    });
}

function generarParrafos() {
    const contenedor = document.getElementById('contenedor');
    if (!contenedor) {
        alert('No existe el contenedor');
        return;
    }
    for (let i = 2; i < 7; i++) { // Generar 5 párrafos
        const p = document.createElement('p');
        p.id = `parrafo${i + 1}`;
        p.className = 'parrafo';
        p.innerText = 'Este es el párrafo generado número ' + (i + 1);
        contenedor.appendChild(p);
    }
}

window.onload = function () {
    generarParrafos();
};
