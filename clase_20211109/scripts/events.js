//Seleccionando por ID
const btnBoton = document.querySelector('#btn_boton');

//Seleccionando por CLASS
const lstElementos = document.querySelector('.lst_items');

btnBoton.onclick = function() {
    if (this.textContent == 'MOSTRAR ITEMS') {
        this.textContent = 'OCULTAR ITEMS';
        lstElementos.style.display = 'block';
    } else {
        this.textContent = 'MOSTRAR ITEMS';
        lstElementos.style.display = 'none';
    };
;}

//Seleccionado por TAG, usando función anónima
document.querySelector('body').addEventListener('mousemove', function(event) {
    //Este event me retorna un puntero que apunta al objeto donde ocurre el evento
    console.log(event.clientX, event.clientY);

    this.style.backgroundColor = `rgb(
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)}
    )`;
});