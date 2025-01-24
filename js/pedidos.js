document.addEventListener('DOMContentLoaded', function () {
    const menuCards = document.querySelectorAll('.menu-card');

    menuCards.forEach(card => {
        card.addEventListener('click', function () {
            // Ocultar todos los contenedores de información y restaurar las tarjetas
            menuCards.forEach(card => {
                card.classList.remove('expanded');
                const infoContent = card.querySelector('.informacion_pedi');
                if (infoContent) {
                    infoContent.style.display = 'none';
                }
            });

            // Mostrar el contenedor de información correspondiente y expandir la tarjeta
            const infoContent = this.querySelector('.informacion_pedi');
            if (infoContent) {
                this.classList.add('expanded');
                infoContent.style.display = 'block';
            }
        });
    });

    // Configura los botones de cerrar
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('cerrar_info')) {
            event.stopPropagation(); // Evita que el clic en el botón cierre expanda la tarjeta
            const infoContainer = event.target.parentElement;
            infoContainer.style.display = 'none';

            // Restaurar la tarjeta correspondiente
            const card = infoContainer.closest('.menu-card');
            if (card) {
                card.classList.remove('expanded');
            }
        }
    });
});
