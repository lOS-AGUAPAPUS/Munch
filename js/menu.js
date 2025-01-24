document.addEventListener('DOMContentLoaded', () => {
    const containerOptions = document.querySelector('.container-options');
    const productCards = document.querySelectorAll('.card-product');
    const mainImg = document.getElementById('main-img');

    // Función para aplicar el filtro
    const applyFilter = (filter) => {
        // Mostrar/Ocultar productos según el filtro
        productCards.forEach(product => {
            product.style.display = product.classList.contains(filter) ? 'block' : 'none';
        });

        // Cambiar la imagen principal
        const firstVisibleProduct = document.querySelector(`.card-product.${filter} .container-img img`);
        if (firstVisibleProduct && mainImg) {
            mainImg.setAttribute('src', firstVisibleProduct.src);
        }
    };

    if (containerOptions) {
        // Aplicar filtro inicial (ejemplo: tomar el primer <span> con data-filter)
        const firstOption = containerOptions.querySelector('span[data-filter]');
        if (firstOption) {
            const initialFilter = firstOption.getAttribute('data-filter');
            applyFilter(initialFilter);
        }

        // Evento para cambiar el filtro al hacer clic
        containerOptions.addEventListener('click', (event) => {
            const option = event.target;

            // Verificar que se hizo clic en un <span>
            if (option.tagName === 'SPAN') {
                const filter = option.getAttribute('data-filter');
                applyFilter(filter);
            }
        });
    }
});
