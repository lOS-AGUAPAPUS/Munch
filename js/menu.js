document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.container-options span').forEach(option => {
        option.addEventListener('click', () => {
            // Remover la clase 'active' de todas las opciones
            document.querySelectorAll('.container-options span').forEach(span => span.classList.remove('active'));
            // Añadir la clase 'active' a la opción seleccionada
            option.classList.add('active');

            // Obtener el filtro seleccionado
            const filter = option.getAttribute('data-filter');

            // Mostrar/Ocultar productos según el filtro
            document.querySelectorAll('.card-product').forEach(product => {
                product.style.display = 'none';
                if (product.classList.contains(filter)) {
                    product.style.display = 'block';
                }
            });

            // Cambiar la imagen principal
            const firstVisibleProduct = document.querySelector(`.card-product.${filter} .container-img img`);
            if (firstVisibleProduct) {
                document.getElementById('main-img').setAttribute('src', firstVisibleProduct.src);
            }
        });
    });
});
