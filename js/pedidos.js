document.addEventListener('DOMContentLoaded', function() {
    const menuCards = document.querySelectorAll('.menu-card');
    const closeButtons = document.querySelectorAll('.cerrar_info');

    menuCards.forEach(card => {
        card.addEventListener('click', function() {
            const infoId = this.getAttribute('data-info');
            const infoContainer = document.getElementById(infoId);

            // Ocultar todos los contenedores de información y restaurar las tarjetas
            menuCards.forEach(card => {
                card.classList.remove('expanded');
                const infoContent = card.querySelector('.informacion_pedi');
                if (infoContent) {
                    infoContent.style.display = 'none';
                }
            });

            // Mostrar el contenedor de información correspondiente y expandir la tarjeta
            if (infoContainer) {
                this.classList.add('expanded');
                const infoContent = this.querySelector('.informacion_pedi');
                if (infoContent) {
                    infoContent.style.display = 'block';
                    infoContent.innerHTML = infoContainer.innerHTML;
                }
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation(); // Evita que el clic en el botón cierre expanda la tarjeta
            const infoContainer = this.parentElement;
            infoContainer.style.display = 'none';

            // Restaurar la tarjeta correspondiente
            const card = this.closest('.menu-card');
            if (card) {
                card.classList.remove('expanded');
            }
        });
    });
});