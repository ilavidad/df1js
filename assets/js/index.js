var precio = 400000;

var precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

var cantProducto = document.querySelector(".cantidad");
var valorTotalProducto = document.querySelector(".valor-total");

var botonIncrementar = document.querySelector(".incrementar");
var botonDecrementar = document.querySelector(".decrementar");

var cantidad = 0;
var precioInicial = Number(precioSpan.textContent);

function actualizarTotal() {
    var total = cantidad * precioInicial;
    valorTotalProducto.textContent = total;
}

botonIncrementar.addEventListener('click', function() {
    cantidad++;
    cantProducto.textContent = cantidad;
    actualizarTotal();
});

botonDecrementar.addEventListener('click', function() {
    if (cantidad > 0) {
        cantidad--;
        cantProducto.textContent = cantidad;
        actualizarTotal();
    }
});
