document.addEventListener('DOMContentLoaded', function() {
    const menuCards = document.querySelectorAll('.menu-card');
    const infoContainers = document.querySelectorAll('.informacion_pedi');
    const closeButtons = document.querySelectorAll('.cerrar_info');

    menuCards.forEach(card => {
        card.addEventListener('click', function() {
            const infoId = this.getAttribute('data-info');

            // Ocultar todos los contenedores de información y restaurar las tarjetas
            infoContainers.forEach(container => {
                container.style.display = 'none';
            });
            menuCards.forEach(card => {
                card.classList.remove('expanded');
            });

            // Mostrar el contenedor de información correspondiente y expandir la tarjeta
            const infoContainer = document.getElementById(infoId);
            if (infoContainer) {
                infoContainer.style.display = 'block';
                this.classList.add('expanded');
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const infoContainer = this.parentElement;
            infoContainer.style.display = 'none';

            // Restaurar la tarjeta correspondiente
            const card = document.querySelector(`.menu-card[data-info="${infoContainer.id}"]`);
            if (card) {
                card.classList.remove('expanded');
            }
        });
    });
});