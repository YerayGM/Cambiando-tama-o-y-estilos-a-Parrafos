let tamano = 1;
let tamanoOriginal = 1;

function modificarTexto(elEvento, pixel, parrafo) {
    const elemento = document.getElementById(parrafo);
    if (!elemento) {
        alert('No existe el párrafo con ese id');
        return;
    }
    switch (elEvento) {
        case 'aumentar':
            if (tamano > 2) {
                alert('Superado el tamaño máximo');
                break;
            } else {
                tamano += pixel;
                break;
            }
        case 'reducir':
            if (tamano < 0.9) {
                alert('Superado el tamaño mínimo');
                break;
            } else {
                tamano -= pixel;
                break;
            }
        case 'original':
            tamano = tamanoOriginal;
            break;
    }
    elemento.style.fontSize = tamano + 'em';
}

function generarParrafos() {
    const contenedor = document.getElementById('contenedor');
    if (!contenedor) {
        alert('No existe el contenedor');
        return;
    }
    for (let i = 2; i < 7; i++) { // Aquí generamos solo 5 párrafos
        const p = document.createElement('p');
        p.id = `parrafo${i}`;
        p.className = 'parrafo';
        p.innerText = 'Este es el párrafo generado número ' + (i + 1);
        contenedor.appendChild(p); // Añadimos los párrafos al contenedor
    }
}
// Generar 5 párrafos cuando se carga la página
window.onload = function () {
    generarParrafos();
};