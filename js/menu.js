document.addEventListener('DOMContentLoaded', () => {
    const containerOptions = document.querySelector('.container-options');
    const productCards = document.querySelectorAll('.card-product');
    const mainImg = document.getElementById('main-img');

    if (containerOptions) {
        containerOptions.addEventListener('click', (event) => {
            const option = event.target;

            // Verificar que se hizo clic en un <span>
            if (option.tagName === 'SPAN') {
                // Remover la clase 'active' de todas las opciones
                containerOptions.querySelectorAll('span').forEach(span => span.classList.remove('active'));
                option.classList.add('active');

                // Obtener el filtro seleccionado
                const filter = option.getAttribute('data-filter');

                // Mostrar/Ocultar productos según el filtro
                productCards.forEach(product => {
                    product.style.display = product.classList.contains(filter) ? 'block' : 'none';
                });

                // Cambiar la imagen principal
                const firstVisibleProduct = document.querySelector(`.card-product.${filter} .container-img img`);
                if (firstVisibleProduct && mainImg) {
                    mainImg.setAttribute('src', firstVisibleProduct.src);
                }
            }
        });
    }
});
