document.addEventListener('DOMContentLoaded', () => {
    const topProductsSection = document.querySelector('.top-products');
    const containerOptions = topProductsSection.querySelector('.container-options');
    const productCards = topProductsSection.querySelectorAll('.card-product');
    const mainImg = document.getElementById('main-img');

    // Función para aplicar el filtro
    const applyFilter = (filter) => {
        // Mostrar/Ocultar productos según el filtro
        productCards.forEach(product => {
            product.style.display = product.classList.contains(filter) ? 'block' : 'none';
        });

        // Cambiar la imagen principal
        const firstVisibleProduct = topProductsSection.querySelector(`.card-product.${filter} .container-img img`);
        if (firstVisibleProduct && mainImg) {
            mainImg.setAttribute('src', firstVisibleProduct.src);
        }
    };

    if (containerOptions) {
        // Aplicar filtro inicial basado en la opción activa
        const initialFilter = containerOptions.querySelector('.active').getAttribute('data-filter');
        applyFilter(initialFilter);

        // Añadir evento de clic para cambiar de filtro
        containerOptions.addEventListener('click', (event) => {
            const option = event.target;

            // Verificar que se hizo clic en un <span>
            if (option.tagName === 'SPAN') {
                // Obtener el filtro seleccionado
                const filter = option.getAttribute('data-filter');
                applyFilter(filter);
            }
        });
    }
});
