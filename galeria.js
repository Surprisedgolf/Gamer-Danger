document.addEventListener('DOMContentLoaded', function() {
    const filterBtn = document.querySelector('.filter-btn');
    const mobileFilterMenu = document.querySelector('.mobile-filter-menu');
    const searchBtn = document.querySelector('.search-btn');
    const homeBtn = document.querySelector('.home-btn');

    // Funcionalidad del botón de filtros
    filterBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        mobileFilterMenu.classList.toggle('activo');
    });

    // Funcionalidad del botón de búsqueda
    searchBtn.addEventListener('click', function() {
        // Aquí puedes agregar la lógica para mostrar un campo de búsqueda
        alert('Función de búsqueda en desarrollo');
    });

    // Funcionalidad del botón de inicio
    homeBtn.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    // Cerrar el menú al hacer clic en un filtro
    const filtroBtns = document.querySelectorAll('.filtro-btn');
    filtroBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover la clase activo de todos los botones
            filtroBtns.forEach(b => b.classList.remove('activo'));
            // Agregar la clase activo al botón clickeado
            this.classList.add('activo');
            // Cerrar el menú
            mobileFilterMenu.classList.remove('activo');
        });
    });

    // Cerrar el menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!mobileFilterMenu.contains(e.target) && !filterBtn.contains(e.target)) {
            mobileFilterMenu.classList.remove('activo');
        }
    });

    // Prevenir que el menú se cierre al hacer clic dentro de él
    mobileFilterMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}); 